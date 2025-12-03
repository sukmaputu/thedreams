import { createRouter, createWebHistory } from "vue-router";

import HomeApp from "../views/HomeApp.vue";
import AboutApp from "../views/AboutApp.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", name: "home", component: HomeApp },
    { path: "/about", name: "about", component: AboutApp },
  ],
});

export default router;
