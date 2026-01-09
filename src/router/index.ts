import MainView from '@/Views/MainView.vue'
import MyDex from '@/Views/MyDexView.vue'
import Tournament from '@/Views/Tournament.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: MainView
    }, 
    {
      path: "/my",
      component: MyDex
    },
    {
      path: "/tournament",
      component: Tournament
    }
  ],
})

export default router
