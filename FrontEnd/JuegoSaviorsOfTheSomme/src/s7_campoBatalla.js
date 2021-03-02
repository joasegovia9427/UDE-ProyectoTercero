/////----------------version del archivo numero::  2021 03 02 a  ---- ultimo modificador:: Sebastian---

/////-----------------INICIO VARIABLES GLOBALES--------------------
var sceneJuego;

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

/* var arrayAvionesAliadas         = [];
var arrayAvionesEnemigas        = [];
var arrayArtillerosAliados      = [];
var arrayArtillerosEnemigos     = []; */


/* var arrayTorretaX = [];
var arrayTorretaY = []; */

// GRUPOS DE OBJETOS
var Gpo_ArtillerosAliados;
var Gpo_ElementosBaseAliada;
var Gpo_AvionesAliados;

var Gpo_AvionesEnemigos;
var Gpo_ElementosBaseEnemiga;
var Gpo_ArtillerosEnemigos;

/* var Gpo_Balas_Aliadas;
var Gpo_Balas_Enemigas
var Gpo_Bombas_Enemigas;
var Gpo_Bombas_Aliadas; */

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

var bullets;
var bomba_aux;
var bombaBulletA;
var tweenBombaA;
var bombaBulletE;
var tweenBombaE;

/* var bullets_artillero_Aliada;
var bullets_torre;
var bullets_avion_Aliado;
var bullets_avion_Enemigo; */

var timer; 
var timerBombaA;
var timerBombaE;

var anguloEntre_ArtilleroAvion;
var anguloEntre_TorreAvion;
var anguloEntre_AvionYElementoEnemigo;
/// torreta
var line;
var gfx;

// efectos y sonidos
var boom, boom2;
var explotar;
var snd_metralleta;
var snd_impacto_metralleta;
var snd_explosion
var snd_caidaBomba;

// utiles



// efectos

var avionActivaUltimaVX = 0;
var avionActivaUTlimaVY = 0;

var modificoDireccion = false;

var avionActivaAliadaX = 0;
var avionActivaAliadaY = 0;

var isAvionActivaAliadaViva = true;
var avionA_activa;

var tiempoDelUpdate = 0;

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
        this.load.image("bala", "./assets/images/objetos/bala.png");

        // EXPLOSION

        this.load.spritesheet('explosion', './assets/images/efectos/explosion2.png', { frameWidth: 64, frameHeight: 64, endFrame: 23 });
        //bombas

        this.load.image('mask', './assets/images/mapaCapaOculta/mask1.png');
        this.load.image('maskb', './assets/images/mapaCapaOculta/mask1b.png');
        this.load.image('nada', './assets/images/mapaCapaOculta/nada.png');

        ////------------IMAGENES FIN----------------------------------
        


        ////------------SPRITESHEET INICIO----------------------------------
        
        ////------------SPRITESHEET FIN----------------------------------
        


        ////------------MUSICA y SONIDOS INICIO----------------------------------
        
        this.load.audio('snd_disparo_metralleta', "./assets/sounds/metralleta.m4a");
        this.load.audio('snd_impacto_metralleta', "./assets/sounds/impactoMetralleta.m4a");
        this.load.audio('sonidoexplosion', './assets/sounds/explosion.m4a');
        this.load.audio('caidaYExplosionBomba', './assets/sounds/caidaYExplosionBomba.m4a');

        ///PONER IF PARA QUE CARGUE UNA U OTRA
