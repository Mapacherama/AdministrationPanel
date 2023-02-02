import axios from "axios"
import router from '../src/router/index'

import { defineStore } from "pinia"
import { errorHandler } from "../src/helpers/request"

export const useUserStore = defineStore("UserStore", {
    state: () => ({
        user: null,
      }),

      getters: {
        getUser(state) { 
          return state.user
        },
    },

    actions: {
        async logIn(username, password) {
            let redirectUrl = localStorage.getItem('redirectUrl')
            redirectUrl = redirectUrl ? redirectUrl : ''
      
            const headers = {
              "content-type": "application/json"
            }
      
            const query = 
            `  mutation{
                login(password:"${password}", username:"${username}"){
                  success
                }
                }`
            await axios
            .post('/graphql/', {
              headers: headers,
              query: query
            })
            .then(response => {
              this.errors.signIn = errorHandler(response)
              if (this.errors.signIn == null) {
                const login = response.data.data.login
                localStorage.setItem("username", username);
                router.push({ path: `/${redirectUrl}` })
              }
            })   
            .catch(error => {
              this.errors.signIn = [error.message]
            })
      
            localStorage.removeItem('redirectUrl')
            this.fetchCurrentUser()
          },
    },
});
