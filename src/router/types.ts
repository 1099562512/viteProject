export enum RoleEnum {
  // super admin
  SUPER = 'super',

  // tester
  TEST = 'test',
}

//自定义菜单接口
export interface Menu {
  name: string;
  icon?: string;
  path: string; //路由地址
  paramPath?: string;
  children?: Menu[];
  orderNo?: number; //菜单编号，用于排序
  roles?: RoleEnum[]; //角色权限表
}