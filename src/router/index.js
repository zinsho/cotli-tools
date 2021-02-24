import {createRouter, createWebHistory } from 'vue-router'
import CotliTools from '../views/CotliTools.vue'
import CotliDungeonForms from '../views/CotliDungeonForms.vue'
import NotFound from '../views/NotFound.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: CotliTools
  },
  {
    path: '/forms',
    name: 'Dungeon Forms',
    component: CotliDungeonForms
  },
  {
    path: '/about',
    name: 'About',
    component: CotliTools
  },
  {
    path: "/:pathMatch(.*)*",
    name: 'Not Found',
    component: NotFound,
    meta: {
      requiresAuth: false
    }
  }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
