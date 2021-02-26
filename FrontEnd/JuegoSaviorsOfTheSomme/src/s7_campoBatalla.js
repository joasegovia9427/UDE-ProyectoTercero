var ultimaTeclaPresionada;
var spotlight;
var spotlight_instance;

var origen_x = 20; var origen_y = 20;
var campoEnemigo_x; var campoEnemigo_y; var campoEnemigo_w; var campoEnemigo_h;
var lineaSeparacion_x; var lineaSeparacion_y; var lineaSeparacion_w; var lineaSeparacion_h;
var campoAliado_x; var campoAliado_y; var campoAliado_w; var campoAliado_h;

var baseEnemiga_x; var baseEnemiga_y; var baseEnemiga_w; var baseEnemiga_h;
var baseAliada_x; var baseAliada_y; var baseAliada_w; var baseAliada_h;

export default class s7_campoBatalla extends Phaser.Scene {
    constructor() {
        super({key: "s7_campoBatalla", active: true});
    }
    preload() {
        /* alert(juego_var_nav_width   +"  ---x---   "+juego_var_nav_height); */
        campoEnemigo_x = origen_x; 
        campoEnemigo_y = origen_y; 
        campoEnemigo_w = (juego_var_nav_width*0.90); //(juego_var_nav_width*0.90); 
        campoEnemigo_h = (juego_var_nav_height*0.38); //(juego_var_nav_height*0.38);

        lineaSeparacion_x = campoEnemigo_x; 
        lineaSeparacion_y = campoEnemigo_h+45; 
        lineaSeparacion_w = campoEnemigo_w; 
        lineaSeparacion_h = (juego_var_nav_height*0.10); //(juego_var_nav_height*0.10);

        campoAliado_x = campoEnemigo_x; 
        campoAliado_y = (campoEnemigo_h + lineaSeparacion_h); 
        campoAliado_w = campoEnemigo_w; 
        campoAliado_h = campoEnemigo_h+80;


        ////------------IMAGENES INICIO----------------------------------
        this.load.image("piso","./assets/images/texturas/campoDeBatallaPiso.png");
        
        this.load.image("separacion","./assets/images/texturas/separacion.png");
        
        this.load.image("avionNegro","./assets/images/objetos/avionNegro.png");
        this.load.image("avionRojo","./assets/images/objetos/avionRojo.png");

        this.load.image("deposito_combustible","./assets/images/objetos/deposito_combustible.png");
        this.load.image("torreControl","./assets/images/objetos/torreControl.png");
        this.load.image("deposito_bombas","./assets/images/objetos/deposito_bombas.png");
        this.load.image("pistaAviones","./assets/images/objetos/pistaAviones.png");


        this.load.image('mask', './assets/images/mapaCapaOculta/mask1.png');
        this.load.image('maskb', './assets/images/mapaCapaOculta/mask1b.png');
        this.load.image('nada', './assets/images/mapaCapaOculta/nada.png');

        ////------------IMAGENES FIN----------------------------------
        


        ////------------SPRITESHEET INICIO----------------------------------
        
        ////------------SPRITESHEET FIN----------------------------------
        


        ////------------MUSICA y SONIDOS INICIO----------------------------------
        
        ////------------MUSICA y SONIDOS FIN----------------------------------
    } 

    

