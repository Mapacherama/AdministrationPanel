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

const app = createApp(App);
app.use(createPinia());
app.use(router);
app.use(PrimeVue, { ripple: true });

// Base URL for GraphQL API.
axios.defaults.baseURL = import.meta.env.VITE_AXIOS_BASE_URL

app.mount('#app');
