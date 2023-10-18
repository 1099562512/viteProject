import { createRouter, createWebHashHistory } from "vue-router"
//import type { RouteRecordRaw } from 'vue-router';
import type { App } from 'vue'
import { asyncRoutes } from "./routes"
//import LAYOUT from '@/layouts/index.vue'

export const router = createRouter({
  history: createWebHashHistory(),
  routes: asyncRoutes
})

export const setupRouter = (app: App<Element>) => {
  app.use(router)
}