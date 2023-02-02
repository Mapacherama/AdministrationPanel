import axios from "axios"
import router from '../router/index'

import { defineStore } from "pinia"
import { errorHandler } from "../helpers/request"

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
              const success = response.data.data.login.success
              console.log(success)
              if (success) {
                const login = response.data.data.login
                localStorage.setItem("username", username);
                router.push({ path: `/${redirectUrl}` })
              }
            })   
            .catch(error => {
              console.log(error)
            })
      
            localStorage.removeItem('redirectUrl')
            // TODO Write query for getting a logged in user!
            // this.fetchCurrentUser()
          },
    },
});
