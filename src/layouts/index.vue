<template>
  <Layout>
    <Sider></Sider>
    <Layout>
      <LayoutHeader>2</LayoutHeader>
      <Content></Content>
      <LayoutFooter>4</LayoutFooter>
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