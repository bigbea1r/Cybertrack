import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader'
//import animejs from 'animejs/lib/anime.es.js'
import * as dat from 'dat.gui'

// HDR map
//import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader';
//import {VolumetricMatrial} from './threex.volumetricspotlightmaterial'

// Debug
const gui = new dat.GUI()
//"use strict";
// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

//var ambientLight = new THREE.AmbientLight(0x0c0c0c);
//scene.add(ambientLight);

//var spotLight = new THREE.SpotLight( 0xffffff );

//scene.add( spotLight );
const sceneData=Object.create({
    model:'/models/cyber.glb',
   // hdr:'/hdr/softly_gray.hdr', // HDR map
})

// Objects
/* const geometry = new THREE.TorusGeometry( .7, .2, 16, 100 );
const material = new THREE.MeshBasicMaterial()
material.color = new THREE.Color(0xff0000)
const sphere = new THREE.Mesh(geometry,material)
scene.add(sphere) */

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
    //   DEBUG=true,
    //   easing='linear',
    //   duration=2000,
    //  screenConst=parseInt(window.getComputedStyle(d.body).height)/ 45 //percentToScreens;//100/7 ( 7 = screens.length);
      // console.log(screenConst);

dracoLoader.setDecoderPath('/js/libs/draco-new/'); // use a full url path
loader.setDRACOLoader(dracoLoader);


