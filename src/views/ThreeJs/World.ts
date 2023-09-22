import Core from "./Core"
import { BoxGeometry, PerspectiveCamera, WebGLRenderer, Clock, MeshBasicMaterial, Mesh, AxesHelper, GridHelper, SphereGeometry } from 'three'
export default class World {
  core: Core;
  angle: number = 0;
  cube!: Mesh;
  sphere!: Mesh;
  constructor(){
    this.core = new Core()
    this._createCssObj()
  }
  update() {
   // this.angle += 0.05
    //this.cube.position.set(x + Math.cos(this.angle),  z + Math.sin(this.angle) , 0)
    // 创建一个时钟以用于动画  
    //console.log(this.clock.getElapsedTime());
    this.sphere.position.x = Math.cos(this.clock.getElapsedTime() * Math.PI / 4) * 2;  
    this.sphere.position.y = Math.cos(this.clock.getElapsedTime() * Math.PI / 4) * 2;  
    this.sphere.position.z = Math.sin(this.clock.getElapsedTime() * Math.PI / 4) * 2; 
  }
  private _createCssObj() {
    //创建一个立方体、材质
    // const geometry = new BoxGeometry(1, 1, 1)
    // const material = new MeshBasicMaterial({color: 'red'})
    // this.cube = new Mesh(geometry, material)
    //cube.scale.set(3, 1, 1) //缩放：x: 3, y: 2 z: 1
    //cube.rotation.set(Math.PI / 4, 0,0)

    //创建一个球体、材质
    const ball = new SphereGeometry( 0.5, 32, 32 );
    const material1 = new MeshBasicMaterial( { color: 'red' } );
    this.sphere = new Mesh( ball, material1 );
    this.sphere.position.set(2,0,0)
    //this.core.scene.add(this.cube) //将正方体添加到场景中
    this.core.scene.add(this.sphere) //球体
    this.clock = new Clock();
    //this.cube.position.set(2,0,0) //物体位置 cube.position.x = 3
    //this.cube.rotation.y = Math.PI / 4

    //坐标辅助器
    const axesHleper = new AxesHelper(5)
    this.core.scene.add(axesHleper)

    //坐标网格
    /* const gridHelper = new GridHelper( 10, 20, 0xc1c1c1, 0x8d8d8d );
		this.core.scene.add( gridHelper ); */
   
  }

}