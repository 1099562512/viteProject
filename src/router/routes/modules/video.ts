import type { RouteRecordRaw } from "vue-router"

const Video : RouteRecordRaw = {
  path: "/Video",
  name: "Video",
  component: () => import('@/layouts/index.vue'),
  redirect: "/Video/videoDemo",
  children: [
    {
      path: "videoDemo",
      name: "videoDemo",
      component: () => import('@/views/Video/videoDemo.vue')
    }
  ]
}

export default Video