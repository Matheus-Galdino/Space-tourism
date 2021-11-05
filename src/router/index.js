import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import Crew from "../views/Crew.vue";
import Destination from "../views/Destination.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/destination/:name",
    name: "Destination",
    component: Destination,
    beforeEnter: (to, from, next) => {
      const destinationName = to.params.name.toLowerCase();
      const destinations = ["moon", "mars", "europa", "titan"];

      if (!destinations.includes(destinationName)) next("/destination/moon");
      else next();
    },
  },
  {
    path: "/crew/:name",
    name: "Crew",
    component: Crew,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
