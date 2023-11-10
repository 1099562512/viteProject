<template>
  <LayoutHeader class="x-layout-header">
    <!-- Left -->
    <div class="header-left">
      <!-- LoGo -->
      <AppLogo></AppLogo>
      <!-- trigger -->

      <!-- 面包屑 -->
    </div>
    <!-- menu -->
    <!-- action -->
  </LayoutHeader>
</template>
<script lang="ts" setup>
  import { LayoutHeader } from 'ant-design-vue';
  import  AppLogo from '@/components/Application/src/AppLogo.vue'
</script>
<style lang="less" scoped>
  .x-layout-header {
    display: flex;
    padding: 0 10px;
  }
  .header-left {
    display: flex;
    align-items: center;
    height: 100%;
  }
</style>