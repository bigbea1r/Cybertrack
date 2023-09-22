import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

import ModalSelection from './select.js'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader'
///import { get } from 'animejs'

//import animejs from 'animejs/lib/anime.es.js'
//import * as dat from 'dat.gui'

// Debug
//const gui = new dat.GUI()
//"use strict";

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

const sceneData=Object.create({
    model:'/models/cyber.glb',
   // hdr:'/hdr/softly_gray.hdr', // HDR map
})
// CODE
if(window.innerWidth<1025){//MOBILE
    // camera.position.set(0, 0, 3.2);
    percentToScreens=400
}
const loader = new GLTFLoader(),
      dracoLoader = new DRACOLoader(),
      d=document,
      a=e=>d.querySelectorAll(e),
      s=e=>(d.querySelector(e))?d.querySelector(e):null

dracoLoader.setDecoderPath('/js/libs/draco-new/'); // use a full url path
loader.setDRACOLoader(dracoLoader);

loader.load(
    sceneData.model,
    gltf=>{
        const sceneGlb=gltf.scene
    
        let def__body = new ModalSelection(sceneGlb)
        def__body.valDefault()
        scene.add(sceneGlb)

        //Кнопка для приближения модели
        document.querySelector('#zoom__model').onclick = () =>{ 
            def__body.modalZoom()
        }
        //Кнопка чтобы отдалить модель
        document.querySelector('#zoom__out__model').onclick = () =>{ 
            def__body.modalOutZoom()
        }
        //Кнопка повернуть модель влево
        document.querySelector('#turn__left').onclick = () =>{ 
            def__body.modalLeft()           
        }
        //Кнопка повернуть модель вправо
        document.querySelector('#turn__right').onclick = () =>{ 
            def__body.modalRight()       
        }
        //Кнопка повернуть модель вверх
        document.querySelector('#turn__up').onclick = () =>{ 
            def__body.modalUp()
        }
        //Кнопка повернуть модель  вниз
        document.querySelector('#turn__down').onclick = () =>{ 
            def__body.modalDown()
        }
        document.querySelector('#return').onclick=()=>{
            allBtn.style.display = 'none';
            def__body.valDefault()
            camera.position.set(0,1,5)
        }      
            //Расскраска кузовных элементов
                /*
            Plane_1 — кузов
            Plane_2 — обвес
            Plane_3 — задний фара
            Plane_4 — перендяя фара
            Plane_5 — стёкла
             */
            const rear__headlight = new THREE.Color(0xff0000);
            const body_car = new THREE.Color(0x4dff00);
            const cyrcle = new THREE.Color(0x595957);
            const kit = new THREE.Color(0x000000);
            const headlight = new THREE.Color(0xfcb103);
            const glass = new THREE.Color(0x43578f);
            let colors = [rear__headlight, body_car, glass, headlight, kit, cyrcle];
            let buttons = document.querySelectorAll('#selColor a');
   //Кнопки для окраса машины
                console.log(sceneGlb.children[0].children[0])
                let allBtn=document.querySelector('#selColor')

                    document.querySelector('#body').onclick = () => {
                       allBtn.style.display = 'block';
                       allBtn.style.left = '2.5%';
                       allBtn.style.transition = '1s';
                       let objectName = "Plane_1";
                       def__body.sortButton(buttons,colors,objectName);
                    };
                  // 2            
                    document.querySelector('#body__kit').onclick = () =>{
                       allBtn.style.display  = 'block';
                       allBtn.style.left = '18.5%';
                       let objectName = "Plane_2"
                       def__body.sortButton(buttons,colors,objectName);
                    };
                   //3     
                    document.querySelector('#rear__headlight').onclick = () => {
                       allBtn.style.display  = 'block';
                       allBtn.style.left = '34.5%';
                       let objectName = "Plane_3"
                       def__body.sortButton(buttons,colors,objectName);
                    };
                   //4
                    document.querySelector('#headlight').onclick = () => {
                       allBtn.style.display = 'block';
                       allBtn.style.left = '50.5%';
                       let objectName = "Plane_4"
                       def__body.sortButton(buttons,colors,objectName);
                    };
                  //5
                    document.querySelector('#glass').onclick = () => {
                       allBtn.style.display = 'block';
                       allBtn.style.left = '66.5%';
                       let objectName = "Plane_5"
                       def__body.sortButton(buttons,colors,objectName);
                    };
                  //Скрытие колеса
                    // document.querySelector('#tire').onclick = () => {
                    //    let objectName = 'Circle'
                    //    def__body.vicCar(objectName)
                    // };
                  //Материалы элементов кузова
                  //1
                  // const materialBody = new THREE.MeshPhysicalMaterial({
                  //     color:0xff0000,//0x595957,
                  //     clearcoat:1,
                  //     metalness:0.01,
                  //     roughness:0.01,
                  // });
                  // bodyColor.material=materialBody;
                  // //2
                  // const materialKit = new THREE.MeshPhysicalMaterial({
                  //     color:0x000000,
                  //     roughness: .5,
                  //     metalness: .6,
                  // });
                  // kitColor.material=materialKit;
                  // //3
                  // const materialRear = new THREE.MeshPhysicalMaterial({
                  //   color:0xff0400,
                  //   emissive: 0xff0400,
                  //   strength: 0.4,
                  // });
                  // rearColor.material=materialRear ;
                  // //4
                  // const materialHead = new THREE.MeshPhysicalMaterial({
                  //     color:0x73adff,
                  //     emissive: 0x73adff,
                  // });
                  // headColor.material=materialHead ;
                  // //5
                  // const materialGlass = new THREE.MeshPhysicalMaterial({
                  //     roughness: .05,//без этого прозрачности не будет
                  //     transmission: 0.5, //прозрачность
                  //     color:0x43578f,
                  //   });
                  //   glassColor.material=materialGlass ;
                            //Разрезающая платформа
         document.querySelector('#tire').onclick = () =>{
             const localPlane = new THREE.Plane(new THREE.Vector3(0, -1, -100), 0);//-0.1
  let material = new THREE.MeshStandardMaterial({
    clippingPlanes: [ localPlane ],
    clipShadows: true
  });
  const cyrcle2 = sceneGlb.getObjectByName('Plane_1')
  cyrcle2.material = material
  material.castShadow = true;
  console.log(cyrcle2)
         }     
      }
  );
  // \ CODE
