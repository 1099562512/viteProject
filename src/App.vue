<template>
  <div>
    <div class="threeRef" style="height: 100vh;width: 100vw;"></div>
    <!-- <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a> -->
  </div>
  <!-- <HelloWorld msg="Vite + Vue" /> -->
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import { Scene, BoxGeometry, PerspectiveCamera, WebGLRenderer, MeshBasicMaterial, Mesh } from 'three'

  const threeRef = ref(null)
  console.log(threeRef);
  
  //创建一个场景
  const scene = new Scene()
 
  //创建一个立方体
  const boxGeometry = new BoxGeometry(10, 10, 10)

  const camera = new PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
        
  const renderer = new WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
        
  /* document.body.appendChild(renderer.domElement);
  //var geometry = new THREE.CubeGeometry(1,1,1);
  var material = new MeshBasicMaterial({color: 0x00ff00});
  var cube = new Mesh(boxGeometry, material); scene.add(cube);
  camera.position.z = 5;
  function render() {
      requestAnimationFrame(render);
      cube.rotation.x += 0.1;
      cube.rotation.y += 0.1;
      renderer.render(scene, camera);
  }
  render(); */

</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
