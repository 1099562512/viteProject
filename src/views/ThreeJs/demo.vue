<template>
  <div class="three-wrap" style="height: 100%; width: 100%">
    <div id="three" class="threeRef" ref="threeRef" ></div>
  </div>

</template>

<script setup lang="ts">
  import type { Ref } from 'vue'
  import { ref, onMounted } from 'vue'
  import Core from "./Core"
  //import { Scene, BoxGeometry, PerspectiveCamera, WebGLRenderer, MeshBasicMaterial, Mesh, AxesHelper, GridHelper, SphereGeometry } from 'three'
  //import { OrbitControls } from 'three/addons/controls/OrbitControls';

  const threeRef : Ref<HTMLElement | null> = ref(null)
  //console.log(threeRef.value);

  onMounted(() => {
    const core = new Core('.three-wrap')
    core.render() 
  }) 
  /* //创建一个场景
    const scene = new Scene()
    //创建一个相机
    const camera = new PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
    let x = 0, y = 8, z = 0;
    camera.position.set(x,y,z)
    scene.add(camera)

    //创建一个立方体、材质
    const geometry = new BoxGeometry(1, 1, 1)
    const material = new MeshBasicMaterial({color: '#fff'})
    //根据几何体和材质创建物体
    const cube = new Mesh(geometry, material)

    cube.position.set(2,0,0) //物体位置 cube.position.x = 3
    //cube.scale.set(3, 1, 1) //缩放：x: 3, y: 2 z: 1
    //cube.rotation.set(Math.PI / 4, 0,0)

    const ball = new SphereGeometry( 1, 32, 32 );
    const material1 = new MeshBasicMaterial( { color: 0xffff00 } );
    const sphere = new Mesh( ball, material1 );
    scene.add(sphere)
    //将几何体添加到场景中
    scene.add(cube)

    //初始化渲染
    const renderer = new WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight); //设置渲染尺寸大小
    
    //创建一个轨道控制器
    const control = new OrbitControls(camera, renderer.domElement)
    //control.enableDamping = true //开启阻尼
    //control.autoRotate = true //自动围绕目标旋转

    //添加坐标轴辅助器
    const axesHleper = new AxesHelper(5)
    scene.add(axesHleper)

    //坐标格辅助对象
    const gridHelper = new GridHelper( 10, 20, 0xc1c1c1, 0x8d8d8d );
		scene.add( gridHelper );
    
    //将webgl渲染的canvas添加到body
    //document.body.appendChild(renderer.domElement)
    threeRef.value?.appendChild(renderer.domElement)

    //渲染场景
    //renderer.render(scene, camera)
    //console.log(renderer);
    animate()
    function animate() {
      renderer.render(scene, camera)
      requestAnimationFrame(animate)
      control.update()
    } */
</script>

<style scoped>
</style>
