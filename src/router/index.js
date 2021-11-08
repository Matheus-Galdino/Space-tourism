import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import Crew from "../views/Crew.vue";
import Tech from "../views/Tech.vue";
import Destination from "../views/Destination.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/destination",
    name: "Destination",
    component: Destination,    
  },
  {
    path: "/crew",
    name: "Crew",
    component: Crew,
  },
  {
    path: "/tech",
    name: "Tech",
    component: Tech,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
