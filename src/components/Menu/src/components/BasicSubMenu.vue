<template>
  <MenuItem v-if="!hasSubMenu" :icon="item.icon" :key="item.path">{{item.name}}</MenuItem>
  <SubMenu :icon="item.icon" :key="item.path" :title="item.name" v-else>
    <template v-for="childrenItem in item.children || []" :key="childrenItem.path">
      <BasicSubMenu :item="childrenItem"></BasicSubMenu>
    </template>
  </SubMenu>
</template>
<script lang="ts" setup>
  //setup语法糖，组件名称默认为组件文件名
  import { MenuItem, SubMenu } from "ant-design-vue"
  import type { PropType } from 'vue'
  //import type { Menu } from '@/router/types'

  const props = defineProps({
    item: {
      type: Array as PropType<Menu>, //PropType用于vue中指定props类型
      default: () => []
    }
  })
  const { item } = props

  const hasSubMenu = item.children?.length > 0

</script>

<style lang="less" scoped>
</style>