import { createRouter, createWebHistory } from "vue-router";
import DashBoard from "../views/Dashboard.vue";

const routes = [
  {
    path: "/",
    name: "dashboard",
    component: DashBoard
  },
  {
    path: "/customers",
    name: "customers",
    component: () => import("../views/CustomerOverview.vue")
  },
  {
    path: "/settings",
    name: "settings",
    component: () => import("../views/SettingsPage.vue")
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/LoginPage.vue")
  },
  {
    path: "/pagenotfound",
    name: "404Error",
    component: () => import("../views/PageNotFound.vue")
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;
