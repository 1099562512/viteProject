import type { RouteRecordRaw } from "vue-router"

const ThreeJs : RouteRecordRaw = {
  path: "/ThreeJs",
  name: "ThreeJs",
  redirect: "/ThreeJs/demo",
  children: [
    {
      path: "demo",
      name: "demo",
      component: () => import('@/views/ThreeJs/demo.vue')
    }
  ]
}

export default ThreeJs