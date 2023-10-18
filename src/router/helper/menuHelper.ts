
import type { Menu } from "../types"
//路径处理
function joinParentPath(menus : Menu[], parentPath = '') {
  for(let menu of menus) {
    //为子菜单补全路径，加上父路径
    if(!menu.children) {
      menu.path = `${parentPath}/${menu.path}`
    }else {
      joinParentPath(menu.children, menu.path)
    }
  }
}

//将路由转换成菜单
export function transformRouteToMenu(routeModList) {
  //children的path路径进行补全
  //console.log(routeModList);
  joinParentPath(routeModList)
  console.log(routeModList);
  return routeModList
}

