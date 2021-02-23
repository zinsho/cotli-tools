import {createRouter, createWebHistory } from 'vue-router'
import CotliTools from '../views/CotliTools.vue'
import CotliDungeonForms from '../views/CotliDungeonForms.vue'
const routes = [
  {
    path: '/',
    name: 'Dungeon Forms',
    component: CotliDungeonForms
  },
  {
    path '/about',
    name: 'CotLI Tools',
    component: CotliTools
  }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
