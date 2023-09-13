
export default class ObjectPlane {
    constructor(scene) {
        this.scene = scene;
        this.colorIndex = 0;
        this.children = [];
    };
    // addChild(child) {
    //     this.children.push(child);
    // };
    // findChildById(id) {
    //     return this.children.find(id);
    // }
    bodyCar(val) {
        return this.scene[val];
    };
    enumeColor(array) {  
        if (this.colorIndex == array.length - 1) {
            this.colorIndex = 0;
        }
         else {
            this.colorIndex++;
        }
        //console.log(this.colorIndex);
        return array[this.colorIndex];
    }
}