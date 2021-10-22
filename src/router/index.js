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
  /*
  {
    path: "/todolist/:id?",
    name: "todolist",
    component: () => import("../components/TodoList.vue"),
  },
  */
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
