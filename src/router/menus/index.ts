import { usePermissionStore } from "@/store/modules/permission";

export async function getAsyncMenus() {
  const permissiomStore = usePermissionStore()
  console.log(permissiomStore);
}