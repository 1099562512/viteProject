<template>
  <div class="map-container">
    <!--  -->
    <div id="canvas-id"></div>
    <!--  <SimpleMenu :item="menus"></SimpleMenu> -->
  </div>
</template>
<script lang="ts" setup>
//import { SimpleMenu } from '@/components/SimpleMenu'
//import { reactive } from 'vue';
import { Leafer, Line, Box, Matrix } from "leafer-ui";
import { onMounted } from "vue";
onMounted(() => {
  const leafer = new Leafer({
    view: "canvas-id",
    width: 500,
    height: 300,
  });
  const line1 = new Line({
    points: [0, -100, 100, -200],
    stroke: "rgb(50,205,121)",
  });

  const line2 = new Line({
    points: [0, 0, 0, -10],
    stroke: "rgb(0,0,0)",
  });

  const line3 = new Line({
    points: [0, -240, 0, -230],
    stroke: "rgb(0,0,0)",
  });

  const matrix = new Matrix(1, 0, 0, 1, 250, 270);
  line1.transform(matrix);
  leafer.add(line1);

  line2.transform(matrix);
  leafer.add(line2);

  line3.transform(matrix);
  leafer.add(line3);
  /*
    绘制模糊函数坐标系
    1、绘制外框，基于父容器
    2、绘制刻度、文本
    3、绘制模糊函数曲线，基于函数公式
  */
  const CW = 500,
    CH = 300,
    CP = 30;
  const origin = [CP, CP], //原点
    rT = [CW - CP, CP], //右上
    rB = [CW - CP, CH - CP], //右下
    lB = [CP, CH - CP]; //左下

  const line = new Line({
    points: [...origin, ...rT, ...rB, ...lB, ...origin],
    //strokeWidth: 1,
    stroke: "rgb(50,205,121)",
  });

  const yOrigin = new Line({
    points: [30, 150, 40, 150],
    stroke: "rgb(0,0,0)",
  });
  const yROrigin = new Line({
    points: [460, 150, 470, 150],
    stroke: "rgb(0,0,0)",
  });

  const yLine1 = new Line({
    points: [40, 150, 460, 150],
    strokeWidth: 0.3,
    stroke: "rgb(50,205,121)",
  });

  const box = new Box({
    x: 10,
    y: 140,
    /* fill: "#FF4B4B",
    cornerRadius: 20, */
    children: [
      {
        tag: "Text",
        text: "0",
        fill: "black",
        //padding: [10, 20],
        // textAlign: "left",
        //verticalAlign: "top",
      },
    ],
  });

  leafer.add(line);

  leafer.add(yROrigin);
  leafer.add(yOrigin);
  leafer.add(yLine1);
  leafer.add(box);
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
