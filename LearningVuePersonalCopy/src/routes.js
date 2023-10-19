import { createRouter, createWebHistory } from "vue-router";

// Import individual project pages
import MindfulTasksPage from "./views/MindfulTasksPage.vue";
import MCCSDroneRadarSimulationPage from "./views/MCCSDroneRadarSimulationPage.vue";
import MovieDatabaseApplicationPage from "./views/MovieDatabaseApplicationPage.vue";
import HomePage from "./views/HomePage.vue";

const routes = [
  {
    path: "/",
    name: "HomePage",
    component: HomePage,
  },
  {
    path: "/project/mindfultasks",
    name: "MindfulTasksPage",
    component: MindfulTasksPage,
  },
  {
    path: "/project/mccs-droneradarsimulation",
    name: "MCCSDroneRadarSimulationPage",
    component: MCCSDroneRadarSimulationPage,
  },
  {
    path: "/project/moviedatabaseapplication",
    name: "MovieDatabaseApplicationPage",
    component: MovieDatabaseApplicationPage,
  },
  // ... your other routes
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
