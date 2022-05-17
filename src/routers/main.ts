import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Index from '../views/index/index.vue'
import AppLayout from '@/layout/LayoutApp.vue'
import BookCart from '@/views/bookcart/index.vue'
import { useReaderStore } from '@/store/readerState'
const route:RouteRecordRaw[] = [
  {
    path: '/',
    component: AppLayout,
    children: [
      {
        path: '',
        name: 'home',
        component: Index
      },
      {
        path: 'book_cart',
        name: 'book_cart',
        component: BookCart
      }
    ],
    meta: {
      requireAuth: true
    }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/index.vue')
  }
]
const router = createRouter({
  history: createWebHashHistory(),
  routes: route
}
)
router.beforeEach((to, from, next) => {
  const reader = useReaderStore()
  if (to.meta.requireAuth) {
    if (reader.reader) {
      next()
    } else {
      next({
        path: 'login',
        query: { redirect: to.fullPath }
      })
    }
  } else {
    next()
  }
})
export default router
