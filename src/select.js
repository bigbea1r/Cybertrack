export default class ModalSelection{

    constructor(scene){
        this.scene=scene;
        this.const_default_value = 0.03;
        this.colorIndex = 0;
        
    }
    //метод значений модели по дефолту
    valDefault(){
        this.scene.scale.set(0.3,0.3,0.3)
        this.scene.rotation.set(-0.04,0,0)
        this.scene.position.set(0,-0.2,0)
    }
    //методы для изменения позиционирования, поворотов и увелечения
    modalZoom(value = this.const_default_value){
        this.scene.scale.x+=value
        this.scene.scale.y+=value
        this.scene.scale.z+=value
        //console.log(value)
    };
    modalOutZoom(value = this.const_default_value){
        this.scene.scale.x-=value
        this.scene.scale.y-=value
        this.scene.scale.z-=value
    };
    modalUp(value = this.const_default_value){
        this.scene.rotation.x-=value
    }
    modalDown(value = this.const_default_value){
        this.scene.rotation.x+=value
    }
    modalRight(value = this.const_default_value){
        this.scene.rotation.y+=value
    }
    modalLeft(value = this.const_default_value){
        this.scene.rotation.y-=value
    }
    //Попробуй это для выбора кнопок цикл мб получится 
    // setColor(object, obgMaterial) {
    //     object.material.color=obgMaterial
    //     // if (this.colorIndex == array.length - 1) {
    //     //     this.colorIndex = 0;
    //     // }
    //     //  else {
    //     //     this.colorIndex++;
    //     // }
    //     // //console.log(this.colorIndex);
    //     // return array[this.colorIndex];
    // }
    //цикл для визуального удаление объекта
    vicCar(){
        this.scene
        if(this.scene.visible==true){
            this.scene.visible=false;
        }
        else{
            this.scene.visible=true;
            }
        //console.log(this.circle);
    }

    setColor(object, obgMaterial) {
            object.material.color=obgMaterial
    }

    searchObj(model, objectName){
        let obj = model.getObjectByName(objectName);
        return obj;
    }
}