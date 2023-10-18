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
  import { LayoutSider, Menu, SubMenu, MenuItem  } from 'ant-design-vue'
  import type { MenuInfo } from 'ant-design-vue/lib/menu/src/interface';
  import { BasicMenu } from '@/components/Menu';
  import { usePermissionStore } from '@/store/modules/permission';

  import { ref, reactive, h } from 'vue'
  import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    PieChartOutlined,
    MailOutlined,
    DesktopOutlined,
    InboxOutlined,
    AppstoreOutlined,
  } from '@ant-design/icons-vue';

  const permissionStore = usePermissionStore()
  console.log(permissionStore.getFrontMenuList);
  const collapsed = ref(false) //Ref<boolean>
  const state = reactive({
    selectedKeys: [],
    openKeys: [],
    preOpenKeys: [],
    items: permissionStore.getFrontMenuList
  })
</script>
<style lang="less" scoped>
</style>