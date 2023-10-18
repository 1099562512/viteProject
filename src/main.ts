import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { setupStore } from '@/store'
import { setupRouter, router } from '@/router'
import { setupRouterGuard } from './router/guard/index.ts'

import "../types/global.d.ts"

function initApp() {
  const app = createApp(App)
  //配置Store
  setupStore(app)

  //配置路由
  setupRouter(app)

  //配置路由守卫
  setupRouterGuard(router)

  app.mount('#app')
}

initApp()