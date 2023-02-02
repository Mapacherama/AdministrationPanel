<template>
    <div class="grid">
      <Card class="margin-top">
        <template #title>
          <h1 class="primary-header">Login</h1>
        </template>
  
        <template #content>
          <form @submit.prevent="login()">
            <label>Username</label><br />
            <InputText data-testid="username" type="text" name="username" v-model="username" required /><br />
  
            <label>Wachtwoord</label><br />
            <Password name="password" v-model="password" :feedback="false" required /><br /><br />
  
            <label
              onclick="window.location.href='/'"
              class="margin-top"
              >Wachtwoord vergeten?</label
            ><br /><br />
            <Button
              class="p-button-rounded"
              name="login"
              label="Log In"
              icon="pi pi-check"
              iconPos="right"
              type="submit"
            /><br />
          </form>
        </template>
      </Card>
    </div> 
  </template>
  
  <script>
  import Button from "primevue/button";
  import Card from "primevue/card";
  import InputText from "primevue/inputtext";
  import Message from "primevue/message";
  import Password from "primevue/password";
  import { useUserStore } from "../stores/userStore";
  
  export default {
    components: {
      Button,
      Card,
      InputText,
      Message,
      Password,
    },
    setup() {
      const userStore = useUserStore();
      return { userStore };
    },
    data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    async login() {
      await this.userStore.logIn(this.username, this.password);
    },
  },
};
  </script>
  