import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import ProgramDetailsPage from '../views/ProgramDetailsPage.vue'
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/details/:category/:id',
    name: 'Details',
    component: ProgramDetailsPage,
    props:true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
