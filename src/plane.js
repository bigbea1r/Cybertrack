
export default class ObjectPlane{
    constructor(color){
        this.color = color;

    };
     bodyCar(val){
        return this.color[val]
    }
    // set setBodyCar(val){
    //     if(val.length < 3) {
    //         val=0
    //     }
    //     else{
    //         val++
    //     }
    //     this.color=val
    // }

} 