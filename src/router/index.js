import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import RegistrationView from "../views/RegistrationView.vue";
import ActivateView from "../views/ActivateView.vue";
import SigninView from "../views/SigninView.vue";
import InsideView from "../views/InsideView.vue";
import Forgot from "../views/Forgot.vue";
import ForgotView from "../views/ForgotView";
import Reset from "../views/Reset.vue";
import Activate from "../views/Activate.vue";
import goTo from 'vuetify/es5/services/goto'

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
    path: "/forgotview",
    name: "forgotview",
    component: ForgotView,
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
  routes,
});

router.afterEach((to, from) => {
  goTo(0, { duration: 0 })
})

export default router;
