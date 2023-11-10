<template>
  <div>
    <ul class="x-menu-wrap">
      <li class="x-menu-item">
        <div style="display: flex; align-items: center;">
          <Icon icon="mdi:user" :width="16" :height="16" color="purple"/>
          <span class="ml-2">测试标题1</span>
        </div>
        <ul class="x-menu-wrap">
          <li class="x-menu-item">
            <div style="display: flex; align-items: center;">
              <Icon icon="mdi:user" :width="16" :height="16" color="purple"/>
              <span class="ml-2">子标题1</span>
            </div>
            
          </li>
          <li class="x-menu-item">
            <div style="display: flex; align-items: center;">
              <Icon icon="mdi:user" :width="16" :height="16" color="purple"/>
              <span class="ml-2">子标题2</span>
            </div> 
          </li>
        </ul>
      </li>
      <li class="x-menu-item">
        <div style="display: flex; align-items: center;">
          <Icon icon="mdi:user" :width="16" :height="16" color="purple"/>
          <span class="ml-2">测试标题2</span>
        </div> 
      </li>
    </ul>
    
  </div>
</template>
<script lang="ts" setup>
  import { Icon } from '@iconify/vue'
  const props = defineProps({
    item: Array
  })

  console.log(props);
</script>
<style lang="less" scoped>
  ul {
    list-style-type: none;  
  }
  .x-menu-wrap {
    max-width: 250px;
    background-color: orange;
    .x-menu-item {
      padding: 14px 20px;
    }
  }

</style>