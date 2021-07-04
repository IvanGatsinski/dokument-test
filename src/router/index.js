import Vue from "vue";
import VueRouter from "vue-router";
import firebase from "firebase";
import store from "../store/index";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/accounting-promotions",
    name: "AccountingPromotions",
    component: () => import("../views/AccountingPromotions.vue"),
  },
  {
    path: "/service-promotions",
    name: "ServicePromotions",
    component: () => import("../views/ServicePromotions.vue"),
  },
  {
    path: "/about-us",
    name: "AboutUs",
    component: () => import("../views/AboutUs.vue"),
  },
  {
    path: "/add-staff",
    name: "add-staff",
    component: () => import("../views/AddStaff.vue"),
  },
  {
    path: "/edit-staff/:id",
    name: "edit-staff",
    component: () => import("../views/EditStaff.vue"),
  },
  {
    path: "/accounting",
    name: "Accounting",
    component: () => import("../views/Accounting.vue"),
  },
  {
    path: "/services",
    name: "OtherSocialServices",
    component: () => import("../views/OtherSocialServices.vue"),
  },
  {
    path: "/forms",
    name: "Forms",
    component: () => import("../views/Forms.vue"),
  },
  {
    path: "/contacts",
    name: "Contacts",
    component: () => import("../views/Contacts.vue"),
  },
  {
    path: "/admin",
    name: "admin",
    component: () => import("../views/Admin.vue"),
  },
  {
    path: "/edit-pricelist-item/:id",
    name: "edit-pricelist-item",
    component: () => import("../views/EditPricelistItem.vue"),
  },
  {
    path: "/add-pricelist-item",
    name: "add-pricelist-item",
    component: () => import("../views/AddPricelistItem.vue"),
  },
  {
    path: "/pricelist",
    name: "Pricelist",
    component: () => import("../views/Pricelist.vue"),
  },
  // {
  //   path: "/blog",
  //   name: "Blog",
  //   component: () => import("../views/Blog.vue"),
  // },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 };
  },
});

router.beforeEach((to, from, next) => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      store.dispatch("user/set_user", user);
    }
  });
  next();
});

export default router;