/*         this.load.audio('musicaFondo1', './assets/sounds/musicaFondo1.m4a');
        this.load.audio('musicaFondo2', './assets/sounds/musicaFondo2.m4a');
        this.load.audio('musicaFondo3', './assets/sounds/musicaFondo3.m4a'); */
        ////------------MUSICA y SONIDOS FIN----------------------------------
    } ////CIERRE PRELOAD

    

    create() {


        // SONIDOS
        snd_explosion = this.sound.add('sonidoexplosion');
        snd_caidaBomba = this.sound.add('caidaYExplosionBomba');

        //ANIMACIÓN PARA LA EXPLOSIÓN
        explotar = {
            key: 'explode',
            frames: this.anims.generateFrameNumbers('explosion', { start: 0, end: 23, first: 23 }),
            frameRate: 20
        };
        this.anims.create(explotar);
        
        /// CREO GRUPOS DE OBJETOS
        Gpo_ArtillerosAliados= this.add.group();
        Gpo_ElementosBaseAliada= this.add.group();
        Gpo_AvionesAliados= this.add.group();
        Gpo_AvionesEnemigos= this.add.group();
        Gpo_ElementosBaseEnemiga= this.add.group();        
        Gpo_ArtillerosEnemigos= this.add.group();

        /// DISPONGO ZONAS

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

            /* let graphics3 = this.add.graphics();
            graphics3.fillStyle(0x326ba8, 1);
            graphics3.fillRect(baseAliada_x, baseAliada_y, baseAliada_w ,baseAliada_h);
             */

            ////AJUSTE POR MAL ORIGIN DE IMAGENES Y PARA OBTENER BIEN LAS COORDENADAS EN BASE A LA IMAGEN
            baseAliada_x = baseAliada_x + (elemento_w/2); 
            baseAliada_y = baseAliada_y + (elemento_w/2); 
/*             baseAliada_w = ((elemento_w*3)+(elemento_espacio*2));//campoAliado_w*0.50; 
            baseAliada_h = 100; */
           
            ////CREACION DE ARMAS

            /// agrego linea para usar en torreta
            line = new Phaser.Geom.Line();
            /* line.setFillStyle(color, alpha); */
            gfx = this.add.graphics().setDefaultStyles({ lineStyle: { width: 10, color: 0xffdd00, alpha: 0.0 } });
            // Agrego audio
            snd_metralleta = this.sound.add('snd_disparo_metralleta');
            snd_impacto_metralleta = this.sound.add('snd_impacto_metralleta');
            // DISPARO
            //this.physics.startSystem(Phaser.Physics.ARCADE);


            ////CREACION DE deposito_combustible
            this.deposito_combustible = this.physics.add.image(baseAliada_x, baseAliada_y, 'deposito_combustible_negro');//.setDisplayOrigin(0, 0);
            this.deposito_combustible.setCollideWorldBounds(true);
            this.deposito_combustible.setBounce(0);
            /* var elemento_w = this.deposito_combustible.width;
            var elemento_espacio = 20; */
            this.deposito_combustible.vida = 100;
            this.deposito_combustible.physicsBodyType = Phaser.Physics.ARCADE;;
            Gpo_ElementosBaseAliada.add(this.deposito_combustible);
       
            ////CREACION DE torreControl
            this.torreControlA = this.physics.add.image( (baseAliada_x+elemento_w+elemento_espacio), baseAliada_y, 'torreControl_negro');//.setDisplayOrigin(0, 0);
            this.torreControlA.setCollideWorldBounds(true);
            this.torreControlA.setBounce(0);
            this.torreControlA.vida = 100;
            this.torreControlA.hayEnemigo = false;
            this.torreControlA.rangoVision = rangoVisionTorre;
            this.torreControlA.lastFiredTorre = 0;
            this.torreControlA.bullet_torre_Aliada = this.physics.add.group({
                classType: Bullet,
                maxSize: 3,
                runChildUpdate: true
            });
            this.torreControlA.bullet_torre_Aliada.physicsBodyType = Phaser.Physics.ARCADE;
            this.torreControlA.setImmovable();
            this.torreControlA.physicsBodyType = Phaser.Physics.ARCADE;
            Gpo_ElementosBaseAliada.add(this.torreControlA);

            ////CREACION DE deposito_bombas
            this.deposito_bombas = this.physics.add.image( (baseAliada_x+(elemento_w*2)+(elemento_espacio*2)), baseAliada_y, 'deposito_bombas_negro');//.setDisplayOrigin(0, 0);
            this.deposito_bombas.setCollideWorldBounds(true);
            this.deposito_bombas.setBounce(0);
            this.deposito_bombas.vida = 100;
            this.deposito_bombas.setImmovable();
            this.deposito_bombas.physicsBodyType = Phaser.Physics.ARCADE;
            Gpo_ElementosBaseAliada.add(this.deposito_bombas);
 

            ////CREACION DE pistaAviones
            this.pistaAviones = this.physics.add.image( (baseAliada_x+elemento_w+elemento_espacio), (baseAliada_y+(elemento_w/2)+(elemento_espacio*2)) , 'pistaAviones_negro');     /////    baseAliada_x, (baseAliada_y+elemento_w+elemento_espacio), 'pistaAviones_negro').setDisplayOrigin(0, 0);
            this.pistaAviones.setCollideWorldBounds(true);
            this.pistaAviones.setBounce(0);
            this.pistaAviones.setImmovable();
            this.pistaAviones.physicsBodyType = Phaser.Physics.ARCADE;
            Gpo_ElementosBaseAliada.add(this.pistaAviones);


            ////CREACION DE Artilleros
            this.artilleroA_1 = this.physics.add.image(300,450,"artillero_negro");//.setDisplayOrigin(0, 0);   //(juego_var_nav_width*0.90-88)
            this.artilleroA_1.setCollideWorldBounds(true);
            this.artilleroA_1.setBounce(0);
            this.artilleroA_1.vida = 100;
            this.artilleroA_1.rangoVision = rangoVisionArtillero;
            this.artilleroA_1.angle = 0;
            this.artilleroA_1.lastFiredArtillero = 0;
            this.artilleroA_1.bando = "Aliado";
            this.artilleroA_1.num = 1;
            this.artilleroA_1.HayEnemigo = false;
            artilleroSetearUbicacion(this.artilleroA_1);
            /* arrayTorretaX.push(this.artilleroA_1.x);
            arrayTorretaY.push(this.artilleroA_1.y); */
            this.artilleroA_1.bullets_artillero_Aliada = this.physics.add.group({
                classType: Bullet,
                maxSize: 3,
                runChildUpdate: true
            });
            this.artilleroA_1.bullets_artillero_Aliada.physicsBodyType = Phaser.Physics.ARCADE;
            this.artilleroA_1.physicsBodyType = Phaser.Physics.ARCADE;
            //console.log("artillero "+this.artilleroA_1.num + " :: " + this.artilleroA_1.x + "    X    "+ this.artilleroA_1.y);
            //cantidadArtillerosAliadas = arrayArtillerosAliados.push(this.artilleroA_1);
            Gpo_ArtillerosAliados.add(this.artilleroA_1);

            this.artilleroA_2 = this.physics.add.image(300,450,"artillero_negro");//.setDisplayOrigin(0, 0);
            this.artilleroA_2.setCollideWorldBounds(true);
            this.artilleroA_2.setBounce(0);
            this.artilleroA_2.vida = 100;
            this.artilleroA_2.rangoVision = rangoVisionArtillero;
            this.artilleroA_2.angle = 0;
            this.artilleroA_2.lastFiredArtillero = 0;
            this.artilleroA_2.bando = "Aliado";
            this.artilleroA_2.num = 2;
            this.artilleroA_2.HayEnemigo = false;
            artilleroSetearUbicacion(this.artilleroA_2);
            /* arrayTorretaX.push(this.artilleroA_2.x);
            arrayTorretaY.push(this.artilleroA_2.y); */
            this.artilleroA_2.bullets_artillero_Aliada = this.physics.add.group({
                classType: Bullet,
                maxSize: 3,
                runChildUpdate: true
            });
            this.artilleroA_2.bullets_artillero_Aliada.physicsBodyType = Phaser.Physics.ARCADE;
            this.artilleroA_2.physicsBodyType = Phaser.Physics.ARCADE;
            //console.log("artillero "+this.artilleroA_2.num + " :: " + this.artilleroA_2.x + "    X    "+ this.artilleroA_2.y);
            //cantidadArtillerosAliadas = arrayArtillerosAliados.push(this.artilleroA_2);
            Gpo_ArtillerosAliados.add(this.artilleroA_2);

            this.artilleroA_3 = this.physics.add.image(300,450,"artillero_negro");//.setDisplayOrigin(0, 0);
            this.artilleroA_3.setCollideWorldBounds(true);
            this.artilleroA_3.setBounce(0);
            this.artilleroA_3.vida = 100;
            this.artilleroA_3.rangoVision = rangoVisionArtillero;
            this.artilleroA_3.angle = 0;
            this.artilleroA_3.lastFiredArtillero = 0;
            this.artilleroA_3.bando = "Aliado";
            this.artilleroA_3.num = 3;
            this.artilleroA_3.HayEnemigo = false;
            artilleroSetearUbicacion(this.artilleroA_3);
            /* arrayTorretaX.push(this.artilleroA_3.x);
            arrayTorretaY.push(this.artilleroA_3.y); */
            this.artilleroA_3.bullets_artillero_Aliada = this.physics.add.group({
                classType: Bullet,
                maxSize: 3,
                runChildUpdate: true
            });
            this.artilleroA_3.bullets_artillero_Aliada.physicsBodyType = Phaser.Physics.ARCADE;
            //console.log("artillero "+this.artilleroA_3.num + " :: " + this.artilleroA_3.x + "    X    "+ this.artilleroA_3.y);           
            //cantidadArtillerosAliadas = arrayArtillerosAliados.push(this.artilleroA_3);
            this.artilleroA_3.physicsBodyType = Phaser.Physics.ARCADE;
            Gpo_ArtillerosAliados.add(this.artilleroA_3);

            this.artilleroA_4 = this.physics.add.image(300,450,"artillero_negro");//.setDisplayOrigin(0, 0);
            this.artilleroA_4.setCollideWorldBounds(true);
            this.artilleroA_4.setBounce(0);
            this.artilleroA_4.vida = 100;
            this.artilleroA_4.rangoVision = rangoVisionArtillero;
            this.artilleroA_4.angle = 0;
            this.artilleroA_4.lastFiredArtillero = 0;
            this.artilleroA_4.bando = "Aliado";
            this.artilleroA_4.num = 4;
            this.artilleroA_4.HayEnemigo = false;
            artilleroSetearUbicacion(this.artilleroA_4);
            /* arrayTorretaX.push(this.artilleroA_4.x);
            arrayTorretaY.push(this.artilleroA_4.y); */
            this.artilleroA_4.bullets_artillero_Aliada = this.physics.add.group({
                classType: Bullet,
                maxSize: 3,
                runChildUpdate: true
            });
            this.artilleroA_4.bullets_artillero_Aliada.physicsBodyType = Phaser.Physics.ARCADE;
           // console.log("artillero "+this.artilleroA_4.num + " :: " + this.artilleroA_4.x + "    X    "+ this.artilleroA_4.y);         
            //cantidadArtillerosAliadas = arrayArtillerosAliados.push(this.artilleroA_4);
            this.artilleroA_4.physicsBodyType = Phaser.Physics.ARCADE;
            Gpo_ArtillerosAliados.add(this.artilleroA_4);

            this.artilleroA_5 = this.physics.add.image(300,450,"artillero_negro");//.setDisplayOrigin(0, 0);
            this.artilleroA_5.setCollideWorldBounds(true);
            this.artilleroA_5.setBounce(0);
            this.artilleroA_5.vida = 100;
            this.artilleroA_5.rangoVision = rangoVisionArtillero;
            this.artilleroA_5.angle = 0;
            this.artilleroA_5.lastFiredArtillero = 0;
            this.artilleroA_5.bando = "Aliado";
            this.artilleroA_5.num = 5;
            this.artilleroA_5.HayEnemigo = false;
            artilleroSetearUbicacion(this.artilleroA_5);
            /* arrayTorretaX.push(this.artilleroA_5.x);
            arrayTorretaY.push(this.artilleroA_5.y); */
            this.artilleroA_5.bullets_artillero_Aliada = this.physics.add.group({
                classType: Bullet,
                maxSize: 3,
                runChildUpdate: true
            });
            this.artilleroA_5.bullets_artillero_Aliada.physicsBodyType = Phaser.Physics.ARCADE;
            //console.log("artillero "+this.artilleroA_5.num + " :: " + this.artilleroA_5.x + "    X    "+ this.artilleroA_5.y);
            //cantidadArtillerosAliadas = arrayArtillerosAliados.push(this.artilleroA_5);
            this.artilleroA_5.physicsBodyType = Phaser.Physics.ARCADE;
            Gpo_ArtillerosAliados.add(this.artilleroA_5);

            this.artilleroA_6 = this.physics.add.image(300,450,"artillero_negro");//.setDisplayOrigin(0, 0);
            this.artilleroA_6.setCollideWorldBounds(true);
            this.artilleroA_6.setBounce(0);
            this.artilleroA_6.vida = 100;
            this.artilleroA_6.rangoVision = rangoVisionArtillero;
            this.artilleroA_6.angle = 0;
            this.artilleroA_6.lastFiredArtillero = 0;
            this.artilleroA_6.bando = "Aliado";
            this.artilleroA_6.num = 6;
            this.artilleroA_6.HayEnemigo = false;
            artilleroSetearUbicacion(this.artilleroA_6);
            /* arrayTorretaX.push(this.artilleroA_6.x);
            arrayTorretaY.push(this.artilleroA_6.y); */
            this.artilleroA_6.bullets_artillero_Aliada = this.physics.add.group({
                classType: Bullet,
                maxSize: 3,
                runChildUpdate: true
            });
            this.artilleroA_6.bullets_artillero_Aliada.physicsBodyType = Phaser.Physics.ARCADE;
            //console.log("artillero "+this.artilleroA_6.num + " :: " + this.artilleroA_6.x + "    X    "+ this.artilleroA_6.y);
            //cantidadArtillerosAliadas = arrayArtillerosAliados.push(this.artilleroA_6);
            this.artilleroA_6.physicsBodyType = Phaser.Physics.ARCADE;
            Gpo_ArtillerosAliados.add(this.artilleroA_6);

        /////----------^^^^^^^^^^^^CREACION DE MI BASE^^^^^^^^^^^-------------



        /////------------------CREACION DE BASE ENEMIGA::--------------

                        //completar enemigo
                        //cantidadArtillerosEnemigas += 1;
                        //arrayArtillerosEnemigos.push(this.artilleroE_1);
        /////----------^^^^^^^^^^^^CREACION DE BASE ENEMIGA^^^^^^^^^^^-------------


        ////CREACION DE AVIONES ALIADAS:: aviones aliadas A_x
        
        this.avionA_1 = this.physics.add.image(100,100,"avionNegro");//.setDisplayOrigin(0, 0);
        this.avionA_1.setCollideWorldBounds(true);
        this.avionA_1.setBounce(0);
        this.avionA_1.scaleX=0.2;
        this.avionA_1.scaleY=0.2;
        this.avionA_1.z = 100; 
        this.avionA_1.vida = 100;
        this.avionA_1.rangoVision = rangoVisionAvion;
        this.avionA_1.angle = 0;
        this.avionA_1.tieneBomba = true;
        this.avionA_1.cantBombas = 1;
        this.avionA_1.cantCombustible = 10000;
        this.avionA_1.unidadDeVelocidad = 0;
        this.avionA_1.unidadDeConsumoCombustible = 0;
        this.avionA_1.isAvionEnCampoEnemigo = false;
        this.avionA_1.bando = "Aliado";
        this.avionA_1.HayEnemigo = false;
        this.avionA_1.lastFiredAvion = 0;
        this.avionA_1.lastFiredBombaAvion = 0;
        this.avionA_1.bullets_avion_Aliado = this.physics.add.group({
            classType: Bullet,
            maxSize: 5,
            runChildUpdate: true
        });
        this.avionA_1.bullets_avion_Aliado.physicsBodyType = Phaser.Physics.ARCADE;
        this.avionA_1.physicsBodyType = Phaser.Physics.ARCADE;
        //cantidadAvionesAliadas = arrayAvionesAliadas.push(this.avionA_1);
        Gpo_AvionesAliados.add(this.avionA_1);
        Gpo_AvionesAliados.setDepth(0);
        // activo, velocidad, aceleracion


        ////CREACION DE AVIONES ENEMIGAS:: aviones enemigos E_x
        this.avionE_1 = this.physics.add.image( (juego_var_nav_width*0.90-88),100,"avionRojo");//.setDisplayOrigin(0, 0);
        this.avionE_1.setCollideWorldBounds(true);
        this.avionE_1.setBounce(0);
        this.avionE_1.scaleX=0.2;
        this.avionE_1.scaleY=0.2;
        this.avionE_1.z = 100; 
        //this.avionE_1.setDepth(1);
        this.avionE_1.vida = 100;
        this.avionE_1.rangoVision = rangoVisionAvion;
        this.avionE_1.angle = 90;
        this.avionE_1.tieneBomba = true;
        this.avionE_1.cantBombas = 1;
        this.avionE_1.cantCombustible = 10000;
        this.avionE_1.unidadDeVelocidad = 0;
        this.avionE_1.unidadDeConsumoCombustible = 0;
        this.avionE_1.isAvionEnCampoEnemigo = false;
        this.avionE_1.bando = "Enemigo";
        this.avionE_1.HayEnemigo = false;
        this.avionE_1.lastFiredAvion = 0;
        this.avionE_1.lastFiredBombaAvion = 0;
        this.avionE_1.bullets_avion_Enemigo = this.physics.add.group({
            classType: Bullet,
            maxSize: 5,
            runChildUpdate: true
        });
        this.avionE_1.bullets_avion_Enemigo.physicsBodyType = Phaser.Physics.ARCADE; 
        this.avionE_1.setVelocity(-150,0);
        //cantidadAvionesAliadas = arrayAvionesEnemigas.push(this.avionE_1);
        this.avionE_1.physicsBodyType = Phaser.Physics.ARCADE;
        Gpo_AvionesEnemigos.add(this.avionE_1);
        Gpo_AvionesEnemigos.setDepth(0);

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
      /*   bombaBulletA.mask= spotlight_instance; // -- VER DE DEJAR??
        bombaBulletE.mask= spotlight_instance; */
 
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
        
        this.cambiarAlturaAvionBaja = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ONE);
        this.cambiarAlturaAvionMedia = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.TWO);
        this.cambiarAlturaAvionAlta = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.THREE);
        
        this.disparoAvion = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
        this.disparoAvionBomba = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.B);



        /// LAS BOMBAS SE DIBUJAN AQUI POR ORDEN DE CREACION DE IMAGENES
        /// BOMBA ALIADA Y ENEMIGA

        bombaBulletA = this.physics.add.image(0,0,"bala");
        bombaBulletA.physicsBodyType = Phaser.Physics.ARCADE;
        bombaBulletA.body.enable=false;
        bombaBulletA.scaleX=4;
        bombaBulletA.scaleY=4;
        
        bombaBulletE = this.physics.add.image(0,0,"bala");
        bombaBulletE.physicsBodyType = Phaser.Physics.ARCADE;
        bombaBulletE.body.enable=false;
        bombaBulletE.scaleX=4;
        bombaBulletE.scaleY=4;
        


        
