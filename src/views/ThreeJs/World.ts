import Core from "./Core"
import { BoxGeometry, PerspectiveCamera, WebGLRenderer, MeshBasicMaterial, Mesh, AxesHelper, GridHelper, SphereGeometry } from 'three'
export default class World {
  core: Core;

  constructor(){
    this.core = new Core()
    this._createCssObj()
  }
  update() {
    
  }
  private _createCssObj() {
    //创建一个立方体、材质
    const geometry = new BoxGeometry(1, 1, 1)
    const material = new MeshBasicMaterial({color: '#fff'})
    //根据几何体和材质创建物体
    const cube = new Mesh(geometry, material)

    cube.position.set(2,0,0) //物体位置 cube.position.x = 3
     //将几何体添加到场景中
     this.core.scene.add(cube)
    //cube.scale.set(3, 1, 1) //缩放：x: 3, y: 2 z: 1
    //cube.rotation.set(Math.PI / 4, 0,0)

    //const ball = new SphereGeometry( 1, 32, 32 );
    //const material1 = new MeshBasicMaterial( { color: 0xffff00 } );
    //const sphere = new Mesh( ball, material1 );
    //this.core.scene.add(sphere)

    const axesHleper = new AxesHelper(5)
    this.core.scene.add(axesHleper)

    const gridHelper = new GridHelper( 10, 20, 0xc1c1c1, 0x8d8d8d );
		this.core.scene.add( gridHelper );
   
  }
}