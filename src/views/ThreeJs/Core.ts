import World from './World';
import { GUI } from 'three/examples/jsm/libs/lil-gui.module.min.js'; 
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
  container !: Element | null;
  width: number = 0;
  height: number = 0;

  constructor(domId ?: string) {
    //单例模式
    //debugger
    if(instance) {
      return instance
    }
    instance = this;

    this.scene = new Scene()
    if(domId) {
      this.container = document.querySelector(`${domId}`)
    }
    this._setAspect()
    this.camera = new PerspectiveCamera(75, this.width / this.height, 0.1, 1000);
    
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
      this.world.update()
      this.orbit_controls.update()
		});

    //响应式画布
    window.addEventListener('resize', () => {
      this._setAspect()
      const {width, height} = this
      this.renderer.setSize(width, height)
      //重置摄像机宽高比
      this.camera.aspect = width / height
      //更新摄像机投影矩阵,在任何参数被改变以后必须被调用。
      this.camera.updateProjectionMatrix()
    })

    /* const obj = {
      myBoolean: true,
      myString: 'lili-gui',
      myNumber: 1,
      myFunction: function() {
        alert('hi')
      }
    }
    const gui = new GUI()
    gui.add(obj, 'myBoolean')
    gui.add(obj, 'myString') // 文本
    gui.add(obj, 'myNumber') // 数字
    gui.add(obj, 'myFunction') // 按钮 */

    const updateCamera = () => {
      this.camera.updateProjectionMatrix()
    }
    const gui = new GUI()
    gui.add(this.camera, 'fov', 1, 180).onChange(updateCamera)
    gui.add(this.camera, 'near', 1, 200).onChange(updateCamera)
    gui.add(this.camera, 'far', 1, 200).onChange(updateCamera)
  }

  private _initScene() {
    this.scene.background = new Color(0x000000);
  }
  private _initCamera() {
    let x = 10, y = 5, z = 5;
    this.camera.position.set(x,y,z)
  }
  private _initRenderer() {
    const { width, height } = this
    this.renderer.shadowMap.enabled = true; //是否启用阴影贴图
    this.renderer.setSize(width, height); //设置渲染尺寸大小
    document.querySelector("#three")?.appendChild(this.renderer.domElement);
  }
  private _setAspect() {
    this.width = this.container ? this.container?.clientWidth : window.innerWidth
    this.height = this.container ? this.container?.clientHeight : window.innerHeight
  }
}