import type { RouteRecordRaw } from 'vue-router';
import { defineStore } from 'pinia'
import { asyncRoutes } from '@/router/routes';
import { transformRouteToMenu } from '@/router/helper/menuHelper'
//import { store } from "@/store"


interface Menu {
  name: string,
  icon?: string,
  path: string,
  children?: Menu[]
}

interface PermissionState {
  // 后台菜单列表
  backMenuList: Menu[];
  // 菜单列表
  frontMenuList: Menu[];
}

export const usePermissionStore = defineStore({
  id: "permission",
  state: () : PermissionState => ({
    //后台菜单列表
    backMenuList: [],
    frontMenuList: []
  }),
  getters: {
    getFrontMenuList(state) : Menu[] {
      return state.frontMenuList
    },
    getBackMenuList(state): Menu[] {
      return state.backMenuList
    } 
  },
  actions: {
    setBackMenuList(list: Menu[]) {
      this.backMenuList = list;
    },
    setFrontMenuList(list: Menu[]) {
      this.frontMenuList = list;
    },
    //构建路由
    /**
     * 路由采取两种模式，一种是前端自己自己手动配置好的，一种是由后台进行管理，通过接口进行动态添加的
     * 前台模式：无需动态添加路由，只需转化成对应格式的菜单数据即可
     * 后台模式：需要动态添加路由，然后再转化成菜单数据
     */
    async buildRoutesAction() : Promise< RouteRecordRaw[] > {
      let routes : RouteRecordRaw[] = []
      //路由过滤器
      const routerFilter = (route : RouteRecordRaw) => {
        const { meta } = route
        const {roles} = meta || {}
        if(!roles) return true //如果没有设置roles默认都有
        //这边可以通过账号角色进行过滤，从userStore获取账号信息
      }

      //这里可以根据角色对路由进行处理
      routes = asyncRoutes as unknown as RouteRecordRaw[]
      //将路由转换成菜单
      const menuList = transformRouteToMenu(asyncRoutes)

      this.setFrontMenuList(menuList)
      return routes
    }
  }
})