    create() {
        //alert(juego_var_nav_width + "  x  " + juego_var_nav_height);
        

        var graphics = this.add.graphics();
        graphics.fillStyle(0x000000, 1);
        graphics.fillRect(campoEnemigo_x, campoEnemigo_y, campoEnemigo_w, campoEnemigo_h);
 
        var graphics2 = this.add.graphics();
        graphics2.fillStyle(0x535353, 1);
        graphics2.fillRect(lineaSeparacion_x, lineaSeparacion_y, lineaSeparacion_w, lineaSeparacion_h);

        var graphics1 = this.add.graphics();
        graphics2.fillStyle(0x000000, 1);
        graphics2.fillRect(campoAliado_x, campoAliado_y, campoAliado_w, campoAliado_h);



        ////CREACION CAMPO ALIADO

        this.pisoAliado = this.physics.add.image(campoAliado_x, campoAliado_y, "piso").setDisplayOrigin(0, 0);

        this.pisoAliado.displayWidth = campoAliado_w;
        this.pisoAliado.displayHeight = campoAliado_h; 


 
        ////CREACION CAMPO ENEMIGO
        this.pisoEnemigo = this.physics.add.image(campoEnemigo_x, campoEnemigo_y, "piso").setDisplayOrigin(0, 0);
        
        this.pisoEnemigo.displayWidth = campoEnemigo_w;
        this.pisoEnemigo.displayHeight = campoEnemigo_h; 





        /////------------------CREACION DE MI BASE::--------------
            var base_inicioRandom_x = Phaser.Math.Between(origen_x+20,350); 
            base_inicioRandom_x = base_inicioRandom_x;

            baseAliada_x = base_inicioRandom_x; 
            baseAliada_y = juego_var_nav_height*0.82; 
            baseAliada_w = campoAliado_w*0.50; 
            baseAliada_h = 100; 

            

/*             let graphics3 = this.add.graphics();
            graphics3.fillStyle(0x326ba8, 1);
            graphics3.fillRect(baseAliada_x, baseAliada_y, baseAliada_w ,baseAliada_h);
             */
           
            ////CREACION DE deposito_combustible
            var deposito_combustible = this.add.image(baseAliada_x, baseAliada_y, 'deposito_combustible').setDisplayOrigin(0, 0);
            var elemento_w = deposito_combustible.width;
            var elemento_espacio = 20;

            ////CREACION DE ARMAS torreControl

            ////CREACION DE torreControl
            var torreControl = this.add.image( (baseAliada_x+elemento_w+elemento_espacio), baseAliada_y, 'torreControl').setDisplayOrigin(0, 0);

            ////CREACION DE deposito_bombas
            var deposito_bombas = this.add.image( (baseAliada_x+(elemento_w*2)+(elemento_espacio*2)), baseAliada_y, 'deposito_bombas').setDisplayOrigin(0, 0);


            ////CREACION DE pistaAviones
            var pistaAviones = this.add.image( baseAliada_x, (baseAliada_y+elemento_w+elemento_espacio), 'pistaAviones').setDisplayOrigin(0, 0);
 
 
            ////CREACION DE ARMAS Artilleros

            ////CREACION DE Artilleros

            //baseAliada_x, baseAliada_y, baseAliada_w ,baseAliada_h);
            


        /////----------^^^^^^^^^^^^CREACION DE MI BASE^^^^^^^^^^^-------------



        /////------------------CREACION DE BASE ENEMIGA::--------------

                        //completar enemigo

        /////----------^^^^^^^^^^^^CREACION DE BASE ENEMIGA^^^^^^^^^^^-------------


        ////CREACION DE ARMAS Aviones ALIADAS

        ////CREACION DE AVIONES ALIADAS:: aviones aliadas A_x
        this.avionA_1 = this.physics.add.image(100,100,"avionNegro");//.setDisplayOrigin(0, 0);
        this.avionA_1.setCollideWorldBounds(true);
        this.avionA_1.setBounce(0);
        this.avionA_1.scaleX=0.2;
        this.avionA_1.scaleY=0.2;
        this.avionA_1.z = 0; 
        this.avionA_1.bando= "Aliado";
        //vida, arma, activo, cantidad de bombas, gasolina, velocidad, aceleracion

        ////CREACION DE ARMAS Aviones ENEMIGAS

        ////CREACION DE AVIONES ENEMIGAS:: aviones enemigos E_x
        this.avionE_1 = this.physics.add.image( (juego_var_nav_width*0.90-88),100,"avionRojo");//.setDisplayOrigin(0, 0);
        this.avionE_1.setCollideWorldBounds(true);
        this.avionE_1.setBounce(0);
        this.avionE_1.scaleX=0.2;
        this.avionE_1.scaleY=0.2;
        this.avionE_1.z = 0; 
        this.avionE_1.angle = 90;
        this.avionE_1.bando= "Enemigo";

        this.avionE_1.setVelocity(0,50);


        ////CREACION DE MASCARA
        spotlight = this.make.sprite({
            x: 0,
            y: 0,
            key: 'mask',
            add: false,
        });
        spotlight_instance = new Phaser.Display.Masks.BitmapMask(this, spotlight);
        this.pisoEnemigo.mask = spotlight_instance;
        this.avionE_1.mask = spotlight_instance;
        //faltan elementos de base enemiga 4 elementos de base + 12artilleros + 4 avion
            




        ////CREACION SEPARACION DE CAMPOS
        this.pisoEnemigo = this.physics.add.image(20, juego_var_nav_height*0.28, "separacion").setDisplayOrigin(0, 0);
        
        this.pisoEnemigo.displayWidth = juego_var_nav_width*0.90;
        this.pisoEnemigo.displayHeight = juego_var_nav_height*0.30; 
        



        ///// CREACION DE TECLAS
        this.right  = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        this.left   =  this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.up     = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        this.down   =  this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
  
    
        //// CREACION DE COLISIONES Y SOLAPAMIENTOS
    
        this.physics.add.collider(this.avionA_1, this.avionE_1, null, null, this);
    
    
    }