//// CREACION DE COLISIONES Y SOLAPAMIENTOS

        // OVERLAP UTIL PARA ORDENAMIENTO DE ARTILLEROS EN TABLERO
        this.physics.add.overlap(Gpo_ArtillerosAliados, Gpo_ArtillerosAliados, artilleroOnCollide, null, this);
        this.physics.add.overlap(Gpo_ArtillerosAliados, Gpo_ElementosBaseAliada, artilleroOnCollide, null, this);
        
        // CHOQUE ENTRE AVIONES
        this.physics.add.overlap(Gpo_AvionesAliados, Gpo_AvionesEnemigos, choqueAviones, null, this);
        this.physics.add.overlap(Gpo_AvionesEnemigos, Gpo_AvionesAliados, choqueAviones, null, this);
       
        // DISPARO DESDE AVION ENEMIGO.
        // 1  --->  HABRIA QUE CREAR UN GPO DE ARMAS AVIONES ALIADO Y ENEMIGA. ASI COMO PARA BOMBAS.
        this.physics.add.overlap(this.avionE_1.bullets_avion_Enemigo, Gpo_ArtillerosAliados, impactoBalaEnArtilleroA, null, this);
        this.physics.add.overlap(this.avionE_1.bullets_avion_Enemigo, Gpo_AvionesAliados, impactoBalaEnAvionA, null, this);
        this.physics.add.overlap(this.avionE_1.bullets_avion_Enemigo, Gpo_ElementosBaseAliada, impactoBalaEnElementoBaseA, null, this);
        this.physics.add.overlap(bombaBulletE, Gpo_ElementosBaseAliada, impactoBombaEnElementoBaseA, null, this);
        this.physics.add.overlap(bombaBulletE, Gpo_ElementosBaseAliada, impactoBombaEnArtilleroA, null, this); // CAMBIAR!!

        // DISPARO DESDE AVION ALIADO
        this.physics.add.overlap(this.avionA_1.bullets_avion_Aliado, Gpo_AvionesEnemigos, impactoBalaEnAvionE, null, this);
        this.physics.add.overlap(this.avionA_1.bullets_avion_Aliado, Gpo_ElementosBaseEnemiga, impactoBalaEnElementoBaseE, null, this);
        this.physics.add.overlap(this.avionA_1.bullets_avion_Aliado, Gpo_ArtillerosEnemigos, impactoBalaEnArtilleroE, null, this);
        this.physics.add.overlap(bombaBulletA, Gpo_ElementosBaseEnemiga, impactoBombaEnElementoBaseE, null, this);
        this.physics.add.overlap(bombaBulletA, Gpo_ElementosBaseAliada, impactoBombaEnElementoBaseA, null, this); // BORRAR
        this.physics.add.overlap(bombaBulletA, Gpo_ArtillerosAliados, impactoBombaEnArtilleroA, null, this);// BORRAR
        this.physics.add.overlap(bombaBulletA, Gpo_ArtillerosAliados, impactoBombaEnArtilleroE, null, this);

        // DISPARO DESDE TORRE ALIADA
        this.physics.add.overlap(this.torreControlA.bullet_torre_Aliada, Gpo_AvionesEnemigos, impactoBalaEnAvionE, null, this);
        // DISPARO DESDE TORRE ENEMIGA
 //-->  this.physics.add.overlap(this.torreControlE.bullet_torre_Aliada, Gpo_AvionesAliados, impactoBalaEnAvionA, null, this);


        // DISPARO DESDE ARTILLEROS ALIADOS
        
        this.physics.add.overlap(this.artilleroA_1.bullets_artillero_Aliada, Gpo_AvionesEnemigos, impactoBalaEnAvionE, null, this);
        this.physics.add.overlap(this.artilleroA_2.bullets_artillero_Aliada, Gpo_AvionesEnemigos, impactoBalaEnAvionE, null, this);
        this.physics.add.overlap(this.artilleroA_3.bullets_artillero_Aliada, Gpo_AvionesEnemigos, impactoBalaEnAvionE, null, this);
        this.physics.add.overlap(this.artilleroA_4.bullets_artillero_Aliada, Gpo_AvionesEnemigos, impactoBalaEnAvionE, null, this);
        this.physics.add.overlap(this.artilleroA_5.bullets_artillero_Aliada, Gpo_AvionesEnemigos, impactoBalaEnAvionE, null, this);
        this.physics.add.overlap(this.artilleroA_6.bullets_artillero_Aliada, Gpo_AvionesEnemigos, impactoBalaEnAvionE, null, this);
        

        /* this.physics.add.overlap(this.artilleroE_1.bullets_artillero_Aliada, Gpo_AvionesAliados, impactoBalaEnAvionA, null, this); 
        this.physics.add.overlap(this.artilleroE_2.bullets_artillero_Aliada, Gpo_AvionesAliados, impactoBalaEnAvionA, null, this); 
        this.physics.add.overlap(this.artilleroE_3.bullets_artillero_Aliada, Gpo_AvionesAliados, impactoBalaEnAvionA, null, this); 
        this.physics.add.overlap(this.artilleroE_4.bullets_artillero_Aliada, Gpo_AvionesAliados, impactoBalaEnAvionA, null, this); 
        this.physics.add.overlap(this.artilleroE_5.bullets_artillero_Aliada, Gpo_AvionesAliados, impactoBalaEnAvionA, null, this); 
        this.physics.add.overlap(this.artilleroE_6.bullets_artillero_Aliada, Gpo_AvionesAliados, impactoBalaEnAvionA, null, this);  */ 

        ///// CREACION DE TABLERO AVION
        tableroAvion = this.add.text(20, 20, 'Move the mouse', { font: '16px Courier', fill: '#00ff00' });
        ///// CREACION DE TABLERO BASE
        tableroBase = this.add.text(20, 380, 'Move the mouse', { font: '16px Courier', fill: '#00000' });
    

        sceneJuego = this;

        /// CREO UN TIMER PARA QUE CADA 15 SEGS MUEVA LOS ARTILLEROS RANDOM.

        timer = this.time.addEvent({
            delay: 15000,   // EN MILI SEGUNDOS
            //callback: callback,
            callback: moverGrupodeArtilleros,
            args: [Gpo_ArtillerosAliados.getChildren(),Gpo_AvionesEnemigos.getChildren()],
            callbackScope: Gpo_ArtillerosAliados,
            loop: true,
        });
        
    }////CIERRE CREATE






    update(time, delta) {
        
        ///// MOVIMIENTO DE AVION EN BASE A BOTONES
        ////LUEGO SACAR FISICAS PARA FUERA DEL IF DE BOTONES... ya que por mas que no muevas tu avion, tiene que recalcular en base al websockets los eventosasd
        
        modificoDireccion = false;

        getUnidadDesplazamiento(this.avionA_1);


        if(this.right.isDown || this.left.isDown || this.up.isDown || this.down.isDown){
            var vX, vY;
            var diagonal=false;
            if(this.right.isDown) {
                ultimaTeclaPresionada = "right";
                this.avionA_1.x = this.avionA_1.x + this.avionA_1.unidadDeVelocidad;//++;
                this.avionA_1.resetFlip();
                if (this.down.isDown){
                    // this.avionA_1.x = this.avionA_1.x + unidadDeVelocidad;//++; 
                    this.avionA_1.y = this.avionA_1.y + this.avionA_1.unidadDeVelocidad;//++;
                    this.avionA_1.angle=45;
                    vX = 10;vY = 10;
                }else{
                    if (this.up.isDown){
                        // this.avionA_1.x = this.avionA_1.x + unidadDeVelocidad;//++; 
                        this.avionA_1.y = this.avionA_1.y - this.avionA_1.unidadDeVelocidad;//--;
                        this.avionA_1.angle=-45;
                        vX = 10;vY = -10;
                    }else{this.avionA_1.angle=0;diagonal=true;vX = 10;vY = 0;}
                ;}                
            } else if(this.left.isDown) {
                ultimaTeclaPresionada = "left";
                this.avionA_1.x = this.avionA_1.x - this.avionA_1.unidadDeVelocidad;//--;
                this.avionA_1.resetFlip();
                this.avionA_1.flipX=true;
                if (this.down.isDown){
                    // this.avionA_1.x = this.avionA_1.x - unidadDeVelocidad;//--; 
                    this.avionA_1.y = this.avionA_1.y + this.avionA_1.unidadDeVelocidad;//++;
                    this.avionA_1.angle=-45;
                    vX = -10;vY = 10;
                }else{
                    if (this.up.isDown){
                        // this.avionA_1.x = this.avionA_1.x - unidadDeVelocidad;//--; 
                        this.avionA_1.y = this.avionA_1.y - this.avionA_1.unidadDeVelocidad;//--;
                        this.avionA_1.angle=45;
                        vX = -10;vY = -10;
                    }else{this.avionA_1.angle=0;diagonal=true; vX = -10;vY = 0;}
                ;}           
            } else if(this.up.isDown) {
                ultimaTeclaPresionada = "up";
                this.avionA_1.y = this.avionA_1.y - this.avionA_1.unidadDeVelocidad;//--;
                this.avionA_1.resetFlip();
                this.avionA_1.angle=-90;
                vX = 0;
                vY = -10;
            } else if(this.down.isDown) {
                ultimaTeclaPresionada = "down";
                this.avionA_1.y = this.avionA_1.y + this.avionA_1.unidadDeVelocidad;//++;
                this.avionA_1.resetFlip();
                this.avionA_1.angle=90;
                vX = 0;
                vY = 10;
            }
            
            setVelocidadAvion(this.avionA_1, vX, vY);
            modificoDireccion = true;
        }

        //// Actualizacion de mascara en base a avionA_1 x y
        ////Nota: aunque el movimiento de la avion de saque para eventos de boton, esta actualizacion se tiene que hacer constantemente en el update debido a la velocidad del avion (incersia)
        if (isAvionActivaAliadaViva) {
            spotlight.x = this.avionA_1.x;
            spotlight.y = this.avionA_1.y+2;

            //// ACTUALIZAR TEXTO DE TABLERO AVION:
            tableroAvion.setText([
                'DATOS AVION:',
    /*           'x: ' + this.avionA_1.body.speed,
                'y: ' + this.avionA_1.y, */
                'Altura: ' + this.avionA_1.z,
                'Bomba: ' + this.avionA_1.tieneBomba,
                'Vida: ' + this.avionA_1.vida,
                'Combustible: ' + this.avionA_1.cantCombustible,
            ]);

        } else {
            spotlight.x = mi_base_x;
            spotlight.y = mi_base_y;

            if (Gpo_AvionesAliados.length > 0) {
                //// ACTUALIZAR TEXTO DE TABLERO AVION:
                tableroAvion.setText([
                    'SELECCIONA UNA NUEVA AVION',
                ]);
            } else {
                //// ACTUALIZAR TEXTO DE TABLERO AVION:
                tableroAvion.setText([
                    'NO HAY MAS AVIONES ALIADAS',
                    '¡¡¡PERDISTE!!',
                ]);
            }

        }
        


        ////descuento de combustible
        setDescuentoCombustibleAvionUPDATE(1, this.avionA_1);


        /////---------FISICAS DE AVIONES y BALAS ENEMIGAS------
        setMaksAvion(this.avionE_1);




          //// ACTUALIZAR TEXTO DE TABLERO BASE:
          tableroBase.setText([
            'DATOS BASE:',
            'Vida de Torre: ' + this.torreControlA.vida + '%',
            'Vida de Dep. Combustible: ' + this.deposito_combustible.vida + '%',
            'Vida de Dep. Bombas: ' + this.deposito_bombas.vida + '%',
            'Cant. Artilleros: ' + Gpo_ArtillerosAliados.getTotalUsed(),
            'Cant. Aviones: ' + Gpo_AvionesAliados.getTotalUsed(),
        ]);



        //////DETECTAR SI AVIONES ENEMIGAS PASAN SOBRE ALGUN ARTILLERO
        hayEnemigoEnRangoArtillero(time);

        //////DETECTAR SI AVIONES ENEMIGAS PASAN SOBRE LA TORRE
        hayEnemigoEnRangoTorreDeControl(time);


        tiempoDelUpdate = time;
        if (isAvionActivaAliadaViva) {
            /////DISPARO AVION
            if ((this.disparoAvion.isDown) && (time > this.avionA_1.lastFiredAvion)){
                evento_avion_disparo(time, this.avionA_1);
            }
            //console.log(this.avionA_1.lastFiredBombaAvion);
            if ((this.disparoAvionBomba.isDown) && (time > this.avionA_1.lastFiredBombaAvion)){
                evento_avion_disparoBomba(tiempoDelUpdate, this.avionA_1);
            }

        }

        avionA_activa = this.avionA_1;
        //////DETECTAR SI SE QUEDA SIN NAFTA EXPLOTA
        hayCombutible(avionA_activa);
    }////CIERRE UPDATE
    
    
}////CIERRE CLASS


