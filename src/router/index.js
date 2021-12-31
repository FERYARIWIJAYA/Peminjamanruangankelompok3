import Vue from "vue";
import VueRouter from "vue-router";
import Dashboard from "../views/Dashboard.vue";
import Riwayat from "../views/Riwayat.vue";
import A from "../views/A.vue";
import B from "../views/B.vue";
import C from "../views/C.vue";
import D from "../views/D.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "dashboard",
    component: Dashboard,
  },
  {
    path: "/Riwayat",
    name: "Riwayat",
    component: Riwayat,
  },
  {
    path: "/A",
    name: "A",
    component: A,
  },
  {
    path: "/B",
    name: "B",
    component: B,
  },
  {
    path: "/C",
    name: "C",
    component: C,
  },
  {
    path: "/D",
    name: "D",
    component: D,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
