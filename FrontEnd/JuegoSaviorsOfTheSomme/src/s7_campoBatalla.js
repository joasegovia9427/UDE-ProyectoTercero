/////-----------------INICIO VARIABLES GLOBALES--------------------
var scene;

var ultimaTeclaPresionada;
var spotlight;
var spotlight_instance;

var origen_x = 0; var origen_y = 0;
var campoEnemigo_x; var campoEnemigo_y; var campoEnemigo_w; var campoEnemigo_h;
var lineaSeparacion_x; var lineaSeparacion_y; var lineaSeparacion_w; var lineaSeparacion_h;
var campoAliado_x; var campoAliado_y; var campoAliado_w; var campoAliado_h;

var baseEnemiga_x; var baseEnemiga_y; var baseEnemiga_w; var baseEnemiga_h;
var baseAliada_x; var baseAliada_y; var baseAliada_w; var baseAliada_h;

var tableroAvion;
var tableroBase ;

var cantidadAvionesAliadas      = 0;
var cantidadAvionesEnemigas     = 0; 
var cantidadArtillerosAliadas   = 0;
var cantidadArtillerosEnemigas  = 0; 

var arrayAvionesAliadas         = [];
var arrayAvionesEnemigas        = [];
var arrayArtillerosAliados      = [];
var arrayArtillerosEnemigos     = [];


var arrayTorretaX = [];
var arrayTorretaY = [];

var distanciaEntreDosObjetos = 0;
var rangoMaximoVision = 0;

var i,j,x,y,z,w,h,a,b,c, x2, y2;
var avion;

var rangoVisionAvion = 0;
var rangoVisionArtillero = 0;
var rangoVisionTorre = 0;

var elemento_w = 0;
var elemento_espacio = 0;    
var base_inicioRandom_x = 0;

var isCoordenadasCorrectas = false;

var mi_campo_x;
var mi_campo_y;
var mi_campo_w;
var mi_campo_h;

var mi_base_x;
var mi_base_y;
var mi_base_w;
var mi_base_h;

/////---------^^^^^^^^^^^^FIN VARIABLES GLOBALES^^^^^^^^^^^^----------

export default class s7_campoBatalla extends Phaser.Scene {
    constructor() {
        super({key: "s7_campoBatalla", active: true});
    }
    preload() {
        /* alert(juego_var_nav_width   +"  ---x---   "+juego_var_nav_height); */
        campoEnemigo_x      = (origen_x); 
        campoEnemigo_y      = (origen_y); 
        campoEnemigo_w      = (juego_var_nav_width);  
        campoEnemigo_h      = (juego_var_nav_height/2); 

        lineaSeparacion_x   = (origen_x); 
        lineaSeparacion_y   = (campoEnemigo_h - (juego_var_nav_height*0.10) ); 
        lineaSeparacion_w   = (juego_var_nav_width); 
        lineaSeparacion_h   = (juego_var_nav_height*0.20); 
 
        campoAliado_x       = (origen_x); 
        campoAliado_y       = (campoEnemigo_h); 
        campoAliado_w       = (juego_var_nav_width); 
        campoAliado_h       = (juego_var_nav_height*0.50);

        rangoVisionAvion        = juego_var_rangoVisionAvion;
        rangoVisionArtillero    = juego_var_rangoVisionArtillero;
        rangoVisionTorre        = juego_var_rangoVisionTorre;

        ////------------IMAGENES INICIO----------------------------------
        this.load.image("piso","./assets/images/texturas/campoDeBatallaPiso.png");
        
        this.load.image("separacion","./assets/images/texturas/separacion.png");
        
        this.load.image("avionNegro","./assets/images/objetos/avionNegro.png");
        this.load.image("avionRojo","./assets/images/objetos/avionRojo.png");

        this.load.image("deposito_combustible_negro","./assets/images/objetos/deposito_combustible_negro.png");
        this.load.image("torreControl_negro","./assets/images/objetos/torreControl_negro.png");
        this.load.image("deposito_bombas_negro","./assets/images/objetos/deposito_bombas_negro.png");
        this.load.image("pistaAviones_negro","./assets/images/objetos/pistaAviones_negro.png");

        this.load.image("torreControl_negro_activo","./assets/images/objetos/torreControl_negro_activo.png");

        this.load.image("deposito_combustible_rojo","./assets/images/objetos/deposito_combustible_rojo.png");
        this.load.image("torreControl_rojo","./assets/images/objetos/torreControl_rojo.png");
        this.load.image("deposito_bombas_rojo","./assets/images/objetos/deposito_bombas_rojo.png");
        this.load.image("pistaAviones_rojo","./assets/images/objetos/pistaAviones_rojo.png");

        this.load.image("torreControl_rojo_activo","./assets/images/objetos/torreControl_rojo_activo.png");
        
        this.load.image("artillero_negro","./assets/images/objetos/artillero_negro.png");
        this.load.image("artillero_rojo","./assets/images/objetos/artillero_rojo.png");

        this.load.image("artillero_negro_activo","./assets/images/objetos/artillero_negro_activo.png");
        this.load.image("artillero_rojo_activo","./assets/images/objetos/artillero_rojo_activo.png");

        
        //balas
        //bombas

        this.load.image('mask', './assets/images/mapaCapaOculta/mask1.png');
        this.load.image('maskb', './assets/images/mapaCapaOculta/mask1b.png');
        this.load.image('nada', './assets/images/mapaCapaOculta/nada.png');

        ////------------IMAGENES FIN----------------------------------
        


        ////------------SPRITESHEET INICIO----------------------------------
        
        ////------------SPRITESHEET FIN----------------------------------
        


        ////------------MUSICA y SONIDOS INICIO----------------------------------
        
        ////------------MUSICA y SONIDOS FIN----------------------------------
    } ////CIERRE PRELOAD

    

