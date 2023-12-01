import type { RouteRecordRaw } from "vue-router"

const Map : RouteRecordRaw = {
  path: "/Map",
  name: "Map",
  component: () => import('@/layouts/index.vue'),
  redirect: "/Map/baiduMap",
  children: [
    {
      path: "baiduMap",
      name: "baiduMap",
      component: () => import('@/views/Map/baiduMap.vue')
    },
    {
      path: "Leaflet",
      name: "leaflet",
      component: () => import('@/views/Map/Leaflet.vue')
    },
    {
      path: "aMap",
      name: "amap",
      component: () => import('@/views/Map/aMap.vue')
    }
  ]
}

export default Map