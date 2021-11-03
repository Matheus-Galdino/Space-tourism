import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import Travel from "../views/Travel.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/travel",
    name: "Travel",
    component: Travel
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
