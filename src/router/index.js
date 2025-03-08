import { createRouter, createWebHistory } from "vue-router";
import home from "../views/home.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: home,
    },

    //error-404
    {
      path: "/:catchAll(.*)",
      name: "error-404",
      component: () => import("../views/error-404.vue"),
      meta: {
        title: "Page not found",
      },
    },
  ],

  scrollBehavior() {
    return { top: 0, left: 0, behavior: "smooth" };
    // return { top: 0, left: 0, behavior: "instant" };
  },
});

// Global afterEach hook to update document title
router.afterEach((to) => {
  const titleKey = to.meta.title;
  document.title = titleKey || "Furniro";
});

export default router;
