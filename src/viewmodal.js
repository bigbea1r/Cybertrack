// export class ViewModal_old{
//     constructor(scene){
//         this.scene = scene;
//         this.allBtn = document.querySelector('#selColor');
//         this.buttons = document.querySelectorAll('#selColor a');
//         this.elemColor = document.querySelectorAll('a');
//     }
//     settingCSS(distance){
//         this.allBtn.style.display = 'block';
//         this.allBtn.style.transition = '1s ease-in-out';
//         this.allBtn.style.left = distance;
//     }
//     //метод значений модели по дефолту
//     valDef(){
//         this.scene.scale.set(0.3,0.3,0.3);
//         this.scene.rotation.set(-0.04,0,0);
//         this.scene.position.set(0,-0.2,0);
//     }
//     //Класс для изменения Background
//     backgroundClr(colors) {
//         const elements = [
//             this.elemColor[0],
//             this.elemColor[1],
//             this.elemColor[2],
//             this.elemColor[3],
//             this.elemColor[4],
//             this.elemColor[5],
//         ];
    
//         elements.forEach((element, index) => {
//             element.addEventListener('mouseover', () => {
//                 element.style.backgroundColor = `#${colors[index].getHexString()}`;
//             });
    
//             element.addEventListener('mouseout', () => {
//                 element.style.backgroundColor = '';
//             });
//         });
//     }
// }

export default class ViewModal{
    constructor(scene){
        this.scene = scene;
        this.red = (0xff0000);
        this.green =(0x4dff00);
        this.grey = (0x595957);
        this.black = (0x000000);
        this.yellow = (0xfcb103);
        this.blue = (0x43578f);

        //Выбранна группа объектов
        this.objectName = '';
        //
        this.menu_is_open = 'block';
        this.menu_is_clouse = 'none'
    }
    openMenu(doc){
        if (doc.style.display === this.menu_is_clouse) {
            doc.style.display = this.menu_is_open;
        } else {
            doc.style.display = this.menu_is_clouse;
        }
    }
        //восстанавливает положение модели во вьювер/окне просмотра
    restore_view_scene(){
        this.scene.scale.set(0.3,0.3,0.3);
        this.scene.rotation.set(-0.04,0,0);
        this.scene.position.set(0,-0.2,0);
    }

}
