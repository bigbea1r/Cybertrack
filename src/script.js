import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

import ZoomModal from './zoom.js'
import ObjectPlane from './plane.js'
import VisCircle from './circle.js'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader'
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
              //animationScripts = [{ start:0, end:0, func:0 }];
        sceneGlb.scale.set(.3,.3,.3)

        scene.add(sceneGlb)
        
        sceneGlb.rotation.set(-0.04,0,0)
        sceneGlb.position.set(0,-0.2,0)
        // const circle1 =
        // class ModalRepaint{
        //     constructor(circle1) { //, circle2, circle3, circle4
        //         this.circle1=circle1.sceneGlb.getObjectByName('Circle');
        //         // this.circle2.sceneGlb.getObjectByName('Circle002')=circle2;
        //         // this.circle3.sceneGlb.getObjectByName('Circle001')=circle3;
        //         // this.circle4.sceneGlb.getObjectByName('Circle003')=circle4;
        //     }
        //     sayHi(){
        //         console.log(this.circle1);
        //     }
        // };
        // let modal = new ModalRepaint(circle1);
        // modal.sayHi();
        // document.querySelector('#tire').onclick = () => {
        //     const modal = new modalRepaint(circle1);
        //     function removeCyrcle2() {
        //         if(modal.isObject3D==true){
        //             modal.isObject3D=false;
        //             modal.visible=false;
        //         }
        //         else{
        //             modal.isObject3D=true;
        //             modal.visible=true;
        //             }
        //         console.log(modal);
        //     }
        //     removeCyrcle2();
        //     };
        
        document.querySelector('#zoom__model').onclick = () =>{ 
            sceneGlb.scale.x+=0.01;
            sceneGlb.scale.y+=0.01;
            sceneGlb.scale.z+=0.01;
        }
        document.querySelector('#zoom__out__model').onclick = () =>{ 
            sceneGlb.scale.x-=0.01;
            sceneGlb.scale.y-=0.01;
            sceneGlb.scale.z-=0.01;
        }
        document.querySelector('#turn__up').onclick = () =>{ 
            sceneGlb.rotation.y-=0.05;
        }
        document.querySelector('#turn__down').onclick = () =>{ 
            sceneGlb.rotation.y+=0.05;        }
        document.querySelector('#turn__left').onclick = () =>{ 
            sceneGlb.rotation.x-=0.01;
        }
        document.querySelector('#turn__right').onclick = () =>{ 
            sceneGlb.rotation.x+=0.01;
        }
        //скрытие колеса
                console.log(sceneGlb);
            let circle = new VisCircle(sceneGlb.children);
            let remCircle = circle.vicCar(1);
            
            //console.log(remCircle)
            document.querySelector('#tire').onclick = () => {
                    if(remCircle.isObject3D==true){
                        remCircle.isObject3D=false;
                        remCircle.visible=false;
                    }
                    else{
                        remCircle.isObject3D=true;
                        remCircle.visible=true;
                        }
                    console.log(remCircle);
                };
                /*
            Plane_1-5
            Plane_1 — кузов
            Plane_2 — обвес
            Plane_3 — задний фара
            Plane_4 — перендяя фара
            Plane_5 — стёкла
             */
            const red = new THREE.Color(0xff0000);
            const white = new THREE.Color(0x595957);
            const green = new THREE.Color(0x4dff00);
            const black = new THREE.Color(0x000000);
            const orange = new THREE.Color(0xfcb103);
            const blue = new THREE.Color(0x43578f);

            let array = [red,white,green,black,orange,blue];
            //0 Для начала цикла
            let grassColorIndex=0;
            //Элементы модели
            //--Части кузова
                let body = new ObjectPlane(sceneGlb.children[0].children)//цвет кузова
                // let bodyKit = new ObjectPlane(sceneGlb.)//цвет обвеса
                // let rearLight = new ObjectPlane(sceneGlb.)//цвет задней фары
                // let headlight = new ObjectPlane(sceneGlb)//цвет передней фары
                // let glass = new ObjectPlane(sceneGlb.)//цвет Стёкл
                //Обращение к классам кузова
                let bodyColor = body.bodyCar(0);//кузов (1)
                // let kitColor = bodyKit.bodyCar();//обвес (2)
                // let rearColor = rearLight.bodyCar();//задняя фара (3)
                // let headColor = headlight.bodyCar();//передняя фара (4)
                // let glassColor = glass.bodyCar(); //стёкла (5)
                console.log(bodyColor)
                //Материалы элементов кузова
                //1
                const materialBody = new THREE.MeshPhysicalMaterial({
                    color:0x595957,
                    clearcoat:1
                });
                bodyColor.material=materialBody;
                document.querySelector('#body').onclick = () =>{
                    materialBody.color = array[grassColorIndex];
                    if(grassColorIndex == array.length-1){
                        return grassColorIndex = 0;
                    }
                    else{
                        grassColorIndex++;
                    }
                    console.log(grassColorIndex);                
                    }
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

                //1

                //2            
            //     document.querySelector('#body__kit').onclick = () =>{
            //        materialKit.color = array[grassColorIndex];
            //         if(grassColorIndex == array.length-1){
            //             return grassColorIndex = 0;
            //         }
            //         else{
            //             grassColorIndex++;
            //         }
            //         //console.log(grassColorIndex);
            //      };
            //   //3     
            //   document.querySelector('#rear__headlight').onclick = () => {
            //      materialRear.color = array[grassColorIndex];
            //       if(grassColorIndex == array.length-1){
            //           return grassColorIndex = 0;
            //       }
            //       else{
            //           grassColorIndex++;
            //       }
            //    };
            //   //4
            //   document.querySelector('#headlight').onclick = () => {
            //      materialHead.color = array[grassColorIndex];
            //       if(grassColorIndex == array.length-1){
            //           return grassColorIndex = 0;
            //       }
            //       else{
            //           grassColorIndex++;
            //       }
            //    };
            // //5
            //   document.querySelector('#glass').onclick = () => {
            //      materialGlass.color = array[grassColorIndex];
            //       if(grassColorIndex == array.length-1){
            //           return grassColorIndex = 0;
            //       }
            //       else{
            //           grassColorIndex++;
            //       }
            //    };

        
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