window.addEventListener('keydown', escuchaDeKeyDownSwitch); 
function escuchaDeKeyDownSwitch(event){
    switch(event.keyCode) {
        case Phaser.Input.Keyboard.KeyCodes.D:
          break;
        case Phaser.Input.Keyboard.KeyCodes.A:
          break;
        case Phaser.Input.Keyboard.KeyCodes.W:
            break;
        case Phaser.Input.Keyboard.KeyCodes.S:
            break;
        case Phaser.Input.Keyboard.KeyCodes.ONE:
            evento_tecla_avionAltura0();
          break;
        case Phaser.Input.Keyboard.KeyCodes.TWO:
            evento_tecla_avionAltura1();
          break;
        case Phaser.Input.Keyboard.KeyCodes.THREE:
            evento_tecla_avionAltura2();
            break;
        case Phaser.Input.Keyboard.KeyCodes.SPACE:
            evento_tecla_avionDisparar();
            break;
        case Phaser.Input.Keyboard.KeyCodes.B:
            evento_tecla_avionDispararBomba();
            break;
      }

}

function hayCombutible(avion){
    if (avion.cantCombustible<=0){
        ////CAMBIAR AVION 
        ////CAMBIAR FLAG PARA QUE LA SOMBRA QUEDE EN LA BASE
        isAvionActivaAliadaViva = false;
    /// PARA ELIMINAR UN SPRITE, SI PERTENECE A UN GRUPO HAY QUE HACERLO ASI...
        Gpo_AvionesAliados.killAndHide(avion);
        avion.body.enable = false;
        boom = sceneJuego.add.sprite(avion.x, avion.y, 'explosion');
        boom.anims.play('explode');
        snd_explosion.play()
    }
}

