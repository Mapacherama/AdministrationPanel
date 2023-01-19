<template>
  <div class="grid mt-8">
    <div class="col-12">
      <div class="card margin">
        <h1>Settings</h1>
        <div class="card">
          <h1>Account</h1>
          <p>Here you can change all the account settings.</p>
          <div class="formgrid grid">
            <div class="field col-12 md:col-6">
              <label for="email">Email</label>
              <input
                id="email"
                type="text"
                class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"
              />
            </div>
            <div class="field col-12 md:col-6">
              <label for="state">Gender</label>
              <select
                id="state"
                class="w-full text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round outline-none focus:border-primary"
                style="appearance: auto"
              >
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
            </div>
            <div class="field col-12 md:col-6">
              <label for="username">Username</label>
              <input
                id="username"
                type="text"
                class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"
              />
            </div>
            <div class="field col-12 md:col-6">
              <label for="state">Language</label>
              <select
                id="state"
                class="w-full text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round outline-none focus:border-primary"
                style="appearance: auto"
              >
                <option>Nederlands</option>
                <option>English</option>
                <option>Espanol</option>
              </select>
            </div>
            <div class="field col-12 md:col-6">
              <label for="firstname">Firstname</label>
              <input
                id="firstname"
                type="text"
                class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"
              />
            </div>
            <div class="field col-12 md:col-6">
              <label for="lastname">Lastname</label>
              <input
                id="lastname"
                type="text"
                class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"
              />
            </div>

            <div class="field col-12 md:col-12">
              <label for="zip">Phone</label>
              <input
                id="zip"
                type="text"
                class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"
              />
            </div>
          </div>
        </div>
        <div class="card">
          <h2>Change password</h2>
          <div class="formgrid grid">
            <div class="grid">
              <div class="field col-12 md:col-12">
                <label for="oldpassword">Old password</label> <br />
                <Password
                  v-model="oldPassword"
                  aria-describedby="username-help"
                  toggleMask
                />
                <br />
                <br />
                <small id="username-help"
                  >Enter your old password to reset your password.</small
                >
                <br />
                <br />
              </div>

              <div class="field col-12 md:col-6">
                <label for="oldpassword">New password</label> <br />
                <Password class="w-full" v-model="value2" />
                <br />
              </div>
              <div class="field col-12 md:col-6 mb-6">
                <label for="oldpassword">New password confirmation</label>
                <br />
                <Password class="w-full" v-model="value2" />
                <Button
                  class="p-button-primary p-button-rounded ml-8 mt-2"
                  name="information"
                  label="Opslaan"
                  icon="pi pi-save"
                  iconPos="left"
                  type="submit"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Password from "primevue/password";
import Button from "primevue/button";

export default {
  components: {
    Password,
    Button,
  },
  data() {
    return {
      oldPassword: "",
    };
  },
};
</script>

<style scoped>
.grid {
  justify-content: flex-start;
}
</style>