    create() {
        //alert(juego_var_nav_width + "  x  " + juego_var_nav_height);
        

        var graphics = this.add.graphics();
        graphics.fillStyle(0x000000, 1);
        graphics.fillRect(campoEnemigo_x, campoEnemigo_y, campoEnemigo_w, campoEnemigo_h);
 
        var graphics1 = this.add.graphics();
        graphics1.fillStyle(0x000000, 1);
        graphics1.fillRect(campoAliado_x, campoAliado_y, campoAliado_w, campoAliado_h);
  
        var graphics2 = this.add.graphics();
        graphics2.fillStyle(0x000000, 1);
        graphics2.fillRect(lineaSeparacion_x, lineaSeparacion_y, lineaSeparacion_w, lineaSeparacion_h);


        ////CREACION CAMPO ALIADO

        this.pisoAliado = this.physics.add.image(campoAliado_x, campoAliado_y, "piso").setDisplayOrigin(0, 0);

        this.pisoAliado.displayWidth = campoAliado_w;
        this.pisoAliado.displayHeight = campoAliado_h; 

  
 
        ////CREACION CAMPO ENEMIGO
        this.pisoEnemigo = this.physics.add.image(campoEnemigo_x, campoEnemigo_y, "piso").setDisplayOrigin(0, 0);
        
        this.pisoEnemigo.displayWidth = campoEnemigo_w;
        this.pisoEnemigo.displayHeight = campoEnemigo_h; 
  




        /////------------------CREACION DE MI BASE::--------------
            elemento_w = 50;//this.deposito_combustible.width;
            elemento_espacio = 20;    
        
            base_inicioRandom_x = Phaser.Math.Between(origen_x+20,700); 
            base_inicioRandom_x = base_inicioRandom_x;

            baseAliada_x = base_inicioRandom_x; 
            baseAliada_y = Math.round( juego_var_nav_height*0.80 ); 
            baseAliada_w = ((elemento_w*3)+(elemento_espacio*2));//campoAliado_w*0.50; 
            baseAliada_h = 100; 

            let graphics3 = this.add.graphics();
            graphics3.fillStyle(0x326ba8, 1);
            graphics3.fillRect(baseAliada_x, baseAliada_y, baseAliada_w ,baseAliada_h);
            
           
            ////CREACION DE deposito_combustible
            this.deposito_combustible = this.physics.add.image(baseAliada_x, baseAliada_y, 'deposito_combustible_negro').setDisplayOrigin(0, 0);
            this.deposito_combustible.setCollideWorldBounds(true);
            this.deposito_combustible.setBounce(0);
            /* var elemento_w = this.deposito_combustible.width;
            var elemento_espacio = 20; */
            this.deposito_combustible.vida = 100;


            ////CREACION DE ARMAS torreControl

            ////CREACION DE torreControl
            this.torreControl = this.physics.add.image( (baseAliada_x+elemento_w+elemento_espacio), baseAliada_y, 'torreControl_negro').setDisplayOrigin(0, 0);
            this.torreControl.setCollideWorldBounds(true);
            this.torreControl.setBounce(0);
            this.torreControl.vida = 100;
            this.torreControl.hayEnemigo = false;
            this.torreControl.rangoVision = rangoVisionTorre;

            ////CREACION DE deposito_bombas
            this.deposito_bombas = this.physics.add.image( (baseAliada_x+(elemento_w*2)+(elemento_espacio*2)), baseAliada_y, 'deposito_bombas_negro').setDisplayOrigin(0, 0);
            this.deposito_bombas.setCollideWorldBounds(true);
            this.deposito_bombas.setBounce(0);
            this.deposito_bombas.vida = 100;

            ////CREACION DE pistaAviones
            this.pistaAviones = this.physics.add.image( baseAliada_x, (baseAliada_y+elemento_w+elemento_espacio), 'pistaAviones_negro').setDisplayOrigin(0, 0);
            this.pistaAviones.setCollideWorldBounds(true);
            this.pistaAviones.setBounce(0);
 
            ////CREACION DE ARMAS Artilleros

            ////CREACION DE Artilleros
            this.artilleroA_1 = this.physics.add.image(300,450,"artillero_negro");//.setDisplayOrigin(0, 0);   //(juego_var_nav_width*0.90-88)
            this.artilleroA_1.setCollideWorldBounds(true);
            this.artilleroA_1.setBounce(0);
            this.artilleroA_1.vida = 100;
            this.artilleroA_1.rangoVision = rangoVisionArtillero;
            this.artilleroA_1.angle = 0;
            this.artilleroA_1.bando = "Aliado";
            this.artilleroA_1.num = 1;
            this.artilleroA_1.HayEnemigo = false;
            artilleroSetearUbicacion(this.artilleroA_1);
            arrayTorretaX.push(this.artilleroA_1.x);
            arrayTorretaY.push(this.artilleroA_1.y);
            console.log("artillero "+this.artilleroA_1.num + " :: " + this.artilleroA_1.x + "    X    "+ this.artilleroA_1.y);

            cantidadArtillerosAliadas = arrayArtillerosAliados.push(this.artilleroA_1);


            this.artilleroA_2 = this.physics.add.image(300,450,"artillero_negro");//.setDisplayOrigin(0, 0);
            this.artilleroA_2.setCollideWorldBounds(true);
            this.artilleroA_2.setBounce(0);
            this.artilleroA_2.vida = 100;
            this.artilleroA_2.rangoVision = rangoVisionArtillero;
            this.artilleroA_2.angle = 0;
            this.artilleroA_2.bando = "Aliado";
            this.artilleroA_2.num = 2;
            this.artilleroA_2.HayEnemigo = false;
            artilleroSetearUbicacion(this.artilleroA_2);
            arrayTorretaX.push(this.artilleroA_2.x);
            arrayTorretaY.push(this.artilleroA_2.y);
            console.log("artillero "+this.artilleroA_2.num + " :: " + this.artilleroA_2.x + "    X    "+ this.artilleroA_2.y);
            
            cantidadArtillerosAliadas = arrayArtillerosAliados.push(this.artilleroA_2);

            this.artilleroA_3 = this.physics.add.image(300,450,"artillero_negro");//.setDisplayOrigin(0, 0);
            this.artilleroA_3.setCollideWorldBounds(true);
            this.artilleroA_3.setBounce(0);
            this.artilleroA_3.vida = 100;
            this.artilleroA_3.rangoVision = rangoVisionArtillero;
            this.artilleroA_3.angle = 0;
            this.artilleroA_3.bando = "Aliado";
            this.artilleroA_3.num = 3;
            this.artilleroA_3.HayEnemigo = false;
            artilleroSetearUbicacion(this.artilleroA_3);
            arrayTorretaX.push(this.artilleroA_3.x);
            arrayTorretaY.push(this.artilleroA_3.y);
            console.log("artillero "+this.artilleroA_3.num + " :: " + this.artilleroA_3.x + "    X    "+ this.artilleroA_3.y);
            
            cantidadArtillerosAliadas = arrayArtillerosAliados.push(this.artilleroA_3);

            this.artilleroA_4 = this.physics.add.image(300,450,"artillero_negro");//.setDisplayOrigin(0, 0);
            this.artilleroA_4.setCollideWorldBounds(true);
            this.artilleroA_4.setBounce(0);
            this.artilleroA_4.vida = 100;
            this.artilleroA_4.rangoVision = rangoVisionArtillero;
            this.artilleroA_4.angle = 0;
            this.artilleroA_4.bando = "Aliado";
            this.artilleroA_4.num = 4;
            this.artilleroA_4.HayEnemigo = false;
            artilleroSetearUbicacion(this.artilleroA_4);
            arrayTorretaX.push(this.artilleroA_4.x);
            arrayTorretaY.push(this.artilleroA_4.y);
            console.log("artillero "+this.artilleroA_4.num + " :: " + this.artilleroA_4.x + "    X    "+ this.artilleroA_4.y);
            
            cantidadArtillerosAliadas = arrayArtillerosAliados.push(this.artilleroA_4);

            this.artilleroA_5 = this.physics.add.image(300,450,"artillero_negro");//.setDisplayOrigin(0, 0);
            this.artilleroA_5.setCollideWorldBounds(true);
            this.artilleroA_5.setBounce(0);
            this.artilleroA_5.vida = 100;
            this.artilleroA_5.rangoVision = rangoVisionArtillero;
            this.artilleroA_5.angle = 0;
            this.artilleroA_5.bando = "Aliado";
            this.artilleroA_5.num = 5;
            this.artilleroA_5.HayEnemigo = false;
            artilleroSetearUbicacion(this.artilleroA_5);
            arrayTorretaX.push(this.artilleroA_5.x);
            arrayTorretaY.push(this.artilleroA_5.y);
            console.log("artillero "+this.artilleroA_5.num + " :: " + this.artilleroA_5.x + "    X    "+ this.artilleroA_5.y);
            
            cantidadArtillerosAliadas = arrayArtillerosAliados.push(this.artilleroA_5);

            this.artilleroA_6 = this.physics.add.image(300,450,"artillero_negro");//.setDisplayOrigin(0, 0);
            this.artilleroA_6.setCollideWorldBounds(true);
            this.artilleroA_6.setBounce(0);
            this.artilleroA_6.vida = 100;
            this.artilleroA_6.rangoVision = rangoVisionArtillero;
            this.artilleroA_6.angle = 0;
            this.artilleroA_6.bando = "Aliado";
            this.artilleroA_6.num = 6;
            this.artilleroA_6.HayEnemigo = false;
            artilleroSetearUbicacion(this.artilleroA_6);
            arrayTorretaX.push(this.artilleroA_6.x);
            arrayTorretaY.push(this.artilleroA_6.y);
            console.log("artillero "+this.artilleroA_6.num + " :: " + this.artilleroA_6.x + "    X    "+ this.artilleroA_6.y);
            
            cantidadArtillerosAliadas = arrayArtillerosAliados.push(this.artilleroA_6);
            
            //baseAliada_x, baseAliada_y, baseAliada_w ,baseAliada_h);
            


        /////----------^^^^^^^^^^^^CREACION DE MI BASE^^^^^^^^^^^-------------



        /////------------------CREACION DE BASE ENEMIGA::--------------

                        //completar enemigo
                        //cantidadArtillerosEnemigas += 1;
                        //arrayArtillerosEnemigos.push(this.artilleroE_1);
        /////----------^^^^^^^^^^^^CREACION DE BASE ENEMIGA^^^^^^^^^^^-------------


        ////CREACION DE ARMAS Aviones ALIADAS

        ////CREACION DE AVIONES ALIADAS:: aviones aliadas A_x
        this.avionA_1 = this.physics.add.image(100,100,"avionNegro");//.setDisplayOrigin(0, 0);
        this.avionA_1.setCollideWorldBounds(true);
        this.avionA_1.setBounce(0);
        this.avionA_1.scaleX=0.2;
        this.avionA_1.scaleY=0.2;
        this.avionA_1.z = 0; 
        this.avionA_1.vida = 100;
        this.avionA_1.rangoVision = rangoVisionAvion;
        this.avionA_1.angle = 0;
        this.avionA_1.tieneBomba = true;
        this.avionA_1.cantBombas = 1;
        this.avionA_1.cantCombustible = 100;
        this.avionA_1.isAvionEnCampoEnemigo = false;
        this.avionA_1.bando = "Aliado";
        this.avionA_1.HayEnemigo = false;
        cantidadAvionesAliadas = arrayAvionesAliadas.push(this.avionA_1);
        
        // arma, activo, velocidad, aceleracion

        ////CREACION DE ARMAS Aviones ENEMIGAS

        ////CREACION DE AVIONES ENEMIGAS:: aviones enemigos E_x
        this.avionE_1 = this.physics.add.image( (juego_var_nav_width*0.90-88),100,"avionRojo");//.setDisplayOrigin(0, 0);
        this.avionE_1.setCollideWorldBounds(true);
        this.avionE_1.setBounce(0);
        this.avionE_1.scaleX=0.2;
        this.avionE_1.scaleY=0.2;
        this.avionE_1.z = 0; 
        this.avionE_1.vida = 100;
        this.avionE_1.rangoVision = rangoVisionAvion;
        this.avionE_1.angle = 90;
        this.avionE_1.tieneBomba = true;
        this.avionE_1.cantBombas = 1;
        this.avionE_1.cantCombustible = 100;
        this.avionE_1.isAvionEnCampoEnemigo = false;
        this.avionE_1.bando = "Enemigo";
        this.avionE_1.HayEnemigo = false;
        this.avionE_1.setVelocity(0,50);

        cantidadAvionesAliadas = arrayAvionesEnemigas.push(this.avionE_1);
                
    
        ////CREACION DE MASCARA
        spotlight = this.make.sprite({
            x: 0,
            y: 0,
            key: 'mask',
            add: false,
        });
        spotlight_instance = new Phaser.Display.Masks.BitmapMask(this, spotlight);
        this.pisoEnemigo.mask   = spotlight_instance;
        this.avionE_1.mask      = spotlight_instance;
 
        //faltan elementos de base enemiga 4 elementos de base + 12artilleros + 4 avion
            




        ////CREACION SEPARACION DE CAMPOS
        this.separacionCampos = this.physics.add.image(lineaSeparacion_x, lineaSeparacion_y-50, "separacion").setDisplayOrigin(0, 0);
        
        this.separacionCampos.displayWidth = lineaSeparacion_w;
        this.separacionCampos.displayHeight = lineaSeparacion_h+100; 
        
     


        ///// CREACION DE TECLAS
        this.right  = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        this.left   =  this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.up     = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        this.down   =  this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
  
    
        //// CREACION DE COLISIONES Y SOLAPAMIENTOS

        this.physics.add.collider(this.avionA_1, this.avionE_1, null, null, this);
       
        this.physics.add.collider(this.artilleroA_1, this.deposito_bombas, artilleroOnCollide, null, this);
        this.physics.add.collider(this.artilleroA_1, this.deposito_combustible, artilleroOnCollide, null, this);
        this.physics.add.collider(this.artilleroA_1, this.torreControl, artilleroOnCollide, null, this);
        this.physics.add.collider(this.artilleroA_1, this.pistaAviones, artilleroOnCollide, null, this);
        this.physics.add.collider(this.artilleroA_1, this.artilleroA_2, artilleroOnCollide, null, this);
        this.physics.add.collider(this.artilleroA_1, this.artilleroA_3, artilleroOnCollide, null, this);
        this.physics.add.collider(this.artilleroA_1, this.artilleroA_4, artilleroOnCollide, null, this);
        this.physics.add.collider(this.artilleroA_1, this.artilleroA_5, artilleroOnCollide, null, this);
        this.physics.add.collider(this.artilleroA_1, this.artilleroA_6, artilleroOnCollide, null, this);

        
    


        ///// CREACION DE TABLERO AVION
        tableroAvion = this.add.text(20, 20, 'Move the mouse', { font: '16px Courier', fill: '#00ff00' });
        ///// CREACION DE TABLERO BASE
        tableroBase = this.add.text(20, 380, 'Move the mouse', { font: '16px Courier', fill: '#00000' });
    
        scene = this;
    }////CIERRE CREATE






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



