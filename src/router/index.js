import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import RegistrationView from "../views/RegistrationView.vue";
import ActivateView from "../views/ActivateView.vue";
import SigninView from "../views/SigninView.vue";
import InsideView from "../views/InsideView.vue";
import Forgot from "../views/Forgot.vue";
import Reset from "../views/Reset.vue";
import Activate from "../views/Activate.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/registration",
    name: "registration",
    component: RegistrationView,
  },
  {
    path: "/activate",
    name: "activate",
    component: ActivateView,
  },
  {
    path: "/signin",
    name: "signin",
    component: SigninView,
  },
  {
    path: "/forgot",
    name: "forgot",
    component: Forgot,
  },
  {
    path: "/reset/:token",
    name: "reset",
    component: Reset,
  },
  {
    path: "/activate/:token",
    name: "activate",
    component: Activate,
  },
  {
    path: "/inside",
    name: "inside",
    component: InsideView,
  },
];

const router = new VueRouter({
  mode: "history",
  base: '/payfarm',
  routes,
});

export default router;
