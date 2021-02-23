export default class s1_miCampo extends Phaser.Scene {
    constructor() {
        super({key: "s1_miCampo", active: true});
    }
    preload() {

    } 
    create() {
        let graphics = this.add.graphics();

        graphics.fillStyle(0xff3300, 1);

        graphics.fillRect(100, 200, 600, 300);
        graphics.fillRect(100, 100, 100, 100);

        this.add.text(120, 110, "1", { font: "96px Courier", fill: "#81d8d0" });

    }
    update(time, delta) {
        
    }
}
