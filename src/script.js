import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

import ModalSelection from './select.js'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader'
///import { get } from 'animejs'

//import animejs from 'animejs/lib/anime.es.js'
//import * as dat from 'dat.gui'

// HDR map
//import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader';

// Debug
//const gui = new dat.GUI()
//"use strict";
// Canvas
const canvas = document.querySelector('canvas.webgl')


// Scene
const scene = new THREE.Scene()

//scene.add( spotLight );
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
    sceneData.model,// Manda
    gltf=>{
        const sceneGlb=gltf.scene
        
        let def__body = new ModalSelection(sceneGlb)
        def__body.valDefault();
        scene.add(sceneGlb)
        
        //Объявление переменных для зумирования модели
        let obj = new ModalSelection(sceneGlb);
        //let number = zoom.modalZoom(turnVal);
        //let objectOne = sceneGlb.scale;
        //let objectTwo = sceneGlb.rotation;
        //Кнопка для приближения модели
        document.querySelector('#zoom__model').onclick = () =>{ 
            obj.modalZoom()
        }
        //Кнопка чтобы отдалить модель
        document.querySelector('#zoom__out__model').onclick = () =>{ 
            obj.modalOutZoom()
        }
        //Кнопка повернуть модель влево
        document.querySelector('#turn__left').onclick = () =>{ 
            obj.modalLeft()           
        }
        //Кнопка повернуть модель вправо
        document.querySelector('#turn__right').onclick = () =>{ 
            obj.modalRight()       
        }
        //Кнопка повернуть модель вверх
        document.querySelector('#turn__up').onclick = () =>{ 
            obj.modalUp()
        }
        //Кнопка повернуть модель  вниз
        document.querySelector('#turn__down').onclick = () =>{ 
            obj.modalDown()
        }

// sceneGlb.add(mesh);
        //Скрытие колеса
        let circle = sceneGlb.getObjectByName("Circle")
                //console.log(sceneGlb);
            let vis = new ModalSelection(circle);
            document.querySelector('#tire').onclick = () => {
                vis.vicCar()
            };

            //Расскраска кузовных элементов
                /*
            Plane_1 — кузов
            Plane_2 — обвес
            Plane_3 — задний фара
            Plane_4 — перендяя фара
            Plane_5 — стёкла
             */
            const rear_headlight = new THREE.Color(0xff0000);
            const cyrcle = new THREE.Color(0x595957);
            const body_car = new THREE.Color(0x4dff00);
            const kit = new THREE.Color(0x000000);
            const headlight = new THREE.Color(0xfcb103);
            const glass = new THREE.Color(0x43578f);

            //let array = [rear_headlight,headlight,body_car,kit,cyrcle,glass];
            //0 Для начала цикла
            //let grassColorIndex=0;
            //Сам цикл
            // let justCycle = () => {
            //     if(grassColorIndex == array.length-1){
            //         return grassColorIndex = 0;
            //     }
            //     else{
            //         grassColorIndex++;
            //     }
            //     console.log(grassColorIndex);  
            // }
            //Элементы модели
            //let bodyCar = sceneGlb.getObjectById("Plane") 
            //--Части кузова
            //let object = new sceneGlb.getObjectByName('Plane')
//--------------------------------------------------------------------
                //Обращение к классам кузова
                // let bodyColor = body.bodyCar(0);//кузов (1)
                // let kitColor = body.bodyCar(1);//обвес (2)
                // let rearColor = body.bodyCar(2);//задняя фара (3)
                // let headColor = body.bodyCar(3);//передняя фара (4)
                // let glassColor = body.bodyCar(4); //стёкла (5)
                //console.log(bodyColor)
                //let object = sceneGlb.getObjectByName('Plane')
                //console.log(body.searchObj(object))
 //Кнопки для окраса машины
                document.querySelector('#body').onclick = () =>{
                //1
                let objectName = "Plane_1";
                let object = def__body.searchObj(sceneGlb, objectName);
                    def__body.setColor(object,body_car);
                    console.log(object)
                    
                   };
                // 2            
                document.querySelector('#body__kit').onclick = () =>{
                    let objectName = "Plane_2"
                    let object = def__body.searchObj(sceneGlb, objectName);
                    def__body.setColor(object,kit);                    console.log(object)
                   };
                 //3     
                  document.querySelector('#rear__headlight').onclick = () => {
                    let objectName = "Plane_3"
                    let object = def__body.searchObj(sceneGlb, objectName);
                    def__body.setColor(object,rear_headlight);                    console.log(object)
                  };
                 //4
                 document.querySelector('#headlight').onclick = () => {
                    let objectName = "Plane_4"
                    let object = def__body.searchObj(sceneGlb, objectName);
                    def__body.setColor(object,headlight);                    console.log(object)
                  };
                //5
                  document.querySelector('#glass').onclick = () => {
                    let objectName = "Plane_5"
                    let object = def__body.searchObj(sceneGlb, objectName);
                    def__body.setColor(object,glass);
                    console.log(object) 
                  };   
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
//        document.querySelector('#rear__headlight').onclick = () =>{
//            const localPlane = new THREE.Plane(new THREE.Vector3(0, -1, -100), 0);//-0.1
//let material = new THREE.MeshPhongMaterial({
//   clippingPlanes: [ localPlane ],
//   clipShadows: true
//});
//const cyrcle2 = sceneGlb.getObjectByName('Plane_1')
//cyrcle2.material = material
//material.castShadow = true;
//
//        }     
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
renderer.setClearColor('#dedede', 1);


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