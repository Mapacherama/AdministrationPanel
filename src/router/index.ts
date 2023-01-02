import { createRouter, createWebHistory } from 'vue-router'
import DashBoard from '../views/Dashboard.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: DashBoard
    }
  ]
})

export default router