        //// ACTUALIZAR TEXTO DE TABLERO AVION:
        tableroAvion.setText([
            'DATOS AVION:',
  /*           'x: ' + this.avionA_1.body.speed,
            'y: ' + this.avionA_1.y, */
            'Altura: ' + this.avionA_1.z,
            'Bomba: ' + true,
            'Vida: ' + this.avionA_1.vida,
        ]);
          //// ACTUALIZAR TEXTO DE TABLERO BASE:
          tableroBase.setText([
            'DATOS BASE:',
            'Vida de Torre: ' + this.torreControl.vida + '%',
            'Vida de Dep. Combustible: ' + this.deposito_combustible.vida + '%',
            'Vida de Dep. Bombas: ' + this.deposito_bombas.vida + '%',
            'Cant. Artilleros: ' + cantidadArtillerosAliadas,
            'Cant. Aviones: ' + cantidadAvionesAliadas,
        ]);



        //////DETECTAR SI AVIONES ENEMIGAS PASAN SOBRE ALGUN ARTILLERO
        hayEnemigoEnRangoArtillero();

        //////DETECTAR SI AVIONES ENEMIGAS PASAN SOBRE LA TORRE
        hayEnemigoEnRangoTorreDeControl();






    }////CIERRE UPDATE
    
    
}////CIERRE CLASS

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