    update(time, delta) {
        
        ///// MOVIMIENTO DE AVION EN BASE A BOTONES
        ////LUEGO SACAR FISICAS PARA FUERA DEL IF DE BOTONES... ya que por mas que no muevas tu avion, tiene que recalcular en base al websockets los eventosasd
        
        
        if(this.right.isDown || this.left.isDown || this.up.isDown || this.down.isDown){
            var vX, vY;
            var diagonal=false;
            if(this.right.isDown) {
                ultimaTeclaPresionada = "right";
                this.avionA_1.x++;
                this.avionA_1.resetFlip();
                if (this.down.isDown){
                    // this.avionA_1.x++; 
                    this.avionA_1.y++;
                    this.avionA_1.angle=45;
                    vX = 10;vY = 10;
                }else{
                    if (this.up.isDown){
                        // this.avionA_1.x++; 
                        this.avionA_1.y--;
                        this.avionA_1.angle=-45;
                        vX = 10;vY = -10;
                    }else{this.avionA_1.angle=0;diagonal=true;vX = 10;vY = 0;}
                ;}                
            } else if(this.left.isDown) {
                ultimaTeclaPresionada = "left";
                this.avionA_1.x--;
                this.avionA_1.resetFlip();
                this.avionA_1.flipX=true;
                if (this.down.isDown){
                    // this.avionA_1.x--; 
                    this.avionA_1.y++;
                    this.avionA_1.angle=-45;
                    vX = -10;vY = 10;
                }else{
                    if (this.up.isDown){
                        // this.avionA_1.x--; 
                        this.avionA_1.y--;
                        this.avionA_1.angle=45;
                        vX = -10;vY = -10;
                    }else{this.avionA_1.angle=0;diagonal=true; vX = -10;vY = 0;}
                ;}           
            } else if(this.up.isDown) {
                ultimaTeclaPresionada = "up";
                this.avionA_1.y--;
                this.avionA_1.resetFlip();
                this.avionA_1.angle=-90;
                vX = 0;
                vY = -10;
            } else if(this.down.isDown) {
                ultimaTeclaPresionada = "down";
                this.avionA_1.y++;
                this.avionA_1.resetFlip();
                this.avionA_1.angle=90;
                vX = 0;
                vY = 10;
            }
            setVelocidadAvion(this.avionA_1, vX, vY);
            
        }

        //// Actualizacion de mascara en base a avionA_1 x y
        ////Nota: aunque el movimiento de la avion de saque para eventos de boton, esta actualizacion se tiene que hacer constantemente en el update debido a la velocidad del avion (incersia)
        spotlight.x = this.avionA_1.x;
        spotlight.y = this.avionA_1.y;




        /////---------FISICAS DE AVIONES y BALAS ENEMIGAS------
        setMaksAvion(this.avionE_1);



        


    }
    
    
}

function setVelocidadAvion(avion, velX, velY){
    if(avion.z == 100){//baja altura
        avion.setVelocity(velX,velY);
    }else{ //200 es altura
        avion.setVelocity(velX/2,velY/2);
    }
}


function isEnSuTerritorio(in_avion){
    if(in_avion.bando == "Aliado"){
        if(in_avion.y > juego_var_nav_height*0.48){
            return true;
        }
        if(in_avion.y < juego_var_nav_height*0.48){
            return false
        }
    }else{
        if(in_avion.y > juego_var_nav_height*0.48){
            return false;
        }
        if(in_avion.y < juego_var_nav_height*0.48){
            return true
        }
    }
}

function setMaksAvion(in_avion){
    if (isEnSuTerritorio(in_avion)) {
        in_avion.mask = spotlight_instance;
    } else {
        in_avion.mask = 0;
    }
}

