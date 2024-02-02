<template>
  <div class="map-container">
    <div id="canvas-id"></div>
  </div>
</template>
<script lang="ts" setup>
import { onMounted } from "vue";
import $echarts from "@/init/initEchart";
onMounted(() => {
  let myEchart = $echarts.init(document.querySelector("#canvas-id") as HTMLElement);
  const func = (x: number) => {
    return Math.asin(x);
  };
  const generateData = () => {
    let data = [];
    for (let i = -1; i <= 1; i += 0.01) {
      data.push([i, func(i)]);
    }
    return data;
  };

  myEchart.setOption({
    grid: {
      top: 40,
      left: 50,
      right: 40,
      bottom: 50,
    },
    xAxis: {
      name: "x",
      minorTick: {
        show: true,
      },
      minorSplitLine: {
        show: true,
      },
    },
    yAxis: {
      name: "y",
      min: -Math.PI / 2,
      max: Math.PI / 2,
      minorTick: {
        show: true,
      },
      minorSplitLine: {
        show: true,
      },
    },
    series: [
      {
        type: "line",
        showSymbol: false,
        clip: true,
        data: generateData(),
      },
    ],
  });
});
</script>

<style lang="less" scoped>
.map-container {
  height: 100%;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  #canvas-id {
    width: 500px;
    height: 300px;
    background-color: rgb(241, 233, 218);
  }
}
</style>
