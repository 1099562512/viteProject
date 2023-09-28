import { createRouter, createWebHashHistory } from "vue-router"
import type { RouteRecordRaw } from 'vue-router';
import type { App } from 'vue'

import LAYOUT from '@/layouts/index.vue'

const routes: Array<RouteRecordRaw> =  [{
  path: "/",
  name: "Root",
  redirect: "/ThreeJs"
},
{
  path: "/home",
  name: "home",
  component: LAYOUT,
  children: []
  //component: () => import("@/views/ThreeJs/demo.vue")
},
{
  path: "/ThreeJs",
  name: "ThreeJs",
  component: LAYOUT,
  redirect: "/ThreeJs/demo",
  children: [{
    path: "demo",
    component: () => import("@/views/ThreeJs/demo.vue")
  }]
}]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export const setupRouter = (app: App<Element>) => {
  app.use(router)
}