function evento_tecla_avionAltura0(){

    //IF el avion esta arriba de la pista de la base
        //implmenetar transicion:: if era mas grande --> setTransicionScaleAumentar(this.pajaro,0.2,0.1);
        
        //// a medida que tengo una aviona activa, la guardo referencia y luego hago
        avionA_activa.z=0;
        avionA_activa.scaleX=0.1;
        avionA_activa.scaleY=0.1;
       //console.log(avionA_activa.depth);
        avionA_activa.setDepth(0);

    
        ////se podria cambiar la sombra this.pajaroVision.setTexture("transparente");
                
        //recargar nafta si hay en el tanque de la base
        //otras funciones como, si me quedan en mi panel 5 llaves, entonces tengo 5 reparaciones de vida
    
    /*
    Si pajaro z en 100 entonces 200, bajo vel, incremento gasto de gasolina, incremento tamaño avion
    si pajaro z es 200 entonces 100, incremento vel, descremento gasto de gasolina, decremento tamaño avion

        this.pajaro.z = ;*/

    ////Adentro resuelve cambios por altura y bomba
    setVelocidadAvion(avionA_activa, avionActivaUltimaVX, avionActivaUTlimaVY);
    
}

function evento_tecla_avionAltura1(){
    avionA_activa.z=100;
    avionA_activa.scaleX=0.2;
    avionA_activa.scaleY=0.2;
    //console.log(avionA_activa.depth);
    avionA_activa.setDepth(1);
    
    ////this.pajaroVision.setTexture("transparente");


    ////Adentro resuelve cambios por altura y bomba
    setVelocidadAvion(avionA_activa, avionActivaUltimaVX, avionActivaUTlimaVY);
    
}