function artilleroSetearUbicacion(artillero){
    ////Si se separa en 2 js (aliado.js, enemigo.js), se borra el codigo correspondiente del if

    
    if(artillero.bando == "Aliado"){
        mi_campo_x = campoAliado_x;
        mi_campo_y = campoAliado_y;
        mi_campo_w = campoAliado_w;
        mi_campo_h = campoAliado_h;
    
        mi_base_x = baseAliada_x;
        mi_base_y = baseAliada_y;
        mi_base_w = baseAliada_w;
        mi_base_h = baseAliada_h;
    }else{
        mi_campo_x = campoEnemigo_x;
        mi_campo_y = campoEnemigo_y;
        mi_campo_w = campoEnemigo_w;
        mi_campo_h = campoEnemigo_h;
    
        mi_base_x = baseEnemiga_x;
        mi_base_y = baseEnemiga_y;
        mi_base_w = baseEnemiga_w;
        mi_base_h = baseEnemiga_h;
    }
/*     console.log("campoAliado_x: "+campoAliado_x + " hasta campoAliado_w: " + campoAliado_w);
    console.log("campoAliado_y: "+campoAliado_y + " hasta (mi_campo_y+campoAliado_h):" + (mi_campo_y+campoAliado_h));
 */
    x = Phaser.Math.Between(campoAliado_x+50, campoAliado_w-50);
    y = Phaser.Math.Between(campoAliado_y+100, (mi_campo_y+campoAliado_h-30) );
        

    isCoordenadasCorrectas = true;
    /* 
    do { 
        x = Phaser.Math.Between(campoAliado_x+50, campoAliado_w-50);
        y = Phaser.Math.Between(campoAliado_y+100, (mi_campo_y+campoAliado_h-30) );
        //// hasta aca tengo las torretas dentro de los margenes adecuados de x,y para mi base

        ////VALIDACION CON BASE
        console.log("----------");
        console.log("x:"+x);
        console.log("mi_base_x-10:"+ (mi_base_x-10) );
        console.log("mi_base_w+10:"+ (mi_base_w+10) );
        console.log("----------");


        if( !( (x > (mi_base_x-10) ) && (x < (mi_base_w+10) ) ) ){//if( (x < mi_base_x-10) || (x > mi_base_w+10) ){
            //correcto en x respecto a base
            console.log("******** 1 correcto en x respecto a base");

            console.log("y:"+y);
            console.log("mi_base_y-10:"+ (mi_base_y-10));
            console.log("mi_base_h+10:"+ (mi_base_h+10) );
            //console.log("----------");

            if( !( (y > (mi_base_y-10) ) && (y < (mi_base_h+10) ) ) ){//if( (y < mi_base_y-10) || (y > mi_base_h+10) ){
                //correcto en y respecto a base
                //console.log("******** 2 correcto en y respecto a base");

                //console.log("******** arrayArtillerosAliados.length::"+ arrayArtillerosAliados.length);

                for (i = 0; i < arrayArtillerosAliados.length; i++){
                    //console.log("******** entro al for con i:"+i);
                    
                    
                    //if(arrayArtillerosAliados[i].num != artillero.num){ 
                        //console.log("******** 3 entro al if donde los num son distintos");

                        x2 = arrayArtillerosAliados[i].x;
                        y2 = arrayArtillerosAliados[i].y;

                        //console.log("x2:"+x2);
                        //console.log("y2:"+y2);

    
                        //console.log("----------");
                        //console.log("x:"+x);

                        if( !( (x > (x2-10) ) && (x < (elemento_w+10) ) ) ){//if( (x < x2-10) || (x > elemento_w+10) ){
                            //correcto en x respecto a artillero
                            //console.log("******** 4 correcto en x respecto a artillero");

                            //console.log("y:"+y);

                            if( !( (y > (y2-10) ) && (y < (elemento_w+10) ) ) ){//if( (y < y2-10) || (y > elemento_w+10) ){
                               //correcto en y respecto a artillero 
                               //console.log("******** 5 correcto en y respecto a artillero");

                               ///isCoordenadasCorrectas = true;
                               //console.log("******** 6 isCoordenadasCorrectas::"+isCoordenadasCorrectas);

                            }else{isCoordenadasCorrectas = false;}
      
                        }else{isCoordenadasCorrectas = false;}
                    //}
                }
  
            }else{isCoordenadasCorrectas = false;}

        }else{isCoordenadasCorrectas = false;}
        
    } while (isCoordenadasCorrectas == false);
 */
   artillero.x = x;
   artillero.y = y;

//  console.log("artillero "+artillero.num + " :: " + artillero.x + "    X    "+ artillero.y); 
   
   
   
}

