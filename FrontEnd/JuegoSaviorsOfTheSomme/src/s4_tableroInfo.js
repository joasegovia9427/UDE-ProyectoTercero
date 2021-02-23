export default class s4_tableroInfo extends Phaser.Scene {
    constructor() {
        super({key: "s4_tableroInfo", active: false});
    }
    preload() {

    } 
    create() {
        let graphics = this.add.graphics();

        graphics.fillStyle(0xff3399, 1);

        graphics.fillRect(100, 200, 600, 300);
        graphics.fillRect(200, 100, 100, 100);

        this.add.text(220, 110, "s4_tableroInfo", { font: "96px Courier", fill: "#49678d" });

    }
    update(time, delta) {
        
    }
}
