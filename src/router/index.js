import { createRouter, createWebHistory } from 'vue-router'


const routes = [
  {
    path: '/',
    component: () => import('../components/StartScreen/StartScreen.vue')
  },
  {
    path: '/griglia',
    component: () => import('../components/Griglia/Griglia.vue')
  }
]

export default createRouter({
  history: createWebHistory(),
  routes
})
