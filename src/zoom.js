export default class ZoomModal{
    constructor(zoom){
        this.zoom=zoom;
    }
     zoomObj(){
       return this.zoom += 0.03
    }
}