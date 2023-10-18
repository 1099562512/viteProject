<template>
  <AntMenu
    mode="inline"
    @click="handleClick"
  >
    <template v-for="item in items" :key="item.path">
      <BasicSubMenu :item="item"></BasicSubMenu>
    </template>
  </AntMenu>
</template>
<script lang="ts" setup>
  import type { PropType } from 'vue'
  import type { MenuInfo } from 'ant-design-vue/lib/menu/src/interface';
  import type {Menu } from "@/router/types"
  import { Menu as AntMenu } from 'ant-design-vue'
  import { useRouter } from 'vue-router';
  import { getAsyncMenus } from '@/router/menus' 
  import BasicSubMenu from './BasicSubMenu.vue';

  const props = defineProps({
    items: {
      type: Array as PropType<Menu[]>, //PropType用于vue中指定props类型
      default: () => []
    }
  })
  const {items} = props
  const router = useRouter()
  const handleClick = (e : MenuInfo) => {
    console.log(e);
    router.push(e.key)
   /*  getAsyncMenus()
    console.log(key);
    router.push(key) */
  }
  //console.log(items);
</script>
<style lang="less" scoped>

</style>