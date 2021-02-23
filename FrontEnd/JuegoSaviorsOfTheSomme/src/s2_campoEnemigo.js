export default class s2_campoEnemigo extends Phaser.Scene {
    constructor() {
        super({key: "s2_campoEnemigo", active: true});
    }
    preload() {

    } 
    create() {
        let graphics = this.add.graphics();

        graphics.fillStyle(0xff3399, 1);

        graphics.fillRect(100, 200, 600, 300);
        graphics.fillRect(200, 100, 100, 100);

        this.add.text(220, 110, "2", { font: "96px Courier", fill: "#287233" });

    }
    update(time, delta) {
        
    }
}