function evento_tecla_avionAltura2(){
    avionA_activa.z=200;
    avionA_activa.scaleX=0.3;
    avionA_activa.scaleY=0.3;
    //console.log(avionA_activa.depth);
    avionA_activa.setDepth(2);

    ////this.pajaroVision.setTexture("opaca");
     
    ///this.pajaro2.mask = new Phaser.Display.Masks.BitmapMask(this, spotlightb);
    ///this.piso.mask = new Phaser.Display.Masks.BitmapMask(this, spotlightb);
    ///this.torreta.mask = new Phaser.Display.Masks.BitmapMask(this, spotlightb);
    

    ////Adentro resuelve cambios por altura y bomba
    setVelocidadAvion(avionA_activa, avionActivaUltimaVX, avionActivaUTlimaVY);
    
    
}

function setVelocidadAvion(avion, velX, velY){
    if (avion.tieneBomba) {
        velX = velX*0.80;
        velY = velY*0.80;
    } 
    
    if(avion.z <= 100){//baja altura
        avionActivaUltimaVX = velX;
        avionActivaUTlimaVY = velY;
        avion.setVelocity(velX,velY);
    }else{ //200 es altura
        avionActivaUltimaVX = velX/2;
        avionActivaUTlimaVY = velY/2;
        avion.setVelocity(velX/2,velY/2);
    }
}

function getUnidadDesplazamiento(avion){
    avion.unidadDeVelocidad = 1;
    //console.log("unidadDeVelocidad inicial:" + unidadDeVelocidad);

    if (avion.tieneBomba) {
        avion.unidadDeVelocidad = avion.unidadDeVelocidad - avion.unidadDeVelocidad*0.50;
    }
    //console.log("unidadDeVelocidad luego del if avion.tieneBomba:" + unidadDeVelocidad);

    if(avion.z > 100){ ///altura maxima
        avion.unidadDeVelocidad = avion.unidadDeVelocidad - avion.unidadDeVelocidad*0.50;
    }
    //console.log("unidadDeVelocidad luego del if avion.z:" + unidadDeVelocidad);

    if ( (avion.tieneBomba) && (avion.z > 100) ) {
        avion.unidadDeVelocidad = avion.unidadDeVelocidad*0.10;
    }
    //console.log("unidadDeVelocidad luego del if (avion.tieneBomba) && (avion.z > 100) :" + unidadDeVelocidad);
}


function setDescuentoCombustibleAvionUPDATE(num, avion){
    ////obtener el segundo valor para descontar cuando toca tecla para moverse
    getunidadDeConsumoCombustible(num, avion);
    //("avion.unidadDeConsumoCombustible::"+ avion.unidadDeConsumoCombustible );
    if ( avion.cantCombustible > 0) {
        avion.cantCombustible = avion.cantCombustible - avion.unidadDeConsumoCombustible;
    } else {
        ////EVENTO DE DESTRUCCION/caida POR FALTA DE COMBUSTIBLE
    }

}