loader.load(
    sceneData.model,// Manda
    gltf=>{
        const sceneGlb=gltf.scene
              //animationScripts = [{ start:0, end:0, func:0 }];
        sceneGlb.scale.set(.3,.3,.3)

        // Add volumetric light
        // const cylForLight=new THREE.CylinderGeometry( .01, 2.7, 10, 64, 80, true);
        // // console.log(cylForLight.parameters);
        // cylForLight.scale(10,10,10)
        // cylForLight.translate( 0, 32, 15.5 );
        //cylForLight.rotateX( -Math.PI / 2 );
        // matForLight	= VolumetricMatrial()
        // const meshForLight	= new THREE.Mesh( cylForLight, matForLight);
        // meshForLight.position.set(1,2.1,.2)
        // //meshForLight.lookAt(sceneGlb.position.x+.1,sceneGlb.position.y+.7,sceneGlb.position.z)
        // //meshForLight.lookAt(sceneGlb.position.x-.25,sceneGlb.position.y,sceneGlb.position.z)
        // matForLight.uniforms.lightColor.value.set(0xffffff)
        // matForLight.uniforms.spotPosition.value	= meshForLight.position
        // matForLight.uniforms.anglePower.value=10.
        // matForLight.uniforms.attenuation.value=2.7
        // matForLight.uniforms.yy.value=.2
        // //matForLight.uniforms.rotationY.value=mesh.rotation.y
        // matForLight.uniforms.need.value=1.1
        // //matForLight.uniforms.attenuation.value=3.
        // sceneGlb.add( meshForLight );
        // \ Add volumetric light
        scene.add(sceneGlb)
        
        sceneGlb.rotation.set(-0.04,0,0)
        sceneGlb.position.set(0,-0.2,0)
        //animejs({targets:sceneGlb.position,z:[-4,0],duration,delay:2e3,easing})

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
            // sceneGlb.rotation.x-=0.01;
            sceneGlb.rotation.y+=0.05;
            // sceneGlb.rotation.z-=0.01;
        }
        document.querySelector('#turn__left').onclick = () =>{ 
            sceneGlb.rotation.x-=0.01;
            // sceneGlb.rotation.y+=0.01;
//             sceneGlb.rotation.z+=0.01;
        }
        document.querySelector('#turn__right').onclick = () =>{ 
            sceneGlb.rotation.x+=0.01;
            // sceneGlb.rotation.y-=0.01;
//             sceneGlb.rotation.z-=0.01;
        }
        // sceneGlb.children[0].children[0].receiveShadow=true
        // sceneGlb.children[0].children[0].castShadow=true
        

                // обрезаем анимированные линии
                //
                //renderer.localClippingEnabled = true;
                // \
                console.log(sceneGlb);

            const cyrcle2 = sceneGlb.getObjectByName('Circle002');
            document.querySelector('#wheels__disk').onclick = () => {
                function removeCyrcle2() {
                    if(cyrcle2.isObject3D==true){
                        cyrcle2.isObject3D=false;
                        cyrcle2.visible=false;
                    }
                    console.log(cyrcle2);
                }
                removeCyrcle2();
                };
            document.querySelector('#tire').onclick = () => {
                function reMove() {
                    if(cyrcle2.isObject3D==false){
                        cyrcle2.isObject3D=true;
                        cyrcle2.visible=true;
                    }
                    console.log(cyrcle2);
                }
                reMove();
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
            const body_car = sceneGlb.getObjectByName('Plane_1');//цвет кузова

            const material = new THREE.MeshPhysicalMaterial({
                color:0x595957,
                //wireframe: true, 
                clearcoat:1
                //envMap: hdrEquirect,
                //envMapIntensity:1,
                // wireframe:true,
            });
            body_car.material=material;
            let grassColorIndex = 0;

            document.querySelector('#body').onclick = () => {
                material.color = array[grassColorIndex];
                if(grassColorIndex == array.length-1){
                    return grassColorIndex = 0;
                }
                else{
                    grassColorIndex++;
                }
             };

             const body__kit = sceneGlb.getObjectByName('Plane_2');//цвет обвеса

             const materialKit = new THREE.MeshPhysicalMaterial({
                 color:0x000000,
                 roughness: .5,
                 metalness: .6,
             });
             body__kit.material=materialKit ;
 
             document.querySelector('#body__kit').onclick = () => {
                materialKit.color = array[grassColorIndex];
                 if(grassColorIndex == array.length-1){
                     return grassColorIndex = 0;
                 }
                 else{
                     grassColorIndex++;
                 }
              };

              const rearLight = sceneGlb.getObjectByName('Plane_3');//цвет задней фары

              const materialRear = new THREE.MeshPhysicalMaterial({
                  color:0xff0400,
                  emissive: 0xff0400,
                  strength: 0.4,
              });
              rearLight.material=materialRear ;
  
              document.querySelector('#rear__headlight').onclick = () => {
                 materialRear.color = array[grassColorIndex];
                  if(grassColorIndex == array.length-1){
                      return grassColorIndex = 0;
                  }
                  else{
                      grassColorIndex++;
                  }
               };

              const headlight = sceneGlb.getObjectByName('Plane_4');//цвет передней фары

              const materialHead = new THREE.MeshPhysicalMaterial({
                  color:0x73adff,
                  emissive: 0x73adff,
              });
              headlight.material=materialHead ;
  
              document.querySelector('#headlight').onclick = () => {
                 materialHead.color = array[grassColorIndex];
                  if(grassColorIndex == array.length-1){
                      return grassColorIndex = 0;
                  }
                  else{
                      grassColorIndex++;
                  }
               };

              const glass = sceneGlb.getObjectByName('Plane_5');//цвет Стёкл

              const materialGlass = new THREE.MeshPhysicalMaterial({
                roughness: .05,//без этого прозрачности не будет
                transmission: 0.5, //прозрачность
                color:0x43578f,

              });
              glass.material=materialGlass ;
  
              document.querySelector('#glass').onclick = () => {
                 materialGlass.color = array[grassColorIndex];
                  if(grassColorIndex == array.length-1){
                      return grassColorIndex = 0;
                  }
                  else{
                      grassColorIndex++;
                  }
               };
        
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

/////////////   LESS 2
/* pointLight.shadow.mapSize.width = 512;
pointLight.shadow.mapSize.height = 512;
pointLight.shadow.camera.near = .1;
pointLight.castShadow = true; */
/////////////   \\\ LESS 2

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