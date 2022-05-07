import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Index from '../views/index/index.vue'
import AppLayout from '@/layout/LayoutApp.vue'
const route:RouteRecordRaw[] = [
  {
    path: '/',
    component: AppLayout,
    children: [
      {
        path: '',
        name: 'home',
        component: Index
      }
    ]
  }
]
const router = createRouter({
  history: createWebHashHistory(),
  routes: route
}
)

export default router
