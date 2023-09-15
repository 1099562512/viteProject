import { createRouter, createWebHashHistory } from "vue-router"
import type { RouteRecordRaw } from 'vue-router';
import type { App } from 'vue'

const routes: Array<RouteRecordRaw> =  [{
  path: "/",
  name: "/",
  redirect: "/home"
},
{
  path: "/home",
  name: "home",
  component: () => import("@/views/ThreeJs/basic.vue")
}
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export const setupRouter = (app: App<Element>) => {
  app.use(router)
}