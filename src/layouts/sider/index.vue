<template>
  <LayoutSider
    theme="drak"
    v-model:collapsed="collapsed"
    trigger=""
    collapsible
  > 
    <BasicMenu :items="state.items"></BasicMenu>
  </LayoutSider>
</template>
<script lang="ts" setup>
  import { LayoutSider } from 'ant-design-vue'
  import { BasicMenu } from '@/components/Menu';
  import { usePermissionStore } from '@/store/modules/permission';

  import { ref, reactive } from 'vue'

  const permissionStore = usePermissionStore()

  const collapsed = ref(false) //Ref<boolean>
  const state = reactive({
    preOpenKeys: [],
    items: permissionStore.getFrontMenuList
  })
</script>
<style lang="less" scoped>
  
</style>