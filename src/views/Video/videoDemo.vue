<template>
  <div id="example1" class="list-group">
    <div class="list-group-item">Item-1</div>
    <div class="list-group-item">Item-2</div>
    <div class="list-group-item">Item-3</div>
    <div class="list-group-item">Item-4</div>
    <div class="list-group-item">Item-5</div>
    <div class="list-group-item">Item-6</div>
  </div>
</template>
<script lang="ts" setup>
  import SortableJs from 'sortablejs'
  import { nextTick } from 'vue'

  nextTick(() => {
    const example1 = document.querySelector("#example1") as HTMLElement

    new SortableJs(example1, {
      animation: 150,
      ghostClass: "blue-background-class"
    })
    
  })
  
</script>
<style lang="less" scoped>
.list-group-item {
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(0, 102, 255);
  cursor: move;
}
.list-group-item:nth-child(2n) {
  background-color: orange;
}
.blue-background-class {
  background-color: #C8EBFB!important
}
</style>