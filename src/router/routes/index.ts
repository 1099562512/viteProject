//引入一些基础路由，如404、错误日志等
//import {} from ""

const modules = import.meta.glob('./modules/*.ts', { eager: true })
const routeModuleList: Object[] = [];

//console.log(modules);
Object.keys(modules).forEach((key) => {
  //console.log((modules as Recordable)[key].default);
  const mod = (modules as Recordable)[key].default || {};
  const modList = Array.isArray(mod) ? [...mod] : [mod];
  routeModuleList.push(...modList);
})

export const asyncRoutes = [...routeModuleList];

export default {}