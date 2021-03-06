import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import TabsPage from '../views/TabsPage.vue'
import LoginPage from '../views/loginPage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/guest',
    component: () => import('@/views/guestview.vue')
  },
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    component: LoginPage,
  },
  
  {
    path: '/choise-type-page',
    component: () => import('@/views/choisePage.vue'),
  },
 
  {
    path: '/tabs/',
    component: TabsPage,
    children: [
      {
        path: '',
        redirect: '/tabs/tab2'
      },
      {
        path: 'tab1',
        component: () => import('@/views/Tab1Page.vue')
      },
      {
        path: 'tab2/:type?',
        component: () => import('@/views/Tab2Page.vue')
      },
      {
        path: 'tab3',
        component: () => import('@/views/Tab3Page.vue')
      },
      {
        path: 'view-unit',
        component: () => import('@/views/ViewUnitPage.vue'),
      },
      {
        path: 'config-page',
        component: () => import('@/views/configPage.vue'),
      },
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
