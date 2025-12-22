import App from '@/App.vue'
import MyDex from '@/components/MyDex.vue'
import MainView from '@/Views/MainView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [{
    path: "/my",
    component: MyDex
  }, {
    path: "/",
    component: MainView
  }],
})

export default router
