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
      </div>
    </div>
  </div>
</template>
