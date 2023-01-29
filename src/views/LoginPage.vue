<template>
    <div class="grid">
      <Card class="margin-top">
        <template #title>
          <h1 class="primary-header">Login</h1>
        </template>
  
        <template #content>
          <form @submit.prevent="login()">
            <label>Email</label><br />
            <InputText data-testid="email" type="text" name="email" v-model="email" required /><br />
  
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
  
  export default {
    components: {
      Button,
      Card,
      InputText,
      Message,
      Password,
    },
    data() {
      return {
        email: "",
        password: "",
      };
    },
  };
  </script>
  