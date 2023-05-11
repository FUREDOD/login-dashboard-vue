import Vue from "vue";
import Home from "./views/Home.vue";
import Login from "./views/Login.vue";
import Register from "./views/Register.vue";
import VueRouter from "vue-router";
import Dashboard from "./views/Dashboard";

Vue.use(VueRouter);

export default new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "Dashboard",
      name: "Dashboard",
      component: Dashboard,
    },
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/login",
      name: "login",
      component: Login,
    },
    {
      path: "/register",
      name: "register",
      component: Register,
    },
  ],
});
