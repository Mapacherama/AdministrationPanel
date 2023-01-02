import Vue from "vue";
import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import PrimeVue from "primevue/config";

import "./assets/main.css";
import "primevue/resources/primevue.min.css";
import "primeflex/primeflex.scss";
import "primeicons/primeicons.css";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(PrimeVue, { ripple: true });

app.mount("#app");
