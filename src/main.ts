import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from '@/routers/main'
import 'element-plus/theme-chalk/base.css'
import '@/styles/index.scss'
import elementplus from '@/plugins/element-plus'
import '@/styles/index.css'

createApp(App)
  .use(createPinia())
  .use(elementplus)
  .use(router)
  .mount('#app')
