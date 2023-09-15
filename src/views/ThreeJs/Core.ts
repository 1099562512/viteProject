import World from './World';

import { 
  Scene,
  WebGLRenderer, 
  PerspectiveCamera,
  Color
 /*  BoxGeometry,
  MeshBasicMaterial, 
  Mesh, 
  AxesHelper, 
  GridHelper, 
  SphereGeometry */
} from 'three'
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

//属性或参数中使用 ！：表示强制解析（告诉typescript编译器，这里一定有值），常用于vue-decorator中的@Prop
//变量后使用 ！：表示类型推断排除null、undefined
let instance : Core | null = null

export default class Core {
  scene!: Scene;
	renderer!: WebGLRenderer;
	camera!: PerspectiveCamera;
  world!: World;
  orbit_controls!: OrbitControls; //轨道控制器

  constructor() {
    //单例模式
    //debugger
    if(instance) {
      return instance
    }
    instance = this;

    this.scene = new Scene()
    this.camera = new PerspectiveCamera();
    this.renderer = new WebGLRenderer()

    this.orbit_controls = new OrbitControls(this.camera, this.renderer.domElement);

    this._initScene()
    this._initCamera()
    this._initRenderer()

    this.world = new World();
  }

  render() {
    this.renderer.setAnimationLoop(() => {
			this.renderer.render(this.scene, this.camera)
      this.orbit_controls.update()
		});
  }

  private _initScene() {
    this.scene.background = new Color(0x000000);
  }
  private _initCamera() {
    let x = 18, y = 18, z = 18;
    this.camera.position.set(x,y,z)
  }
  private _initRenderer() {
    this.renderer.shadowMap.enabled = true; //是否启用阴影贴图
    this.renderer.setSize(window.innerWidth, window.innerHeight); //设置渲染尺寸大小
    document.querySelector("#three")?.appendChild(this.renderer.domElement);
  }
}

/* let scene : Scene;
export const initScene = () => {
  scene = new Scene()
}

export const initCamera = () => {
  const camera = new PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
  let x = 0, y = 8, z = 0;
  camera.position.set(x,y,z)
  scene.add(camera)
}

export const initRenderer = () => {

} */
