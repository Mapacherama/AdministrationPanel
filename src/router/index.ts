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
      path: "/users",
      name: "users",
      component: () => import("../views/UserOverview.vue"),
    },
  ],
});

export default router;
