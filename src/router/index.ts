import About from "@/pages/About/About.vue";
import Home from "@/pages/home/Home.vue";
import Trabajos from "@/pages/Trabajos/Trabajos.vue";
import { createRouter, createWebHashHistory } from "vue-router";



export const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/portfolio',
      name: 'trabajos',
      component: Trabajos
    },
    {
      path: '/about-me',
      name: 'about',
      component: About
    },
    {
      path: '/:patchMatch(.*)',
      redirect: '/'
    }
  ],

//aqui scrollBehaviour
scrollBehavior(to, _from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth'
      };
    }
    return { top: 0 };
  },


})