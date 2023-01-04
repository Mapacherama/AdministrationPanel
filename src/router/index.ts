import { createRouter, createWebHistory } from "vue-router";
import DashBoard from "../views/Dashboard.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "dashboard",
      component: DashBoard,
    },
    {
      path: "/customers",
      name: "customers",
      component: () => import("../views/CustomerOverview.vue"),
    },
    {
      path: "/settings",
      name: "settings",
      component: () => import("../views/SettingsPage.vue"),
    },
  ],
});

export default router;
