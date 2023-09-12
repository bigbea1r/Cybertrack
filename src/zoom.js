export default class ZoomModal{

    constructor(scene){
        this.scene=scene;
        this.const_default_value = 0.03
    }
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
}