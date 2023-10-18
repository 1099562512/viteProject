import type { RouteRecordRaw } from "vue-router"
//import LAYOUT from '@/layouts/index.vue'


const ThreeJs : RouteRecordRaw = {
  path: "/ThreeJs",
  name: "ThreeJs",
  redirect: "/ThreeJs/demo",
  component: () => import('@/layouts/index.vue'),
  meta: {
    orderNo: 10,
    icon: ""
  },
  children: [
    {
      path: "demo",
      name: "demo",
      component: () => import('@/views/ThreeJs/demo.vue')
    }
  ]
}

export default ThreeJs