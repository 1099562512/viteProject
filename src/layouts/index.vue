<template>
  <Layout>
    <!-- 这边可以放一些全局组件：如置顶、锁屏、配置窗口等 -->
    <Sider></Sider>
    <Layout style="height: 100vh;">
      <!-- <Header></Header> -->
      <MultipleHeader></MultipleHeader>
      <Content style="flex-grow: 1;"></Content>
      <!-- <LayoutFooter>4</LayoutFooter> -->
    </Layout>
  </Layout>
</template>
<script setup>
  import { Layout, LayoutContent, LayoutFooter } from 'ant-design-vue'
  import Content from './content'
  import Sider from './sider'
  import Header from './header'
  import MultipleHeader from  './header/MultipleHeader.vue'
</script>
<style lang="less" scoped>
</style>