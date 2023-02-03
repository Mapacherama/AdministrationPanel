import axios from "axios"
import router from '../router/index'

import { defineStore } from "pinia"
import { errorHandler } from "../helpers/request"

const api = axios.create({
  baseURL: import.meta.env.VUE_APP_API_URL
});

export const useUserStore = defineStore("UserStore", {
    state: () => ({
        user: null,
        errors: {
          logIn: null,
        },
      }),

      getters: {
        getUser(state) { 
          return state.user
        },
    },

    actions: {
        async logIn(username, password) {
            let redirectUrl = localStorage.getItem('redirectUrl')
            redirectUrl = redirectUrl ? redirectUrl : '/settings'
      
            const headers = {
              "content-type": "application/json"
            }
            
            const query = 
            `  mutation{
              tokenAuth(username:"${username}", password:"${password}" ){
                token
                refreshExpiresIn
                payload
                }
              }`
            await api
            .post('/graphql/', {
              headers: headers,
              query: query
            })
            .then(response => {   
              this.errors.logIn = errorHandler(response)           
              if (this.errors.logIn == null) {
                const tokenAuth = response.data.data.tokenAuth
                localStorage.setItem("username", username);
                this.stateStore.setToken(tokenAuth.token, tokenAuth.payload.exp)
                router.push({ path: `/${redirectUrl}` })
              }
            })   
            .catch(error => {
              console.log(error)
            })
      
            localStorage.removeItem('redirectUrl')
            // TODO Write query for getting a logged in user!
            this.fetchCurrentUser()
          },
    },
});
