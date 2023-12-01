<template>
  <div class="map-container" id="map">
    <!--  <SimpleMenu :item="menus"></SimpleMenu> -->
  </div>
</template>
<script lang="ts" setup>
//import { SimpleMenu } from '@/components/SimpleMenu'
import { onMounted } from "vue";
import L from "leaflet";
import "leaflet-draw";
import "leaflet-draw/dist/leaflet.draw.css";
//import type { Map } from "leaflet";

const layer = L.tileLayer(
  "http://webrd01.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=7&x={x}&y={y}&z={z}"
);

let map: any = null;

onMounted(() => {
  // 'map'为HTML节点id
  map = new L.Map("map", {
    center: [24.490143, 118.036644], //中心坐标
    zoom: 12, //缩放级别
    zoomControl: true, //缩放组件
    attributionControl: false, //去掉右下角logol
    layers: [layer], //图层
  });

  let editableLayers = new L.FeatureGroup();
  let drawControl = new L.Control.Draw({
    draw: {
      polyline: {}, // 线
      polygon: {}, // 面
      circle: {}, // 圆
      rectangle: {}, // 矩形
      marker: {}, // 标记点
      remove: {},
    },
    edit: {
      featureGroup: editableLayers,
    },
  });
  drawControl.addTo(map);
  map.on(L.Draw.Event.CREATED, function (e) {
    console.log("12312");
    console.log("绘制ing", e);
    var latlngs = e.layer._latlngs; // arr [lat,lng] 一组经纬度，每个点都有

    console.log(latlngs);
    var type = e.layerType,
      layer = e.layer;
    if (type === "marker") {
      layer.bindPopup("A popup!");
    }
    editableLayers.addLayer(layer);
    map.addLayer(editableLayers);
  });
  /* map.on("zoomstart", () => {
    console.log("123");
  }); */
});
</script>

<style lang="less" scoped>
.map-container {
  height: 100%;
  width: 100%;
  background-color: orange;
}
</style>