function getunidadDeConsumoCombustible(num, avion){
    avion.unidadDeConsumoCombustible = 1;
    if (avion.tieneBomba) {
        avion.unidadDeConsumoCombustible = avion.unidadDeConsumoCombustible + 1 ;
    }
    if(avion.z > 100){ ///altura maxima
        avion.unidadDeConsumoCombustible = avion.unidadDeConsumoCombustible + 1;
    }
    if (modificoDireccion) {
        avion.unidadDeConsumoCombustible = avion.unidadDeConsumoCombustible + 1;
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
        
    artillero.x = x;
    artillero.y = y;

//  console.log("artillero "+artillero.num + " :: " + artillero.x + "    X    "+ artillero.y); 
    
}
function impactoBalaEnElementoBaseA(elem_base,bala){

    elem_base.vida--;
    //console.log(bala);
    snd_impacto_metralleta.play();
    //p1Danado = true;
    //console.log("recibio disparo"+artillero.vida);
    bala.kill();
    if (elem_base.vida <= 0){
    //  console.log(artillero.vida);
        boom = this.add.sprite(elem_base.x, elem_base.y, 'explosion');
        boom.anims.play('explode');
        snd_explosion.play();
        Gpo_ElementosBaseAliada.killAndHide(elem_base);      

    } 

} 
function impactoBalaEnElementoBaseE(elem_base,bala){

    elem_base.vida--;
    //console.log(bala);
    snd_impacto_metralleta.play();
    //p1Danado = true;
    //console.log("recibio disparo"+artillero.vida);
    bala.kill();
    if (elem_base.vida <= 0){
    //  console.log(artillero.vida);
        boom = this.add.sprite(elem_base.x, elem_base.y, 'explosion');
        boom.anims.play('explode');
        snd_explosion.play();
        Gpo_ElementosBaseEnemiga.killAndHide(elem_base);
        //Gpo_ArtillerosAliados.killAndHide(torre);        

    } 

} 
 function impactoBalaEnArtilleroA(artillero,bala){

    artillero.vida--;
    //e.log(bala);
    snd_impacto_metralleta.play();
    //p1Danado = true;
    //console.log("recibio disparo"+artillero.vida);
    bala.kill();
    if (artillero.vida <= 0){
    //  console.log(artillero.vida);
        boom = this.add.sprite(artillero.x, artillero.y, 'explosion');
        boom.anims.play('explode');
        snd_explosion.play();
        Gpo_ArtillerosAliados.killAndHide(artillero);
       // Gpo_ArtillerosAliados.killAndHide(artillero);        

    } 
} 
function impactoBalaEnArtilleroE(artillero,bala){

    artillero.vida--;
    //console.log(bala);
    snd_impacto_metralleta.play();
    //p1Danado = true;
    //console.log("recibio disparo"+artillero.vida);
    bala.kill();
    if (artillero.vida <= 0){
    //  console.log(artillero.vida);
        boom = this.add.sprite(artillero.x, artillero.y, 'explosion');
        boom.anims.play('explode');
        snd_explosion.play();
        Gpo_ArtillerosEnemigos.killAndHide(artillero);
       // Gpo_ArtillerosEnemigos.killAndHide(artillero);        

    } 
} 


function impactoBombaEnElementoBaseA(bomba,elem_base ){
    console.log("Entro");
    elem_base.vida=0;
    if (elem_base.vida <= 0){
        boom = this.add.sprite(elem_base.x, elem_base.y, 'explosion');
        boom.anims.play('explode');
        snd_explosion.play();
        elem_base.body.enable=false;
        Gpo_ElementosBaseAliada.killAndHide(elem_base);   

    } 
/*     console.log(elem_base.vida); */
} 
function impactoBombaEnArtilleroA(bomba,artillero ){
     console.log("Entro");
    artillero.vida=0;
    if (artillero.vida <= 0){
        boom = this.add.sprite(artillero.x, artillero.y, 'explosion');
        boom.anims.play('explode');
        snd_explosion.play();
        artillero.body.enable=false;
        Gpo_ArtillerosAliados.killAndHide(artillero);   

    } 
  /*   console.log(elem_base.vida); */
} 

function impactoBombaEnArtilleroE(bomba,artillero ){
 /*    console.log("Entro"); */
    artillero.vida=0;
    if (artillero.vida <= 0){
        boom = this.add.sprite(artillero.x, artillero.y, 'explosion');
        boom.anims.play('explode');
        snd_explosion.play();
        artillero.body.enable=false;
        Gpo_ArtillerosEnemigos.killAndHide(artillero);   
    } 
   /*  console.log(elem_base.vida); */
} 


function impactoBombaEnElementoBaseE(elem_base, bomba ){
    bomba.destroy();
    if (elem_base.vida <= 0){
        boom = this.add.sprite(elem_base.x, elem_base.y, 'explosion');
        boom.anims.play('explode');
        snd_explosion.play();
        elem_base.body.enable=false;
        Gpo_ElementosBaseEnemiga.killAndHide(elem_base);   

    } 
} 


function impactoBalaEnAvionA(avion, bala ){

    avion.vida--;
    //console.log(bala);
    snd_impacto_metralleta.play();
    //p1Danado = true;
    //console.log("recibio disparo"+avion.vida);
    bala.kill();
    if (avion.vida <= 0){
    //  console.log(avion.vida);
        boom = this.add.sprite(avion.x, avion.y, 'explosion');
        boom.anims.play('explode');
        snd_explosion.play();
        Gpo_AvionesAliados.killAndHide(avion);
        // Gpo_AvionesEnemigos.killAndHide(avion);        
        avion.body.enable = false;
    } 
} 
function impactoBalaEnAvionE(avion, bala ){

    avion.vida--;
    //console.log(bala);
    snd_impacto_metralleta.play();
    //p1Danado = true;
    //console.log("recibio disparo"+avion.vida);
    bala.kill();
    if (avion.vida <= 0){
    //  console.log(avion.vida);
        boom = this.add.sprite(avion.x, avion.y, 'explosion');
        boom.anims.play('explode');
        snd_explosion.play();
        Gpo_AvionesEnemigos.killAndHide(avion);
        //Gpo_AvionesEnemigos.killAndHide(avion);      
        avion.body.enable = false;
    } 
} 

function choqueAviones(avion1,avion2){
    if (avion1.z == avion2.z){

        ////CAMBIAR AVION 
        
        ////CAMBIAR FLAG PARA QUE LA SOMBRA QUEDE EN LA BASE
        isAvionActivaAliadaViva = false;


        avion1.body.enable = false;
        avion2.body.enable = false;
    /// PARA ELIMINAR UN SPRITE, SI PERTENECE A UN GRUPO HAY QUE HACERLO ASI...
        Gpo_AvionesAliados.killAndHide(avion1);
        Gpo_AvionesEnemigos.killAndHide(avion2);
    /*     avion1.disableBody(true, true);
        avion2.disableBody(true, true);
        avion1.setActive(false);
        avion2.setActive(false); */
        /// MOVEMOS LOS AVIONES ALIADOS A CAMPO ALIADO Y LOS ENEMIGOS A CAMPO ENEMIGO POR SOMBRAS???
        // sacamos el spotlight para afuera del tablero..
    /*   spotlight.x=baseAliada_x;
        spotlight.y=baseAliada_y; */
        boom = this.add.sprite(avion1.x, avion1.y, 'explosion');
        boom2 = this.add.sprite(avion2.x, avion2.y, 'explosion');
        boom.anims.play('explode');
        boom2.anims.play('explode');
        snd_explosion.play()
        /// habria que deshabilitar spotlight y habilitarlo cada vez que se activa un avion.
        /// si no hay aviones deberiamos dejar revelado el tablero y dar por terminada la partida.
}

}

function seleccionProximaAvionAliadoActiva(){



}

function evento_tecla_avionDisparar(){

}

function evento_tecla_avionDispararBomba(){

}


function artilleroOnCollide(artillero, objeto2){

    artilleroSetearUbicacion(artillero);
                            
}
    
function moverArtillero(artillero){
    artillero.x=Phaser.Math.Between(campoAliado_x, campoAliado_w);
} // artillero setear oncollide function with Base

function moverGrupodeArtilleros(){
//console.log("hola");
var arrayArtillerosAliados = Gpo_ArtillerosAliados.getChildren();
var arrayAvionesEnemigas = Gpo_AvionesEnemigos.getChildren();
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
                        if (distanciaEntreDosObjetos > rangoMaximoVision) {
                            moverArtillero(arrayArtillerosAliados[i]);
                            //console.log("Llego aca");
                        }
                    } 
                }
            }
        }

    }
       
} // artillero setear oncollide function with Base


function hayEnemigoEnRangoArtillero(time){  
    var arrayArtillerosAliados=Gpo_ArtillerosAliados.getChildren();
    var arrayAvionesEnemigas=Gpo_AvionesEnemigos.getChildren();
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
                        if (distanciaEntreDosObjetos <= rangoMaximoVision ) {
                            //cambio att de artillero
                            arrayArtillerosAliados[i].hayEnemigo = true;                    
                            arrayArtillerosAliados[i].setTexture("artillero_negro_activo");  
                            ////DISPARA UN EVENTO --> disparo bala fisica, imagen y sonido 
                            evento_artillero_disparo(time, arrayArtillerosAliados[i], arrayAvionesEnemigas[j]); 
                        }
                    } 
                }
            }
        }

    }

}

