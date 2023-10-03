export default class ViewModal{
    constructor(scene){
        this.scene = scene;
        this.red = (0xff0000);
        this.green =(0x4dff00);
        this.grey = (0x595957);
        this.black = (0x000000);
        this.yellow = (0xfcb103);
        this.blue = (0x43578f);
        // this.colorRed = colorRed;
        // this.colorGreen = colorGreen;
        // this.colorBlue = colorBlue;
        // this.colorYellow = colorYellow;
        // this.colorBlack = colorBlack;
        // this.colorGrey = colorGrey;
        this.idColor = ["colorRed", "colorGreen", "colorBlue",
        "colorYellow", "colorBlack", "colorGrey"];
        this.a = "Красный";
        this.b = "Зеленый";
        this.c = "Синий";
        this.d = "Оранжевый";
        this.e = "Чёрный";
        this.f = "Серый";
        this.nameColor = [ this.a, this.b, this.c, this.d, this.e, this.f];
        //Выбранна группа объектов
        this.objectName = '';
        //
        this.menu_is_open = 'block';
        this.menu_is_clouse = 'none';
        this.menuCreated = false;
    }
    openMenu(doc){
        if (doc.style.display === this.menu_is_open) {
            doc.style.display = this.menu_is_clouse;
        } else {
            doc.style.display = this.menu_is_open;
        }
    }
        //восстанавливает положение модели во вьювер/окне просмотра
    restore_view_scene(){
        this.scene.scale.set(0.3,0.3,0.3);
        this.scene.rotation.set(-0.04,0,0);
        this.scene.position.set(0,-0.2,0);
    }
     getMenu() {
    if (!this.menuCreated) {
      let menu = document.createElement("ul");
      menu.id = "menu";
      var selColor = document.getElementById("selColor");
      selColor.appendChild(menu);

      let colorRed = this.addMenu("Красный");
      menu.appendChild(colorRed);

      let colorGreen = this.addMenu("Зеленый");
      menu.appendChild(colorGreen);

      let colorBlue = this.addMenu("Синий");
      menu.appendChild(colorBlue);

      let colorBlack = this.addMenu("Черный");
      menu.appendChild(colorBlack);

      let colorYellow = this.addMenu("Желтый");
      menu.appendChild(colorYellow);

      let colorGrey = this.addMenu("Серый");
      menu.appendChild(colorGrey);

      this.menuCreated = true;
    }
  }
  addMenu(color) {
    let option = document.createElement("a");
    option.textContent = color;
    return option;
  }
}