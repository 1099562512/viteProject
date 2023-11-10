<template>
  <div class="anticon">
    <img style="width: 32px; height: 32px" src="../../../assets/images/logo.png" />
    <div class="ml-4 x-logo__title">系统标题</div>
  </div>
</template>
<script lang="ts" setup>
//这边可以将logo和标题做配置化，通过后hook函数获取，利用store管理

</script>
<style lang="less" scoped>
  .anticon {
    display: flex;
    min-width: 192px;
    align-items: center;
    cursor: pointer;
  }
  .x-logo__title {
    transition: all 0.5s;
    font-size: 16px;
    font-weight: 700;
    color: #0960bd;
  }
</style>