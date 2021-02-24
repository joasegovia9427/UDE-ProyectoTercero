


export default class s5_menu extends Phaser.Scene {
    constructor() {
        super({key: "s5_menu", active: true});
    }
    preload() {
        this.load.image("backMenu","./assets/images/backMenu.png");
    }
   
    
    create() {
        var back = this.add.image(0, 0, 'backMenu');
        back.scaleX=1;
        back.scaleY=1;

        this.add.text(global_var_s5_x, global_var_s5_y, "s5_menu", { font: "16px Courier", fill: "#9fd5d1" });

        var rt = this.add.renderTexture(10, 10, 100, 100);

        var frame = new Frame(texture, "hola", sourceIndex, x, y, width, height)
        var rt = this.add.renderTexture(50, 50, 200, 200, "back", frame);
        

       








    }
    update(time, delta) {
       
    }
}
