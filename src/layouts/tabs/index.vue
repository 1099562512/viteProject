<template>
  <div class="x-multiple-tabs">
    <Tabs
    >
      <template v-for="pane in getTabsState">
        <TabPane :closable="true" :tab="pane.name"></TabPane>
      </template>
    </Tabs>
  </div>
</template>
<script lang="ts" setup>
  import { RouteLocationNormalized } from 'vue-router';
  import { Tabs, TabPane } from 'ant-design-vue'
  import { computed, ref, unref } from 'vue'
  import emitter from '@/utils/routeChanges'
  import MyTabs from './useTabs'
 

  const mytabs = new MyTabs()
  const getTabsState = computed(() => {
    console.log("12313");
    return mytabs.tabList.filter((item) => !item.meta?.hideTab)
  })
  
  /* const panes = ref([
    {title: "Tab1", content: "Content of Tab 1", key: 1},
    {title: "Tab2", content: "Content of Tab 2", key: 2}
  ]) */
  
  emitter.on('listen-in', (route) => {
    // 监听路由变化
    mytabs.addTab(unref(route as RouteLocationNormalized))

  })
</script>
<style lang="less" scoped>
</style>