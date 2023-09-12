export default class VisCircle{
    constructor(circle){
        this.circle=circle;
    };
    vicCar(val){
        this.circle[val]
        if(this.circle.visible==true){
            this.circle.visible=false;
        }
        else{
            this.circle.visible=true;
            }
        //console.log(this.circle);
    }
}