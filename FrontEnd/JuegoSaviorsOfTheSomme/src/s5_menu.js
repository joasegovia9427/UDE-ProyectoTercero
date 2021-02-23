export default class s5_menu extends Phaser.Scene {
    constructor() {
        super({key: "s5_menu", active: false});
    }
    preload() {

    } 
    create() {
        let graphics = this.add.graphics();

        graphics.fillStyle(0xff3399, 1);

        graphics.fillRect(100, 200, 600, 300);
        graphics.fillRect(200, 100, 100, 100);

        this.add.text(220, 110, "s5_menu", { font: "96px Courier", fill: "#9fd5d1" });

    }
    update(time, delta) {
        
    }
}