function artilleroOnCollide(artillero, objeto2){
/*     console.log("collide artillero numero: " + artillero.num +  "    contra: "+objeto2.num);
    artillero.setTexture("artillero_negro_activo");  
    objeto2.setTexture("artillero_negro_activo");  
    artilleroSetearUbicacion(artillero);
     */
                            
}
    
function moverArtillero(artillero){
    artillero.x=Phaser.Math.Between(campoAliado_x, campoAliado_w);
} // artillero setear oncollide function with Base



function hayEnemigoEnRangoArtillero(){  
    //Para cada artillero del array
    for (i = 0; i < arrayArtillerosAliados.length; i++){
        if(arrayArtillerosAliados[i].vida > 0){
            arrayArtillerosAliados[i].HayEnemigo = false;
            arrayArtillerosAliados[i].setTexture("artillero_negro");

            //para cada avion enemiga
            for (j = 0; j < arrayAvionesEnemigas.length; j++){
                if(arrayAvionesEnemigas[j].vida > 0){
                    if (arrayAvionesEnemigas[j].z < 200){

                        //si distancia entre artillero y avion < 100
                        distanciaEntreDosObjetos = distanceRound(arrayArtillerosAliados[i], arrayAvionesEnemigas[j]);
                        
                        rangoMaximoVision = arrayArtillerosAliados[i].rangoVision;
                        if (distanciaEntreDosObjetos <= rangoMaximoVision) {
                            //cambio att de artillero
                            arrayArtillerosAliados[i].hayEnemigo = true;                    
                            arrayArtillerosAliados[i].setTexture("artillero_negro_activo");  
                            ////DISPARA UN EVENTO --> disparo bala fisica, imagen y sonido 
                            evento_artillero_disparo(); 
                        }
                    } 
                }
            }
        }

    }

}

