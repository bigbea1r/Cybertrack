import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

import ModalConstruct from './constructor.js'
import ViewModal from './viewmodal'
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
        const sceneGlb=gltf.scene;
        let default__body = new ModalConstruct();
        let def__body = new ModalConstruct(sceneGlb);
        let def__setting = new ViewModal(sceneGlb);
        def__setting.restore_view_scene();

        scene.add(sceneGlb);     

        //назначение цветов элементам меню 
        

        function set_css_style(distance){
        let allBtn = document.querySelector('#selColor');

        allBtn.style.left = distance;
        def__setting.openMenu(allBtn);
        }
        //Кнопка для приближения модели
        document.querySelector('#zoom__model').onclick = () =>{ 
            def__body.modelZoom()
        }
        //Кнопка чтобы отдалить модель
        document.querySelector('#zoom__out__model').onclick = () =>{ 
            def__body.modelOutZoom()
        }
        //Кнопка повернуть модель влево
        document.querySelector('#turn__left').onclick = () =>{ 
            def__body.modelLeft()           
        }
        //Кнопка повернуть модель вправо
        document.querySelector('#turn__right').onclick = () =>{ 
            def__body.modelRight()       
        }
        //Кнопка повернуть модель вверх
        document.querySelector('#turn__up').onclick = () =>{ 
            def__body.modelUp()
        }
        //Кнопка повернуть модель  вниз
        document.querySelector('#turn__down').onclick = () =>{ 
            def__body.modelDown()
        }
        document.querySelector('#tire').onclick = () =>{ 
            def__body.vicCar('Circle');
            def__body.vicCar('Circle001');
            def__body.vicCar('Circle002');
            def__body.vicCar('Circle003');
        }
        document.querySelector('#return').onclick=()=>{
            def__setting.restore_view_scene()
            camera.position.set(0,1,5)
        }      


        let menuCreated = false;

        function addMenu() {
            if (!menuCreated) {
              let menu = document.createElement("ul");
              menu.id = "menu";
              let selColor = document.getElementById("selColor");
              selColor.appendChild(menu);
          
              originalArray.forEach((element, index) => {
                let a = document.createElement("a");
                a.innerText = nameArray[index];
                default__body.set_colors_for_elements(a, array[index]);
                selColor.appendChild(a);
              });
          
              menuCreated = true;
            }
          }
        
        let array = [];
        let nameArray = [
            'Крассный',
            'Зеленый',
            'Синий',
            'Черный',
            'Жёлтый',
            'Серый'
        ]
        let originalArray = [
          0xff0000,
          0x4dff00,
          0x43578f,
          0x000000,
          0xfcb103,
          0x595957,
        ];
        
        originalArray.forEach(element => {
            if (typeof element === 'number') {
              array.push(new THREE.Color(element));
            }
          });
          
         console.log(array[0]);

          function setColorsForElements(elements) {
            elements.forEach((element, index) => {
              element.style.backgroundColor = array[index].getStyle();
            });
          }


//-------------------------------------------------------------
// срастить
function set_colors_for_elements( elements) {
    elements.forEach((element) => {
        element.addEventListener('mouseover', () => {
            element.style.backgroundColor = `#${color.getHexString()}`;
        });
 
        element.addEventListener('mouseout', () => {
            element.style.backgroundColor = '';
        });
    });
 }
           set_colors_for_elements( document.querySelectorAll('a'))
           let color = new THREE.Color(array)
            const buttons = document.querySelectorAll('#selColor a');
            buttons.forEach((button,index) => {
                button.onclick = () => {
                    def__body.selButtons(def__setting.objectName, array[index]);//def__setting.colors[index]
                };
            });
//-------------------------------------------------------------
                    document.querySelector('#body').onclick = () => {
                     set_css_style('2%');
                     addMenu()
                     setColorsForElements(buttons);
                        def__setting.objectName = "Plane_1";
                    };
                  // 2            
                    document.querySelector('#body__kit').onclick = () =>{
                        def__setting.objectName = "Plane_2";
                        set_css_style('18%');
                     };
                   //3     
                    document.querySelector('#rear__headlight').onclick = () => {
                        def__setting.objectName = "Plane_3";
                        set_css_style('34%');
                    };
                   //4
                    document.querySelector('#headlight').onclick = () => {
                        def__setting.objectName = "Plane_4";
                        set_css_style('50%');
                    };
                  //5
                    document.querySelector('#glass').onclick = () => {
                        def__setting.objectName = "Plane_5";
                        set_css_style('66%');
                    }
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
//          document.querySelector('#tire').onclick = () =>{
//              const localPlane = new THREE.Plane(new THREE.Vector3(0, -1, -100), 0);//-0.1
//   let material = new THREE.MeshStandardMaterial({
//     clippingPlanes: [ localPlane ],
//     clipShadows: true
//   });
//   const cyrcle2 = sceneGlb.getObjectByName('Plane_1')
//   cyrcle2.material = material
//   material.castShadow = true;
//   console.log(cyrcle2)
//          }     
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