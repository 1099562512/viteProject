<template>
  <LayoutSider
    theme="drak"
    v-model:collapsed="collapsed"
    trigger=""
    collapsible
  >
    <Menu>
      <template v-for="item in state.items">
        
      </template>
    </Menu>
  </LayoutSider>
</template>
<script lang="ts" setup>
  import { Drawer, LayoutSider, Menu } from 'ant-design-vue'
  import { ref, reactive } from 'vue'
  const collapsed = ref(false) //Ref<boolean>
  const state = reactive({
    items: [
      {
        title: "ThreeJs",
        path: "ThreeeJs",
        redirect: "ThreeJs/demo",
        icon: "",
        name: "ThreeJs",
        orderNo: 1,
        children: [
          {
            title: "ThreeJs",
            path: "ThreeeJs/demo",
            icon: "",
            name: "ThreeJs"
          }
        ]
      }
    ]
  })

</script>
<style lang="less" scoped>
</style>