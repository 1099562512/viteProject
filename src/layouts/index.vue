<template>
  <Layout>
    <Sider></Sider>
    <Layout style="height: 100vh;">
      <LayoutHeader>2</LayoutHeader>
      <Content style="flex-grow: 1;"></Content>
      <!-- <LayoutFooter>4</LayoutFooter> -->
    </Layout>
  </Layout>
</template>
<script setup>
import { Layout, LayoutHeader, LayoutContent, LayoutFooter } from 'ant-design-vue'
import Content from './content'
import Sider from './sider'
</script>
<style lang="less" scoped>
</style>