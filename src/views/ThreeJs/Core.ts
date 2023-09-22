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

  constructor() {
    //单例模式
    //debugger
    if(instance) {
      return instance
    }
    instance = this;

    this.scene = new Scene()
    this.camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
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
      this.renderer.setSize(window.innerWidth, window.innerHeight)
      //重置摄像机宽高比
      this.camera.aspect = window.innerWidth / window.innerHeight
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
    this.renderer.shadowMap.enabled = true; //是否启用阴影贴图
    this.renderer.setSize(window.innerWidth, window.innerHeight); //设置渲染尺寸大小
    document.querySelector("#three")?.appendChild(this.renderer.domElement);
  }

}