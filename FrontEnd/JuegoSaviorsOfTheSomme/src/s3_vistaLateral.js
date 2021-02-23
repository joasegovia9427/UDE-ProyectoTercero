export default class s3_vistaLateral extends Phaser.Scene {
    constructor() {
        super({key: "s3_vistaLateral", active: true});
    }
    preload() {

    } 
    create() {
        let graphics = this.add.graphics();

        graphics.fillStyle(0xff9999, 1);

        graphics.fillRect(100, 200, 600, 300);
        graphics.fillRect(300, 100, 100, 100);

        this.add.text(320, 110, "3", { font: "96px Courier", fill: "#d1ebf7" });

    }
    update(time, delta) {
        
    }
}