function hayEnemigoEnRangoTorreDeControl(){
    scene.torreControl.HayEnemigo = false;
    scene.torreControl.setTexture("torreControl_negro");
    
    if(scene.torreControl.vida > 0){
        //para cada avion enemiga
        for (j = 0; j < arrayAvionesEnemigas.length; j++){
            if(arrayAvionesEnemigas[j].vida > 0){
                //si distancia entre torre y avion < 100
                distanciaEntreDosObjetos = distanceRound(scene.torreControl, arrayAvionesEnemigas[j]);
                
                rangoMaximoVision = scene.torreControl.rangoVision;
                if (distanciaEntreDosObjetos <= rangoMaximoVision) {
                    //cambio att de torre
                    scene.torreControl.hayEnemigo = true;                    
                    scene.torreControl.setTexture("torreControl_negro_activo");  
                    ////DISPARA UN EVENTO --> disparo bala fisica, imagen y sonido 
                    evento_torreControl_disparo(); 
                }

            }
        }
    }

 

}

function distanceRound(priObj, secObj)
{
    var dx = secObj.x - priObj.x;
    var dy = secObj.y - priObj.y;

    return Math.sqrt(dx * dx + dy * dy);
}


function actualizarVidaElemento(in_objeto, cantADescontar){
    in_objeto.vida -= cantADescontar;


}

function removerAvionesDelArrayActual(){
/*     var arrayAvionesAliadas         = [];
    var arrayAvionesEnemigas        = []; */


}

function removerArtillerosDelArrayActual(){
/*     var arrayArtillerosAliados      = [];
    var arrayArtillerosEnemigos     = []; */


}


function evento_artillero_disparo(){


}

function evento_torreControl_disparo(){


}