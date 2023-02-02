import Vue from 'vue';
import axios from 'axios';
import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';

import PrimeVue from 'primevue/config';
import 'primevue/resources/themes/saga-green/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeflex/primeflex.scss';
import 'primeicons/primeicons.css';
import './assets/main.css';

import dotenv from 'dotenv';
dotenv.config();

// Base URL for GraphQL API.
axios.defaults.baseURL = process.env.VUE_APP_API_URL

const app = createApp(App);
app.use(createPinia());
app.use(router);
app.use(PrimeVue, { ripple: true });

app.mount('#app');
