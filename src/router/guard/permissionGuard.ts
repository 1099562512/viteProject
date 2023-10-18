import type { RouteRecordRaw, Router } from 'vue-router';
//import { asyncRoutes } from '@/router/routes'
import { usePermissionStore } from '@/store/modules/permission';

export async function  createPermissionGuard(router: Router) {
  const permissionStore = usePermissionStore()
    //构建路由
  const routes = await permissionStore.buildRoutesAction()
  router.beforeEach(async (to, from, next) => {
    
    console.log(routes);

    //添加路由列表
    /* routes.forEach(route => {
      router.addRoute(route)
    }); */
    
    next();
    return
  })
}