import { createRouter, createWebHistory } from 'vue-router'
import ContactsView from '../views/ContactsView.vue'

  const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'ContactsView',
      component: ContactsView
    },
    {
      path: '/ContactsDetail',
      name: 'ContactsDetail',
      component: () => import('../views/ContactsDetail.vue')
    },
    {
      path: '/ContactsAdd',
      name: 'ContactsAdd',
      component: () => import('../views/ContactsAdd.vue')
    },
    {
      path: '/ContactsEdit',
      name: 'ContactsEdit',
      component: () => import('../views/ContactsEdit.vue')
    }
  ]
})

export default router