function hayEnemigoEnRangoTorreDeControl(time){
    sceneJuego.torreControlA.HayEnemigo = false;
    sceneJuego.torreControlA.setTexture("torreControl_negro");
    var arrayAvionesEnemigas=Gpo_AvionesEnemigos.getChildren();
    if(sceneJuego.torreControlA.vida > 0){
        //para cada avion enemiga
        for (j = 0; j < arrayAvionesEnemigas.length; j++){
            if(arrayAvionesEnemigas[j].vida > 0){
                //si distancia entre torre y avion < 100
                distanciaEntreDosObjetos = distanceRound(sceneJuego.torreControlA, arrayAvionesEnemigas[j]);
                
                rangoMaximoVision = sceneJuego.torreControlA.rangoVision;
                if (distanciaEntreDosObjetos <= rangoMaximoVision) {
                    //cambio att de torre
                    sceneJuego.torreControlA.hayEnemigo = true;                    
                    sceneJuego.torreControlA.setTexture("torreControl_negro_activo");  
                    ////DISPARA UN EVENTO --> disparo bala fisica, imagen y sonido 
                    evento_torreControl_disparo(time, sceneJuego.torreControlA, arrayAvionesEnemigas[j]);
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


function evento_artillero_disparo(time, in_ArtilleroOrigen, in_AvionEnemiga){
    juego_var_destinoCreacionBalas = 1;
    if ((time > in_ArtilleroOrigen.lastFiredArtillero)){ 
        var bullet = in_ArtilleroOrigen.bullets_artillero_Aliada.get();      
        /* var bullet = bullets_artillero_Aliada.get(); */

        if (bullet)
        {
            anguloEntre_ArtilleroAvion = Phaser.Math.Angle.BetweenPoints(in_ArtilleroOrigen, in_AvionEnemiga);
            in_ArtilleroOrigen.rotation = anguloEntre_ArtilleroAvion;
            Phaser.Geom.Line.SetToAngle(line, in_ArtilleroOrigen.x, in_ArtilleroOrigen.y - 50, anguloEntre_ArtilleroAvion, 128);
            gfx.clear().strokeLineShape(line);

            bullet.fire(in_ArtilleroOrigen, anguloEntre_ArtilleroAvion);
            snd_metralleta.play();
            in_ArtilleroOrigen.lastFiredArtillero = time + 100;
        }
    }
}

function evento_torreControl_disparo(time, in_TorreOrigen, in_AvionEnemiga){
    juego_var_destinoCreacionBalas = 0;
    if ((time > in_TorreOrigen.lastFiredTorre)){
        var bullet = in_TorreOrigen.bullet_torre_Aliada.get();
        if (bullet)
        {
            anguloEntre_TorreAvion = Phaser.Math.Angle.BetweenPoints(in_TorreOrigen, in_AvionEnemiga);
            in_TorreOrigen.rotation = anguloEntre_TorreAvion;
            Phaser.Geom.Line.SetToAngle(line, in_TorreOrigen.x, in_TorreOrigen.y - 50, anguloEntre_TorreAvion, 128);
            gfx.clear().strokeLineShape(line);
            bullet.fire(in_TorreOrigen,'Torre');
            snd_metralleta.play();
            in_TorreOrigen.lastFiredTorre = time + 100;
        }
    }

}


function evento_avion_disparo(time, in_AvionOrigen){
    juego_var_destinoCreacionBalas = 2;

    var bullet = in_AvionOrigen.bullets_avion_Aliado.get();
    if (bullet)
    {
        bullet.fire(in_AvionOrigen);
        snd_metralleta.play();
        in_AvionOrigen.lastFiredAvion = time + 100;
    }
}

function evento_avion_disparoBomba(time, in_AvionOrigen){
    ///juego_var_destinoCreacionBalas = 2; // --> para que era esto???
   //console.log(in_AvionOrigen.z );
   console.log(bombaBulletA.scaleX);
   console.log(bombaBulletA.scaleY);
    if (in_AvionOrigen.z == 200 && in_AvionOrigen.tieneBomba){
        bombaBulletA.x=in_AvionOrigen.x;
        bombaBulletA.y=in_AvionOrigen.y;
        snd_caidaBomba.play();
        //console.log(bombaBulletA);
        tweenBombaA = sceneJuego.tweens.add({
            targets: [ bombaBulletA ],
            //x:'+=100',
            scaleX:'-=5',
            scaleY:'-=5',
            duration: 2000,
            ease: 'Power1'
        });
        snd_caidaBomba.stop();
        bombaBulletA.body.enable=true;
        timerBombaA = sceneJuego.time.addEvent({
            delay: 2000,   // EN MILI SEGUNDOS
            //callback: callback,
            callback: enmascararBomba,
            args: [bombaBulletA,tweenBombaA],
            callbackScope: bombaBulletA,tweenBombaA,
            loop: true,
        });

        //in_AvionOrigen.tieneBomba=false; --> ACTIVAR PARA QUE SOLO DISPARE UNA BOMBA!!!
    }

}

function enmascararBomba (bomba,tweenBomba){
    bombaBulletA.body.enable=false;
    bomba.x=0;
    bomba.y=0;
    bomba.scaleX=4;
    bomba.scaleY=4;
    tweenBomba.stop();
}






















var Bullet = new Phaser.Class({

    Extends: Phaser.Physics.Arcade.Image,

    initialize:

    function Bullet (scene)
    {
        Phaser.Physics.Arcade.Image.call(this, scene, 0, 0, 'bala');

        this.setBlendMode(1);
        this.setDepth(1);

       
        switch(juego_var_destinoCreacionBalas) {
            case 0:////0-torre
                this.speed = 100;
                this.lifespan = 500;
              break;
            case 1:////1-artillero
                this.speed = 100;
                this.lifespan = 250;
              break;
            case 2:////2-avion
                this.speed = 200;
                this.lifespan = 250;
                break;
            default:////otherwise
                this.speed = 80;
                this.lifespan = 1000;
          }

;

        this._temp = new Phaser.Math.Vector2();
    },

    fire: function (ship, tipo)
    {
        /* this.lifespan = 1000; */

        this.setActive(true);
        this.setVisible(true);
        this.setAngle(ship.body.rotation);
        this.setPosition(ship.x, ship.y); // LE APLICO CORRIMIENTO PARA QUE NO SOLAPE/COLISIONE DE ARRANQUE
        this.body.reset(ship.x, ship.y);
        
        this.body.setSize(10, 10, true);

        var angle = Phaser.Math.DegToRad(ship.body.rotation);
        if (ship.flipX){
            angle = Phaser.Math.DegToRad(ship.body.rotation+180);
        }
        this.scene.physics.velocityFromRotation(angle, this.speed, this.body.velocity);

        this.body.velocity.x *= 2;
        this.body.velocity.y *= 2;
    },

    update: function (time, delta)
    {
         ///console.log("entro al update de bala: (time/delta"+time+" "+delta);
        //console.log("lifespan antes"+this.lifespan);
        this.lifespan -= delta;
       // console.log("lifespan despues"+this.lifespan);
        if (this.lifespan <= 0)
        {
            this.kill();
        }
    },

    kill: function ()
    {
        //console.log("entro a kill de bala");
        this.setActive(false);
        this.setVisible(false);
        this.body.stop();
        this.destroy();
    }

});