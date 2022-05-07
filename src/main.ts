import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from '@/routers/main'
import '@/styles/index.scss'
import elementplus from '@/plugins/element-plus'
createApp(App)
  .use(createPinia())
  .use(elementplus)
  .use(router)
  .mount('#app')
