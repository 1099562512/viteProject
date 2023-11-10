import type { RouteLocationNormalized } from 'vue-router';
import { reactive } from "vue"

class Tabs {
  tabList: RouteLocationNormalized[] = reactive([])
  
  async addTab(route : RouteLocationNormalized) {
    const { path, fullPath, name } = route
    //判断是否该添加，比如404界面或error界面就不用
    
    //判断是否已经存在该界面
    const tabHasExits = this.tabList.some((tab, index) => {
      return (tab.fullPath || tab.path) === (fullPath || path) 
    })
    if(tabHasExits) {
      
    }else {
      //可以做数量的控制，超过多少需要关闭
      this.tabList.push(route)
    }
  }
 
  closeAllTabs() {}
}

export default Tabs