const lightHolder = new THREE.Group();
const aLight=new THREE.DirectionalLight(0xffffff,2);
  // Установка позиции для этого света
  aLight.position.set(-2.5,-0,1);
  // Прикрепляем к удержателю позиции света, чтобы он дальше не крутился вместе с объектами на сцене
  //!!! Раскомментируйте, если нужна «голубая сфера» | Код ниже добавляет Свет на сцену
  lightHolder.add(aLight);

  //Второй дополнительный свет
  const aLight2=new THREE.DirectionalLight(0xffffff,1);
  aLight2.position.set(-1.5,0.3,.7);
  //!!! Раскомментируйте, если нужна «голубая сфера» | Код ниже добавляет Свет на сцену
  lightHolder.add(aLight2);
  scene.add(lightHolder);

const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}
window.addEventListener('resize', () =>{
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

const camera = new THREE.PerspectiveCamera(20, sizes.width / sizes.height, .1, 100)
camera.position.set(0,1,5);
scene.add(camera)

// Controls
const controls = new OrbitControls(camera, canvas)
 //controls.enableDamping = true
 controls.dampingFactor = .01;
 //controls.minPolarAngle =1.2;
 //controls.maxPolarAngle = 1.2;
const renderer = new THREE.WebGLRenderer({
    canvas, antialias: true,
})
renderer.localClippingEnabled = true;
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
renderer.setClearColor('#e1e1e1', 1);

const tick = ()=>{
    // Update Orbital Controls
     controls.update()
    // Render
    renderer.render(scene, camera)
    lightHolder.quaternion.copy(camera.quaternion);
    // Call tick again on the next frame
    window.requestAnimationFrame(tick);
}
tick()