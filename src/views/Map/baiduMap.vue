<template>
  <div>
    <!--  -->
    <SimpleMenu :item="menus"></SimpleMenu>
  </div>
</template>
<script lang="ts" setup>
  import { SimpleMenu } from '@/components/SimpleMenu'
  import { reactive } from 'vue';
  const menus = reactive([{
    name: "123",
    path: "123"
  }])
</script>
<style lang="less" scoped>
</style>