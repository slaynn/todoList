import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/home.vue";
import Login from "@/views/login.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/login/:action?",
    name: "Login",
    component: Login,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;