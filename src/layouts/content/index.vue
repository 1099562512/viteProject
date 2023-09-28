<template>
    <router-view>
      <template #default="{Component, route}">
        <keep-alive>
          <component :is="Component"></component>
        </keep-alive>
      </template>
    </router-view>
</template>
<script setup>

</script>
<style lang="less" scoped>
</style>