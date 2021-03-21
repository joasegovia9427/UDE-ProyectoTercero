/////----------------version del archivo numero::  FrontEnd_respaldo_2021 04 14a  ---- ultimo modificador:: Joaquin---  ---
console.log("Entro al juego");


/////-----------------INICIO VARIABLES GLOBALES--------------------
var modal;


var isBloquearHastaReanudar = false;

var sceneJuego;
var cursors;
//
var meCompartieronDatosBaseContrincante = false;
var leLlegoMisDatosDeBase = false;

var isJuegoEnPausa = false;
var quienPidioPausa=0;

var ultimaTeclaPresionada;
var ultimaTeclaPresionadaAux;
var spotlight;
var spotlight_instance;

var avionCombustibleDefault = 10000;

var origen_x = 0; var origen_y = 0;
var campoEnemigo_x; var campoEnemigo_y; var campoEnemigo_w; var campoEnemigo_h;
var lineaSeparacion_x; var lineaSeparacion_y; var lineaSeparacion_w; var lineaSeparacion_h;
var campoAliado_x; var campoAliado_y; var campoAliado_w; var campoAliado_h;

var baseEnemiga_x; var baseEnemiga_y; var baseEnemiga_w; var baseEnemiga_h;
var baseAliada_x; var baseAliada_y; var baseAliada_w; var baseAliada_h;

var tableroAvion;
var tableroEstadoPartida;
var tableroAvionCuidado;
var tableroBase;
var tableroBaseCuidado;

var cantidadAvionesAliadas      = 0;
var cantidadAvionesEnemigas     = 0; 
var cantidadArtillerosAliadas   = 0;
var cantidadArtillerosEnemigas  = 0; 

var isEnVistaLateral=false;

/* var arrayAvionesAliadas      = [];
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

// ELEMENTOS
var avionAliada_Activa;
var avionActivaAliadaLateral;
var avionActivaEnemigaLateral;
var avionEnemiga_Activa;


var deposito_combustibleAliado;
var torreControlAliada;
var deposito_bombasAliado;
var pistaAvionesEnemiga;
var deposito_bombasEnemigo;
var torreControlEnemiga;
var deposito_combustibleEnemigo;
var pistaAvionesAliada;
var torreControlAliadaLateral;
var pisoLateral;
var separacionVertical;
var pistaDeAvionAliadaLateral;
var depositoDeBombasAliadoLateral;
var depositoDeCombustibleAliadoLateral;


var avionA_1;
var avionA_2;
var avionA_3;
var avionA_4;
var avionE_1, avionE_2, avionE_3, avionE_4;

var artilleroA_1;
var artilleroA_2;
var artilleroA_3;
var artilleroA_4;
var artilleroA_5;
var artilleroA_6;

var artilleroE_1;
var artilleroE_2;
var artilleroE_3;
var artilleroE_4;
var artilleroE_5;
var artilleroE_6;

var timer; 
var timerBombaA;
var timerTablero;
var timerBombaE;

var anguloEntre_ArtilleroAvion;
var anguloEntre_TorreAvion;
var anguloEntre_AvionYElementoEnemigo;
/// torreta
var line;
var gfx;

// efectos y sonidos
var boom, boom2, boom3;
var explotar;
var snd_metralleta;
var snd_impacto_metralleta;
var snd_explosion
var snd_caidaBomba;

var isPressY5Times = 0;
// utiles
var StringToExecute;


// efectos

var avionActivaUltimaVX = 0;
var avionActivaUTlimaVY = 0;

var modificoDireccion = false;

var avionActivaAliadaX = 0;
var avionActivaAliadaY = 0;

var isAvionActivaAliadaViva = true;
var isAvionActivaEnemigaViva = true;

var tiempoDelUpdate = 0;

var imagenAvionesAliados;
var imagenAvionesEnemigos;

var isContinuarUpdate;
var teclaPess;

////CONDICIONES DE FIN DE PARTIDA
var condicionPerdidaAliado = false;
var condicionPerdidaEnemigo = false;
var mostrarAlert = true;


var superOne, isSuperAlive = false, cantSuper = 0;

var artilleroAuxNum;
var artilleroAuxX;
var artilleroAuxY;

var in_avionEnemigaActivaX, in_avionEnemigaActivaY;

var isTrajoDatosEnemigos = false;
var in_avionEnemiga_ActivaVx;
var in_avionEnemiga_ActivaVy;
var avionEnemiga_ActivaVx;
var avionEnemiga_ActivaVy;
var avionAliada_ActivaVx;
var avionAliada_ActivaVy;

var isInVistaLateral = false;
var isEnPausaMenu = false;

var destruiAlgunElementoBaseEnemigaCual;
var destruiAlgunAvionEnemigaCual;
var destruiAlgunArtilleroEnemigoCual;

/////---------^^^^^^^^^^^^FIN VARIABLES GLOBALES^^^^^^^^^^^^----------

/////----------------------------------------------------------------------------------
/////----------------------------------------------------------------------------------
/////----------------------------------------------------------------------------------
////CREACION WEBSOCKET
var webSocket = new WebSocket("ws://localhost:8080/prueba/webSocketEndPointPartida");
webSocket.onmessage = onMessage;

var partidaID; // = "1234"//;//Math.round(Math.random() * 9999); ////got by previous html...
var isIngresoPorPrimeraVez = true; ////luego de conectar esto ya se me actualiza a false desde dentro del server
var isWSOpen = "true";
var mi_SessId = "mi_sessIdToChange";  ////luego de conectar esto ya se me actualiza  desde dentro del server
var contrincante_SessId = "contrincante_sessIdToChange";  ////luego del primer onMessage enemigo esto ya se me actualiza desde dentro del server
var rows;
var dataJson;
var datosRecibidosDesdeJugadorNumero;

var jugadorMiNumero = 0;
var ejecutaOnMessagePorPrimeraVez = true;
var isEnvioMisDatosBase = true;
var datosASync;
var colorBando;
var termineDeCrearElTablero = false;
var elementMenuOut;

///// METODOS WEBSOCKETS
webSocket.onopen = function(event) {
/*     var numRandomAux = Math.round(Math.random() * 10);
    if (numRandomAux > 5) {
        jugadorMiNumero = 1;
    } else {
        jugadorMiNumero = 2;
    } */
    //jugadorMiNumero = 1;
    jugadorMiNumero = juego_var_JugadorQueSoy;
    console.log("Me toco ser el jugadorMiNumero::"+ jugadorMiNumero);

    console.log("WebSocket is open now.");
    isWSOpen = "true"; 

    partidaID = juego_var_codigoIdPartida.toString();
    console.log("partidaID::"+ partidaID);

    rows =
    { "partidaId": partidaID
    , "isIngresoPorPrimeraVez": isIngresoPorPrimeraVez
    , "sessionId": mi_SessId
    , "enviaDatoDesdeElJugadorNum": jugadorMiNumero
    //, "arreLista" : [lista, lista2]
    };

    isIngresoPorPrimeraVez = false;

    dataJson = JSON.stringify(rows);
    if (isWSOpen) {
        webSocket.send(dataJson);
    }
};

webSocket.onclose = function(event) {
    sendDatosWebSocket("voyASalirAsiQueGanaste");
    isWSOpen = "false";

    console.log("WebSocket is closed now.");
    console.log('Onclose called' + event);
    console.log('code is' + event.code);
    console.log('reason is ' + event.reason);
    console.log('wasClean  is' + event.wasClean);
};

webSocket.onerror = function(event) {
    //alert("Error con el WebSocket ***Verifique que el server este prendido: " + event, event );
}; 

///// METODOS EVENTOS DE NAVEGADOR Y PESTAÑA
/* window.addEventListener('beforeunload', function (e) {   
    isWSOpen = "false";
    sendDatosWebSocket("voyASalirAsiQueGanaste");
    //webSocket.send("dato a mandar como que cerre pestaña");
    
    // Cancel the event
    e.preventDefault(); // If you prevent default behavior in Mozilla Firefox prompt will always be shown
    // Chrome requires returnValue to be set
    e.returnValue = '';

    // the absence of a returnValue property on the event will guarantee the browser unload happens
    delete e['returnValue']; 
    
  } 
  
);  */

function onMessage(event) {
    if (termineDeCrearElTablero) {
        

        isContinuarUpdate = validarCondicionesPartidaAliada();
        if (isContinuarUpdate) {

            //console.log("-------function onMessage(event)---------------------------");
            ////todos los datos que me manda tanto el server por primera vez, 
            //// como todo el resto de datos que me manda el enemigo para actualizar sus objetos y eventos
            
            //console.log("onMessage event.data:"+event.data);
            var data = JSON.parse(event.data);
            //console.log("data:"+data);

            datosRecibidosDesdeJugadorNumero = data.enviaDatoDesdeElJugadorNum;
            //console.log("datosRecibidosDesdeJugadorNumero: "+datosRecibidosDesdeJugadorNumero);

            if (datosRecibidosDesdeJugadorNumero == jugadorMiNumero) {
        
        
            } else {

                datosASync = data.datos;
                //console.log("etiqueta que me llega:: datosASync: "+datosASync);

                switch (datosASync) {
                    case "datosBaseYArtillerosPriVez":
                        //meCompartieronDatosBaseContrincante = true;
                        //console.log("entre al onmessage para ajustar la base del contrincante");
                        ////si bien las etiquetas dicen ALIADO, es contrincante, lo que pasa es que las etiquetas al enviarlas dicen que mando mis datos entonces no confundirse cuando se recibe... cuando te retornan datos es que son del contrincante, dle enemigo
                        juego_var_IDBaseDatosSegundoJugador = data.idBaseDeDatosJugador;
                        //console.log("juego_var_IDBaseDatosSegundoJugador::" + juego_var_IDBaseDatosSegundoJugador);

                        x = data.deposito_bombasAliadoX;
                        deposito_bombasEnemigo.x = (1000 - x);
                        y = data.deposito_bombasAliadoY;
                        deposito_bombasEnemigo.y = (600 - y);
                        
                        x = data.torreControlAliadaX;
                        torreControlEnemiga.x = (1000 - x);
                        y = data.torreControlAliadaY;
                        torreControlEnemiga.y = (600 - y);

                        x = data.deposito_combustibleAliadoX;
                        deposito_combustibleEnemigo.x = (1000 - x);
                        y = data.deposito_combustibleAliadoY;
                        deposito_combustibleEnemigo.y = (600 - y);
                    
                        x = data.pistaAvionesAliadaX;
                        pistaAvionesEnemiga.x = (1000 - x);
                        y = data.pistaAvionesAliadaY;
                        pistaAvionesEnemiga.y = (600 - y);

                        avionEnemiga_Activa.x = pistaAvionesEnemiga.x;
                        avionEnemiga_Activa.y = pistaAvionesEnemiga.y;


                        artilleroE_1.x = ( 1000 - data.datosArtilleros1x );
                        artilleroE_1.y = ( 600 - data.datosArtilleros1y );
                        artilleroE_2.x = ( 1000 - data.datosArtilleros2x );
                        artilleroE_2.y = ( 600 - data.datosArtilleros2y );
                        artilleroE_3.x = ( 1000 - data.datosArtilleros3x );
                        artilleroE_3.y = ( 600 - data.datosArtilleros3y );
                        artilleroE_4.x = ( 1000 - data.datosArtilleros4x );
                        artilleroE_4.y = ( 600 - data.datosArtilleros4y );
                        artilleroE_5.x = ( 1000 - data.datosArtilleros5x );
                        artilleroE_5.y = ( 600 - data.datosArtilleros5y );
                        artilleroE_6.x = ( 1000 - data.datosArtilleros6x );
                        artilleroE_6.y = ( 600 - data.datosArtilleros6y );
                        
                        sendDatosWebSocket("ackTusDatosDeBase");
                        break;
                    case "datosArtillerosByTimer":
                        artilleroE_1.x = ( 1000 - data.datosArtilleros1x );
                        artilleroE_1.y = ( 600 - data.datosArtilleros1y );
                        artilleroE_2.x = ( 1000 - data.datosArtilleros2x );
                        artilleroE_2.y = ( 600 - data.datosArtilleros2y );
                        artilleroE_3.x = ( 1000 - data.datosArtilleros3x );
                        artilleroE_3.y = ( 600 - data.datosArtilleros3y );
                        artilleroE_4.x = ( 1000 - data.datosArtilleros4x );
                        artilleroE_4.y = ( 600 - data.datosArtilleros4y );
                        artilleroE_5.x = ( 1000 - data.datosArtilleros5x );
                        artilleroE_5.y = ( 600 - data.datosArtilleros5y );
                        artilleroE_6.x = ( 1000 - data.datosArtilleros6x );
                        artilleroE_6.y = ( 600 - data.datosArtilleros6y );
                        break;
            
                    case "datosArtilleroByOverlap":     
                        x = ( 1000 - data.datosArtilleroX );
                        y = ( 600 - data.datosArtilleroY );  
                        switch (data.datosArtilleroNum) {
                            case 1:
                                artilleroE_1.x = x;
                                artilleroE_1.y = y;
                                break;
                            case 2:
                                artilleroE_2.x = x;
                                artilleroE_2.y = y;
                                break;
                            case 3:
                                artilleroE_3.x = x;
                                artilleroE_3.y = y;
                                break;
                            case 4:
                                artilleroE_4.x = x;
                                artilleroE_4.y = y;
                                break;
                            case 5:
                                artilleroE_5.x = x;
                                artilleroE_5.y = y;
                                break;
                            case 6:
                                artilleroE_6.x = x;
                                artilleroE_6.y = y;
                                break;
                        }
                        
                        break;
                    
                    case "datosAvionMovimiento":
                        /* var d = new Date();    
                        var timeOrigen = data.timeOrigen;
                        console.log("diferencia entre orgine y llegada:: "+  (d.getTime() - timeOrigen) );*/

                        x = data.avionActivaX;
                        y = data.avionActivaY;
                        
                        //console.log("x::" + x +"   -   y::"+y);

                        in_avionEnemigaActivaX = (1000 - x);
                        in_avionEnemigaActivaY = (600 - y);

                        x = data.avionActivaVx;
                        y = data.avionActivaVY;

                        in_avionEnemiga_ActivaVx = ( x * (-1) );
                        in_avionEnemiga_ActivaVy = ( y * (-1) );
                        
                        avionEnemiga_Activa.resetFlip();

                        x = data.avionActivaAngulo;
                        y = (x*-1);
                        avionEnemiga_Activa.angle = y;  
                        
                        if (y==0) {
                            x = data.avionActivaFlipX;        
                            avionEnemiga_Activa.flipX = !x; 
                        }

                        avionEnemiga_Activa.x = in_avionEnemigaActivaX;
                        avionEnemiga_Activa.y = in_avionEnemigaActivaY;
                        avionEnemiga_ActivaVx = in_avionEnemiga_ActivaVx;
                        avionEnemiga_ActivaVy = in_avionEnemiga_ActivaVy;
                        setVelocidadAvion(avionEnemiga_Activa, avionEnemiga_ActivaVx, avionEnemiga_ActivaVy); 

                        
                        break;
                    case "datosAvionAltura":
                        x = data.avionActivaVx;
                        y = data.avionActivaVY;

                        in_avionEnemiga_ActivaVx = (x*-1);
                        in_avionEnemiga_ActivaVy = (y*-1);

                        avionEnemiga_ActivaVx = in_avionEnemiga_ActivaVx;
                        avionEnemiga_ActivaVy = in_avionEnemiga_ActivaVy;

                        setVelocidadAvion(avionEnemiga_Activa, avionEnemiga_ActivaVx, avionEnemiga_ActivaVy);

                        avionEnemiga_Activa.z = data.avionActivaZ;
                        switch (avionEnemiga_Activa.z) {
                            case 0:
                                avionEnemiga_Activa.scaleX=0.1;
                                avionEnemiga_Activa.scaleY=0.1;
                                break;
                            case 100:
                                avionEnemiga_Activa.scaleX=0.2;
                                avionEnemiga_Activa.scaleY=0.2;
                                break; 
                            case 200:
                                avionEnemiga_Activa.scaleX=0.3;
                                avionEnemiga_Activa.scaleY=0.3;
                                break;
                        }
                        break;
                    case "disparoAvion":
                        var data_tiempoDelUpdate = data.tiempoDelUpdate;
                        var data_lastFiredAvion = data.lastFiredAvion;

                        avionEnemiga_Activa.lastFiredAvion = data_lastFiredAvion;
                        evento_avion_disparo(data_tiempoDelUpdate, avionEnemiga_Activa);
            
                        break;
                    case "disparoAvionBomba":
                        var data_tiempoDelUpdate = data.tiempoDelUpdate;
                        var data_lastFiredBombaAvion = data.lastFiredBombaAvion;

                        avionEnemiga_Activa.lastFiredBombaAvion = data_lastFiredBombaAvion;
                        evento_avion_disparoBombaE(data_tiempoDelUpdate, avionEnemiga_Activa);

                        break;
                    case "destruiUltimoElementoBaseEnemiga":
                        var elem_baseAux;
                        if (deposito_bombasAliado.vida > 0) {
                            elem_baseAux = deposito_bombasAliado; 
                        } else {
                            if (torreControlAliada.vida > 0) {
                                elem_baseAux = torreControlAliada;
                            } else { //deposito_combustibleAliado
                                elem_baseAux = deposito_combustibleAliado;
                            }
                        }

                        elem_baseAux.body.enable = false;
                        Gpo_ElementosBaseAliada.killAndHide(elem_baseAux); 
                    
                        condicionPerdidaAliado = true;
                        
                        break;
                    case "destruiUltimoAvionEnemiga":
                        //tengo que destruir esa ultima avion mia
                        avionAliada_Activa.body.enable = false;
                        Gpo_AvionesAliados.killAndHide(avionAliada_Activa);

                        condicionPerdidaAliado = true;

                        break;
            
                    case "cambioAvionAliada_Activa":
                        switch (data.Avion_Activa_Num) {
                            case 1:
                                avionEnemiga_Activa = avionE_1;
                                break;
                            case 2:
                                avionEnemiga_Activa = avionE_2;
                                break;
                            case 3:
                                avionEnemiga_Activa = avionE_3;
                                break;
                            case 4:
                                avionEnemiga_Activa = avionE_4;
                                break;
                        }
                        

                        break;
                    case "avionAutodestruccion":
                        avionEnemiga_Activa.x = ( 1000 - data.avionActivaX );
                        avionEnemiga_Activa.y = ( 600 - data.avionActivaY );

                        isAvionActivaEnemigaViva = false;
                        setDestroyAvionAndGetNewActive(avionEnemiga_Activa, Gpo_AvionesEnemigos);
                        break;

                    case "juegoPausar":
                        quienPidioPausa = data.quienPauso;
                        tableroEstadoPartida.visible=true;
                        juegoPausar();

                        break;
                    case "juegoReanudar":
                        //var quienPidioReanudar = data.quienReanudo;
                        tableroEstadoPartida.visible=false;
                        juegoReanudar();

                        break;

                    case "destruiAlgunElementoBaseEnemiga":
                        var in_destruiAlgunElementoBaseEnemigaCual = data.destruiAlgunElementoBaseEnemigaCual;

                        switch (in_destruiAlgunElementoBaseEnemigaCual) {
                            case "depBombas":
                                if (deposito_bombasAliado.vida > 0) {
                                    deposito_bombasAliado.body.enable = false;
                                    Gpo_ElementosBaseAliada.killAndHide(deposito_bombasAliado); 
                                }    
                                break;
                            case "torreControl":
                                if (torreControlAliada.vida > 0) {
                                    torreControlAliada.body.enable = false;
                                    Gpo_ElementosBaseAliada.killAndHide(torreControlAliada); 
                                } 
                                break;
                            case "depCombustible":
                                if (deposito_combustibleAliado.vida > 0) {
                                    deposito_combustibleAliado.body.enable = false;
                                    Gpo_ElementosBaseAliada.killAndHide(deposito_combustibleAliado); 
                                } 
                                break;
                        }
                        break;
                    case "destruiAlgunAvionEnemiga":
                        /* var in_destruiAlgunAvionEnemigaCual = data.destruiAlgunAvionEnemigaCual;
                        console.log("on message entro a destruir un avion aliada...");
                        switch (in_destruiAlgunAvionEnemigaCual) {
                            case 1:
                                if (avionA_1.vida > 0) {
                                    console.log("avionA_1");
                                    avionA_1.body.enable = false;
                                    Gpo_AvionesAliados.killAndHide(avionA_1);
                                }    
                                break;
                            case 2:
                                if (avionA_2.vida > 0) {
                                    console.log("avionA_2");
                                    avionA_2.body.enable = false;
                                    Gpo_AvionesAliados.killAndHide(avionA_2);
                                } 
                                break;
                            case 3:
                                if (avionA_3.vida > 0) {
                                    console.log("avionA_3");
                                    avionA_3.body.enable = false;
                                    Gpo_AvionesAliados.killAndHide(avionA_3);
                                } 
                                break;
                            case 4:
                                if (avionA_4.vida > 0) {
                                    console.log("avionA_4");
                                    avionA_4.body.enable = false;
                                    Gpo_AvionesAliados.killAndHide(avionA_4); 
                                } 
                                break;
                        } */
                        break;

                    case "destruiAlgunArtilleroEnemigo":
                        /* var in_destruiAlgunArtilleroEnemigoCual = data.destruiAlgunArtilleroEnemigoCual;

                        switch (in_destruiAlgunArtilleroEnemigoCual) {
                            case 1:
                                if (artilleroA_1.vida > 0) {
                                    artilleroA_1.body.enable=false;
                                    Gpo_ArtillerosAliados.killAndHide(artilleroA_1);                                 
                                }    
                                break;
                            case 2:
                                if (artilleroA_2.vida > 0) {
                                    artilleroA_2.body.enable=false;
                                    Gpo_ArtillerosAliados.killAndHide(artilleroA_2);   
                                } 
                                break;
                            case 3:
                                if (artilleroA_3.vida > 0) {
                                    artilleroA_3.body.enable=false;
                                    Gpo_ArtillerosAliados.killAndHide(artilleroA_3);   
                                } 
                                break;
                            case 4:
                                if (artilleroA_4.vida > 0) {
                                    artilleroA_4.body.enable=false;
                                    Gpo_ArtillerosAliados.killAndHide(artilleroA_4);   
                                } 
                                break;
                            case 5:
                                if (artilleroA_5.vida > 0) {
                                    artilleroA_5.body.enable=false;
                                    Gpo_ArtillerosAliados.killAndHide(artilleroA_5);   
                                } 
                                break;
                            case 6:
                                if (artilleroA_6.vida > 0) {
                                    artilleroA_6.body.enable=false;
                                    Gpo_ArtillerosAliados.killAndHide(artilleroA_6);   
                                } 
                                break;
                        } */
                        break;
                    case "ackTusDatosDeBase":
                        timerTablero.remove();
                        leLlegoMisDatosDeBase = true;
                        break;

                    case "voyAGuardarAsiQueVolveAlPanel":
                
                        break;
                    case "voyASalirAsiQueGanaste":
                    
                        break;







                }

            }
        }
    }
 }
 
function sendDatosWebSocket(datosAEnviar){
    var d = new Date(); 
    switch (datosAEnviar) {
        case "datosBaseYArtillerosPriVez":
            rows =
            { "partidaId": partidaID
            , "isIngresoPorPrimeraVez": isIngresoPorPrimeraVez
            , "sessionId": mi_SessId
            , "enviaDatoDesdeElJugadorNum": jugadorMiNumero
            , "idBaseDeDatosJugador": juego_var_JugadorQueSoy_ID
            , "datos": datosAEnviar
            , "deposito_bombasAliadoX": deposito_bombasAliado.x
            , "deposito_bombasAliadoY": deposito_bombasAliado.y
            , "torreControlAliadaX": torreControlAliada.x
            , "torreControlAliadaY": torreControlAliada.y
            , "deposito_combustibleAliadoX": deposito_combustibleAliado.x
            , "deposito_combustibleAliadoY": deposito_combustibleAliado.y
            , "pistaAvionesAliadaX": pistaAvionesAliada.x
            , "pistaAvionesAliadaY": pistaAvionesAliada.y
            /////del otro lado, ademas de acomodar la pista, tiene que acomodar la primer avion activa quieta      
            , "datosArtilleros1x": artilleroA_1.x
            , "datosArtilleros1y": artilleroA_1.y
            , "datosArtilleros2x": artilleroA_2.x
            , "datosArtilleros2y": artilleroA_2.y
            , "datosArtilleros3x": artilleroA_3.x
            , "datosArtilleros3y": artilleroA_3.y
            , "datosArtilleros4x": artilleroA_4.x
            , "datosArtilleros4y": artilleroA_4.y
            , "datosArtilleros5x": artilleroA_5.x
            , "datosArtilleros5y": artilleroA_5.y
            , "datosArtilleros6x": artilleroA_6.x
            , "datosArtilleros6y": artilleroA_6.y
            };
            break;
        case "datosArtillerosByTimer":
            rows =
            { "partidaId": partidaID
            , "isIngresoPorPrimeraVez": isIngresoPorPrimeraVez
            , "sessionId": mi_SessId
            , "enviaDatoDesdeElJugadorNum": jugadorMiNumero
            , "datos": datosAEnviar
            , "datosArtilleros1x": artilleroA_1.x
            , "datosArtilleros1y": artilleroA_1.y
            , "datosArtilleros2x": artilleroA_2.x
            , "datosArtilleros2y": artilleroA_2.y
            , "datosArtilleros3x": artilleroA_3.x
            , "datosArtilleros3y": artilleroA_3.y
            , "datosArtilleros4x": artilleroA_4.x
            , "datosArtilleros4y": artilleroA_4.y
            , "datosArtilleros5x": artilleroA_5.x
            , "datosArtilleros5y": artilleroA_5.y
            , "datosArtilleros6x": artilleroA_6.x
            , "datosArtilleros6y": artilleroA_6.y
            };
            break;
        case "datosArtilleroByOverlap":            
            rows =
            { "partidaId": partidaID
            , "isIngresoPorPrimeraVez": isIngresoPorPrimeraVez
            , "sessionId": mi_SessId
            , "enviaDatoDesdeElJugadorNum": jugadorMiNumero
            , "datos": datosAEnviar
            , "datosArtilleroNum": artilleroAuxNum
            , "datosArtilleroX": artilleroAuxX
            , "datosArtilleroY": artilleroAuxY
            };
            break;
        case "datosAvionMovimiento":
            rows =
            { "partidaId": partidaID
            , "isIngresoPorPrimeraVez": isIngresoPorPrimeraVez
            //, "sessionId": mi_SessId
            , "enviaDatoDesdeElJugadorNum": jugadorMiNumero
            , "datos": datosAEnviar         
            , "avionActivaX": avionAliada_Activa.x
            , "avionActivaY": avionAliada_Activa.y
            , "avionActivaVx": avionAliada_ActivaVx
            , "avionActivaVY": avionAliada_ActivaVy
            , "avionActivaAngulo": avionAliada_Activa.angle
            , "avionActivaFlipX": avionAliada_Activa.flipX 
            
            //, "avionActivaVida": avionAliada_Activa.vida 
            //, "avionActivaCombustible": avionAliada_Activa.combustible
            //FALTA MANDAR LA VIDA;
        
            };
            break;
        case "datosAvionAltura":
            rows =
            { "partidaId": partidaID
            , "isIngresoPorPrimeraVez": isIngresoPorPrimeraVez
            , "sessionId": mi_SessId
            , "enviaDatoDesdeElJugadorNum": jugadorMiNumero
            , "datos": datosAEnviar
            , "avionActivaZ": avionAliada_Activa.z
            , "avionActivaY": avionAliada_Activa.y
            , "avionActivaVx": avionAliada_ActivaVx
            , "avionActivaVY": avionAliada_ActivaVy        
            };
            break;
        case "disparoAvion":
            rows =
            { "partidaId": partidaID
            , "isIngresoPorPrimeraVez": isIngresoPorPrimeraVez
            , "sessionId": mi_SessId
            , "enviaDatoDesdeElJugadorNum": jugadorMiNumero
            , "datos": datosAEnviar     
            , "tiempoDelUpdate": tiempoDelUpdate 
            , "lastFiredAvion": avionAliada_Activa.lastFiredAvion 
            };
            break;
        case "disparoAvionBomba":
            rows =
            { "partidaId": partidaID
            , "isIngresoPorPrimeraVez": isIngresoPorPrimeraVez
            , "sessionId": mi_SessId
            , "enviaDatoDesdeElJugadorNum": jugadorMiNumero
            , "datos": datosAEnviar
            , "tiempoDelUpdate": tiempoDelUpdate 
            , "lastFiredBombaAvion": avionAliada_Activa.lastFiredBombaAvion 
            };
            break;
        case "destruiUltimoElementoBaseEnemiga":
            ////le envio que yo destrui el ultimo elemento su base
            rows =
            { "partidaId": partidaID
            , "isIngresoPorPrimeraVez": isIngresoPorPrimeraVez
            , "sessionId": mi_SessId
            , "enviaDatoDesdeElJugadorNum": jugadorMiNumero
            , "datos": datosAEnviar
            };
            break;
        case "destruiUltimoAvionEnemiga":
            rows =
            { "partidaId": partidaID
            , "isIngresoPorPrimeraVez": isIngresoPorPrimeraVez
            , "sessionId": mi_SessId
            , "enviaDatoDesdeElJugadorNum": jugadorMiNumero
            , "datos": datosAEnviar
            };
            break;

        case "cambioAvionAliada_Activa":
            rows =
            { "partidaId": partidaID
            , "isIngresoPorPrimeraVez": isIngresoPorPrimeraVez
            , "sessionId": mi_SessId
            , "enviaDatoDesdeElJugadorNum": jugadorMiNumero
            , "datos": datosAEnviar
            , "Avion_Activa_Num": avionAliada_Activa.num
            };
            break;
        case "avionAutodestruccion":
            rows =
            { "partidaId": partidaID
            , "isIngresoPorPrimeraVez": isIngresoPorPrimeraVez
            , "sessionId": mi_SessId
            , "enviaDatoDesdeElJugadorNum": jugadorMiNumero
            , "datos": datosAEnviar
            , "avionActivaX": avionAliada_Activa.x
            , "avionActivaY": avionAliada_Activa.y
            };
            break;
        case "juegoPausar":
            rows =
            { "partidaId": partidaID
            , "isIngresoPorPrimeraVez": isIngresoPorPrimeraVez
            , "sessionId": mi_SessId
            , "enviaDatoDesdeElJugadorNum": jugadorMiNumero
            , "datos": datosAEnviar
            , "quienPauso": jugadorMiNumero
            };
            break;

        case "juegoReanudar":
            rows =
            { "partidaId": partidaID
            , "isIngresoPorPrimeraVez": isIngresoPorPrimeraVez
            , "sessionId": mi_SessId
            , "enviaDatoDesdeElJugadorNum": jugadorMiNumero
            , "datos": datosAEnviar
            , "quienReanudo": jugadorMiNumero
            };
            break;

        case "destruiAlgunElementoBaseEnemiga":
            rows =
            { "partidaId": partidaID
            , "isIngresoPorPrimeraVez": isIngresoPorPrimeraVez
            , "sessionId": mi_SessId
            , "enviaDatoDesdeElJugadorNum": jugadorMiNumero
            , "datos": datosAEnviar
            , "destruiAlgunElementoBaseEnemigaCual": destruiAlgunElementoBaseEnemigaCual
            };
            break;
        case "destruiAlgunAvionEnemiga":
            rows =
            { "partidaId": partidaID
            , "isIngresoPorPrimeraVez": isIngresoPorPrimeraVez
            , "sessionId": mi_SessId
            , "enviaDatoDesdeElJugadorNum": jugadorMiNumero
            , "datos": datosAEnviar
            , "destruiAlgunAvionEnemigaCual": destruiAlgunAvionEnemigaCual
            };
            break;

        case "destruiAlgunArtilleroEnemigo":
            rows =
            { "partidaId": partidaID
            , "isIngresoPorPrimeraVez": isIngresoPorPrimeraVez
            , "sessionId": mi_SessId
            , "enviaDatoDesdeElJugadorNum": jugadorMiNumero
            , "datos": datosAEnviar
            , "destruiAlgunArtilleroEnemigoCual": destruiAlgunArtilleroEnemigoCual
            };
            break;
        case "ackTusDatosDeBase":
            rows =
            { "partidaId": partidaID
            , "isIngresoPorPrimeraVez": isIngresoPorPrimeraVez
            , "sessionId": mi_SessId
            , "enviaDatoDesdeElJugadorNum": jugadorMiNumero
            , "datos": datosAEnviar
            };
            break;

        case "voyAGuardarAsiQueVolveAlPanel":
    
            break;
        case "voyASalirAsiQueGanaste":
        
            break;
    


    }
    
    dataJson = JSON.stringify(rows);
    //console.log("envio de datos dataJson::" + dataJson);
    if (isWSOpen) {
        webSocket.send(dataJson);
    }
}

/////----------------------------------------------------------------------------------
/////----------------------------------------------------------------------------------
/////----------------------------------------------------------------------------------






export default class s7_campoBatalla extends Phaser.Scene {
    constructor() {
        super({key: "s7_campoBatalla", active: true});
    }
    preload() {
        if (juego_var_JugadorQueSoy == 1) {
            modal = document.getElementById("iframeMenuOutId");  //opcionesDeGuardar
            modal.style.display = "none";
        }
        

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
        this.load.image("piso","FrontEnd/JuegoSaviorsOfTheSomme/assets/images/texturas/campoDeBatallaPiso.png");
        
        this.load.image("separacion","FrontEnd/JuegoSaviorsOfTheSomme/assets/images/texturas/separacion.png");
        
        imagenAvionesAliados    = this.load.image("avionNegro","FrontEnd/JuegoSaviorsOfTheSomme/assets/images/objetos/avionNegro.png");
        imagenAvionesEnemigos   = this.load.image("avionRojo","FrontEnd/JuegoSaviorsOfTheSomme/assets/images/objetos/avionRojo.png");

        this.load.image("deposito_combustible_negro","FrontEnd/JuegoSaviorsOfTheSomme/assets/images/objetos/deposito_combustible_negro.png");
        this.load.image("torreControl_negro","FrontEnd/JuegoSaviorsOfTheSomme/assets/images/objetos/torreControl_negro.png");
        this.load.image("deposito_bombas_negro","FrontEnd/JuegoSaviorsOfTheSomme/assets/images/objetos/deposito_bombas_negro.png");
        this.load.image("pistaAviones_negro","FrontEnd/JuegoSaviorsOfTheSomme/assets/images/objetos/pistaAviones_negro.png");

        this.load.image("torreControl_negro_activo","FrontEnd/JuegoSaviorsOfTheSomme/assets/images/objetos/torreControl_negro_activo.png");

        this.load.image("deposito_combustible_rojo","FrontEnd/JuegoSaviorsOfTheSomme/assets/images/objetos/deposito_combustible_rojo.png");
        this.load.image("torreControl_rojo","FrontEnd/JuegoSaviorsOfTheSomme/assets/images/objetos/torreControl_rojo.png");
        this.load.image("deposito_bombas_rojo","FrontEnd/JuegoSaviorsOfTheSomme/assets/images/objetos/deposito_bombas_rojo.png");
        this.load.image("pistaAviones_rojo","FrontEnd/JuegoSaviorsOfTheSomme/assets/images/objetos/pistaAviones_rojo.png");

        this.load.image("torreControl_rojo_activo","FrontEnd/JuegoSaviorsOfTheSomme/assets/images/objetos/torreControl_rojo_activo.png");
        
        this.load.image("artillero_negro","FrontEnd/JuegoSaviorsOfTheSomme/assets/images/objetos/artillero_negro.png");
        this.load.image("artillero_rojo","FrontEnd/JuegoSaviorsOfTheSomme/assets/images/objetos/artillero_rojo.png");

        this.load.image("artillero_negro_activo","FrontEnd/JuegoSaviorsOfTheSomme/assets/images/objetos/artillero_negro_activo.png");
        this.load.image("artillero_rojo_activo","FrontEnd/JuegoSaviorsOfTheSomme/assets/images/objetos/artillero_rojo_activo.png");

        /// ===========IMAGENES PARA VISTA LATERAL==============
        this.load.image("pisoLateral","FrontEnd/JuegoSaviorsOfTheSomme/assets/images/texturas/pisoLateral.png");
        this.load.image("separacionVertical","FrontEnd/JuegoSaviorsOfTheSomme/assets/images/texturas/separacionVertical.png");
        
        this.load.image("pistaAvionesVLateral_negro","FrontEnd/JuegoSaviorsOfTheSomme/assets/images/objetos/pistaAvionesVLateral_negro.png");
        this.load.image("pistaAvionesVLateral_roja","FrontEnd/JuegoSaviorsOfTheSomme/assets/images/objetos/pistaAvionesVLateral_roja.png");
       
        ////Para artilleros, deposito de combustible y dep de bombas usar los que tenemos
        ////para torre de control usar estas:::

        this.load.image("torreControl_VLateral_negra","FrontEnd/JuegoSaviorsOfTheSomme/assets/images/objetos/torreControl_VLateral_negra.png");
        this.load.image("torreControl_VLateral_negra_activa","FrontEnd/JuegoSaviorsOfTheSomme/assets/images/objetos/torreControl_VLateral_negra_activa.png");
        this.load.image("torreControl_VLateral_roja","FrontEnd/JuegoSaviorsOfTheSomme/assets/images/objetos/torreControl_VLateral_roja.png");
        this.load.image("torreControl_VLateral_roja_activa","FrontEnd/JuegoSaviorsOfTheSomme/assets/images/objetos/torreControl_VLateral_roja_activa.png");
        
        ///////avion vista lateral
        this.load.image("avionDerechaComunNegra","FrontEnd/JuegoSaviorsOfTheSomme/assets/images/objetos/avion vista lateral/avionDerechaComunNegra.png");
        this.load.image("avionDerechaComunRoja","FrontEnd/JuegoSaviorsOfTheSomme/assets/images/objetos/avion vista lateral/avionDerechaComunRoja.png");
        this.load.image("avionDerechaSoloDisparoNegra","FrontEnd/JuegoSaviorsOfTheSomme/assets/images/objetos/avion vista lateral/avionDerechaSoloDisparoNegra.png");
        this.load.image("avionDerechaSoloDisparoRoja","FrontEnd/JuegoSaviorsOfTheSomme/assets/images/objetos/avion vista lateral/avionDerechaSoloDisparoRoja.png");
        this.load.image("avionDerechaSoloImpactadaNegra","FrontEnd/JuegoSaviorsOfTheSomme/assets/images/objetos/avion vista lateral/avionDerechaSoloImpactadaNegra.png");
        this.load.image("avionDerechaSoloImpactadaRoja","FrontEnd/JuegoSaviorsOfTheSomme/assets/images/objetos/avion vista lateral/avionDerechaSoloImpactadaRoja.png");
        this.load.image("avionDerechaDisparandoEImpactadaNegra","FrontEnd/JuegoSaviorsOfTheSomme/assets/images/objetos/avion vista lateral/avionDerechaDisparandoEImpactadaNegra.png");
        this.load.image("avionDerechaDisparandoEImpactadaRoja","FrontEnd/JuegoSaviorsOfTheSomme/assets/images/objetos/avion vista lateral/avionDerechaDisparandoEImpactadaRoja.png");
        
        this.load.image("avionIzquierdaComunNegra","FrontEnd/JuegoSaviorsOfTheSomme/assets/images/objetos/avion vista lateral/avionIzquierdaComunNegra.png");
        this.load.image("avionIzquierdaComunRoja","FrontEnd/JuegoSaviorsOfTheSomme/assets/images/objetos/avion vista lateral/avionIzquierdaComunRoja.png");
        this.load.image("avionIzquierdaSoloDisparoNegra","FrontEnd/JuegoSaviorsOfTheSomme/assets/images/objetos/avion vista lateral/avionIzquierdaSoloDisparoNegra.png");
        this.load.image("avionIzquierdaSoloDisparoRoja","FrontEnd/JuegoSaviorsOfTheSomme/assets/images/objetos/avion vista lateral/avionIzquierdaSoloDisparoRoja.png");
        this.load.image("avionIzquierdaSoloImpactadaNegra","FrontEnd/JuegoSaviorsOfTheSomme/assets/images/objetos/avion vista lateral/avionIzquierdaSoloImpactadaNegra.png");
        this.load.image("avionIzquierdaSoloImpactadaRoja","FrontEnd/JuegoSaviorsOfTheSomme/assets/images/objetos/avion vista lateral/avionIzquierdaSoloImpactadaRoja.png");
        this.load.image("avionIzquierdaDisparandoEImpactadaNegra","FrontEnd/JuegoSaviorsOfTheSomme/assets/images/objetos/avion vista lateral/avionIzquierdaDisparandoEImpactadaNegra.png");
        this.load.image("avionIzquierdaDisparandoEImpactadaRoja","FrontEnd/JuegoSaviorsOfTheSomme/assets/images/objetos/avion vista lateral/avionIzquierdaDisparandoEImpactadaRoja.png");

        ///////avion vista frontal
        this.load.image("avionFrenteComunNegro","FrontEnd/JuegoSaviorsOfTheSomme/assets/images/objetos/avion vista frontal/avionFrenteComunNegro.png");
        this.load.image("avionFrenteComunRojo","FrontEnd/JuegoSaviorsOfTheSomme/assets/images/objetos/avion vista frontal/avionFrenteComunRojo.png");
        this.load.image("avionFrenteSoloDisparoNegra","FrontEnd/JuegoSaviorsOfTheSomme/assets/images/objetos/avion vista frontal/avionFrenteSoloDisparoNegra.png");
        this.load.image("avionFrenteSoloDisparoRojo","FrontEnd/JuegoSaviorsOfTheSomme/assets/images/objetos/avion vista frontal/avionFrenteSoloDisparoRojo.png");
        this.load.image("avionFrenteSoloImpactadaRoja","FrontEnd/JuegoSaviorsOfTheSomme/assets/images/objetos/avion vista frontal/avionFrenteSoloImpactadaNegro.png");
        this.load.image("avionFrenteDisparandoEImpactadaNegra","FrontEnd/JuegoSaviorsOfTheSomme/assets/images/objetos/avion vista frontal/avionFrenteDisparandoEImpactadaNegra.png");
        this.load.image("avionFrenteDisparandoEImpactadaRojo","FrontEnd/JuegoSaviorsOfTheSomme/assets/images/objetos/avion vista frontal/avionFrenteDisparandoEImpactadaRojo.png");


        ///////avion vista trasera
        this.load.image("avionTraseraComunNegro","FrontEnd/JuegoSaviorsOfTheSomme/assets/images/objetos/avion vista trasera/avionTraseraComunNegro.png");
        this.load.image("avionTraseraComunRoja","FrontEnd/JuegoSaviorsOfTheSomme/assets/images/objetos/avion vista trasera/avionTraseraComunRoja.png");
        this.load.image("avionTraseraSoloDisparoNegra","FrontEnd/JuegoSaviorsOfTheSomme/assets/images/objetos/avion vista trasera/avionTraseraSoloDisparoNegra.png");
        this.load.image("avionTraseraSoloDisparoRojo","FrontEnd/JuegoSaviorsOfTheSomme/assets/images/objetos/avion vista trasera/avionTraseraSoloDisparoRojo.png");
        this.load.image("avionTraseraSoloImpactadaNegro","FrontEnd/JuegoSaviorsOfTheSomme/assets/images/objetos/avion vista trasera/avionTraseraSoloImpactadaNegro.png");
        this.load.image("avionTraseraSoloImpactadaRoja","FrontEnd/JuegoSaviorsOfTheSomme/assets/images/objetos/avion vista trasera/avionTraseraSoloImpactadaRoja.png");
        this.load.image("avionTraseraDisparandoEImpactadaNegra","FrontEnd/JuegoSaviorsOfTheSomme/assets/images/objetos/avion vista trasera/avionTraseraDisparandoEImpactadaNegra.png");
        this.load.image("avionTraseraDisparandoEImpactadaRoja","FrontEnd/JuegoSaviorsOfTheSomme/assets/images/objetos/avion vista trasera/avionTraseraDisparandoEImpactadaRoja.png");


        ///estas se eliminaran
/*         this.load.image("avionNegroLateral","FrontEnd/JuegoSaviorsOfTheSomme/assets/images/objetos/airplane_3.png");
        this.load.image("avionNegroLateralActivo","FrontEnd/JuegoSaviorsOfTheSomme/assets/images/objetos/airplane_3.png");
        this.load.image("avionRojoLateral","FrontEnd/JuegoSaviorsOfTheSomme/assets/images/objetos/airplane_3.png");
        this.load.image("avionRojoLateralActivo","FrontEnd/JuegoSaviorsOfTheSomme/assets/images/objetos/airplane_3.png");
       
        this.load.image("torreControl_rojoLateral","FrontEnd/JuegoSaviorsOfTheSomme/assets/images/objetos/torreControl_VLateral_roja_activa.png");
        this.load.image("torreControl_rojoLateralActivo","FrontEnd/JuegoSaviorsOfTheSomme/assets/images/objetos/torreControl_VLateral_roja_activa.png");
        this.load.image("torreControl_negroLateral","FrontEnd/JuegoSaviorsOfTheSomme/assets/images/objetos/torreControl_VLateral_negra.png");
        this.load.image("torreControl_negroLateralActivo","FrontEnd/JuegoSaviorsOfTheSomme/assets/images/objetos/torreControl_VLateral_negra_activa.png");
        
         */


        
        //balas
        this.load.image("bala", "FrontEnd/JuegoSaviorsOfTheSomme/assets/images/objetos/bala.png");

        // EXPLOSION

        this.load.spritesheet('explosion',"FrontEnd/JuegoSaviorsOfTheSomme/assets/images/efectos/explosion2.png", { frameWidth: 64, frameHeight: 64, endFrame: 23 });
        //bombas

        this.load.image('mask',"FrontEnd/JuegoSaviorsOfTheSomme/assets/images/mapaCapaOculta/mask1.png");
        this.load.image('maskb',"FrontEnd/JuegoSaviorsOfTheSomme/assets/images/mapaCapaOculta/mask1b.png");
        this.load.image('nada',"FrontEnd/JuegoSaviorsOfTheSomme/assets/images/mapaCapaOculta/nada.png");

        ////------------IMAGENES FIN----------------------------------
        


        ////------------SPRITESHEET INICIO----------------------------------
        
        ////------------SPRITESHEET FIN----------------------------------
        


        ////------------MUSICA y SONIDOS INICIO----------------------------------
        
        this.load.audio('snd_disparo_metralleta', "FrontEnd/JuegoSaviorsOfTheSomme/assets/sounds/metralleta.m4a");
        this.load.audio('snd_impacto_metralleta', "FrontEnd/JuegoSaviorsOfTheSomme/assets/sounds/impactoMetralleta.m4a");
        this.load.audio('sonidoexplosion',"FrontEnd/JuegoSaviorsOfTheSomme/assets/sounds/explosion.m4a");
        this.load.audio('caidaYExplosionBomba',"FrontEnd/JuegoSaviorsOfTheSomme/assets/sounds/caidaYExplosionBomba.m4a");

        ///PONER IF PARA QUE CARGUE UNA U OTRA
/*         this.load.audio('musicaFondo1',"FrontEnd/JuegoSaviorsOfTheSomme/assets/sounds/musicaFondo1.m4a');
        this.load.audio('musicaFondo2',"FrontEnd/JuegoSaviorsOfTheSomme/assets/sounds/musicaFondo2.m4a');
        this.load.audio('musicaFondo3',"FrontEnd/JuegoSaviorsOfTheSomme/assets/sounds/musicaFondo3.m4a'); */
        ////------------MUSICA y SONIDOS FIN----------------------------------

        this.load.image("superOne","FrontEnd/JuegoSaviorsOfTheSomme/assets/images/objetos/superOne.png");


        ////// LOAD DE HTML MENU OUT
        ////this.load.html("menuOut","./menu.html")


    } ////CIERRE PRELOAD

    
    ////////////////---------------------------------------------------------------------------------------
    /////////////////-------------------------INICIO CREATE -----------------------------------
    /////////////////-----------------------------------------------------------------------------------
    create() {
        //elementMenuOut = this.add.dom(100, 100).createFromCache("menuOut");
        //elementMenuOut.setPerspective(800);
        console.log("juego_var_isPartidaNueva::"+juego_var_isPartidaNueva);

        sceneJuego = this;
        //juego_var_sceneJuego = this;
        // SONIDOS
        snd_explosion   = this.sound.add('sonidoexplosion');
        snd_caidaBomba  = this.sound.add('caidaYExplosionBomba');

        //ANIMACIÓN PARA LA EXPLOSIÓN
        explotar = {
            key: 'explode',
            frames: this.anims.generateFrameNumbers('explosion', { start: 0, end: 23, first: 23 }),
            frameRate: 20
        };
        this.anims.create(explotar);
        
        /// CREO GRUPOS DE OBJETOS
        Gpo_ArtillerosAliados       = this.add.group();
        Gpo_ElementosBaseAliada     = this.add.group();
        Gpo_AvionesAliados          = this.add.group();
        Gpo_AvionesEnemigos         = this.add.group();
        Gpo_ElementosBaseEnemiga    = this.add.group();        
        Gpo_ArtillerosEnemigos      = this.add.group();

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


        ////CREACION PISO ALIADO
        this.pisoAliado = this.physics.add.image(campoAliado_x, campoAliado_y, "piso").setDisplayOrigin(0, 0);
        this.pisoAliado.displayWidth    = campoAliado_w;
        this.pisoAliado.displayHeight   = campoAliado_h; 

 
        ////CREACION PISO ENEMIGO
        this.pisoEnemigo = this.physics.add.image(campoEnemigo_x, campoEnemigo_y, "piso").setDisplayOrigin(0, 0);
        this.pisoEnemigo.displayWidth   = campoEnemigo_w;
        this.pisoEnemigo.displayHeight  = campoEnemigo_h; 
  

        /////------------------CREACION DE MI BASE::--------------
            elemento_w          = 50;//deposito_combustibleAliado.width;
            elemento_espacio    = 20;    
        
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
            snd_metralleta          = this.sound.add('snd_disparo_metralleta');
            snd_impacto_metralleta  = this.sound.add('snd_impacto_metralleta');
            // DISPARO
            //this.physics.startSystem(Phaser.Physics.ARCADE);


            ////CREACION DE deposito_combustibleAliado
            ////
            if (juego_var_isPartidaNueva) {
                if (jugadorMiNumero == 1) {
                    colorBando = 'deposito_combustible_negro';
                } else {
                    colorBando = 'deposito_combustible_rojo';
                }
                deposito_combustibleAliado = this.physics.add.image(baseAliada_x, baseAliada_y, colorBando );//.setDisplayOrigin(0, 0);
                deposito_combustibleAliado.nombre = "depCombustible";
                deposito_combustibleAliado.setCollideWorldBounds(true);
                deposito_combustibleAliado.setBounce(0);
                /* var elemento_w = deposito_combustibleAliado.width;
                var elemento_espacio = 20; */
                deposito_combustibleAliado.vida = 100;
                deposito_combustibleAliado.physicsBodyType = Phaser.Physics.ARCADE;;
                Gpo_ElementosBaseAliada.add(deposito_combustibleAliado);
            }else{
                /////IF ES UNA PARTIDA CARGADA DE LAS GUARDADAS.... IGUALAR TODOS LOS DATOS DE variables juegocontenedor.jsp 
                
                if (jugadorMiNumero == 1) {
                    colorBando = 'deposito_combustible_negro';
                    baseAliada_x = parseInt(juego_var_Aliado_deposito_combustible_X);
                    baseAliada_y = parseInt(juego_var_Aliado_deposito_combustible_Y);

                } else {
                    colorBando = 'deposito_combustible_rojo';
                    baseAliada_x = (1000 - parseInt(juego_var_Aliado_deposito_combustible_X) );
                    baseAliada_y = (600 - parseInt(juego_var_Aliado_deposito_combustible_Y) );

                }
                
                deposito_combustibleAliado = this.physics.add.image(baseAliada_x, baseAliada_y, colorBando );//.setDisplayOrigin(0, 0);
                deposito_combustibleAliado.nombre = "depCombustible";
                deposito_combustibleAliado.setCollideWorldBounds(true);
                deposito_combustibleAliado.setBounce(0);
                /* var elemento_w = deposito_combustibleAliado.width;
                var elemento_espacio = 20; */
                deposito_combustibleAliado.vida = parseInt(juego_var_Aliado_deposito_combustible_Vida);
                deposito_combustibleAliado.physicsBodyType = Phaser.Physics.ARCADE;;
                Gpo_ElementosBaseAliada.add(deposito_combustibleAliado);
                

                if (deposito_combustibleAliado.vida <= 0) {
                    deposito_combustibleAliado.body.enable = false;
                    Gpo_ElementosBaseAliada.killAndHide(deposito_combustibleAliado); 
                }
            }

       
            ////CREACION DE torreControl
            if (juego_var_isPartidaNueva) {
                if (jugadorMiNumero == 1) {
                    colorBando = 'torreControl_negro';
                } else {
                    colorBando = 'torreControl_rojo';
                }
                torreControlAliada = this.physics.add.image( (baseAliada_x+elemento_w+elemento_espacio), baseAliada_y, 'torreControl_rojo');//.setDisplayOrigin(0, 0);
                torreControlAliada.nombre = "torreControl";
                torreControlAliada.bando = "Aliado";
                torreControlAliada.setCollideWorldBounds(true);
                torreControlAliada.setBounce(0);
                torreControlAliada.vida = 100;
                torreControlAliada.hayEnemigo = false;
                torreControlAliada.rangoVision = rangoVisionTorre;
                torreControlAliada.lastFiredTorre = 0;
                torreControlAliada.bullet_torre_Aliada = this.physics.add.group({
                    classType: Bullet,
                    maxSize: 3,
                    runChildUpdate: true
                });
                torreControlAliada.bullet_torre_Aliada.physicsBodyType = Phaser.Physics.ARCADE;
                torreControlAliada.setImmovable();
                torreControlAliada.physicsBodyType = Phaser.Physics.ARCADE;
                Gpo_ElementosBaseAliada.add(torreControlAliada);
            }else{
                /////IF ES UNA PARTIDA CARGADA DE LAS GUARDADAS.... IGUALAR TODOS LOS DATOS DE 
                if (jugadorMiNumero == 1) {
                    colorBando = 'torreControl_negro';
                    x = parseInt(juego_var_Aliado_torreControl_X);
                    y = parseInt(juego_var_Aliado_torreControl_Y);
                } else {
                    colorBando = 'torreControl_rojo';
                    x = (1000 - parseInt(juego_var_Aliado_torreControl_X) );
                    y = (600 - parseInt(juego_var_Aliado_torreControl_Y) );
                }
                

                torreControlAliada = this.physics.add.image(x, y, 'torreControl_rojo');//.setDisplayOrigin(0, 0);
                torreControlAliada.nombre = "torreControl";
                torreControlAliada.bando = "Aliado";
                torreControlAliada.setCollideWorldBounds(true);
                torreControlAliada.setBounce(0);
                torreControlAliada.vida = parseInt(juego_var_Aliado_torreControl_Vida);
                torreControlAliada.hayEnemigo = false;
                torreControlAliada.rangoVision = rangoVisionTorre;
                torreControlAliada.lastFiredTorre = 0;
                torreControlAliada.bullet_torre_Aliada = this.physics.add.group({
                    classType: Bullet,
                    maxSize: 3,
                    runChildUpdate: true
                });
                torreControlAliada.bullet_torre_Aliada.physicsBodyType = Phaser.Physics.ARCADE;
                torreControlAliada.setImmovable();
                torreControlAliada.physicsBodyType = Phaser.Physics.ARCADE;
                Gpo_ElementosBaseAliada.add(torreControlAliada);
                
                if (torreControlAliada.vida <= 0) {
                    torreControlAliada.body.enable = false;
                    Gpo_ElementosBaseAliada.killAndHide(torreControlAliada); 
                }

            }


            ////CREACION DE deposito_bombasAliado
            if (juego_var_isPartidaNueva) {
                if (jugadorMiNumero == 1) {
                    colorBando = 'deposito_bombas_negro';
                } else {
                    colorBando = 'deposito_bombas_rojo';
                }
                deposito_bombasAliado = this.physics.add.image( (baseAliada_x+(elemento_w*2)+(elemento_espacio*2)), baseAliada_y, colorBando);//.setDisplayOrigin(0, 0);
                deposito_bombasAliado.nombre = "depBombas";
                deposito_bombasAliado.setCollideWorldBounds(true);
                deposito_bombasAliado.setBounce(0);
                deposito_bombasAliado.vida = 100;
                deposito_bombasAliado.setImmovable();
                deposito_bombasAliado.physicsBodyType = Phaser.Physics.ARCADE;
                Gpo_ElementosBaseAliada.add(deposito_bombasAliado);
            }else{
                /////IF ES UNA PARTIDA CARGADA DE LAS GUARDADAS.... IGUALAR TODOS LOS DATOS DE 
                if (jugadorMiNumero == 1) {
                    colorBando = 'deposito_bombas_negro';
                    x = parseInt(juego_var_Aliado_deposito_bombas_X);
                    y = parseInt(juego_var_Aliado_deposito_bombas_Y);
                } else {
                    colorBando = 'deposito_bombas_rojo';
                    x = ( 1000 - parseInt(juego_var_Aliado_deposito_bombas_X) );
                    y = ( 600 - parseInt(juego_var_Aliado_deposito_bombas_Y) );
                }
                
                deposito_bombasAliado = this.physics.add.image( x, y, colorBando);//.setDisplayOrigin(0, 0);
                deposito_bombasAliado.nombre = "depBombas";
                deposito_bombasAliado.setCollideWorldBounds(true);
                deposito_bombasAliado.setBounce(0);
                deposito_bombasAliado.vida = parseInt(juego_var_Aliado_deposito_bombas_Vida);
                deposito_bombasAliado.setImmovable();
                deposito_bombasAliado.physicsBodyType = Phaser.Physics.ARCADE;
                Gpo_ElementosBaseAliada.add(deposito_bombasAliado);

                if (deposito_bombasAliado.vida <= 0) {
                    deposito_bombasAliado.body.enable = false;
                    Gpo_ElementosBaseAliada.killAndHide(deposito_bombasAliado); 
                }

            }

 

            ////CREACION DE pistaAvionesAliada
            if (juego_var_isPartidaNueva) {
                if (jugadorMiNumero == 1) {
                    colorBando = 'pistaAviones_negro';
                } else {
                    colorBando = 'pistaAviones_rojo';
                }
                x = (baseAliada_x+elemento_w+elemento_espacio);
                y = (baseAliada_y+(elemento_w/2)+(elemento_espacio*2));
                
                pistaAvionesAliada = this.physics.add.image( x, y , colorBando);     /////    baseAliada_x, (baseAliada_y+elemento_w+elemento_espacio), 'pistaAviones_negro').setDisplayOrigin(0, 0);
                pistaAvionesAliada.nombre = "pistaAviones";
                pistaAvionesAliada.setCollideWorldBounds(true);
                pistaAvionesAliada.setBounce(0);
                pistaAvionesAliada.setImmovable();
                pistaAvionesAliada.physicsBodyType = Phaser.Physics.ARCADE;
                Gpo_ElementosBaseAliada.add(pistaAvionesAliada);
            }else{
                /////IF ES UNA PARTIDA CARGADA DE LAS GUARDADAS.... IGUALAR TODOS LOS DATOS DE 
                //// ajustar la x para que se muestre en base al primer elemento de base que traje del jsp
                if (jugadorMiNumero == 1) {
                    colorBando = 'pistaAviones_negro';
                    x = (baseAliada_x+elemento_w+elemento_espacio);
                    y = (baseAliada_y+(elemento_w/2)+(elemento_espacio*2));
                } else {
                    colorBando = 'pistaAviones_rojo';
                    x = (1000 - (baseAliada_x+elemento_w+elemento_espacio)    );
                    y = (600 - (baseAliada_y+(elemento_w/2)+(elemento_espacio*2))  );
                }
                pistaAvionesAliada = this.physics.add.image( x, y , colorBando);     /////    baseAliada_x, (baseAliada_y+elemento_w+elemento_espacio), 'pistaAviones_negro').setDisplayOrigin(0, 0);
                pistaAvionesAliada.nombre = "pistaAviones";
                pistaAvionesAliada.setCollideWorldBounds(true);
                pistaAvionesAliada.setBounce(0);
                pistaAvionesAliada.setImmovable();
                pistaAvionesAliada.physicsBodyType = Phaser.Physics.ARCADE;
                Gpo_ElementosBaseAliada.add(pistaAvionesAliada);

            }


            ////CREACION DE Artilleros Aliados
            artilleroA_1 = crearArtillero("Aliado",1); Gpo_ArtillerosAliados.add(artilleroA_1);
            artilleroA_2 = crearArtillero("Aliado",2); Gpo_ArtillerosAliados.add(artilleroA_2);
            artilleroA_3 = crearArtillero("Aliado",3); Gpo_ArtillerosAliados.add(artilleroA_3);
            artilleroA_4 = crearArtillero("Aliado",4); Gpo_ArtillerosAliados.add(artilleroA_4);
            artilleroA_5 = crearArtillero("Aliado",5); Gpo_ArtillerosAliados.add(artilleroA_5);
            artilleroA_6 = crearArtillero("Aliado",6); Gpo_ArtillerosAliados.add(artilleroA_6);


            if (juego_var_isPartidaNueva == false) {
                /////IF ES UNA PARTIDA CARGADA DE LAS GUARDADAS.... IGUALAR TODOS LOS DATOS DE 
                actualizarArtilleroAliadosDesdeJSON();
            }
        /////----------^^^^^^^^^^^^CREACION DE MI BASE^^^^^^^^^^^-------------


        /////------------------CREACION DE BASE ENEMIGA::--------------
        elemento_w          = 50;//deposito_combustibleEnemigo.width;
        elemento_espacio    = 20;    
    
        base_inicioRandom_x = Phaser.Math.Between(origen_x+20,700); 
        base_inicioRandom_x = base_inicioRandom_x;

        baseEnemiga_x = base_inicioRandom_x; 
        baseEnemiga_y = Math.round( juego_var_nav_height*0.03 ); 
        baseEnemiga_w = ((elemento_w*3)+(elemento_espacio*2));//campoEnemigo_w*0.50; 
        baseEnemiga_h = 100; 

     /*    let graphics4 = this.add.graphics();
        graphics4.fillStyle(0xfc6203, 1);
        graphics4.fillRect(baseEnemiga_x, baseEnemiga_y, baseEnemiga_w ,baseEnemiga_h);
         */

        ////AJUSTE POR MAL ORIGIN DE IMAGENES Y PARA OBTENER BIEN LAS COORDENADAS EN BASE A LA IMAGEN
        baseEnemiga_x = baseEnemiga_x + (elemento_w/2); 
        baseEnemiga_y = baseEnemiga_y + (elemento_w/2); 
/*             baseEnemiga_w = ((elemento_w*3)+(elemento_espacio*2));//campoEnemigo_w*0.50; 
        baseEnemiga_h = 100; */
        
                        //completar enemigo
                        //cantidadArtillerosEnemigas += 1;
                        //arrayArtillerosEnemigos.push(this.artilleroE_1);

        ////CREACION DE pistaAvionesEnemiga
        //if (juego_var_isPartidaNueva) {
            if (jugadorMiNumero == 2) {
                colorBando = 'pistaAviones_negro';
            } else {
                colorBando = 'pistaAviones_rojo';
            }
            pistaAvionesEnemiga = this.physics.add.image((baseEnemiga_x+elemento_w+elemento_espacio), (baseEnemiga_y-elemento_espacio/2), colorBando);    
            pistaAvionesEnemiga.nombre = "pistaAviones";
            pistaAvionesEnemiga.setCollideWorldBounds(true);
            pistaAvionesEnemiga.setBounce(0);
            pistaAvionesEnemiga.setImmovable();
            pistaAvionesEnemiga.physicsBodyType = Phaser.Physics.ARCADE;
            ///////Gpo_ElementosBaseEnemiga.add(pistaAvionesEnemiga);
        //}else{
            /////IF ES UNA PARTIDA CARGADA DE LAS GUARDADAS.... IGUALAR TODOS LOS DATOS DE 
            ////se actualiza la x y la y abajo al cargar los 3 elementos de la base enemiga
       // }


        ////CREACION DE deposito_bombasEnemigo
        if (juego_var_isPartidaNueva) {
            if (jugadorMiNumero == 2) {
                colorBando = 'deposito_bombas_negro';
            } else {
                colorBando = 'deposito_bombas_rojo';
            }
            deposito_bombasEnemigo = this.physics.add.image( (baseEnemiga_x), (baseEnemiga_y+(elemento_espacio*2.5)), colorBando);//.setDisplayOrigin(0, 0);
            deposito_bombasEnemigo.nombre = "depBombas";
            deposito_bombasEnemigo.setCollideWorldBounds(true);
            deposito_bombasEnemigo.setBounce(0);
            deposito_bombasEnemigo.vida = 100;
            deposito_bombasEnemigo.setImmovable();
            deposito_bombasEnemigo.physicsBodyType = Phaser.Physics.ARCADE;
            Gpo_ElementosBaseEnemiga.add(deposito_bombasEnemigo);
        }else{
            /////IF ES UNA PARTIDA CARGADA DE LAS GUARDADAS.... IGUALAR TODOS LOS DATOS DE 
            ////datos from json

            if (jugadorMiNumero == 2) {
                colorBando = 'deposito_bombas_negro';
                x = (1000 - parseInt(juego_var_Enemigo_deposito_bombas_X) );
                y = (600 - parseInt(juego_var_Enemigo_deposito_bombas_Y) );
            
                
            } else {
                colorBando = 'deposito_bombas_rojo';
                x = parseInt(juego_var_Enemigo_deposito_bombas_X);
                y = parseInt(juego_var_Enemigo_deposito_bombas_Y);
            
            }

            //console.log("simple desde el jsp contenedor juego_var_Enemigo_deposito_bombas_X::"+ juego_var_Enemigo_deposito_bombas_X);
            //console.log(" x del parseInt juego_var_Enemigo_deposito_bombas_X::"+ x);
            deposito_bombasEnemigo = this.physics.add.image(x, y, colorBando);//.setDisplayOrigin(0, 0);
            //console.log(" luego de asignarle la x... deposito_bombasEnemigo.x::"+ deposito_bombasEnemigo.x);
            deposito_bombasEnemigo.nombre = "depBombas";
            deposito_bombasEnemigo.setCollideWorldBounds(true);
            deposito_bombasEnemigo.setBounce(0);
            deposito_bombasEnemigo.vida = parseInt(juego_var_Enemigo_deposito_bombas_Vida);
            deposito_bombasEnemigo.setImmovable();
            deposito_bombasEnemigo.physicsBodyType = Phaser.Physics.ARCADE;
            Gpo_ElementosBaseEnemiga.add(deposito_bombasEnemigo);
        
            if (deposito_bombasEnemigo.vida <= 0) {
                deposito_bombasEnemigo.body.enable = false;
                Gpo_ElementosBaseEnemiga.killAndHide(deposito_bombasEnemigo); 
            }


        }




        ////CREACION DE torreControl
        if (juego_var_isPartidaNueva) {
            if (jugadorMiNumero == 2) {
                colorBando = 'torreControl_negro';
            } else {
                colorBando = 'torreControl_rojo';
            }
            torreControlEnemiga = this.physics.add.image( (baseEnemiga_x+elemento_espacio*3.5), (baseEnemiga_y+(elemento_espacio*2.5)), colorBando);//.setDisplayOrigin(0, 0);
            torreControlEnemiga.nombre = "torreControl";
            torreControlEnemiga.bando = "Enemigo";
            torreControlEnemiga.setCollideWorldBounds(true);
            torreControlEnemiga.setBounce(0);
            torreControlEnemiga.vida = 100;
            torreControlEnemiga.hayEnemigo = false;
            torreControlEnemiga.rangoVision = rangoVisionTorre;
            torreControlEnemiga.lastFiredTorre = 0;
            torreControlEnemiga.bullet_torre_Enemiga = this.physics.add.group({
                classType: Bullet,
                maxSize: 3,
                runChildUpdate: true
            });
            torreControlEnemiga.bullet_torre_Enemiga.physicsBodyType = Phaser.Physics.ARCADE;
            torreControlEnemiga.setImmovable();
            torreControlEnemiga.physicsBodyType = Phaser.Physics.ARCADE;
            Gpo_ElementosBaseEnemiga.add(torreControlEnemiga);
        }else{
            /////IF ES UNA PARTIDA CARGADA DE LAS GUARDADAS.... IGUALAR TODOS LOS DATOS DE 
            ////datos from json
            if (jugadorMiNumero == 2) {
                colorBando = 'torreControl_negro';
                x = (1000 - parseInt(juego_var_Enemigo_torreControl_X) ) ;
                y = (600 - parseInt(juego_var_Enemigo_torreControl_Y) );

            } else {
                colorBando = 'torreControl_rojo';

                x = parseInt(juego_var_Enemigo_torreControl_X) ;
                y = parseInt(juego_var_Enemigo_torreControl_Y);

            }
            

            torreControlEnemiga = this.physics.add.image(x, y, colorBando);//.setDisplayOrigin(0, 0);
            torreControlEnemiga.nombre = "torreControl";
            torreControlEnemiga.bando = "Enemigo";
            torreControlEnemiga.setCollideWorldBounds(true);
            torreControlEnemiga.setBounce(0);
            torreControlEnemiga.vida = parseInt(juego_var_Enemigo_torreControl_Vida);
            torreControlEnemiga.hayEnemigo = false;
            torreControlEnemiga.rangoVision = rangoVisionTorre;
            torreControlEnemiga.lastFiredTorre = 0;
            torreControlEnemiga.bullet_torre_Enemiga = this.physics.add.group({
                classType: Bullet,
                maxSize: 3,
                runChildUpdate: true
            });
            torreControlEnemiga.bullet_torre_Enemiga.physicsBodyType = Phaser.Physics.ARCADE;
            torreControlEnemiga.setImmovable();
            torreControlEnemiga.physicsBodyType = Phaser.Physics.ARCADE;
            Gpo_ElementosBaseEnemiga.add(torreControlEnemiga);
        
            if (torreControlEnemiga.vida <= 0) {
                torreControlEnemiga.body.enable = false;
                Gpo_ElementosBaseEnemiga.killAndHide(torreControlEnemiga); 
            }
        }


        ////CREACION DE deposito_combustibleEnemigo
        if (juego_var_isPartidaNueva) {
            if (jugadorMiNumero == 2) {
                colorBando = 'deposito_combustible_negro';
            } else {
                colorBando = 'deposito_combustible_rojo';
            }
            deposito_combustibleEnemigo = this.physics.add.image((baseEnemiga_x+elemento_espacio*7), (baseEnemiga_y+(elemento_espacio*2.5)), colorBando);//.setDisplayOrigin(0, 0);
            deposito_combustibleEnemigo.nombre = "depCombustible";
            deposito_combustibleEnemigo.setCollideWorldBounds(true);
            deposito_combustibleEnemigo.setBounce(0);
            // var elemento_w = deposito_combustibleAliado.width;
            //var elemento_espacio = 20; 
            deposito_combustibleEnemigo.vida = 100;
            deposito_combustibleEnemigo.physicsBodyType = Phaser.Physics.ARCADE;;
            Gpo_ElementosBaseEnemiga.add(deposito_combustibleEnemigo);
        }else{
            /////IF ES UNA PARTIDA CARGADA DE LAS GUARDADAS.... IGUALAR TODOS LOS DATOS DE 
            ////datos from json

            if (jugadorMiNumero == 2) {
                colorBando = 'deposito_combustible_negro';
                x = (1000 - parseInt(juego_var_Enemigo_deposito_combustible_X));
                y = (600 - parseInt(juego_var_Enemigo_deposito_combustible_Y));
            } else {
                colorBando = 'deposito_combustible_rojo';
                x = parseInt(juego_var_Enemigo_deposito_combustible_X);
                y = parseInt(juego_var_Enemigo_deposito_combustible_Y);
            }
            
            deposito_combustibleEnemigo = this.physics.add.image(x, y, colorBando);//.setDisplayOrigin(0, 0);
            deposito_combustibleEnemigo.nombre = "depCombustible";
            deposito_combustibleEnemigo.setCollideWorldBounds(true);
            deposito_combustibleEnemigo.setBounce(0);
            // var elemento_w = deposito_combustibleAliado.width;
            //var elemento_espacio = 20; 
            deposito_combustibleEnemigo.vida = parseInt(juego_var_Enemigo_deposito_combustible_Vida);
            deposito_combustibleEnemigo.physicsBodyType = Phaser.Physics.ARCADE;;
            Gpo_ElementosBaseEnemiga.add(deposito_combustibleEnemigo);


            if (deposito_combustibleEnemigo.vida <= 0) {
                deposito_combustibleEnemigo.body.enable = false;
                Gpo_ElementosBaseEnemiga.killAndHide(deposito_combustibleEnemigo); 
            }
        }


        if (juego_var_isPartidaNueva == false) {
            
            ////actualizo los datos de pista en base al elemento de la base
            //console.log(" antes de actualizar pista... deposito_bombasEnemigo.x::"+ deposito_bombasEnemigo.x);
            pistaAvionesEnemiga.x = deposito_bombasEnemigo.x +elemento_w+elemento_espacio;
            pistaAvionesEnemiga.y = (   (deposito_bombasEnemigo.y) - ( (elemento_espacio*2.5) )   );

            ////deposito_bombasEnemigo = this.physics.add.image( (baseEnemiga_x), (baseEnemiga_y+(elemento_espacio*2.5)), colorBando)
            ////pistaAvionesEnemiga = this.physics.add.image((baseEnemiga_x+elemento_w+elemento_espacio), (baseEnemiga_y-elemento_espacio/2), colorBando);    
            

            /////actualizo los datos de mi base en base a la pista baseEnemiga_x   baseEnemiga_y
            baseEnemiga_x = pistaAvionesEnemiga.x;
            baseEnemiga_y = pistaAvionesEnemiga.y;

        }



        ////CREACION DE Artilleros Enemigos
        artilleroE_1 = crearArtillero("Enemigo",1); Gpo_ArtillerosEnemigos.add(artilleroE_1);
        artilleroE_2 = crearArtillero("Enemigo",2); Gpo_ArtillerosEnemigos.add(artilleroE_2);
        artilleroE_3 = crearArtillero("Enemigo",3); Gpo_ArtillerosEnemigos.add(artilleroE_3);
        artilleroE_4 = crearArtillero("Enemigo",4); Gpo_ArtillerosEnemigos.add(artilleroE_4);
        artilleroE_5 = crearArtillero("Enemigo",5); Gpo_ArtillerosEnemigos.add(artilleroE_5);
        artilleroE_6 = crearArtillero("Enemigo",6); Gpo_ArtillerosEnemigos.add(artilleroE_6);
            
        if (juego_var_isPartidaNueva == false) {
            /////IF ES UNA PARTIDA CARGADA DE LAS GUARDADAS.... IGUALAR TODOS LOS DATOS DE 
            actualizarArtilleroEnemigosDesdeJSON();
        }
        /////----------^^^^^^^^^^^^CREACION DE BASE ENEMIGA^^^^^^^^^^^-------------

        
        /////----------------Inicio de CREACION DE AVIONES :: aviones ::--------------
        //if (juego_var_isPartidaNueva) {
            avionA_1= new Avion("Aliado",1); Gpo_AvionesAliados.add(avionA_1);
            avionA_2= new Avion("Aliado",2); Gpo_AvionesAliados.add(avionA_2);
            avionA_3= new Avion("Aliado",3); Gpo_AvionesAliados.add(avionA_3);
            avionA_4= new Avion("Aliado",4); Gpo_AvionesAliados.add(avionA_4);

            avionE_1= new Avion("Enemigo",1); Gpo_AvionesEnemigos.add(avionE_1);
            avionE_2= new Avion("Enemigo",2); Gpo_AvionesEnemigos.add(avionE_2);
            avionE_3= new Avion("Enemigo",3); Gpo_AvionesEnemigos.add(avionE_3);
            avionE_4= new Avion("Enemigo",4); Gpo_AvionesEnemigos.add(avionE_4);
        //}else{

        if (juego_var_isPartidaNueva == false) {
            /////IF ES UNA PARTIDA CARGADA DE LAS GUARDADAS.... IGUALAR TODOS LOS DATOS DE 
            actualizarAvionesAliadosDesdeJSON();
            actualizarAvionesEnemigosDesdeJSON();
        
            /////IF ES UNA PARTIDA CARGADA DE LAS GUARDADAS.... IGUALAR TODOS LOS DATOS DE 
            //avionesCrearDesdeJSON();

        }
   
        //// CREAR el puntero y hacerla apuntar a la activa
        avionAliada_Activa = getProximoAvionActivo(Gpo_AvionesAliados);
        avionEnemiga_Activa = getProximoAvionActivo(Gpo_AvionesEnemigos);

        if (juego_var_isPartidaNueva == false) {
            if (jugadorMiNumero == 2) {
                avionAliada_Activa.x  = (1000 - avionAliada_Activa.x ) ;
                avionAliada_Activa.y  = (600 -  avionAliada_Activa.y  ) ; 
    
                pistaAvionesAliada.x  = (1000 - pistaAvionesAliada.x ) ;  
                pistaAvionesAliada.y  = (600 -  pistaAvionesAliada.y  ) ;
    
                //avionEnemiga_Activa.x  = (1000 - avionEnemiga_Activa.x ) ;
                //avionEnemiga_Activa.y  = (600 -  avionEnemiga_Activa.y  ) ; 

            }
        }
        


        /////----------^^^^^^^^^^^Fin de CREACION DE AVIONES :: aviones ^^^^^^^^^^-------------

        ////CREACION DE MASCARA 
        spotlight = this.make.sprite({
            x: 0,
            y: 0,
            key: 'mask',
            add: false,
        });
        spotlight_instance = new Phaser.Display.Masks.BitmapMask(this, spotlight);

        /// APLICO SOMBRA A AQUELLO QUE QUIERA ENMASCARAR: ARTILLEROS, ELEMENTOS DE BASE+AVIONES

        
        avionEnemiga_Activa.mask = spotlight_instance;
        this.pisoEnemigo.mask = spotlight_instance;
        artilleroE_1.mask = spotlight_instance;
        artilleroE_2.mask = spotlight_instance;
        artilleroE_3.mask = spotlight_instance;
        artilleroE_4.mask = spotlight_instance;
        artilleroE_5.mask = spotlight_instance;
        artilleroE_6.mask = spotlight_instance;
        torreControlEnemiga.mask = spotlight_instance;
        pistaAvionesEnemiga.mask = spotlight_instance;
        deposito_bombasEnemigo.mask = spotlight_instance;
        deposito_combustibleEnemigo.mask = spotlight_instance;
 

        ///aplico a los elementos enemigos


        ////CREACION SEPARACION DE CAMPOS
        this.separacionCampos = this.physics.add.image(lineaSeparacion_x, lineaSeparacion_y-50, "separacion").setDisplayOrigin(0, 0);
        this.separacionCampos.displayWidth = lineaSeparacion_w;
        this.separacionCampos.displayHeight = lineaSeparacion_h+100; 
        this.separacionCampos.setDepth(3);

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

        this.avionAutoDestruccion = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.N);

        this.flecha_right  = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
        this.flecha_left   =  this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        this.flecha_up     = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
        this.flecha_down   =  this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
        this.superBorn     =  this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Y);
        this.superCenter   =  this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.U);
        this.superKill     =  this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.I);
        
		this.teclaPausaMenu = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.P);
        this.teclaSwitchVista = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.L);
        /// LAS BOMBAS SE DIBUJAN AQUI POR ORDEN DE CREACION DE IMAGENES
        /// BOMBA ALIADA Y ENEMIGA
        bombaBulletA = this.physics.add.image(3000,0,"bala");
        bombaBulletA.physicsBodyType = Phaser.Physics.ARCADE;
        bombaBulletA.body.enable=false;
        bombaBulletA.scaleX=4;
        bombaBulletA.scaleY=4;
        bombaBulletE = this.physics.add.image(3000,0,"bala");
        bombaBulletE.physicsBodyType = Phaser.Physics.ARCADE;
        bombaBulletE.body.enable=false;
        bombaBulletE.scaleX=4;
        bombaBulletE.scaleY=4;
        

        //// CREACION DE COLISIONES Y SOLAPAMIENTOS

        // OVERLAP UTIL PARA ORDENAMIENTO DE ARTILLEROS EN TABLERO
        this.physics.add.overlap(Gpo_ArtillerosAliados, Gpo_ArtillerosAliados, overlapEvent_artilleroOnCollide, null, this);
        this.physics.add.overlap(Gpo_ArtillerosAliados, Gpo_ElementosBaseAliada, overlapEvent_artilleroOnCollide, null, this);
        

        // CHOQUE ENTRE AVIONES
        this.physics.add.overlap(Gpo_AvionesAliados, Gpo_AvionesEnemigos, overlapEvent_choqueAviones, null, this);
        this.physics.add.overlap(Gpo_AvionesEnemigos, Gpo_AvionesAliados, overlapEvent_choqueAviones, null, this);
       
        // DISPARO DESDE AVION ENEMIGO.
        // 1  --->  HABRIA QUE CREAR UN GPO DE ARMAS AVIONES ALIADO Y ENEMIGA. ASI COMO PARA BOMBAS.
        this.physics.add.overlap(avionEnemiga_Activa.bullets_avion_Enemigo, Gpo_AvionesAliados, overlapEvent_impactoBalaEnAvionA, null, this);
        this.physics.add.overlap(avionE_1.bullets_avion_Enemigo, Gpo_AvionesAliados, overlapEvent_impactoBalaEnAvionA, null, this);
        this.physics.add.overlap(avionE_2.bullets_avion_Enemigo, Gpo_AvionesAliados, overlapEvent_impactoBalaEnAvionA, null, this);
        this.physics.add.overlap(avionE_3.bullets_avion_Enemigo, Gpo_AvionesAliados, overlapEvent_impactoBalaEnAvionA, null, this);
        this.physics.add.overlap(avionE_4.bullets_avion_Enemigo, Gpo_AvionesAliados, overlapEvent_impactoBalaEnAvionA, null, this);
                
        this.physics.add.overlap(avionEnemiga_Activa.bullets_avion_Enemigo, Gpo_ArtillerosAliados, overlapEvent_impactoBalaEnArtilleroA, null, this);
        this.physics.add.overlap(avionEnemiga_Activa.bullets_avion_Enemigo, Gpo_ElementosBaseAliada, overlapEvent_impactoBalaEnElementoBaseA, null, this);
        this.physics.add.overlap(bombaBulletE, Gpo_ElementosBaseAliada, overlapEvent_impactoBombaEnElementoBaseA, null, this);
        this.physics.add.overlap(bombaBulletE, Gpo_ArtillerosAliados, overlapEvent_impactoBombaEnArtilleroA, null, this); 

        // DISPARO DESDE AVION ALIADO
        this.physics.add.overlap(avionAliada_Activa.bullets_avion_Aliado, Gpo_AvionesEnemigos, overlapEvent_impactoBalaEnAvionE, null, this);
        this.physics.add.overlap(avionA_1.bullets_avion_Aliado, Gpo_AvionesEnemigos, overlapEvent_impactoBalaEnAvionE, null, this);
        this.physics.add.overlap(avionA_2.bullets_avion_Aliado, Gpo_AvionesEnemigos, overlapEvent_impactoBalaEnAvionE, null, this);
        this.physics.add.overlap(avionA_3.bullets_avion_Aliado, Gpo_AvionesEnemigos, overlapEvent_impactoBalaEnAvionE, null, this);
        this.physics.add.overlap(avionA_4.bullets_avion_Aliado, Gpo_AvionesEnemigos, overlapEvent_impactoBalaEnAvionE, null, this);
                
        this.physics.add.overlap(avionAliada_Activa.bullets_avion_Aliado, Gpo_ArtillerosEnemigos, overlapEvent_impactoBalaEnArtilleroE, null, this);
        this.physics.add.overlap(avionAliada_Activa.bullets_avion_Aliado, Gpo_ElementosBaseEnemiga, overlapEvent_impactoBalaEnElementoBaseE, null, this);
        this.physics.add.overlap(bombaBulletA, Gpo_ElementosBaseEnemiga, overlapEvent_impactoBombaEnElementoBaseE, null, this);
        this.physics.add.overlap(bombaBulletA, Gpo_ArtillerosEnemigos, overlapEvent_impactoBombaEnArtilleroE, null, this);

        // DISPARO DESDE TORRE ALIADA
        this.physics.add.overlap(torreControlAliada.bullet_torre_Aliada, Gpo_AvionesEnemigos, overlapEvent_impactoBalaEnAvionE, null, this);
        // DISPARO DESDE TORRE ENEMIGA
        this.physics.add.overlap(torreControlEnemiga.bullet_torre_Enemiga, Gpo_AvionesAliados, overlapEvent_impactoBalaEnAvionA, null, this);

        // DISPARO DESDE ARTILLEROS ALIADOS
        this.physics.add.overlap(artilleroA_1.bullets_artillero_Aliada, Gpo_AvionesEnemigos, overlapEvent_impactoBalaEnAvionE, null, this);
        this.physics.add.overlap(artilleroA_2.bullets_artillero_Aliada, Gpo_AvionesEnemigos, overlapEvent_impactoBalaEnAvionE, null, this);
        this.physics.add.overlap(artilleroA_3.bullets_artillero_Aliada, Gpo_AvionesEnemigos, overlapEvent_impactoBalaEnAvionE, null, this);
        this.physics.add.overlap(artilleroA_4.bullets_artillero_Aliada, Gpo_AvionesEnemigos, overlapEvent_impactoBalaEnAvionE, null, this);
        this.physics.add.overlap(artilleroA_5.bullets_artillero_Aliada, Gpo_AvionesEnemigos, overlapEvent_impactoBalaEnAvionE, null, this);
        this.physics.add.overlap(artilleroA_6.bullets_artillero_Aliada, Gpo_AvionesEnemigos, overlapEvent_impactoBalaEnAvionE, null, this);
        
        this.physics.add.overlap(artilleroE_1.bullets_artillero_Enemigo, Gpo_AvionesAliados, overlapEvent_impactoBalaEnAvionA, null, this); 
        this.physics.add.overlap(artilleroE_2.bullets_artillero_Enemigo, Gpo_AvionesAliados, overlapEvent_impactoBalaEnAvionA, null, this); 
        this.physics.add.overlap(artilleroE_3.bullets_artillero_Enemigo, Gpo_AvionesAliados, overlapEvent_impactoBalaEnAvionA, null, this); 
        this.physics.add.overlap(artilleroE_4.bullets_artillero_Enemigo, Gpo_AvionesAliados, overlapEvent_impactoBalaEnAvionA, null, this); 
        this.physics.add.overlap(artilleroE_5.bullets_artillero_Enemigo, Gpo_AvionesAliados, overlapEvent_impactoBalaEnAvionA, null, this); 
        this.physics.add.overlap(artilleroE_6.bullets_artillero_Enemigo, Gpo_AvionesAliados, overlapEvent_impactoBalaEnAvionA, null, this); 


        this.physics.add.overlap(avionAliada_Activa, pistaAvionesAliada, overlapEvent_avionSobrePistaBase, null, this);
        this.physics.add.overlap(avionEnemiga_Activa, pistaAvionesEnemiga, overlapEvent_avionSobrePistaBase, null, this); 

        this.physics.add.overlap(avionA_1, pistaAvionesAliada, overlapEvent_avionSobrePistaBase, null, this);
        this.physics.add.overlap(avionA_2, pistaAvionesAliada, overlapEvent_avionSobrePistaBase, null, this); 
        this.physics.add.overlap(avionA_3, pistaAvionesAliada, overlapEvent_avionSobrePistaBase, null, this);
        this.physics.add.overlap(avionA_4, pistaAvionesAliada, overlapEvent_avionSobrePistaBase, null, this); 
        this.physics.add.overlap(avionE_1, pistaAvionesEnemiga, overlapEvent_avionSobrePistaBase, null, this);
        this.physics.add.overlap(avionE_2, pistaAvionesEnemiga, overlapEvent_avionSobrePistaBase, null, this); 
        this.physics.add.overlap(avionE_3, pistaAvionesEnemiga, overlapEvent_avionSobrePistaBase, null, this);
        this.physics.add.overlap(avionE_4, pistaAvionesEnemiga, overlapEvent_avionSobrePistaBase, null, this); 

        ///// CREACION DE TABLERO AVION
        tableroAvion = this.add.text(20, 20, 'Move the mouse', { font: '20px Courier Bold', fill: '#00ff00' });
        tableroAvion.setDepth(9);
        tableroAvionCuidado = this.add.text(20, 103, 'Combustible:', { font: '20px Courier Bold', fill: '#ff0000' });
        tableroAvionCuidado.setDepth(9);
        ///// CREACION DE TABLERO BASE
        tableroBase = this.add.text(20, 350, 'Move the mouse', { font: '20px Courier Bold', fill: '#ffffff' });
        tableroBase.setDepth(9);
        tableroBaseCuidado = this.add.text(20, 452, 'Cant. Aviones:', { font: '21px Courier Bold', fill: '#ff0000' });
        tableroBaseCuidado.setDepth(9);
        
        tableroEstadoPartida = this.add.text(380, 270, 'Aqui va el estado de la partida', { font: '40px Courier Bold', fill: '#ff0000'});
        tableroEstadoPartida.visible=false;
        tableroEstadoPartida.setDepth(9);
        
        

        /// CREO UN TIMER PARA QUE CADA 15 SEGS MUEVA LOS ARTILLEROS RANDOM.
        timer = this.time.addEvent({
            delay: 15000,   // EN MILI SEGUNDOS
            //callback: callback,
            callback: moverGrupodeArtilleros,
            args: [Gpo_ArtillerosAliados.getChildren()],
            callbackScope: Gpo_ArtillerosAliados,
            loop: true,
        });
        /// CREO UN TIMER PARA QUE CADA 15 SEGS MUEVA LOS ARTILLEROS RANDOM.
        timerTablero = this.time.addEvent({
            delay: 1000,   // EN MILI SEGUNDOS
            //callback: callback,
            callback: compartirCoordenadasBase,
            args: [Gpo_ElementosBaseAliada.getChildren()],
            callbackScope: Gpo_ElementosBaseAliada,
            loop: true,
        });
        //args: [Gpo_ArtillerosAliados.getChildren(),Gpo_AvionesEnemigos.getChildren()], 

        isContinuarUpdate = true;

        
        /// VISTA LATERAL CARGO IMAGENES CORRESPONDIENTES

        cargaElementosVistaLateral();

        //avionAliada_Activa.anims.stop();
        //avionEnemiga_Activa.anims.stop();

        termineDeCrearElTablero = true;

    }////CIERRE CREATE
    ////////////////---------------------------------------------------------------------------------------
    /////////////////-------------------------FIN CREATE -----------------------------------
    /////////////////-----------------------------------------------------------------------------------


    /////////////////---------------------------------------------------------------------------------------
    /////////////////-------------------------INICIO UPDATE-----------------------------------
    /////////////////-----------------------------------------------------------------------------------
    update(time, delta) {
        if (!isJuegoEnPausa) {
            
       
            tiempoDelUpdate = time;

            isContinuarUpdate = validarCondicionesPartidaAliada();
            if (isContinuarUpdate) {


                ///// MOVIMIENTO DE AVION EN BASE A BOTONES
                ////LUEGO SACAR FISICAS PARA FUERA DEL IF DE BOTONES... ya que por mas que no muevas tu avion, tiene que recalcular en base al websockets los eventosasd

                modificoDireccion = false;
                getUnidadDesplazamiento(avionAliada_Activa);

                /* if(this.right.isDown || this.left.isDown || this.up.isDown || this.down.isDown){
                    avionAliada_Activa.enPista = false;

                    var vX, vY;
                    var diagonal=false;
                    if(this.right.isDown) {
                        ultimaTeclaPresionada = "right";
                        avionAliada_Activa.x = avionAliada_Activa.x + avionAliada_Activa.unidadDeVelocidad;//++;
                        avionAliada_Activa.resetFlip();
                        if (this.down.isDown){
                            // avionAliada_Activa.x = avionAliada_Activa.x + unidadDeVelocidad;//++; 
                            avionAliada_Activa.y = avionAliada_Activa.y + avionAliada_Activa.unidadDeVelocidad;//++;
                            avionAliada_Activa.angle=45;
                            vX = 10;vY = 10;
                        }else{
                            if (this.up.isDown){
                                // avionAliada_Activa.x = avionAliada_Activa.x + unidadDeVelocidad;//++; 
                                avionAliada_Activa.y = avionAliada_Activa.y - avionAliada_Activa.unidadDeVelocidad;//--;
                                avionAliada_Activa.angle=-45;
                                vX = 10;vY = -10;
                            }else{avionAliada_Activa.angle=0;diagonal=true;vX = 10;vY = 0;}
                        ;}                
                    } else if(this.left.isDown) {
                        ultimaTeclaPresionada = "left";
                        avionAliada_Activa.x = avionAliada_Activa.x - avionAliada_Activa.unidadDeVelocidad;//--;
                        avionAliada_Activa.resetFlip();
                        avionAliada_Activa.flipX=true;
                        if (this.down.isDown){
                            // avionAliada_Activa.x = avionAliada_Activa.x - unidadDeVelocidad;//--; 
                            avionAliada_Activa.y = avionAliada_Activa.y + avionAliada_Activa.unidadDeVelocidad;//++;
                            avionAliada_Activa.angle=-45;
                            vX = -10;vY = 10;
                        }else{
                            if (this.up.isDown){
                                // avionAliada_Activa.x = avionAliada_Activa.x - unidadDeVelocidad;//--; 
                                avionAliada_Activa.y = avionAliada_Activa.y - avionAliada_Activa.unidadDeVelocidad;//--;
                                avionAliada_Activa.angle=45;
                                vX = -10;vY = -10;
                            }else{avionAliada_Activa.angle=0;diagonal=true; vX = -10;vY = 0;}
                        ;}           
                    } else if(this.up.isDown) {
                        ultimaTeclaPresionada = "up";
                        avionAliada_Activa.y = avionAliada_Activa.y - avionAliada_Activa.unidadDeVelocidad;//--;
                        avionAliada_Activa.resetFlip();
                        avionAliada_Activa.angle=-90;
                        vX = 0;
                        vY = -10;
                    } else if(this.down.isDown) {
                        ultimaTeclaPresionada = "down";
                        avionAliada_Activa.y = avionAliada_Activa.y + avionAliada_Activa.unidadDeVelocidad;//++;
                        avionAliada_Activa.resetFlip();
                        avionAliada_Activa.angle=90;
                        vX = 0;
                        vY = 10;
                    }
                    
                    avionAliada_ActivaVx = vX;
                    avionAliada_ActivaVy = vY;

                    setVelocidadAvion(avionAliada_Activa, vX, vY);
                    modificoDireccion = true; 








                    
                    //cursors = this.input.keyboard.createCursorKeys();
                    //var duration = this.cursors.getDuration();
                    //console.log(this.duration);
                    

                    
                //  if (ultimaTeclaPresionada != ultimaTeclaPresionadaAux) {
                //    ultimaTeclaPresionadaAux = ultimaTeclaPresionada;
                //     sendDatosWebSocket("datosAvionMovimiento");
                // } 
                    


                }*/
                ////FIN IF DE BOTONES DE DIRECCION
                



                //// Actualizacion de mascara en base a avionAliada_Activa x y
                ////Nota: aunque el movimiento de la avion se saque para eventos de boton, esta actualizacion se tiene que hacer constantemente en el update debido a la velocidad del avion (incersia)
                spotlight.x = avionAliada_Activa.x;
                spotlight.y = avionAliada_Activa.y+2;

                //// ACTUALIZAR TEXTO DE TABLERO AVION:
                
                var textoAux = "";
                if (avionAliada_Activa.tieneBomba) {
                    textoAux = "Ya tienes bomba cargada";
                } else {
                    textoAux = "Pasa sobre tu pista volando bajo para recargar";
                }
               /*  if (avionAliada_Activa.cantCombustible <= ) {
                    
                } else {
                    
                } */
                if (avionAliada_Activa.cantCombustible < (avionCombustibleDefault*0.20) ) {
                    tableroAvion.setText([
                        'DATOS AVION:',
            /*           'x: ' + avionAliada_Activa.body.speed,
                        'y: ' + avionAliada_Activa.y, */
                        'Altura: ' + avionAliada_Activa.z,
                        'Bomba: ' + textoAux,
                        'Vida: ' + avionAliada_Activa.vida,
                    ]);
                    tableroAvionCuidado.visible = true;
                    tableroAvionCuidado.setText([
                        'Combustible: ' + avionAliada_Activa.cantCombustible,
                    ]);
                } else {
                    tableroAvion.setText([
                        'DATOS AVION:',
            /*           'x: ' + avionAliada_Activa.body.speed,
                        'y: ' + avionAliada_Activa.y, */
                        'Altura: ' + avionAliada_Activa.z,
                        'Bomba: ' + textoAux,
                        'Vida: ' + avionAliada_Activa.vida,
                        'Combustible: ' + avionAliada_Activa.cantCombustible,
                    ]);
                    tableroAvionCuidado.visible = false;
                }


                
                ////descuento de combustible
                if (avionAliada_Activa.enPista == false) {
                    setDescuentoCombustibleAvionUPDATE(1, avionAliada_Activa);
                }
                
                /////---------FISICAS DE AVIONES y BALAS ENEMIGAS------

                setMaksAvion(avionEnemiga_Activa);

                //// ACTUALIZAR TEXTO DE TABLERO BASE:
                if (Gpo_AvionesAliados.getTotalUsed() <= 1) {
                    tableroBase.setText([
                        'DATOS BASE:',
                        'Vida de Torre: ' + torreControlAliada.vida + '%',
                        'Vida de Dep. Combustible: ' + deposito_combustibleAliado.vida + '%',
                        'Vida de Dep. Bombas: ' + deposito_bombasAliado.vida + '%',
                        'Cant. Artilleros: ' + Gpo_ArtillerosAliados.getTotalUsed(),
                    ]);
                    tableroBaseCuidado.visible = true;
                    tableroBaseCuidado.setText([
                        'Cant. Aviones: ' + Gpo_AvionesAliados.getTotalUsed(),
                    ]);
                } else {
                    tableroBase.setText([
                        'DATOS BASE:',
                        'Vida de Torre: ' + torreControlAliada.vida + '%',
                        'Vida de Dep. Combustible: ' + deposito_combustibleAliado.vida + '%',
                        'Vida de Dep. Bombas: ' + deposito_bombasAliado.vida + '%',
                        'Cant. Artilleros: ' + Gpo_ArtillerosAliados.getTotalUsed(),
                        'Cant. Aviones: ' + Gpo_AvionesAliados.getTotalUsed(),
                    ]);
                    tableroBaseCuidado.visible = false;
                }


                
                if (avionAliada_Activa.vida > 0) {
                    ////avionAliada_Activa = avionAliada_Activa;
                    //////DETECTAR SI SE QUEDA SIN NAFTA EXPLOTA
                    hayCombustible(avionAliada_Activa);
                }else{
                    avionAliada_Activa.body.enable = false;
                }

                /*
                tiempoDelUpdate = time;
                */

                /////DISPARO AVION   ////se intento pasar a un evento pero empeora la jugabilidad
                /* if ((this.disparoAvion.isDown) && (tiempoDelUpdate > avionAliada_Activa.lastFiredAvion)){
                    evento_avion_disparo(tiempoDelUpdate, avionAliada_Activa);
                    sendDatosWebSocket("disparoAvion");
                } */
                //console.log(avionAliada_Activa.lastFiredBombaAvion);
                /* if ((this.disparoAvionBomba.isDown) && (tiempoDelUpdate > avionAliada_Activa.lastFiredBombaAvion)){
                    evento_avion_disparoBomba(tiempoDelUpdate, avionAliada_Activa);
                }  */

                //////DETECTAR SI AVIONES ENEMIGAS PASAN SOBRE ALGUN ARTILLERO
                hayEnemigoEnRangoArtillero(time);
                hayAliadoEnRangoArtillero(time);

                //////DETECTAR SI AVIONES ENEMIGAS PASAN SOBRE LA TORRE
                hayEnemigoEnRangoTorreDeControl(time);
                hayAliadoEnRangoTorreDeControl(time);

            }else{
                


                if (mostrarAlert) {
                    if (condicionPerdidaAliado) {
                        tableroAvionCuidado.visible = false;
                        tableroEstadoPartida.visible=true;
                        //tableroAvion.visible = false;
                        //tableroAvion = this.add.text(380, 280, 'Move the mouse', { font: '36px Courier Bold', fill: '#ff0000' });
                        tableroEstadoPartida.x = 370;
                        tableroEstadoPartida.setText([
                            '¡¡¡PERDISTE!!',
                        ]);
                        tableroEstadoPartida.setColor('#FF0040');
                        //// ACTUALIZAR TEXTO DE TABLERO BASE:
                        if (Gpo_AvionesAliados.getTotalUsed() <= 1) {
                            tableroBase.setText([
                                'DATOS BASE:',
                                'Vida de Torre: ' + torreControlAliada.vida + '%',
                                'Vida de Dep. Combustible: ' + deposito_combustibleAliado.vida + '%',
                                'Vida de Dep. Bombas: ' + deposito_bombasAliado.vida + '%',
                                'Cant. Artilleros: ' + Gpo_ArtillerosAliados.getTotalUsed(),
                            ]);
                            tableroBaseCuidado.visible = true;
                            tableroBaseCuidado.setText([
                                'Cant. Aviones: ' + Gpo_AvionesAliados.getTotalUsed(),
                            ]);
                        } else {
                            tableroBase.setText([
                                'DATOS BASE:',
                                'Vida de Torre: ' + torreControlAliada.vida + '%',
                                'Vida de Dep. Combustible: ' + deposito_combustibleAliado.vida + '%',
                                'Vida de Dep. Bombas: ' + deposito_bombasAliado.vida + '%',
                                'Cant. Artilleros: ' + Gpo_ArtillerosAliados.getTotalUsed(),
                                'Cant. Aviones: ' + Gpo_AvionesAliados.getTotalUsed(),
                            ]);
                            tableroBaseCuidado.visible = false;
                        }
                    } else { //perdio el otro
                        tableroAvionCuidado.visible = false;
                        tableroEstadoPartida.visible=true;
                        //tableroAvion = this.add.text(380, 280, 'Move the mouse', { font: '36px Courier Bold', fill: '#FFFFFF' });
                        tableroEstadoPartida.x = 380;
                        tableroEstadoPartida.setText([
                            '¡¡¡GANASTE!!',
                        ]);
                        tableroEstadoPartida.setColor('#FFFFFF');
                    }

                    mostrarAlert = false;
                    spotlight.x = pistaAvionesAliada.x;
                    spotlight.y = pistaAvionesAliada.y;
                    //alert("alguien perdio!!");
                }
                
            }////cierre isContinuarUpdate
        }
        
        actSuper();

    }////CIERRE UPDATE
    /////////////////---------------------------------------------------------------------------------------
    /////////////////-------------------------FIN UPDATE-----------------------------------
    /////////////////---------------------------------------------------------------------------------------


}////CIERRE CLASS

/////////////////---------------------------------------------------------------------------------------
/////////////////-------------------------INICIO eventos teclas-----------------------------------
/////////////////---------------------------------------------------------------------------------------
    window.addEventListener('keydown', escuchaDeKeyDownSwitch); 

    function escuchaDeKeyDownSwitch(event){
        
        switch(event.keyCode) {
            case Phaser.Input.Keyboard.KeyCodes.D:
                isPressY5Times = 0;

                if (!isJuegoEnPausa) {
                    isContinuarUpdate = validarCondicionesPartidaAliada();
                    if (isContinuarUpdate) {
                        evento_tecla_avionDireccion_D();
                    }
                }
            break;
            case Phaser.Input.Keyboard.KeyCodes.A:
                isPressY5Times = 0;

                if (!isJuegoEnPausa) {
                    isContinuarUpdate = validarCondicionesPartidaAliada();
                    if (isContinuarUpdate) {
                        evento_tecla_avionDireccion_A();
                    }

                }

            break;
            case Phaser.Input.Keyboard.KeyCodes.W:
                isPressY5Times = 0;
                if (!isJuegoEnPausa) {
                    isContinuarUpdate = validarCondicionesPartidaAliada();
                    if (isContinuarUpdate) {
                        evento_tecla_avionDireccion_W();
                    }

                }
 
                break;
            case Phaser.Input.Keyboard.KeyCodes.S:
                isPressY5Times = 0;
                if (!isJuegoEnPausa) {
                    isContinuarUpdate = validarCondicionesPartidaAliada();
                    if (isContinuarUpdate) {
                        evento_tecla_avionDireccion_S();
                    }

                }

                break;
            case Phaser.Input.Keyboard.KeyCodes.ONE:
                isPressY5Times = 0;
                if (!isJuegoEnPausa) {
                    isContinuarUpdate = validarCondicionesPartidaAliada();
                    if (isContinuarUpdate) {
                        evento_tecla_avionAltura0();
                    }

                }

            break;
            case Phaser.Input.Keyboard.KeyCodes.TWO:
                isPressY5Times = 0;
                if (!isJuegoEnPausa) {
                    isContinuarUpdate = validarCondicionesPartidaAliada();
                    if (isContinuarUpdate) {
                        evento_tecla_avionAltura1();
                    }

                }

            break;
            case Phaser.Input.Keyboard.KeyCodes.THREE:
                isPressY5Times = 0;
                if (!isJuegoEnPausa) {
                    isContinuarUpdate = validarCondicionesPartidaAliada();
                    if (isContinuarUpdate) {
                        evento_tecla_avionAltura2();
                    }

                }

                break;
            case Phaser.Input.Keyboard.KeyCodes.SPACE:
                isPressY5Times = 0;
                if (!isJuegoEnPausa) {
                    isContinuarUpdate = validarCondicionesPartidaAliada();
                    if (isContinuarUpdate) {
                        evento_tecla_avionDisparar();
                    }

                }

                break;
            case Phaser.Input.Keyboard.KeyCodes.B:
                isPressY5Times = 0;
                if (!isJuegoEnPausa) {
                    isContinuarUpdate = validarCondicionesPartidaAliada();
                    if (isContinuarUpdate) {
                        evento_tecla_avionDispararBomba();
                    }

                }
                
                break; 
            case Phaser.Input.Keyboard.KeyCodes.N:
                isPressY5Times = 0;
                if (!isJuegoEnPausa) {
                    isContinuarUpdate = validarCondicionesPartidaAliada();
                    if (isContinuarUpdate) {
                        evento_tecla_autodestruccion();
                    }
                }

                break;
            case Phaser.Input.Keyboard.KeyCodes.L:
                isPressY5Times = 0;
                if (!isJuegoEnPausa) {
                    // isContinuarUpdate = validarCondicionesPartidaAliada();
                    // if (isContinuarUpdate) {
                        if (isInVistaLateral == false) {
                            isInVistaLateral = true;
                            switchVistaJuegoToVistaLateral();
                        } else {
                            isInVistaLateral = false;
                            switchVistaLateralAJuego();
                        }
                // }

                }

                break;
            case Phaser.Input.Keyboard.KeyCodes.P:
                isPressY5Times = 0;

                isContinuarUpdate = validarCondicionesPartidaAliada();
                if (isContinuarUpdate) {

                    ////console.log("Yo Soy::"+jugadorMiNumero);
                    ////console.log("Juego en Pausa?::"+isJuegoEnPausa);
                    ////Paausar juego y mostrar tablero de opcion para rendirse y salir; o guardar    
                    if ((quienPidioPausa == 0) || (quienPidioPausa==jugadorMiNumero)){
                        if (isJuegoEnPausa == false) {
                            isJuegoEnPausa = true;
                            quienPidioPausa=jugadorMiNumero;
                            sendDatosWebSocket("juegoPausar");
                            tableroEstadoPartida.visible=true;
                            juegoPausar();
                            //////////////////////aca va mostrarMenu();
                            /////console.log("Quien pidio pausa::"+quienPidioPausa);
                        } else {
                            if (isBloquearHastaReanudar == false) {
                                isJuegoEnPausa = false;
                                sendDatosWebSocket("juegoReanudar");
                                tableroEstadoPartida.visible=false;
                                juegoReanudar();
                            }
                        }
                    ////console.log("Actual Jugador que Pauso::"+quienPidioPausa);
                    }
                }
                break;
            case Phaser.Input.Keyboard.KeyCodes.G:
                isPressY5Times = 0;
                if (jugadorMiNumero == 1) {
                    actualizarDatosDePartidaAVariablesGlobales();

                    isContinuarUpdate = validarCondicionesPartidaAliada();
                    if (isContinuarUpdate) {

                        ////console.log("Yo Soy::"+jugadorMiNumero);
                        ////console.log("Juego en Pausa?::"+isJuegoEnPausa);
                        ////Paausar juego y mostrar tablero de opcion para rendirse y salir; o guardar    
                        if ((quienPidioPausa == 0) || (quienPidioPausa==jugadorMiNumero)){
                            if (isJuegoEnPausa == false) {
                                if (jugadorMiNumero == 1) {
                                    modal.style.display = "block";

                                    isBloquearHastaReanudar = true;
                                }
                                
                                isJuegoEnPausa = true;
                                quienPidioPausa=jugadorMiNumero;
                                sendDatosWebSocket("juegoPausar");
                                tableroEstadoPartida.visible=true;
                                juegoPausar();
                                //////////////////////aca va mostrarMenu();
                                /////console.log("Quien pidio pausa::"+quienPidioPausa);
                                sendDatosWebSocket("voyAGuardarAsiQueVolveAlPanel");
                            } else {
                                /* if (jugadorMiNumero == 1) {
                                    modal.style.display = "none";
                                }
                                isJuegoEnPausa = false;
                                sendDatosWebSocket("juegoReanudar");
                                tableroEstadoPartida.visible=false;
                                juegoReanudar(); */
                            }
                        ////console.log("Actual Jugador que Pauso::"+quienPidioPausa);
                        }
                    }
                }


                break;
                
            case Phaser.Input.Keyboard.KeyCodes.Y:
                isPressY5Times = isPressY5Times+1;
                //// activar super
                break;
            case Phaser.Input.Keyboard.KeyCodes.U:
                isPressY5Times = 0;
                //// centrar super
                break;
            case Phaser.Input.Keyboard.KeyCodes.I:
                isPressY5Times = 0;
                //// cerrar super
                break;

        }
    }
    function evento_tecla_avionDireccion_D(){
   /*     if (isEnvioMisDatosBase) { ////por primera vez envio mis datos de elementos de base y la 1er pos de mis Artilleros
            isEnvioMisDatosBase = false;
            sendDatosWebSocket("datosBaseYArtillerosPriVez");
        }else{*/
            avionAliada_Activa.enPista = false;
            var vX, vY;
            var diagonal=false;
            ultimaTeclaPresionada = "right";
            avionAliada_Activa.x = avionAliada_Activa.x + avionAliada_Activa.unidadDeVelocidad;//++;
            avionAliada_Activa.resetFlip();
            avionAliada_Activa.angle=0;
            diagonal=true;
            vX = 10;
            vY = 0;
            avionAliada_ActivaVx = vX;
            avionAliada_ActivaVy = vY;
            setVelocidadAvion(avionAliada_Activa, vX, vY);
            modificoDireccion = true;
            sendDatosWebSocket("datosAvionMovimiento");
        //}       


    }
    function evento_tecla_avionDireccion_A(){

            avionAliada_Activa.enPista = false;
            var vX, vY;
            var diagonal=false;
            ultimaTeclaPresionada = "left";
            avionAliada_Activa.x = avionAliada_Activa.x - avionAliada_Activa.unidadDeVelocidad;//--;
            avionAliada_Activa.resetFlip();
            avionAliada_Activa.flipX=true;
            avionAliada_Activa.angle=0;diagonal=true; vX = -10;vY = 0;
            avionAliada_ActivaVx = vX;
            avionAliada_ActivaVy = vY;
            setVelocidadAvion(avionAliada_Activa, vX, vY);
            modificoDireccion = true;
            sendDatosWebSocket("datosAvionMovimiento");
        
        
    }
    function evento_tecla_avionDireccion_W(){
        
            avionAliada_Activa.enPista = false;
            var vX, vY;
            var diagonal=false;
            ultimaTeclaPresionada = "up";
            avionAliada_Activa.y = avionAliada_Activa.y - avionAliada_Activa.unidadDeVelocidad;//--;
            avionAliada_Activa.resetFlip();
            avionAliada_Activa.angle=-90;
            vX = 0;
            vY = -10;
            avionAliada_ActivaVx = vX;
            avionAliada_ActivaVy = vY;
            setVelocidadAvion(avionAliada_Activa, vX, vY);
            modificoDireccion = true;
            sendDatosWebSocket("datosAvionMovimiento");
         

    }
    function evento_tecla_avionDireccion_S(){
        
            avionAliada_Activa.enPista = false;
            var vX, vY;
            var diagonal=false;
            ultimaTeclaPresionada = "down";
            avionAliada_Activa.y = avionAliada_Activa.y + avionAliada_Activa.unidadDeVelocidad;//++;
            avionAliada_Activa.resetFlip();
            avionAliada_Activa.angle=90;
            vX = 0;
            vY = 10;
            avionAliada_ActivaVx = vX;
            avionAliada_ActivaVy = vY;
            setVelocidadAvion(avionAliada_Activa, vX, vY);
            modificoDireccion = true;
            sendDatosWebSocket("datosAvionMovimiento");
        

    }

    function evento_tecla_avionAltura0(){
        //IF el avion esta arriba de la pista de la base
            //implmenetar transicion:: if era mas grande --> setTransicionScaleAumentar(this.pajaro,0.2,0.1);
            
            //// a medida que tengo una aviona activa, la guardo referencia y luego hago
            avionAliada_Activa.z=0;
            avionAliada_Activa.scaleX=0.1;
            avionAliada_Activa.scaleY=0.1;
        //console.log(avionAliada_Activa.depth);
            avionAliada_Activa.setDepth(0);

            ////se podria cambiar la sombra this.pajaroVision.setTexture("transparente");
                    
            //recargar nafta si hay en el tanque de la base
            //otras funciones como, si me quedan en mi panel 5 llaves, entonces tengo 5 reparaciones de vida
        
        /*
        Si pajaro z en 100 entonces 200, bajo vel, incremento gasto de gasolina, incremento tamaño avion
        si pajaro z es 200 entonces 100, incremento vel, descremento gasto de gasolina, decremento tamaño avion

            this.pajaro.z = ;*/

        ////Adentro resuelve cambios por altura y bomba
        setVelocidadAvion(avionAliada_Activa, avionActivaUltimaVX, avionActivaUTlimaVY);
        sendDatosWebSocket("datosAvionAltura");
    }

    function evento_tecla_avionAltura1(){
        avionAliada_Activa.z=100;
        avionAliada_Activa.scaleX=0.2;
        avionAliada_Activa.scaleY=0.2;
        avionAliada_Activa.setDepth(1);
        ////Adentro resuelve cambios por altura y bomba
        setVelocidadAvion(avionAliada_Activa, avionActivaUltimaVX, avionActivaUTlimaVY);
        sendDatosWebSocket("datosAvionAltura"); 
    }

    function evento_tecla_avionAltura2(){
        avionAliada_Activa.z=200;
        avionAliada_Activa.scaleX=0.3;
        avionAliada_Activa.scaleY=0.3;
        avionAliada_Activa.setDepth(2);
        ///this.pajaro2.mask = new Phaser.Display.Masks.BitmapMask(this, spotlightb);
        ///this.piso.mask = new Phaser.Display.Masks.BitmapMask(this, spotlightb);
        ///this.torreta.mask = new Phaser.Display.Masks.BitmapMask(this, spotlightb);
        
        ////Adentro resuelve cambios por altura y bomba
        setVelocidadAvion(avionAliada_Activa, avionActivaUltimaVX, avionActivaUTlimaVY);
        sendDatosWebSocket("datosAvionAltura");
    }

    function evento_tecla_avionDisparar(){
        if ( tiempoDelUpdate > avionAliada_Activa.lastFiredAvion) {
            evento_avion_disparo(tiempoDelUpdate, avionAliada_Activa);
            sendDatosWebSocket("disparoAvion");
        } 
        
    }
    function evento_tecla_avionDispararBomba(){
        if (tiempoDelUpdate > avionAliada_Activa.lastFiredBombaAvion) {
            evento_avion_disparoBomba(tiempoDelUpdate, avionAliada_Activa);
            sendDatosWebSocket("disparoAvionBomba");
        }
    }

    function evento_tecla_autodestruccion(){
        isAvionActivaAliadaViva = false;
        sendDatosWebSocket("avionAutodestruccion");
        setDestroyAvionAndGetNewActive(avionAliada_Activa, Gpo_AvionesAliados);
        
        
    }
/////////////////---------------------------------------------------------------------------------------
/////////////////-------------------------FIN eventos teclas-----------------------------------
/////////////////---------------------------------------------------------------------------------------







/////////////////---------------------------------------------------------------------------------------
/////////////////-------------------------INICIO funciones y eventos genericos y utilitarios-----------------------------------
/////////////////---------------------------------------------------------------------------------------
    function validarCondicionesPartidaAliada(){
        ///// SE EJECTUA SIempre en el update
        var condicionPerdidaContinuar = true;
        ////si se da alguna de las 3 condiciones
        /// me destruyen todas las aviones, me destruyen todos los elementos de mi base o alguno se rindio
        ///se dispara el termino de partida
        if (condicionPerdidaAliado) {
            condicionPerdidaContinuar = false;
            ////mandar send al websocket que se mori o se termino
        } 
        if (condicionPerdidaEnemigo) {
            condicionPerdidaContinuar = false;
        }
        return condicionPerdidaContinuar;
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

/////////////////---------------------------------------------------------------------------------------
/////////////////-------------------------FIN funciones y eventos genericos y utilitarios-----------------------------------
/////////////////---------------------------------------------------------------------------------------












/////////////////---------------------------------------------------------------------------------------
/////////////////-------------------------INICIO funciones y eventos de elementos base-----------------------------------
/////////////////---------------------------------------------------------------------------------------
    function hayEnemigoEnRangoTorreDeControl(time){
        if (jugadorMiNumero == 1) {
            colorBando = 'torreControl_VLateral_negra';
        } else {
            colorBando = 'torreControl_VLateral_roja';
        }
        torreControlAliadaLateral.setTexture(colorBando);

        torreControlAliada.HayEnemigo = false;
        if (jugadorMiNumero == 1) {
            colorBando = 'torreControl_negro';
        } else {
            colorBando = 'torreControl_rojo';
        }
        torreControlAliada.setTexture(colorBando);
        var arrayAvionesEnemigas=Gpo_AvionesEnemigos.getChildren();
        if(torreControlAliada.vida > 0){
            //para cada avion enemiga
            for (j = 0; j < arrayAvionesEnemigas.length; j++){
                if(arrayAvionesEnemigas[j].vida > 0){
                    //si distancia entre torre y avion < 100
                    distanciaEntreDosObjetos = distanceRound(torreControlAliada, arrayAvionesEnemigas[j]);
                    
                    rangoMaximoVision = torreControlAliada.rangoVision;
                    if (distanciaEntreDosObjetos <= rangoMaximoVision) {
                        //cambio att de torre
                        torreControlAliada.hayEnemigo = true;  

                        if (jugadorMiNumero == 1) {
                            colorBando = 'torreControl_VLateral_negra_activa';
                        } else {
                            colorBando = 'torreControl_VLateral_roja_activa';
                        }
                        torreControlAliadaLateral.setTexture(colorBando);

                        if (jugadorMiNumero == 1) {
                            colorBando = 'torreControl_negro_activo';
                        } else {
                            colorBando = 'torreControl_rojo_activo';
                        }
                        torreControlAliada.setTexture(colorBando);  
                        ////DISPARA UN EVENTO --> disparo bala fisica, imagen y sonido 
                        evento_torreControl_disparo(time, torreControlAliada, arrayAvionesEnemigas[j]);
                    }
                }
            }
        }
    }

    function hayAliadoEnRangoTorreDeControl(time){
        torreControlEnemiga.HayEnemigo = false;
        if (jugadorMiNumero == 2) {
            colorBando = 'torreControl_negro';
        } else {
            colorBando = 'torreControl_rojo';
        }
        torreControlEnemiga.setTexture(colorBando);
        var arrayAvionesAliadas=Gpo_AvionesAliados.getChildren();
        if(torreControlEnemiga.vida > 0){
            //para cada avion aliada
            for (j = 0; j < arrayAvionesAliadas.length; j++){
                if(arrayAvionesAliadas[j].vida > 0){
                    //si distancia entre torre y avion < 100
                    distanciaEntreDosObjetos = distanceRound(torreControlEnemiga, arrayAvionesAliadas[j]);
                    rangoMaximoVision = torreControlEnemiga.rangoVision;
                    if (distanciaEntreDosObjetos <= rangoMaximoVision) {
                        //cambio att de torre
                        torreControlEnemiga.hayEnemigo = true; 
                        if (jugadorMiNumero == 2) {
                            colorBando = 'torreControl_negro_activo';
                        } else {
                            colorBando = 'torreControl_rojo_activo';
                        }
                        torreControlEnemiga.setTexture(colorBando);  
                        ////DISPARA UN EVENTO --> disparo bala fisica, imagen y sonido 
                        evento_torreControl_disparo(time, torreControlEnemiga, arrayAvionesAliadas[j]);
                    }
                }
            }
        }
    }

    function evento_torreControl_disparo(time, in_TorreOrigen, in_AvionDestino){
        juego_var_destinoCreacionBalas = 0;
        if ((time > in_TorreOrigen.lastFiredTorre)){
            if (in_TorreOrigen.bando == "Aliado") {
                var bullet = in_TorreOrigen.bullet_torre_Aliada.get();
            } else {
                var bullet = in_TorreOrigen.bullet_torre_Enemiga.get();
            }
            if (bullet)
            {
                anguloEntre_TorreAvion = Phaser.Math.Angle.BetweenPoints(in_TorreOrigen, in_AvionDestino);
                in_TorreOrigen.rotation = anguloEntre_TorreAvion;
                Phaser.Geom.Line.SetToAngle(line, in_TorreOrigen.x, in_TorreOrigen.y - 50, anguloEntre_TorreAvion, 128);
                gfx.clear().strokeLineShape(line);
                bullet.fire(in_TorreOrigen,'Torre');
                snd_metralleta.play();
                in_TorreOrigen.lastFiredTorre = time + 100;
            }
        }
    }

/////////////////---------------------------------------------------------------------------------------
/////////////////-------------------------FIN funciones y eventos de elementos base-----------------------------------
/////////////////---------------------------------------------------------------------------------------








/////////////////---------------------------------------------------------------------------------------
/////////////////-------------------------INICIO funciones y eventos artilleros-----------------------------------
/////////////////---------------------------------------------------------------------------------------
    function crearArtillero(bando,num){
        var newArtillero = null;
                
        if (bando == "Aliado"){
            x = pistaAvionesAliada.x;
            y = pistaAvionesAliada.y;

            if (jugadorMiNumero == 1) {
                colorBando = 'artillero_negro';
            } else {
                colorBando = 'artillero_rojo';
            }

            newArtillero = sceneJuego.physics.add.image(x,y,jugadorMiNumero);//.setDisplayOrigin(0, 0);   //(juego_var_nav_width*0.90-88)
            newArtillero.bando = "Aliado";
            newArtillero.bullets_artillero_Aliada = sceneJuego.physics.add.group({
                classType: Bullet,
                maxSize: 3,
                runChildUpdate: true
            });
            newArtillero.bullets_artillero_Aliada.physicsBodyType = Phaser.Physics.ARCADE;
            artilleroSetearUbicacion(newArtillero);
        }else{
            x = pistaAvionesEnemiga.x;
            y = pistaAvionesEnemiga.y; 

            if (jugadorMiNumero == 2) {
                colorBando = 'artillero_negro';
            } else {
                colorBando = 'artillero_rojo';
            }

            newArtillero = sceneJuego.physics.add.image(x,y,jugadorMiNumero);//.setDisplayOrigin(0, 0);   //(juego_var_nav_width*0.90-88)
            newArtillero.bando = "Enemigo";
            newArtillero.bullets_artillero_Enemigo = sceneJuego.physics.add.group({
                classType: Bullet,
                maxSize: 3,
                runChildUpdate: true
            });
            newArtillero.bullets_artillero_Enemigo.physicsBodyType = Phaser.Physics.ARCADE;
            
            ////artilleroSetearUbicacion(newArtillero);  /////////////////ELIMINAR ESTO
        
        }
        newArtillero.setCollideWorldBounds(true);
        newArtillero.setBounce(0);
        newArtillero.vida = 100;
        newArtillero.rangoVision = rangoVisionArtillero;
        newArtillero.angle = 0;
        newArtillero.lastFiredArtillero = 0;
        newArtillero.num = num;
        newArtillero.HayEnemigo = false;
        newArtillero.physicsBodyType = Phaser.Physics.ARCADE;

        newArtillero.visible=true;
        newArtillero.body.enable=true;

        newArtillero.scaleX=1;
        newArtillero.scaleY=1;
        newArtillero.setDepth(0);

        newArtillero.estadoViva = true;
 
        return newArtillero;
    }

    function actualizarArtilleroAliadosDesdeJSON(){
        
        artilleroA_1.x  = parseInt(juego_var_Aliado_artillero1_X);
        artilleroA_1.y  = parseInt(juego_var_Aliado_artillero1_Y);
        artilleroA_1.Vida  = parseInt(juego_var_Aliado_artillero1_Vida);
        if (artilleroA_1.vida <= 0){
            artilleroA_1.body.enable = false;
            Gpo_ArtillerosAliados.killAndHide(artilleroA_1);      
        } 

        artilleroA_2.x  = parseInt(juego_var_Aliado_artillero2_X);
        artilleroA_2.y  = parseInt(juego_var_Aliado_artillero2_Y);
        artilleroA_2.Vida  = parseInt(juego_var_Aliado_artillero2_Vida);
        if (artilleroA_2.vida <= 0){
            artilleroA_2.body.enable = false;
            Gpo_ArtillerosAliados.killAndHide(artilleroA_2);      
        } 

        artilleroA_3.x  = parseInt(juego_var_Aliado_artillero3_X);
        artilleroA_3.y  = parseInt(juego_var_Aliado_artillero3_Y);
        artilleroA_3.Vida  = parseInt(juego_var_Aliado_artillero3_Vida);
        if (artilleroA_3.vida <= 0){
            artilleroA_3.body.enable = false;
            Gpo_ArtillerosAliados.killAndHide(artilleroA_3);      
        } 
        
        artilleroA_4.x  = parseInt(juego_var_Aliado_artillero4_X);
        artilleroA_4.y  = parseInt(juego_var_Aliado_artillero4_Y);
        artilleroA_4.Vida  = parseInt(juego_var_Aliado_artillero4_Vida);
        if (artilleroA_4.vida <= 0){
            artilleroA_4.body.enable = false;
            Gpo_ArtillerosAliados.killAndHide(artilleroA_4);      
        } 
        
        artilleroA_5.x  = parseInt(juego_var_Aliado_artillero5_X);
        artilleroA_5.y  = parseInt(juego_var_Aliado_artillero5_Y);
        artilleroA_5.Vida  = parseInt(juego_var_Aliado_artillero5_Vida);
        if (artilleroA_5.vida <= 0){
            artilleroA_5.body.enable = false;
            Gpo_ArtillerosAliados.killAndHide(artilleroA_5);      
        } 
        
        artilleroA_6.x  = parseInt(juego_var_Aliado_artillero6_X);
        artilleroA_6.y  = parseInt(juego_var_Aliado_artillero6_Y);
        artilleroA_6.Vida  = parseInt(juego_var_Aliado_artillero6_Vida);
        if (artilleroA_6.vida <= 0){
            artilleroA_6.body.enable = false;
            Gpo_ArtillerosAliados.killAndHide(artilleroA_6);      
        } 
        
        if (jugadorMiNumero == 2) {
            artilleroA_1.x  = (1000 - artilleroA_1.x ) ;
            artilleroA_1.y  = (600 - artilleroA_1.y ) ; 
            artilleroA_2.x  = (1000 - artilleroA_2.x ) ;
            artilleroA_2.y  = (600 - artilleroA_2.y ) ; 
            artilleroA_3.x  = (1000 - artilleroA_3.x ) ;
            artilleroA_3.y  = (600 - artilleroA_3.y ) ; 
            artilleroA_4.x  = (1000 - artilleroA_4.x ) ;
            artilleroA_4.y  = (600 - artilleroA_4.y ) ; 
            artilleroA_5.x  = (1000 - artilleroA_5.x ) ;
            artilleroA_5.y  = (600 - artilleroA_5.y ) ; 
            artilleroA_6.x  = (1000 - artilleroA_6.x ) ;
            artilleroA_6.y  = (600 - artilleroA_6.y ) ; 
        }

    }


    function actualizarArtilleroEnemigosDesdeJSON(){

        artilleroE_1.x  = parseInt(juego_var_Enemigo_artillero1_X);
        artilleroE_1.y  = parseInt(juego_var_Enemigo_artillero1_Y);
        artilleroE_1.Vida  = parseInt(juego_var_Enemigo_artillero1_Vida);
        if (artilleroE_1.vida <= 0){
            artilleroE_1.body.enable = false;
            Gpo_ArtillerosEnemigos.killAndHide(artilleroE_1);      
        } 

        artilleroE_2.x  = parseInt(juego_var_Enemigo_artillero2_X);
        artilleroE_2.y  = parseInt(juego_var_Enemigo_artillero2_Y);
        artilleroE_2.Vida  = parseInt(juego_var_Enemigo_artillero2_Vida);
        if (artilleroE_2.vida <= 0){
            artilleroE_2.body.enable = false;
            Gpo_ArtillerosEnemigos.killAndHide(artilleroE_2);      
        } 

        artilleroE_3.x  = parseInt(juego_var_Enemigo_artillero3_X);
        artilleroE_3.y  = parseInt(juego_var_Enemigo_artillero3_Y);
        artilleroE_3.Vida  = parseInt(juego_var_Enemigo_artillero3_Vida);
        if (artilleroE_3.vida <= 0){
            artilleroE_3.body.enable = false;
            Gpo_ArtillerosEnemigos.killAndHide(artilleroE_3);      
        } 
        
        artilleroE_4.x  = parseInt(juego_var_Enemigo_artillero4_X);
        artilleroE_4.y  = parseInt(juego_var_Enemigo_artillero4_Y);
        artilleroE_4.Vida  = parseInt(juego_var_Enemigo_artillero4_Vida);
        if (artilleroE_4.vida <= 0){
            artilleroE_4.body.enable = false;
            Gpo_ArtillerosEnemigos.killAndHide(artilleroE_4);      
        } 
        
        artilleroE_5.x  = parseInt(juego_var_Enemigo_artillero5_X);
        artilleroE_5.y  = parseInt(juego_var_Enemigo_artillero5_Y);
        artilleroE_5.Vida  = parseInt(juego_var_Enemigo_artillero5_Vida);
        if (artilleroE_5.vida <= 0){
            artilleroE_5.body.enable = false;
            Gpo_ArtillerosEnemigos.killAndHide(artilleroE_5);      
        } 
        
        artilleroE_6.x  = parseInt(juego_var_Enemigo_artillero6_X);
        artilleroE_6.y  = parseInt(juego_var_Enemigo_artillero6_Y);
        artilleroE_6.Vida  = parseInt(juego_var_Enemigo_artillero6_Vida);
        if (artilleroE_6.vida <= 0){
            artilleroE_6.body.enable = false;
            Gpo_ArtillerosEnemigos.killAndHide(artilleroE_6);      
        } 
 
        if (jugadorMiNumero == 2) {
            artilleroE_1.x  = (1000 - artilleroE_1.x ) ;
            artilleroE_1.y  = (600 - artilleroE_1.y ) ; 
            artilleroE_2.x  = (1000 - artilleroE_2.x ) ;
            artilleroE_2.y  = (600 - artilleroE_2.y ) ; 
            artilleroE_3.x  = (1000 - artilleroE_3.x ) ;
            artilleroE_3.y  = (600 - artilleroE_3.y ) ; 
            artilleroE_4.x  = (1000 - artilleroE_4.x ) ;
            artilleroE_4.y  = (600 - artilleroE_4.y ) ; 
            artilleroE_5.x  = (1000 - artilleroE_5.x ) ;
            artilleroE_5.y  = (600 - artilleroE_5.y ) ; 
            artilleroE_6.x  = (1000 - artilleroE_6.x ) ;
            artilleroE_6.y  = (600 - artilleroE_6.y ) ; 
        }

    }   

    function hayEnemigoEnRangoArtillero(time){  
        var arrayArtillerosAliados=Gpo_ArtillerosAliados.getChildren();
        var arrayAvionesEnemigas= Gpo_AvionesEnemigos.getChildren();
        //Para cada artillero del array
        for (i = 0; i < arrayArtillerosAliados.length; i++){
            if(arrayArtillerosAliados[i].vida > 0){
                arrayArtillerosAliados[i].HayEnemigo = false;
                if (jugadorMiNumero == 1) {
                    colorBando = 'artillero_negro';
                } else {
                    colorBando = 'artillero_rojo';
                }
                arrayArtillerosAliados[i].setTexture(colorBando);
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
                                    if (jugadorMiNumero == 1) {
                                        colorBando = 'artillero_negro_activo';
                                    } else {
                                        colorBando = 'artillero_rojo_activo';
                                    }
                                    arrayArtillerosAliados[i].setTexture(colorBando);  
                                    ////DISPARA UN EVENTO --> disparo bala fisica, imagen y sonido 
                                    evento_artillero_disparo(time, arrayArtillerosAliados[i], arrayAvionesEnemigas[j]); 
                            
                            }
                        } 
                    }
                }
            }
        }
    }

    function hayAliadoEnRangoArtillero(time){  
        var arrayArtillerosEnemigos=Gpo_ArtillerosEnemigos.getChildren();
        var arrayAvionesAliadas= Gpo_AvionesAliados.getChildren();
        //Para cada artillero del array
        for (i = 0; i < arrayArtillerosEnemigos.length; i++){
            if(arrayArtillerosEnemigos[i].vida > 0){
                arrayArtillerosEnemigos[i].HayEnemigo = false;
                if (jugadorMiNumero == 2) {
                    colorBando = 'artillero_negro';
                } else {
                    colorBando = 'artillero_rojo';
                }
                arrayArtillerosEnemigos[i].setTexture(colorBando);
                //para cada avion aliada
                for (j = 0; j < arrayAvionesAliadas.length; j++){
                    if(arrayAvionesAliadas[j].vida > 0){
                        if (arrayAvionesAliadas[j].z < 200){
                            //si distancia entre artillero y avion < 100
                            distanciaEntreDosObjetos = distanceRound(arrayArtillerosEnemigos[i], arrayAvionesAliadas[j]); 
                        
                            rangoMaximoVision = arrayArtillerosEnemigos[i].rangoVision;
                            if (distanciaEntreDosObjetos <= rangoMaximoVision ) {
                                    //cambio att de artillero
                                    arrayArtillerosEnemigos[i].hayEnemigo = true;   
                                    if (jugadorMiNumero == 2) {
                                        colorBando = 'artillero_negro_activo';
                                    } else {
                                        colorBando = 'artillero_rojo_activo';
                                    }                 
                                    arrayArtillerosEnemigos[i].setTexture(colorBando);  
                                    ////DISPARA UN EVENTO --> disparo bala fisica, imagen y sonido 
                                    evento_artillero_disparo(time, arrayArtillerosEnemigos[i], arrayAvionesAliadas[j]); 
                            
                            }
                        } 
                    }
                }
            }
        }
    }

    function evento_artillero_disparo(time, in_ArtilleroOrigen, in_AvionDestino){
        juego_var_destinoCreacionBalas = 1;
        if ((time > in_ArtilleroOrigen.lastFiredArtillero)){ 
            if (in_ArtilleroOrigen.bando == "Aliado") {
                var bullet = in_ArtilleroOrigen.bullets_artillero_Aliada.get();  
                /* var bullet = bullets_artillero_Aliada.get(); */ 
            } else {
                var bullet = in_ArtilleroOrigen.bullets_artillero_Enemigo.get(); 
            }
            if (bullet)
            {
                anguloEntre_ArtilleroAvion = Phaser.Math.Angle.BetweenPoints(in_ArtilleroOrigen, in_AvionDestino);
                in_ArtilleroOrigen.rotation = anguloEntre_ArtilleroAvion;
                Phaser.Geom.Line.SetToAngle(line, in_ArtilleroOrigen.x, in_ArtilleroOrigen.y - 50, anguloEntre_ArtilleroAvion, 128);
                gfx.clear().strokeLineShape(line);

                bullet.fire(in_ArtilleroOrigen, anguloEntre_ArtilleroAvion);
                snd_metralleta.play();
                in_ArtilleroOrigen.lastFiredArtillero = time + 100;
            }
        }
    }

    function compartirCoordenadasBase(){
        if (!leLlegoMisDatosDeBase) {
            //console.log("entro en if (!leLlegoMisDatosDeBase) para enviar mis datos...");
            sendDatosWebSocket("datosBaseYArtillerosPriVez");
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

            x = Phaser.Math.Between(campoAliado_x+50, campoAliado_w-50);
            y = Phaser.Math.Between(campoAliado_y+100, (mi_campo_y+campoAliado_h-30) );
        }else{
            mi_campo_x = campoEnemigo_x;
            mi_campo_y = campoEnemigo_y;
            mi_campo_w = campoEnemigo_w;
            mi_campo_h = campoEnemigo_h;
        
            mi_base_x = baseEnemiga_x;
            mi_base_y = baseEnemiga_y;
            mi_base_w = baseEnemiga_w;
            mi_base_h = baseEnemiga_h;

            x = Phaser.Math.Between(campoEnemigo_x+50, campoEnemigo_w-50);
            y = Phaser.Math.Between(campoEnemigo_y+30, (campoEnemigo_h-100) );
        }

        artillero.x = x;
        artillero.y = y;
    }

    function moverArtillero(artillero){
        artillero.x=Phaser.Math.Between(campoAliado_x, campoAliado_w);
    } // artillero setear oncollide function with Base

    function moverGrupodeArtilleros(){
        if (!isJuegoEnPausa) {

            var arrayArtillerosAliados = Gpo_ArtillerosAliados.getChildren();
            var arrayAvionesEnemigas = Gpo_AvionesEnemigos.getChildren();
            //Para cada artillero del array
            for (i = 0; i < arrayArtillerosAliados.length; i++){
                if(arrayArtillerosAliados[i].vida > 0){
                    arrayArtillerosAliados[i].HayEnemigo = false;
                    if (jugadorMiNumero == 1) {
                        colorBando = 'artillero_negro';
                    } else {
                        colorBando = 'artillero_rojo';
                    }
                    arrayArtillerosAliados[i].setTexture(colorBando);

                    if (avionEnemiga_Activa.vida > 0) {
                        distanciaEntreDosObjetos = distanceRound(arrayArtillerosAliados[i], avionEnemiga_Activa); 
                        rangoMaximoVision = arrayArtillerosAliados[i].rangoVision;
                        if (distanciaEntreDosObjetos > rangoMaximoVision) {
                            moverArtillero(arrayArtillerosAliados[i]);
                        } else {
                            if (avionEnemiga_Activa.z == 200) {
                                moverArtillero(arrayArtillerosAliados[i]);
                            } 
                        }
                        
                    }

                    /* //para cada avion enemiga
                    for (j = 0; j < arrayAvionesEnemigas.length; j++){
                        if(arrayAvionesEnemigas[j].vida > 0){
                            if (arrayAvionesEnemigas[j].z < 200){
                                //si distancia entre artillero y avion < 100
                                distanciaEntreDosObjetos = distanceRound(arrayArtillerosAliados[i], arrayAvionesEnemigas[j]); 
                                rangoMaximoVision = arrayArtillerosAliados[i].rangoVision;
                                if (distanciaEntreDosObjetos > rangoMaximoVision) {
                                    moverArtillero(arrayArtillerosAliados[i]);
                                }
                            } 
                        }
                    } */
                }

            }  

            sendDatosWebSocket("datosArtillerosByTimer");
        } 
    } // artillero setear oncollide function with Base

/////////////////---------------------------------------------------------------------------------------
/////////////////-------------------------FIN funciones y eventos artilleros-----------------------------------
/////////////////---------------------------------------------------------------------------------------










/////////////////---------------------------------------------------------------------------------------
/////////////----------- INICIO Class Avion-----------------
/////////////////---------------------------------------------------------------------------------------
    var Avion = new Phaser.Class({

    Extends: Phaser.Physics.Arcade.Image,

    initialize:

    function Avion (bando,num)
    {
        //Phaser.Physics.Arcade.Image.call(this, scene, 0, 0, 'avion');

        

        var avion = null;
        /////CREO LOS N aviones en base a si es una partida nudeva son 4 y si es cargada lo n que tenia
        
        if (bando == "Aliado"){
            x = pistaAvionesAliada.x;
            y = pistaAvionesAliada.y;

            if (jugadorMiNumero == 1) {
                colorBando = 'avionNegro';
            } else {
                colorBando = 'avionRojo';
            }
            avion = sceneJuego.physics.add.image(x, y,colorBando);
            avion.bando = "Aliado";
            avion.bullets_avion_Aliado = sceneJuego.physics.add.group({
                classType: Bullet,
                maxSize: 5,
                runChildUpdate: true
            });
            avion.bullets_avion_Aliado.physicsBodyType = Phaser.Physics.ARCADE; 

            //avion.mask = spotlight_instance;
        }else{
            x = pistaAvionesEnemiga.x;
            y = pistaAvionesEnemiga.y; 

            if (jugadorMiNumero == 2) {
                colorBando = 'avionNegro';
            } else {
                colorBando = 'avionRojo';
            }
            avion = sceneJuego.physics.add.image(x, y,colorBando);
            avion.bando = "Enemigo";    
            avion.bullets_avion_Enemigo = sceneJuego.physics.add.group({
                classType: Bullet,
                maxSize: 5,
                runChildUpdate: true
            });
            avion.bullets_avion_Enemigo.physicsBodyType = Phaser.Physics.ARCADE; 

        }
        avion.setCollideWorldBounds(true);
        avion.setBounce(0);
        avion.scaleX=0.1;
        avion.scaleY=0.1;
        avion.z = 0; 
        avion.setDepth(0);
        avion.vida = 100;
        avion.rangoVision = rangoVisionAvion;
        avion.angle = 0;
        avion.tieneBomba = true;
        avion.cantBombas = 1;
        avion.cantCombustible = avionCombustibleDefault;
        avion.unidadDeVelocidad = 0;
        avion.unidadDeConsumoCombustible = 0;
        avion.isAvionEnCampoEnemigo = false;
        avion.estadoViva = true;
        avion.num = num;
        avion.HayEnemigo = false;
        avion.lastFiredAvion = 0;
        avion.lastFiredBombaAvion = 0;
        avion.setVelocity(0,0);
        avion.ultimaVX = 0;
        avion.ultimaVY = 0;
        avion.physicsBodyType = Phaser.Physics.ARCADE;
        if (num == 1){
            avion.visible=true;
            avion.body.enable=true;
            avion.isLaAvionActiva = true;
            avion.enPista = true;

        }else{
            if (bando == "Aliado"){
                x = pistaAvionesAliada.x;
                y = pistaAvionesAliada.y;                
            }else{
                x = pistaAvionesEnemiga.x;
                y = pistaAvionesEnemiga.y; 

            }
            avion.x = x;
            avion.y = y; 

            /*  a = Phaser.Math.Between(origen_x+20,550); 
            avion.x = a;
            a = Phaser.Math.Between(origen_x+20,550);  
            avion.y = a; */

            avion.visible=false;
            ////avion.body.enable=false;  
            
            avion.isLaAvionActiva = false;
            avion.enPista = false;

        }
        /////avion.setAcceleration(10,0);
    return avion;



    },

    fire: function (avion)
    {
        
    },

    update: function (time, delta)
    {

    },

    kill: function ()
    {

    }

    });
/////////////----------- Fin Class Avion-----------------

/////////////////---------------------------------------------------------------------------------------
/////////////////-------------Comienzo Eventos Avion Genericos
/////////////////---------------------------------------------------------------------------------------
    

    function actualizarAvionesAliadosDesdeJSON(){

        avionA_1.x  = parseInt( juego_var_Aliado_avion1_X);
        avionA_1.y  = parseInt( juego_var_Aliado_avion1_Y);
        avionA_1.z  = parseInt( juego_var_Aliado_avion1_Z);
        avionA_1.vida  = parseInt( juego_var_Aliado_avion1_Vida);
        avionA_1.angle  = parseInt( juego_var_Aliado_avion1_Angulo);
        avionA_1.tieneBomba  = parseInt( juego_var_Aliado_avion1_TieneBomba);
        avionA_1.cantCombustible  = parseInt( juego_var_Aliado_avion1_CantCombustible);

        if( avionA_1.vida <= 0 ){
            avionA_1.body.enable = false;
            avionA_1.estadoViva = false;
            Gpo_AvionesAliados.killAndHide(avionA_1);
        }


        avionA_2.x  = parseInt( juego_var_Aliado_avion2_X);
        avionA_2.y  = parseInt( juego_var_Aliado_avion2_Y);
        avionA_2.z  = parseInt( juego_var_Aliado_avion2_Z);
        avionA_2.vida  = parseInt( juego_var_Aliado_avion2_Vida);
        avionA_2.angle  = parseInt( juego_var_Aliado_avion2_Angulo);
        avionA_2.tieneBomba  = parseInt( juego_var_Aliado_avion2_TieneBomba);
        avionA_2.cantCombustible  = parseInt( juego_var_Aliado_avion2_CantCombustible);

        if( avionA_2.vida <= 0 ){
            avionA_2.body.enable = false;
            avionA_2.estadoViva = false;
            Gpo_AvionesAliados.killAndHide(avionA_2);
        }



        avionA_3.x  = parseInt( juego_var_Aliado_avion3_X);
        avionA_3.y  = parseInt( juego_var_Aliado_avion3_Y);
        avionA_3.z  = parseInt( juego_var_Aliado_avion3_Z);
        avionA_3.vida  = parseInt( juego_var_Aliado_avion3_Vida);
        avionA_3.angle  = parseInt( juego_var_Aliado_avion3_Angulo);
        avionA_3.tieneBomba  = parseInt( juego_var_Aliado_avion3_TieneBomba);
        avionA_3.cantCombustible  = parseInt( juego_var_Aliado_avion3_CantCombustible);

        if( avionA_3.vida <= 0 ){
            avionA_3.body.enable = false;
            avionA_3.estadoViva = false;
            Gpo_AvionesAliados.killAndHide(avionA_3);
        }



        avionA_4.x  = parseInt( juego_var_Aliado_avion4_X);
        avionA_4.y  = parseInt( juego_var_Aliado_avion4_Y);
        avionA_4.z  = parseInt( juego_var_Aliado_avion4_Z);
        avionA_4.vida  = parseInt( juego_var_Aliado_avion4_Vida);
        avionA_4.angle  = parseInt( juego_var_Aliado_avion4_Angulo);
        avionA_4.tieneBomba  = parseInt( juego_var_Aliado_avion4_TieneBomba);
        avionA_4.cantCombustible  = parseInt( juego_var_Aliado_avion4_CantCombustible);

        if( avionA_4.vida <= 0 ){
            avionA_4.body.enable = false;
            avionA_4.estadoViva = false;
            Gpo_AvionesAliados.killAndHide(avionA_4);
        }

        if (jugadorMiNumero == 2) {
            avionA_1.x  = (1000 - avionA_1.x ) ;
            avionA_1.y  = (600 -  avionA_1.y  ) ; 
            avionA_2.x  = (1000 - avionA_2.x ) ;
            avionA_2.y  = (600 -  avionA_2.y  ) ; 
            avionA_3.x  = (1000 - avionA_3.x ) ;
            avionA_3.y  = (600 -  avionA_3.y  ) ; 
            avionA_4.x  = (1000 - avionA_4.x ) ;
            avionA_4.y  = (600 -  avionA_4.y  ) ; 
        }

    }

    function actualizarAvionesEnemigosDesdeJSON(){

        avionE_1.x  = parseInt( juego_var_Enemigo_avion1_X);
        avionE_1.y  = parseInt( juego_var_Enemigo_avion1_Y);
        avionE_1.z  = parseInt( juego_var_Enemigo_avion1_Z);
        avionE_1.vida  = parseInt( juego_var_Enemigo_avion1_Vida);
        avionE_1.angle  = parseInt( juego_var_Enemigo_avion1_Angulo);
        avionE_1.tieneBomba  = parseInt( juego_var_Enemigo_avion1_TieneBomba);
        avionE_1.cantCombustible  = parseInt( juego_var_Enemigo_avion1_CantCombustible);

        if( avionE_1.vida <= 0 ){
            avionE_1.body.enable = false;
            avionE_1.estadoViva = false;
            Gpo_AvionesEnemigos.killAndHide(avionE_1);
        }


        avionE_2.x  = parseInt( juego_var_Enemigo_avion2_X);
        avionE_2.y  = parseInt( juego_var_Enemigo_avion2_Y);
        avionE_2.z  = parseInt( juego_var_Enemigo_avion2_Z);
        avionE_2.vida  = parseInt( juego_var_Enemigo_avion2_Vida);
        avionE_2.angle  = parseInt( juego_var_Enemigo_avion2_Angulo);
        avionE_2.tieneBomba  = parseInt( juego_var_Enemigo_avion2_TieneBomba);
        avionE_2.cantCombustible  = parseInt( juego_var_Enemigo_avion2_CantCombustible);

        if( avionE_2.vida <= 0 ){
            avionE_2.body.enable = false;
            avionE_2.estadoViva = false;
            Gpo_AvionesEnemigos.killAndHide(avionE_2);
        }



        avionE_3.x  = parseInt( juego_var_Enemigo_avion3_X);
        avionE_3.y  = parseInt( juego_var_Enemigo_avion3_Y);
        avionE_3.z  = parseInt( juego_var_Enemigo_avion3_Z);
        avionE_3.vida  = parseInt( juego_var_Enemigo_avion3_Vida);
        avionE_3.angle  = parseInt( juego_var_Enemigo_avion3_Angulo);
        avionE_3.tieneBomba  = parseInt( juego_var_Enemigo_avion3_TieneBomba);
        avionE_3.cantCombustible  = parseInt( juego_var_Enemigo_avion3_CantCombustible);

        if( avionE_3.vida <= 0 ){
            avionE_3.body.enable = false;
            avionE_3.estadoViva = false;
            Gpo_AvionesEnemigos.killAndHide(avionE_3);
        }



        avionE_4.x  = parseInt( juego_var_Enemigo_avion4_X);
        avionE_4.y  = parseInt( juego_var_Enemigo_avion4_Y);
        avionE_4.z  = parseInt( juego_var_Enemigo_avion4_Z);
        avionE_4.vida  = parseInt( juego_var_Enemigo_avion4_Vida);
        avionE_4.angle  = parseInt( juego_var_Enemigo_avion4_Angulo);
        avionE_4.tieneBomba  = parseInt( juego_var_Enemigo_avion4_TieneBomba);
        avionE_4.cantCombustible  = parseInt( juego_var_Enemigo_avion4_CantCombustible);

        if( avionE_4.vida <= 0 ){
            avionE_4.body.enable = false;
            avionE_4.estadoViva = false;
            Gpo_AvionesEnemigos.killAndHide(avionE_4);
        }


        if (jugadorMiNumero == 2) {
            avionE_1.x  = (1000 - avionE_1.x ) ;
            avionE_1.y  = (600 -  avionE_1.y  ) ; 
            avionE_2.x  = (1000 - avionE_2.x ) ;
            avionE_2.y  = (600 -  avionE_2.y  ) ; 
            avionE_3.x  = (1000 - avionE_3.x ) ;
            avionE_3.y  = (600 -  avionE_3.y  ) ; 
            avionE_4.x  = (1000 - avionE_4.x ) ;
            avionE_4.y  = (600 -  avionE_4.y  ) ; 
        }







    }


    function getProximoAvionActivo(in_GrupoAviones){
        var in_AvionActivaAUX;
        in_AvionActivaAUX = in_GrupoAviones.getFirstAlive();
        in_AvionActivaAUX.visible=true;
        in_AvionActivaAUX.body.enable=true;
        in_AvionActivaAUX.isLaAvionActiva = true;
        in_AvionActivaAUX.enPista = true;

        if (in_AvionActivaAUX.bando == "Aliado") {
            in_AvionActivaAUX.x = pistaAvionesAliada.x;
            in_AvionActivaAUX.y = pistaAvionesAliada.y; 
        } else {
            in_AvionActivaAUX.x = pistaAvionesEnemiga.x;
            in_AvionActivaAUX.y = pistaAvionesEnemiga.y; 
        }

        return in_AvionActivaAUX;
    }

    function setDestroyAvionAndGetNewActive(in_avionADestruir, in_grupoAvionesARetirar){
        in_avionADestruir.vida = 0;
        in_avionADestruir.body.enable = false;
        in_avionADestruir.estadoViva = false;

        boom = sceneJuego.add.sprite(in_avionADestruir.x, in_avionADestruir.y, 'explosion');
        boom.anims.play('explode');
        snd_explosion.play();
        sceneJuego.cameras.main.shake(200, 0.02);

        destruiAlgunAvionEnemigaCual = in_avionADestruir.num;
        /// PARA ELIMINAR UN SPRITE, SI PERTENECE A UN GRUPO HAY QUE HACERLO ASI...
        in_grupoAvionesARetirar.killAndHide(in_avionADestruir);

        if (in_avionADestruir.bando == "Aliado") {
            if (Gpo_AvionesAliados.getTotalUsed() == 0) {
                condicionPerdidaAliado = true;
            } else {
                avionAliada_Activa = getProximoAvionActivo(Gpo_AvionesAliados);
                sendDatosWebSocket("cambioAvionAliada_Activa");
                isAvionActivaAliadaViva = true;
            }
        } else {
            if (Gpo_AvionesEnemigos.getTotalUsed() == 0) {
                sendDatosWebSocket("destruiUltimoAvionEnemiga");
                condicionPerdidaEnemigo = true;
            } else {
                sendDatosWebSocket("destruiAlgunAvionEnemiga");
                avionEnemiga_Activa = getProximoAvionActivo(Gpo_AvionesEnemigos);
                //console.log("en el destroy avionEnemiga_Activa.num::"+avionEnemiga_Activa.num);
                isAvionActivaEnemigaViva = true;
            } 
        } 
    }

    function getUnidadDesplazamiento(avion){
        avion.unidadDeVelocidad = 10;
        if (avion.tieneBomba) {
            avion.unidadDeVelocidad = avion.unidadDeVelocidad - avion.unidadDeVelocidad*0.50;
        }
        if(avion.z > 100){ ///altura maxima
            avion.unidadDeVelocidad = avion.unidadDeVelocidad - avion.unidadDeVelocidad*0.50;
        }
        if ( (avion.tieneBomba) && (avion.z > 100) ) {
            avion.unidadDeVelocidad = avion.unidadDeVelocidad*0.20;
        }

        if (avion.z == 100) {
            avion.unidadDeVelocidad = avion.unidadDeVelocidad - avion.unidadDeVelocidad*0.50;
        } 
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

        avion.ultimaVX = avionActivaUltimaVX;
        avion.ultimaVY = avionActivaUTlimaVY;
    }

    function setDescuentoCombustibleAvionUPDATE(num, avion){
        ////obtener el segundo valor para descontar cuando toca tecla para moverse
        getunidadDeConsumoCombustible(num, avion);
        //("avion.unidadDeConsumoCombustible::"+ avion.unidadDeConsumoCombustible );
        if ( avion.cantCombustible > 0) {
            avion.cantCombustible = avion.cantCombustible - avion.unidadDeConsumoCombustible;
        } else {
            ////EVENTO DE DESTRUCCION/caida POR FALTA DE COMBUSTIBLE
            hayCombustible(avion);  
        }
    }

    function getunidadDeConsumoCombustible(num, avion){
        avion.unidadDeConsumoCombustible = num;
        if (avion.tieneBomba) {
            avion.unidadDeConsumoCombustible = avion.unidadDeConsumoCombustible*2 ;
        }
        if(avion.z > 100){ ///altura maxima
            avion.unidadDeConsumoCombustible = avion.unidadDeConsumoCombustible*2; 
        }
        if (modificoDireccion) {
            avion.unidadDeConsumoCombustible = avion.unidadDeConsumoCombustible + num;
        }
    }

    function hayCombustible(avion){
        if ( (avion.cantCombustible <= 0) ){ // && isAvionActivaAliadaViva){
            ////CAMBIAR FLAG PARA QUE LA SOMBRA QUEDE EN LA BASE
            isAvionActivaAliadaViva = false;
            sendDatosWebSocket("avionAutodestruccion");
            setDestroyAvionAndGetNewActive(avion, Gpo_AvionesAliados);
        }
    }

    function evento_avion_disparo(time, in_AvionOrigen){
        juego_var_destinoCreacionBalas = 2;
        var bullet;
        if (in_AvionOrigen.bando == "Aliado") {
            bullet = in_AvionOrigen.bullets_avion_Aliado.get();
        }else{
            bullet = in_AvionOrigen.bullets_avion_Enemigo.get(); 
        }

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
            in_AvionOrigen.tieneBomba=false; ////--> ACTIVAR PARA QUE SOLO DISPARE UNA BOMBA!!!
        }
    }


    function evento_avion_disparoBombaE(time, in_AvionOrigen){
        ///juego_var_destinoCreacionBalas = 2; // --> para que era esto???
    //console.log(in_AvionOrigen.z );
        if (in_AvionOrigen.z == 200 && in_AvionOrigen.tieneBomba){
            bombaBulletE.x=in_AvionOrigen.x;
            bombaBulletE.y=in_AvionOrigen.y;
            snd_caidaBomba.play();
            //console.log(bombaBulletE);
            tweenBombaE = sceneJuego.tweens.add({
                targets: [ bombaBulletE ],
                //x:'+=100',
                scaleX:'-=5',
                scaleY:'-=5',
                duration: 2000,
                ease: 'Power1'
            });
            snd_caidaBomba.stop();
            bombaBulletE.body.enable=true;
            timerBombaE = sceneJuego.time.addEvent({
                delay: 2000,   // EN MILI SEGUNDOS
                //callback: callback,
                callback: enmascararBomba,
                args: [bombaBulletE,tweenBombaE],
                callbackScope: bombaBulletE,tweenBombaE,
                loop: true,
            });
            in_AvionOrigen.tieneBomba=false; ////--> ACTIVAR PARA QUE SOLO DISPARE UNA BOMBA!!!
        }
    }




    function setMaksAvion(in_avion){
        if (isEnSuTerritorio(in_avion)  && cantSuper==0) {
            in_avion.mask = spotlight_instance;
        } else {
            in_avion.mask = 0;
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

    function enmascararBomba (bomba,tweenBomba){
        bombaBulletA.body.enable=false;
        bomba.x=3000;
        bomba.y=3000;
        bomba.scaleX=4;
        bomba.scaleY=4;
        tweenBomba.stop();
    }

    function createSuper(){
        if (isPressY5Times >= 5) {
            superOne = sceneJuego.physics.add.image(500, 300,"superOne");
            superOne.scaleX=0.1;
            superOne.scaleY=0.1;
            superOne.z = 0; 
            superOne.setDepth(999);
            superOne.setVelocity(0,0);
            superOne.visible=true;
            superOne.body.enable=true;
            superOne.unidadDeVelocidad=15; 

            isSuperAlive = true;
            cantSuper=1;

            avionEnemiga_Activa.mask = 0;
            avionEnemiga_Activa.mask = 0;
            sceneJuego.pisoEnemigo.mask = 0;
            artilleroE_1.mask = 0;
            artilleroE_2.mask = 0;
            artilleroE_3.mask = 0;
            artilleroE_4.mask = 0;
            artilleroE_5.mask = 0;
            artilleroE_6.mask = 0;
            torreControlEnemiga.mask = 0;
            pistaAvionesEnemiga.mask = 0;
            deposito_bombasEnemigo.mask = 0;
            deposito_combustibleEnemigo.mask = 0;

        }

    }
    
    function actSuper(){
        if( (sceneJuego.superBorn.isDown) && (cantSuper==0) ) {
            createSuper();
        }

        if (isSuperAlive == true) {
            if(sceneJuego.flecha_right.isDown || sceneJuego.flecha_left.isDown || sceneJuego.flecha_up.isDown || sceneJuego.flecha_down.isDown || sceneJuego.superCenter.isDown || sceneJuego.superKill.isDown ){
                var diagonal=false;
                if(sceneJuego.flecha_right.isDown) {
                    superOne.x = superOne.x + superOne.unidadDeVelocidad;//++;
                    superOne.resetFlip();
                    if (sceneJuego.flecha_down.isDown){
                        // superOne.x = superOne.x + unidadDeVelocidad;//++; 
                        superOne.y = superOne.y + superOne.unidadDeVelocidad;//++;
                    }else{
                        if (sceneJuego.flecha_up.isDown){
                            // superOne.x = superOne.x + unidadDeVelocidad;//++; 
                            superOne.y = superOne.y - superOne.unidadDeVelocidad;//--;
                        }else{diagonal=true;}
                    ;}                
                } else if(sceneJuego.flecha_left.isDown) {
                    superOne.x = superOne.x - superOne.unidadDeVelocidad;//--;
                    if (sceneJuego.flecha_down.isDown){
                        // superOne.x = superOne.x - unidadDeVelocidad;//--; 
                        superOne.y = superOne.y + superOne.unidadDeVelocidad;//++;
                    }else{
                        if (sceneJuego.flecha_up.isDown){
                            // superOne.x = superOne.x - unidadDeVelocidad;//--; 
                            superOne.y = superOne.y - superOne.unidadDeVelocidad;//--;
                        }else{diagonal=true;}
                    ;}           
                } else if(sceneJuego.flecha_up.isDown) {
                    superOne.y = superOne.y - superOne.unidadDeVelocidad;//--;
                } else if(sceneJuego.flecha_down.isDown) {
                    superOne.y = superOne.y + superOne.unidadDeVelocidad;//++;
                }

                if (sceneJuego.superCenter.isDown){
                    superOne.x = 500;
                    superOne.y = 300;
                }
                if (sceneJuego.superKill.isDown){
                    superOne.x = 2500;
                    superOne.y = 2300;
                    superOne.visible= false;
                    superOne.body.enable= false;
                    isSuperAlive = false;
                    cantSuper=0;

                    spotlight.x = pistaAvionesAliada.x;
                    spotlight.y = pistaAvionesAliada.y;

                    setMaksAvion(avionEnemiga_Activa);
                    sceneJuego.pisoEnemigo.mask = spotlight_instance;
                    avionEnemiga_Activa.mask = spotlight_instance;
                    artilleroE_1.mask = spotlight_instance;
                    artilleroE_2.mask = spotlight_instance;
                    artilleroE_3.mask = spotlight_instance;
                    artilleroE_4.mask = spotlight_instance;
                    artilleroE_5.mask = spotlight_instance;
                    artilleroE_6.mask = spotlight_instance;
                    torreControlEnemiga.mask = spotlight_instance;
                    pistaAvionesEnemiga.mask = spotlight_instance;
                    deposito_bombasEnemigo.mask = spotlight_instance;
                    deposito_combustibleEnemigo.mask = spotlight_instance;


                }
            } ////FIN IF DE BOTONES DE DIRECCION
            spotlight.x = superOne.x;
            spotlight.y = superOne.y+2;
        }
    }

    function setRecargarElementosAvion(in_Avion_Activa){
        if (in_Avion_Activa.bando == "Aliado") {
            if (deposito_bombasAliado.vida > 0) {
                in_Avion_Activa.tieneBomba = true;
            }
            if (deposito_combustibleAliado.vida > 0) {
                in_Avion_Activa.cantCombustible = avionCombustibleDefault;
            }
        } else {
            if (deposito_bombasEnemigo.vida > 0) {
                in_Avion_Activa.tieneBomba = true;
            }
            if (deposito_combustibleEnemigo.vida > 0) {
                in_Avion_Activa.cantCombustible = avionCombustibleDefault;
            }
        }        
    }

/////////////////---------------------------------------------------------------------------------------
/////////////////-------------FIN Eventos Avion Genericos
/////////////////---------------------------------------------------------------------------------------






/////////////////---------------------------------------------------------------------------------------
/////////////////-------------Comienzo Eventos OVERLAP
/////////////////---------------------------------------------------------------------------------------
    function overlapEvent_artilleroOnCollide(artillero, objeto2){
        artilleroSetearUbicacion(artillero); 
        
        artilleroAuxNum = artillero.num;
        artilleroAuxX = artillero.x;
        artilleroAuxY = artillero.y;

        if (!isEnvioMisDatosBase) {
            sendDatosWebSocket("datosArtilleroByOverlap");
        }
    }

    function overlapEvent_choqueAviones(avion1,avion2){
        if (avion1.z == avion2.z){
            ////CAMBIAR FLAG PARA QUE LA SOMBRA QUEDE EN LA BASE
            isAvionActivaAliadaViva = false;
            isAvionActivaEnemigaViva = false;
            setDestroyAvionAndGetNewActive(avion1, Gpo_AvionesAliados);
            setDestroyAvionAndGetNewActive(avion2, Gpo_AvionesEnemigos);     
        }
    }

    function overlapEvent_impactoBalaEnArtilleroA(artillero,bala){
        artillero.vida--;
        //e.log(bala);
        snd_impacto_metralleta.play();
        //p1Danado = true;
        //console.log("recibio disparo"+artillero.vida);
        bala.kill();
        if (artillero.vida <= 0){
        //  console.log(artillero.vida);
            artillero.body.enable = false;
            boom = this.add.sprite(artillero.x, artillero.y, 'explosion');
            boom.anims.play('explode');
            snd_explosion.play();

            Gpo_ArtillerosAliados.killAndHide(artillero);
        // Gpo_ArtillerosAliados.killAndHide(artillero);       
        } 
    }

    function overlapEvent_impactoBalaEnArtilleroE(artillero,bala){
        artillero.vida--;
        //console.log(bala);
        snd_impacto_metralleta.play();
        //p1Danado = true;
        //console.log("recibio disparo"+artillero.vida);
        bala.kill();
        if (artillero.vida <= 0){
        //  console.log(artillero.vida);
            artillero.body.enable = false;
            boom = this.add.sprite(artillero.x, artillero.y, 'explosion');
            boom.anims.play('explode');
            snd_explosion.play();

            destruiAlgunArtilleroEnemigoCual = artillero.num;

            Gpo_ArtillerosEnemigos.killAndHide(artillero);
        // Gpo_ArtillerosEnemigos.killAndHide(artillero);     
        
            sendDatosWebSocket("destruiAlgunArtilleroEnemigo");  
        } 
    }

    function overlapEvent_impactoBalaEnAvionA(avion, bala ){
        avion.vida--;
        snd_impacto_metralleta.play();
        bala.kill();
        if (avion.vida <= 0){
            isAvionActivaAliadaViva = false;
            setDestroyAvionAndGetNewActive(avion, Gpo_AvionesAliados);
        } 
    } 

    function overlapEvent_impactoBalaEnAvionE(avion, bala ){
        avion.vida--;
        snd_impacto_metralleta.play();
        bala.kill();
        if (avion.vida <= 0){
            isAvionActivaEnemigaViva = false;
            setDestroyAvionAndGetNewActive(avion, Gpo_AvionesEnemigos); 
        } 
    } 

    function overlapEvent_impactoBalaEnElementoBaseA(elem_base,bala){
        elem_base.vida--;
        snd_impacto_metralleta.play();
        bala.kill();
        if (elem_base.vida <= 0){
        //  console.log(artillero.vida);
            elem_base.body.enable = false;
            boom = this.add.sprite(elem_base.x, elem_base.y, 'explosion');
            boom.anims.play('explode');
            snd_explosion.play();
            sceneJuego.cameras.main.shake(200, 0.02);

            Gpo_ElementosBaseAliada.killAndHide(elem_base);  

            if (Gpo_ElementosBaseAliada.getTotalUsed() == 0) {
                condicionPerdidaAliado = true;
            } 
        } 
    } 

    function overlapEvent_impactoBalaEnElementoBaseE(elem_base,bala){
        elem_base.vida--;
        //console.log(bala);
        snd_impacto_metralleta.play();
        //p1Danado = true;
        //console.log("recibio disparo"+artillero.vida);
        bala.kill();
        if (elem_base.vida <= 0){
        //  console.log(artillero.vida);
            
            elem_base.body.enable = false;
            boom = this.add.sprite(elem_base.x, elem_base.y, 'explosion');
            boom.anims.play('explode');
            snd_explosion.play();
            sceneJuego.cameras.main.shake(200, 0.02);

            destruiAlgunElementoBaseEnemigaCual = elem_base.nombre;

            Gpo_ElementosBaseEnemiga.killAndHide(elem_base);
            //Gpo_ArtillerosAliados.killAndHide(torre);  
            if (Gpo_ElementosBaseEnemiga.getTotalUsed() == 0) {
                sendDatosWebSocket("destruiUltimoElementoBaseEnemiga");
                condicionPerdidaEnemigo = true;
            }
            else{
                sendDatosWebSocket("destruiAlgunElementoBaseEnemiga");
            }            
        } 
    } 

    function overlapEvent_impactoBombaEnArtilleroA(bomba,artillero ){
        artillero.vida=0;
        if (artillero.vida <= 0){
            boom = this.add.sprite(artillero.x, artillero.y, 'explosion');
            boom.anims.play('explode');
            snd_explosion.play();

            artillero.body.enable=false;
            Gpo_ArtillerosAliados.killAndHide(artillero);   
        } 
    } 

    function overlapEvent_impactoBombaEnArtilleroE(bomba,artillero ){
        artillero.vida=0;
        if (artillero.vida <= 0){
            boom = this.add.sprite(artillero.x, artillero.y, 'explosion');
            boom.anims.play('explode');
            snd_explosion.play();

            artillero.body.enable=false;

            destruiAlgunArtilleroEnemigoCual = artillero.num;

            Gpo_ArtillerosEnemigos.killAndHide(artillero);  
            
            sendDatosWebSocket("destruiAlgunArtilleroEnemigo");  
        } 
    } 

    function overlapEvent_impactoBombaEnElementoBaseA(bomba,elem_base ){
        elem_base.vida=0;
        if (elem_base.vida <= 0){
            boom = this.add.sprite(elem_base.x, elem_base.y, 'explosion');
            boom.anims.play('explode');
            snd_explosion.play();
            sceneJuego.cameras.main.shake(200, 0.02);
            elem_base.body.enable=false;
            Gpo_ElementosBaseAliada.killAndHide(elem_base);   
            
            if (Gpo_ElementosBaseAliada.getTotalUsed() == 0) {
                
                condicionPerdidaAliado = true;
            }    

        } 
    } 

    function overlapEvent_impactoBombaEnElementoBaseE(bomba, elem_base){
        elem_base.vida=0;
        ////////bomba.destroy();   //// se va a la m
        if (elem_base.vida <= 0){
            boom = this.add.sprite(elem_base.x, elem_base.y, 'explosion');
            boom.anims.play('explode');
            snd_explosion.play();
            elem_base.body.enable=false;
            sceneJuego.cameras.main.shake(200, 0.02);
            
            destruiAlgunElementoBaseEnemigaCual = elem_base.nombre;

            Gpo_ElementosBaseEnemiga.killAndHide(elem_base);
            
            if (Gpo_ElementosBaseEnemiga.getTotalUsed() == 0) {
                sendDatosWebSocket("destruiUltimoElementoBaseEnemiga");
                condicionPerdidaEnemigo = true;
            }else{
                sendDatosWebSocket("destruiAlgunElementoBaseEnemiga");
            }
        } 
    }


    function overlapEvent_avionSobrePistaBase(inAvion, inPista){
        if (inAvion.enPista == false) {
            if (inAvion.z == 0) {
                setRecargarElementosAvion(inAvion);
            } 
        }       
    }


/////////////////---------------------------------------------------------------------------------------
/////////////////-------------FIN Eventos OVERLAP----------------------------------
/////////////////---------------------------------------------------------------------------------------

function cargaElementosVistaLateral(){
    //VISTA LATERAL
    pisoLateral = sceneJuego.add.image(campoAliado_w/2, ((campoAliado_h+campoEnemigo_h)/2), 'pisoLateral');
    pisoLateral.setDepth(100);
    pisoLateral.setVisible(false);
    pisoLateral.displayWidth    = campoAliado_w;
    pisoLateral.displayHeight   = campoAliado_h+campoEnemigo_h;
    
    separacionVertical = sceneJuego.add.image(50,0, 'separacionVertical');
    separacionVertical.setDepth(900);
    separacionVertical.setVisible(false);
    separacionVertical.displayWidth    = 300;
    separacionVertical.displayHeight   = 1200;

    if (jugadorMiNumero == 1) {
        colorBando = 'avionIzquierdaComunNegra';
    } else {
        colorBando = 'avionIzquierdaComunRoja';
    }
    avionActivaAliadaLateral = sceneJuego.add.image(campoAliado_w/2, ((campoAliado_h+campoEnemigo_h)/2), colorBando);
    avionActivaAliadaLateral.setVisible(false);
    avionActivaAliadaLateral.setDepth(100);

    if (jugadorMiNumero == 2) {
        colorBando = 'avionDerechaComunNegra';
    } else {
        colorBando = 'avionDerechaComunRoja';
    }
    avionActivaEnemigaLateral = sceneJuego.add.image(2000, 2000, colorBando);
    avionActivaEnemigaLateral.setVisible(false);
    avionActivaEnemigaLateral.setDepth(100);
    
    if (jugadorMiNumero == 1) {
        colorBando = 'pistaAvionesVLateral_negro';
    } else {
        colorBando = 'pistaAvionesVLateral_roja';
    }
    pistaDeAvionAliadaLateral = sceneJuego.add.image(750, 500, colorBando);
    pistaDeAvionAliadaLateral.setDepth(100);
    pistaDeAvionAliadaLateral.scaleX = 1.5;
    pistaDeAvionAliadaLateral.scaleY = 1.5;

    if (jugadorMiNumero == 1) {
        colorBando = 'deposito_bombas_negro';
    } else {
        colorBando = 'deposito_bombas_rojo';
    }
    depositoDeBombasAliadoLateral = sceneJuego.add.image(820, 400, colorBando);
    depositoDeBombasAliadoLateral.setDepth(100);
    depositoDeBombasAliadoLateral.scaleX = 1.5;
    depositoDeBombasAliadoLateral.scaleY = 1.5;

    if (jugadorMiNumero == 1) {
        colorBando = 'torreControl_VLateral_negra';
    } else {
        colorBando = 'torreControl_VLateral_roja';
    }
    torreControlAliadaLateral = sceneJuego.add.image(700, 400, colorBando);
    torreControlAliadaLateral.setDepth(100);
    torreControlAliadaLateral.scaleX = 2;
    torreControlAliadaLateral.scaleY = 2;

    if (jugadorMiNumero == 1) {
        colorBando = 'deposito_combustible_negro';
    } else {
        colorBando = 'deposito_combustible_rojo';
    }
    depositoDeCombustibleAliadoLateral = sceneJuego.add.image(600, 470, colorBando);
    depositoDeCombustibleAliadoLateral.setDepth(100);
    depositoDeCombustibleAliadoLateral.scaleX = 1.5;
    depositoDeCombustibleAliadoLateral.scaleY = 1.5;


    pistaDeAvionAliadaLateral.setVisible(false);
    depositoDeBombasAliadoLateral.setVisible(false);
    torreControlAliadaLateral.setVisible(false);
    depositoDeCombustibleAliadoLateral.setVisible(false);
}

function switchVistaLateralAJuego ()
{
	if (isEnVistaLateral)
	{
		isEnVistaLateral = false;
		/* sonidoReanudar.play();
		opvReanudar();	
		musicaFondo.play();*/
		separacionVertical.setVisible(false);
		pisoLateral.setVisible(false);
        avionActivaAliadaLateral.setVisible(false);
        avionActivaEnemigaLateral.setVisible(false);

        pistaDeAvionAliadaLateral.setVisible(false);
        depositoDeBombasAliadoLateral.setVisible(false);
        torreControlAliadaLateral.setVisible(false);
        depositoDeCombustibleAliadoLateral.setVisible(false);

	}
	if (!isEnVistaLateral){
		// ALGO
	
	}	 
	
}
function switchVistaJuegoToVistaLateral ()
{
	if (!isEnVistaLateral){
    
        isEnVistaLateral = true;
        /// sonidoPausa.play(); --> REPORDUZCO SONIDO
        // opvPausa(); --> SEND JSON
    }
	if (isEnVistaLateral){
            // DETENGO CUALQUIER SONIDO QUE ESTE CORRIENDO EN EL JUEGO
			// DETENGO MUSICA DE FONDO --> musicaFondo.stop();
			
            // AVISO EN PANTALLA
            /* tableroAvion.setText([
                'PARTIDA PAUSADA ',
            ]); */
            //Muestra Vista Lateral
            if (avionAliada_Activa.vida > 0) {

                if (avionAliada_Activa.y > campoEnemigo_h) {
                    avionActivaAliadaLateral.setVisible(true);
                    switch (avionAliada_Activa.z){
                        case 0:
                            avionActivaAliadaLateral.y=(campoAliado_h+campoEnemigo_h)-350;
                            avionActivaAliadaLateral.scaleX=0.8;
                            avionActivaAliadaLateral.scaleY=0.8;
                            break;
                        case 100:
                            avionActivaAliadaLateral.y=(campoAliado_h+campoEnemigo_h)-450;
                            avionActivaAliadaLateral.scaleX=0.5;
                            avionActivaAliadaLateral.scaleY=0.5;
                            break;
                        case 200:
                            avionActivaAliadaLateral.y=(campoAliado_h+campoEnemigo_h)-550;
                            avionActivaAliadaLateral.scaleX=0.3;
                            avionActivaAliadaLateral.scaleY=0.3;
                            break;
                    }
                    y = avionAliada_Activa.y;
                    x = dadoVistaAereaY_obtengoUnXParaLateral(y);
                    avionActivaAliadaLateral.x = x;


                }
            }

            if (avionEnemiga_Activa.vida > 0) {
                
                

                if (avionEnemiga_Activa.y > campoEnemigo_h) {
                    avionActivaEnemigaLateral.setVisible(true);

                    switch (avionEnemiga_Activa.z){
                        case 0:
                            avionActivaEnemigaLateral.y=(campoAliado_h+campoEnemigo_h)-350;
                            avionActivaEnemigaLateral.scaleX=0.8;
                            avionActivaEnemigaLateral.scaleY=0.8;
                            break;
                        case 100:
                            avionActivaEnemigaLateral.y=(campoAliado_h+campoEnemigo_h)-450;
                            avionActivaEnemigaLateral.scaleX=0.5;
                            avionActivaEnemigaLateral.scaleY=0.5;
                            break;
                        case 200:
                            avionActivaEnemigaLateral.y=(campoAliado_h+campoEnemigo_h)-550;
                            avionActivaEnemigaLateral.scaleX=0.3;
                            avionActivaEnemigaLateral.scaleY=0.3;
                            break;
                    }
                    y = avionEnemiga_Activa.y;
                    x = dadoVistaAereaY_obtengoUnXParaLateral(y);
                    avionActivaEnemigaLateral.x = x;

                }
            }

			pisoLateral.setVisible(true);
            separacionVertical.setVisible(true);

            pistaDeAvionAliadaLateral.setVisible(true);
            
            if (deposito_bombasAliado.vida > 0) {
                depositoDeBombasAliadoLateral.setVisible(true);
            }
            if (deposito_combustibleAliado.vida > 0) {
                depositoDeCombustibleAliadoLateral.setVisible(true);
            }
            if (torreControlAliada.vida > 0) {
                torreControlAliadaLateral.setVisible(true);

                if (torreControlAliada.hayEnemigo) {
                    if (jugadorMiNumero == 1) {
                        colorBando = 'torreControl_VLateral_negra_activa';
                    } else {
                        colorBando = 'torreControl_VLateral_roja_activa';
                    }
                    torreControlAliadaLateral.setTexture(colorBando);
                }else{
                    if (jugadorMiNumero == 1) {
                        colorBando = 'torreControl_VLateral_negra';
                    } else {
                        colorBando = 'torreControl_VLateral_roja';
                    }
                    torreControlAliadaLateral.setTexture(colorBando);
                }
            }
            var sgm_pantalla = (campoAliado_h+campoEnemigo_h)/3;
	



	}else{
        pisoLateral.setVisible(false);
    }
}

function dadoVistaAereaY_obtengoUnXParaLateral(vistaAereaY){
    var vistaLateralX=100;

    ////vista aerea va entre 300 y 600, o sea, mi 100% es 300
    var xABuscarEnPrimeraReglaDe3 = 0;
    var valorEntrante = (vistaAereaY-300);    
    // x% --- 100%
    // val --- 300px
    ////aplicao regla de 3...
    xABuscarEnPrimeraReglaDe3 = (valorEntrante*100) / 300


    ////vista lateral va desde 100 a 900 (valor absoluto de 800),
    //// o sea mi 100% es 800
    var xEntranteQueTengoDeAntes = xABuscarEnPrimeraReglaDe3;
    // x% de arriba ---- 100%
    // y en PX      ---- 800px
    ////aplico segunda regla de 3
    var valorEnPXLateralesAntesDeSalir = (xEntranteQueTengoDeAntes*800) / 100;
    vistaLateralX = valorEnPXLateralesAntesDeSalir+100;

    return vistaLateralX;
}


function juegoPausar(){
    //console.log("entro a function juegoPausar");

    isJuegoEnPausa = true;
    //tableroAvion = this.add.text(380, 280, 'Move the mouse', { font: '36px Courier Bold', fill: '#F11FFF' });
    
    if (isBloquearHastaReanudar) {
        tableroEstadoPartida.x = 90;
        tableroEstadoPartida.y = 150;
        tableroEstadoPartida.setText([
            'PARTIDA PAUSADA PARA GUARDAR Y SALIR',
        ]); 
    } else {
        tableroEstadoPartida.x = 330;
        tableroEstadoPartida.y = 270;
        tableroEstadoPartida.setText([
            'PARTIDA PAUSADA',
        ]); 
    }

	tableroEstadoPartida.setColor('#FFFF00');
    
    avionAliada_Activa.setVelocity(0,0);
    avionEnemiga_Activa.setVelocity(0,0);

w
   /*  if (numJugador == 1) {
        ////yo puedo guardar partida// solo yo
        console.log("pause yo");


    } else {
        console.log("me pausaron");
    }  */

    ////todos pueden abandora partida
    ////si abandono, enviar por el websocket asi el otro gana....

}

function juegoReanudar(){
    //console.log("entro a function juegoReanudar");

        //tableroAvion.visible = false;

        isJuegoEnPausa = false;
		//tableroEstadoPartida.visible=false;

        avionAliada_Activa.setVelocity(avionAliada_Activa.ultimaVX,avionAliada_Activa.ultimaVY);
        avionEnemiga_Activa.setVelocity(avionEnemiga_Activa.ultimaVX,avionEnemiga_Activa.ultimaVY);
        
        quienPidioPausa = 0;
}



function actualizarDatosDePartidaAVariablesGlobales(){

    var elementoHtmlTempACargar;
    
    elementoHtmlTempACargar = document.getElementById("jugador2_ID");
    elementoHtmlTempACargar.value = juego_var_IDBaseDatosSegundoJugador;
   
	
    
	
	
/*     elementoHtmlTempACargar = document.getElementById("juego_var_Aliado_cantidadAviones");     
    elementoHtmlTempACargar.value = varDelJuegoJavaScript;        ////Aliado_cantidadAviones 	
    elementoHtmlTempACargar = document.getElementById("juego_var_Aliado_cantidadArtilleros");     
    elementoHtmlTempACargar.value = varDelJuegoJavaScript;        ////Aliado_cantidadArtilleros 	
    elementoHtmlTempACargar = document.getElementById("juego_var_Aliado_tieneTorreDeControl");     
    elementoHtmlTempACargar.value = varDelJuegoJavaScript;        ////Aliado_tieneTorreDeControl 	
    elementoHtmlTempACargar = document.getElementById("juego_var_Aliado_tieneDepCombustible");     
    elementoHtmlTempACargar.value = varDelJuegoJavaScript;        ////Aliado_tieneDepCombustible 	
    elementoHtmlTempACargar = document.getElementById("juego_var_Aliado_tieneDepBombas");     
    elementoHtmlTempACargar.value = varDelJuegoJavaScript;        ////Aliado_tieneDepBombas  */	
        
    elementoHtmlTempACargar = document.getElementById("juego_var_Aliado_deposito_combustible_X");     
    elementoHtmlTempACargar.value = Math.round(deposito_combustibleAliado.x);        ////Aliado_deposito_combustible_X 	
    elementoHtmlTempACargar = document.getElementById("juego_var_Aliado_deposito_combustible_Y");     
    elementoHtmlTempACargar.value = Math.round(deposito_combustibleAliado.y);        ////Aliado_deposito_combustible_Y 	
    elementoHtmlTempACargar = document.getElementById("juego_var_Aliado_deposito_combustible_Vida");     
    elementoHtmlTempACargar.value = Math.round(deposito_combustibleAliado.vida);        ////Aliado_deposito_combustible_Vida 	
        
    elementoHtmlTempACargar = document.getElementById("juego_var_Aliado_torreControl_X");     
    elementoHtmlTempACargar.value = Math.round(torreControlAliada.x);        ////Aliado_torreControl_X 	
    elementoHtmlTempACargar = document.getElementById("juego_var_Aliado_torreControl_Y");     
    elementoHtmlTempACargar.value = Math.round(torreControlAliada.y);        ////Aliado_torreControl_Y 	
    elementoHtmlTempACargar = document.getElementById("juego_var_Aliado_torreControl_Vida");     
    elementoHtmlTempACargar.value = Math.round(torreControlAliada.vida);        ////Aliado_torreControl_Vida 	
    elementoHtmlTempACargar = document.getElementById("juego_var_Aliado_torreControl_HayEnemigo");     
    elementoHtmlTempACargar.value = torreControlAliada.hayEnemigo;        ////Aliado_torreControl_HayEnemigo 	
        
    elementoHtmlTempACargar = document.getElementById("juego_var_Aliado_deposito_bombas_X");     
    elementoHtmlTempACargar.value = Math.round(deposito_bombasAliado.x);        ////Aliado_deposito_bombas_X 	
    elementoHtmlTempACargar = document.getElementById("juego_var_Aliado_deposito_bombas_Y");     
    elementoHtmlTempACargar.value = Math.round(deposito_bombasAliado.y);        ////Aliado_deposito_bombas_Y 
    elementoHtmlTempACargar = document.getElementById("juego_var_Aliado_deposito_bombas_Vida");     
    elementoHtmlTempACargar.value = Math.round(deposito_bombasAliado.vida);        ////Aliado_deposito_bombas_Vida 	

    
    
    elementoHtmlTempACargar = document.getElementById("juego_var_Aliado_avion1_X");     
    elementoHtmlTempACargar.value = Math.round(avionA_1.x);        ////Aliado_avion1_X 	
    elementoHtmlTempACargar = document.getElementById("juego_var_Aliado_avion1_Y");     
    elementoHtmlTempACargar.value = Math.round(avionA_1.y);        ////Aliado_avion1_Y 	
    elementoHtmlTempACargar = document.getElementById("juego_var_Aliado_avion1_Z");   
    elementoHtmlTempACargar.value = avionA_1.z;        ////Aliado_avion1_Z 	
    elementoHtmlTempACargar = document.getElementById("juego_var_Aliado_avion1_Vida");     
    elementoHtmlTempACargar.value = Math.round(avionA_1.vida);        ////Aliado_avion1_Vida 	
    elementoHtmlTempACargar = document.getElementById("juego_var_Aliado_avion1_HayEnemigo");     
    elementoHtmlTempACargar.value = avionA_1.HayEnemigo;        ////Aliado_avion1_HayEnemigo 	
    elementoHtmlTempACargar = document.getElementById("juego_var_Aliado_avion1_TieneBomba");   
    elementoHtmlTempACargar.value = avionA_1.tieneBomba;   ////Aliado_avion1_TieneBomba 

    elementoHtmlTempACargar = document.getElementById("juego_var_Aliado_avion1_Angulo"); 
    elementoHtmlTempACargar.value = Math.round(avionA_1.angle); 
          	
    elementoHtmlTempACargar = document.getElementById("juego_var_Aliado_avion1_CantCombustible");     
    elementoHtmlTempACargar.value = Math.round(avionA_1.cantCombustible);        ////Aliado_avion1_CantCombustible 	
    elementoHtmlTempACargar = document.getElementById("juego_var_Aliado_avion1_EsEnCampoEnemigo");     
    elementoHtmlTempACargar.value = avionA_1.isEnSuTerritorio;        ////Aliado_avion1_EsEnCampoEnemigo 	
        
        
    elementoHtmlTempACargar = document.getElementById("juego_var_Aliado_avion2_X");     
    elementoHtmlTempACargar.value = Math.round(avionA_2.x);        ////Aliado_avion2_X 	
    elementoHtmlTempACargar = document.getElementById("juego_var_Aliado_avion2_Y");     
    elementoHtmlTempACargar.value = Math.round(avionA_2.y);        ////Aliado_avion2_Y 	
    elementoHtmlTempACargar = document.getElementById("juego_var_Aliado_avion2_Z");     
    elementoHtmlTempACargar.value = avionA_2.z;        ////Aliado_avion2_Z 	
    elementoHtmlTempACargar = document.getElementById("juego_var_Aliado_avion2_Vida");     
    elementoHtmlTempACargar.value = Math.round(avionA_2.vida);        ////Aliado_avion2_Vida 	
    elementoHtmlTempACargar = document.getElementById("juego_var_Aliado_avion2_HayEnemigo");     
    elementoHtmlTempACargar.value = avionA_2.HayEnemigo;        ////Aliado_avion2_HayEnemigo 	
    elementoHtmlTempACargar = document.getElementById("juego_var_Aliado_avion2_TieneBomba");     
    elementoHtmlTempACargar.value = avionA_2.tieneBomba;        ////Aliado_avion2_TieneBomba 

    elementoHtmlTempACargar = document.getElementById("juego_var_Aliado_avion2_Angulo"); 
    elementoHtmlTempACargar.value = Math.round(avionA_2.angle); 
          	
     	
    elementoHtmlTempACargar = document.getElementById("juego_var_Aliado_avion2_CantCombustible");     
    elementoHtmlTempACargar.value = Math.round(avionA_2.cantCombustible);        ////Aliado_avion2_CantCombustible 	
    elementoHtmlTempACargar = document.getElementById("juego_var_Aliado_avion2_EsEnCampoEnemigo");     
    elementoHtmlTempACargar.value = avionA_2.isEnSuTerritorio;        ////Aliado_avion2_EsEnCampoEnemigo 	
        

    elementoHtmlTempACargar = document.getElementById("juego_var_Aliado_avion3_X");     
    elementoHtmlTempACargar.value = Math.round(avionA_3.x);        ////Aliado_avion3_X 	
    elementoHtmlTempACargar = document.getElementById("juego_var_Aliado_avion3_Y");     
    elementoHtmlTempACargar.value = Math.round(avionA_3.y);        ////Aliado_avion3_Y 	
    elementoHtmlTempACargar = document.getElementById("juego_var_Aliado_avion3_Z");     
    elementoHtmlTempACargar.value = avionA_3.z;        ////Aliado_avion3_Z 	
    elementoHtmlTempACargar = document.getElementById("juego_var_Aliado_avion3_Vida");     
    elementoHtmlTempACargar.value = Math.round(avionA_3.vida);        ////Aliado_avion3_Vida 	
    elementoHtmlTempACargar = document.getElementById("juego_var_Aliado_avion3_HayEnemigo");     
    elementoHtmlTempACargar.value = avionA_3.HayEnemigo;        ////Aliado_avion3_HayEnemigo 	
    elementoHtmlTempACargar = document.getElementById("juego_var_Aliado_avion3_TieneBomba");     
    elementoHtmlTempACargar.value = avionA_3.tieneBomba;        ////Aliado_avion3_TieneBomba 

    elementoHtmlTempACargar = document.getElementById("juego_var_Aliado_avion3_Angulo"); 
    elementoHtmlTempACargar.value = Math.round(avionA_3.angle); 
          	
     	
    elementoHtmlTempACargar = document.getElementById("juego_var_Aliado_avion3_CantCombustible");     
    elementoHtmlTempACargar.value = Math.round(avionA_3.cantCombustible);        ////Aliado_avion3_CantCombustible 	
    elementoHtmlTempACargar = document.getElementById("juego_var_Aliado_avion3_EsEnCampoEnemigo");     
    elementoHtmlTempACargar.value = avionA_3.isEnSuTerritorio;        ////Aliado_avion3_EsEnCampoEnemigo 	
        
    elementoHtmlTempACargar = document.getElementById("juego_var_Aliado_avion4_X");     
    elementoHtmlTempACargar.value = Math.round(avionA_4.x);        ////Aliado_avion4_X 	
    elementoHtmlTempACargar = document.getElementById("juego_var_Aliado_avion4_Y");     
    elementoHtmlTempACargar.value = Math.round(avionA_4.y);        ////Aliado_avion4_Y 	
    elementoHtmlTempACargar = document.getElementById("juego_var_Aliado_avion4_Z");     
    elementoHtmlTempACargar.value = avionA_4.z;        ////Aliado_avion4_Z 	
    elementoHtmlTempACargar = document.getElementById("juego_var_Aliado_avion4_Vida");     
    elementoHtmlTempACargar.value = Math.round(avionA_4.vida);        ////Aliado_avion4_Vida 	
    elementoHtmlTempACargar = document.getElementById("juego_var_Aliado_avion4_HayEnemigo");     
    elementoHtmlTempACargar.value = avionA_4.HayEnemigo;        ////Aliado_avion4_HayEnemigo 	
    elementoHtmlTempACargar = document.getElementById("juego_var_Aliado_avion4_TieneBomba");     
    elementoHtmlTempACargar.value = avionA_4.tieneBomba;        ////Aliado_avion4_TieneBomba 

    elementoHtmlTempACargar = document.getElementById("juego_var_Aliado_avion4_Angulo"); 
    elementoHtmlTempACargar.value = Math.round(avionA_4.angle); 
          	
     	
    elementoHtmlTempACargar = document.getElementById("juego_var_Aliado_avion4_CantCombustible");     
    elementoHtmlTempACargar.value = Math.round(avionA_4.cantCombustible);        ////Aliado_avion4_CantCombustible 	
    elementoHtmlTempACargar = document.getElementById("juego_var_Aliado_avion4_EsEnCampoEnemigo");     
    elementoHtmlTempACargar.value = avionA_4.isEnSuTerritorio;        ////Aliado_avion4_EsEnCampoEnemigo 	
        
    elementoHtmlTempACargar = document.getElementById("juego_var_Aliado_artillero1_X");     
    elementoHtmlTempACargar.value = Math.round(artilleroA_1.x);        ////Aliado_artillero1_X 	
    elementoHtmlTempACargar = document.getElementById("juego_var_Aliado_artillero1_Y");     
    elementoHtmlTempACargar.value = Math.round(artilleroA_1.y);        ////Aliado_artillero1_Y 	
    elementoHtmlTempACargar = document.getElementById("juego_var_Aliado_artillero1_Vida");     
    elementoHtmlTempACargar.value = Math.round(artilleroA_1.vida);        ////Aliado_artillero1_Vida 	
    elementoHtmlTempACargar = document.getElementById("juego_var_Aliado_artillero1_HayEnemigo");     
    elementoHtmlTempACargar.value = artilleroA_1.hayEnemigo;        ////Aliado_artillero1_HayEnemigo 	
    elementoHtmlTempACargar = document.getElementById("juego_var_Aliado_artillero1_Angulo");     
    elementoHtmlTempACargar.value = Math.round(artilleroA_1.angle);        ////Aliado_artillero1_Angulo 	


    elementoHtmlTempACargar = document.getElementById("juego_var_Aliado_artillero2_X");     
    elementoHtmlTempACargar.value = Math.round(artilleroA_2.x);        ////Aliado_artillero2_X 	
    elementoHtmlTempACargar = document.getElementById("juego_var_Aliado_artillero2_Y");     
    elementoHtmlTempACargar.value = Math.round(artilleroA_2.y);        ////Aliado_artillero2_Y 	
    elementoHtmlTempACargar = document.getElementById("juego_var_Aliado_artillero2_Vida");     
    elementoHtmlTempACargar.value = Math.round(artilleroA_2.vida);        ////Aliado_artillero2_Vida 	
    elementoHtmlTempACargar = document.getElementById("juego_var_Aliado_artillero2_HayEnemigo");     
    elementoHtmlTempACargar.value = artilleroA_2.hayEnemigo;        ////Aliado_artillero2_HayEnemigo 	
    elementoHtmlTempACargar = document.getElementById("juego_var_Aliado_artillero2_Angulo");     
    elementoHtmlTempACargar.value = Math.round(artilleroA_2.angle);        ////Aliado_artillero2_Angulo 
    
    
    elementoHtmlTempACargar = document.getElementById("juego_var_Aliado_artillero3_X");     
    elementoHtmlTempACargar.value = Math.round(artilleroA_3.x);        ////Aliado_artillero3_X 	
    elementoHtmlTempACargar = document.getElementById("juego_var_Aliado_artillero3_Y");     
    elementoHtmlTempACargar.value = Math.round(artilleroA_3.y);        ////Aliado_artillero3_Y 	
    elementoHtmlTempACargar = document.getElementById("juego_var_Aliado_artillero3_Vida");     
    elementoHtmlTempACargar.value = Math.round(artilleroA_3.vida);        ////Aliado_artillero3_Vida 	
    elementoHtmlTempACargar = document.getElementById("juego_var_Aliado_artillero3_HayEnemigo");     
    elementoHtmlTempACargar.value = artilleroA_3.hayEnemigo;        ////Aliado_artillero3_HayEnemigo 	
    elementoHtmlTempACargar = document.getElementById("juego_var_Aliado_artillero3_Angulo");     
    elementoHtmlTempACargar.value = Math.round(artilleroA_3.angle);        ////Aliado_artillero3_Angulo 
    
    
    elementoHtmlTempACargar = document.getElementById("juego_var_Aliado_artillero4_X");     
    elementoHtmlTempACargar.value = Math.round(artilleroA_4.x);        ////Aliado_artillero4_X 	
    elementoHtmlTempACargar = document.getElementById("juego_var_Aliado_artillero4_Y");     
    elementoHtmlTempACargar.value = Math.round(artilleroA_4.y);        ////Aliado_artillero4_Y 	
    elementoHtmlTempACargar = document.getElementById("juego_var_Aliado_artillero4_Vida");     
    elementoHtmlTempACargar.value = Math.round(artilleroA_4.vida);        ////Aliado_artillero4_Vida 	
    elementoHtmlTempACargar = document.getElementById("juego_var_Aliado_artillero4_HayEnemigo");     
    elementoHtmlTempACargar.value = artilleroA_4.hayEnemigo;        ////Aliado_artillero4_HayEnemigo 	
    elementoHtmlTempACargar = document.getElementById("juego_var_Aliado_artillero4_Angulo");     
    elementoHtmlTempACargar.value = Math.round(artilleroA_4.angle);        ////Aliado_artillero4_Angulo 


    elementoHtmlTempACargar = document.getElementById("juego_var_Aliado_artillero5_X");     
    elementoHtmlTempACargar.value = Math.round(artilleroA_5.x);        ////Aliado_artillero5_X 	
    elementoHtmlTempACargar = document.getElementById("juego_var_Aliado_artillero5_Y");     
    elementoHtmlTempACargar.value = Math.round(artilleroA_5.y);        ////Aliado_artillero5_Y 	
    elementoHtmlTempACargar = document.getElementById("juego_var_Aliado_artillero5_Vida");     
    elementoHtmlTempACargar.value = Math.round(artilleroA_5.vida);        ////Aliado_artillero5_Vida 	
    elementoHtmlTempACargar = document.getElementById("juego_var_Aliado_artillero5_HayEnemigo");     
    elementoHtmlTempACargar.value = artilleroA_5.hayEnemigo;        ////Aliado_artillero5_HayEnemigo 	
    elementoHtmlTempACargar = document.getElementById("juego_var_Aliado_artillero5_Angulo");     
    elementoHtmlTempACargar.value = Math.round(artilleroA_5.angle);        ////Aliado_artillero5_Angulo 


    elementoHtmlTempACargar = document.getElementById("juego_var_Aliado_artillero6_X");     
    elementoHtmlTempACargar.value = Math.round(artilleroA_6.x);        ////Aliado_artillero6_X 	
    elementoHtmlTempACargar = document.getElementById("juego_var_Aliado_artillero6_Y");     
    elementoHtmlTempACargar.value = Math.round(artilleroA_6.y);        ////Aliado_artillero6_Y 	
    elementoHtmlTempACargar = document.getElementById("juego_var_Aliado_artillero6_Vida");     
    elementoHtmlTempACargar.value = Math.round(artilleroA_6.vida);        ////Aliado_artillero6_Vida 	
    elementoHtmlTempACargar = document.getElementById("juego_var_Aliado_artillero6_HayEnemigo");     
    elementoHtmlTempACargar.value = artilleroA_6.hayEnemigo;        ////Aliado_artillero6_HayEnemigo 	
    elementoHtmlTempACargar = document.getElementById("juego_var_Aliado_artillero6_Angulo");     
    elementoHtmlTempACargar.value = Math.round(artilleroA_6.angle);        ////Aliado_artillero6_Angulo 
        
        
        
        
        
        ///////////el segundo contrincante que tiene los datos actualizar estas//////////////////////		
        
    	/*     elementoHtmlTempACargar = document.getElementById("juego_var_Enemigo_cantidadAviones");     
    elementoHtmlTempACargar.value = varDelJuegoJavaScript;        ////Enemigo_cantidadAviones 	
    elementoHtmlTempACargar = document.getElementById("juego_var_Enemigo_cantidadArtilleros");     
    elementoHtmlTempACargar.value = varDelJuegoJavaScript;        ////Enemigo_cantidadArtilleros 	
    elementoHtmlTempACargar = document.getElementById("juego_var_Enemigo_tieneTorreDeControl");     
    elementoHtmlTempACargar.value = varDelJuegoJavaScript;        ////Enemigo_tieneTorreDeControl 	
    elementoHtmlTempACargar = document.getElementById("juego_var_Enemigo_tieneDepCombustible");     
    elementoHtmlTempACargar.value = varDelJuegoJavaScript;        ////Enemigo_tieneDepCombustible 	
    elementoHtmlTempACargar = document.getElementById("juego_var_Enemigo_tieneDepBombas");     
    elementoHtmlTempACargar.value = varDelJuegoJavaScript;        ////Enemigo_tieneDepBombas  */	
        
    elementoHtmlTempACargar = document.getElementById("juego_var_Enemigo_deposito_combustible_X");     
    elementoHtmlTempACargar.value = Math.round(deposito_combustibleEnemigo.x);        ////Enemigo_deposito_combustible_X 	
    elementoHtmlTempACargar = document.getElementById("juego_var_Enemigo_deposito_combustible_Y");     
    elementoHtmlTempACargar.value = Math.round(deposito_combustibleEnemigo.y);        ////Enemigo_deposito_combustible_Y 	
    elementoHtmlTempACargar = document.getElementById("juego_var_Enemigo_deposito_combustible_Vida");     
    elementoHtmlTempACargar.value = Math.round(deposito_combustibleEnemigo.vida);        ////Enemigo_deposito_combustible_Vida 	
        
    elementoHtmlTempACargar = document.getElementById("juego_var_Enemigo_torreControl_X");     
    elementoHtmlTempACargar.value = Math.round(torreControlEnemiga.x);        ////Enemigo_torreControl_X 	
    elementoHtmlTempACargar = document.getElementById("juego_var_Enemigo_torreControl_Y");     
    elementoHtmlTempACargar.value = Math.round(torreControlEnemiga.y);        ////Enemigo_torreControl_Y 	
    elementoHtmlTempACargar = document.getElementById("juego_var_Enemigo_torreControl_Vida");     
    elementoHtmlTempACargar.value = Math.round(torreControlEnemiga.vida);        ////Enemigo_torreControl_Vida 	
    elementoHtmlTempACargar = document.getElementById("juego_var_Enemigo_torreControl_HayEnemigo");     
    elementoHtmlTempACargar.value = torreControlEnemiga.hayEnemigo;        ////Enemigo_torreControl_HayEnemigo 	
        
    elementoHtmlTempACargar = document.getElementById("juego_var_Enemigo_deposito_bombas_X");     
    elementoHtmlTempACargar.value = Math.round(deposito_bombasEnemigo.x);        ////Enemigo_deposito_bombas_X 	
    elementoHtmlTempACargar = document.getElementById("juego_var_Enemigo_deposito_bombas_Y");     
    elementoHtmlTempACargar.value = Math.round(deposito_bombasEnemigo.y);        ////Enemigo_deposito_bombas_Y 
    elementoHtmlTempACargar = document.getElementById("juego_var_Enemigo_deposito_bombas_Vida");     
    elementoHtmlTempACargar.value = Math.round(deposito_bombasEnemigo.vida);        ////Enemigo_deposito_bombas_Vida 	

    
    
    elementoHtmlTempACargar = document.getElementById("juego_var_Enemigo_avion1_X");     
    elementoHtmlTempACargar.value = Math.round(avionE_1.x);        ////Enemigo_avion1_X 	
    elementoHtmlTempACargar = document.getElementById("juego_var_Enemigo_avion1_Y");     
    elementoHtmlTempACargar.value = Math.round(avionE_1.y);        ////Enemigo_avion1_Y 	
    elementoHtmlTempACargar = document.getElementById("juego_var_Enemigo_avion1_Z");     
    elementoHtmlTempACargar.value = avionE_1.z;        ////Enemigo_avion1_Z 	
    elementoHtmlTempACargar = document.getElementById("juego_var_Enemigo_avion1_Vida");     
    elementoHtmlTempACargar.value = Math.round(avionE_1.vida);        ////Enemigo_avion1_Vida 	
    elementoHtmlTempACargar = document.getElementById("juego_var_Enemigo_avion1_HayEnemigo");     
    elementoHtmlTempACargar.value = avionE_1.HayEnemigo;        ////Enemigo_avion1_HayEnemigo 	
    elementoHtmlTempACargar = document.getElementById("juego_var_Enemigo_avion1_TieneBomba");     
    elementoHtmlTempACargar.value = avionE_1.tieneBomba;        ////Enemigo_avion1_TieneBomba 

    elementoHtmlTempACargar = document.getElementById("juego_var_Enemigo_avion1_Angulo"); 
    elementoHtmlTempACargar.value = Math.round(avionE_1.angle); 
          	
     	
    elementoHtmlTempACargar = document.getElementById("juego_var_Enemigo_avion1_CantCombustible");     
    elementoHtmlTempACargar.value = Math.round(avionE_1.cantCombustible);        ////Enemigo_avion1_CantCombustible 	
    elementoHtmlTempACargar = document.getElementById("juego_var_Enemigo_avion1_EsEnCampoEnemigo");     
    elementoHtmlTempACargar.value = avionE_1.isEnSuTerritorio;        ////Enemigo_avion1_EsEnCampoEnemigo 	
        
        
    elementoHtmlTempACargar = document.getElementById("juego_var_Enemigo_avion2_X");     
    elementoHtmlTempACargar.value = Math.round(avionE_2.x);        ////Enemigo_avion2_X 	
    elementoHtmlTempACargar = document.getElementById("juego_var_Enemigo_avion2_Y");     
    elementoHtmlTempACargar.value = Math.round(avionE_2.y);        ////Enemigo_avion2_Y 	
    elementoHtmlTempACargar = document.getElementById("juego_var_Enemigo_avion2_Z");     
    elementoHtmlTempACargar.value = avionE_2.z;        ////Enemigo_avion2_Z 	
    elementoHtmlTempACargar = document.getElementById("juego_var_Enemigo_avion2_Vida");     
    elementoHtmlTempACargar.value = Math.round(avionE_2.vida);        ////Enemigo_avion2_Vida 	
    elementoHtmlTempACargar = document.getElementById("juego_var_Enemigo_avion2_HayEnemigo");     
    elementoHtmlTempACargar.value = avionE_2.HayEnemigo;        ////Enemigo_avion2_HayEnemigo 	
    elementoHtmlTempACargar = document.getElementById("juego_var_Enemigo_avion2_TieneBomba");     
    elementoHtmlTempACargar.value = avionE_2.tieneBomba;        ////Enemigo_avion2_TieneBomba 

    elementoHtmlTempACargar = document.getElementById("juego_var_Enemigo_avion2_Angulo"); 
    elementoHtmlTempACargar.value = Math.round(avionE_2.angle); 
          	
     	
     	
    elementoHtmlTempACargar = document.getElementById("juego_var_Enemigo_avion2_CantCombustible");     
    elementoHtmlTempACargar.value = Math.round(avionE_2.cantCombustible);        ////Enemigo_avion2_CantCombustible 	
    elementoHtmlTempACargar = document.getElementById("juego_var_Enemigo_avion2_EsEnCampoEnemigo");     
    elementoHtmlTempACargar.value = avionE_2.isEnSuTerritorio;        ////Enemigo_avion2_EsEnCampoEnemigo 	
        

    elementoHtmlTempACargar = document.getElementById("juego_var_Enemigo_avion3_X");     
    elementoHtmlTempACargar.value = Math.round(avionE_3.x);        ////Enemigo_avion3_X 	
    elementoHtmlTempACargar = document.getElementById("juego_var_Enemigo_avion3_Y");     
    elementoHtmlTempACargar.value = Math.round(avionE_3.y);        ////Enemigo_avion3_Y 	
    elementoHtmlTempACargar = document.getElementById("juego_var_Enemigo_avion3_Z");     
    elementoHtmlTempACargar.value = avionE_3.z;        ////Enemigo_avion3_Z 	
    elementoHtmlTempACargar = document.getElementById("juego_var_Enemigo_avion3_Vida");     
    elementoHtmlTempACargar.value = Math.round(avionE_3.vida);        ////Enemigo_avion3_Vida 	
    elementoHtmlTempACargar = document.getElementById("juego_var_Enemigo_avion3_HayEnemigo");     
    elementoHtmlTempACargar.value = avionE_3.HayEnemigo;        ////Enemigo_avion3_HayEnemigo 	
    elementoHtmlTempACargar = document.getElementById("juego_var_Enemigo_avion3_TieneBomba");     
    elementoHtmlTempACargar.value = avionE_3.tieneBomba;        ////Enemigo_avion3_TieneBomba 

    elementoHtmlTempACargar = document.getElementById("juego_var_Enemigo_avion3_Angulo"); 
    elementoHtmlTempACargar.value = Math.round(avionE_3.angle); 
          	
     	
     	
    elementoHtmlTempACargar = document.getElementById("juego_var_Enemigo_avion3_CantCombustible");     
    elementoHtmlTempACargar.value = Math.round(avionE_3.cantCombustible);        ////Enemigo_avion3_CantCombustible 	
    elementoHtmlTempACargar = document.getElementById("juego_var_Enemigo_avion3_EsEnCampoEnemigo");     
    elementoHtmlTempACargar.value = avionE_3.isEnSuTerritorio;        ////Enemigo_avion3_EsEnCampoEnemigo 	
        
    elementoHtmlTempACargar = document.getElementById("juego_var_Enemigo_avion4_X");     
    elementoHtmlTempACargar.value = Math.round(avionE_4.x);        ////Enemigo_avion4_X 	
    elementoHtmlTempACargar = document.getElementById("juego_var_Enemigo_avion4_Y");     
    elementoHtmlTempACargar.value = Math.round(avionE_4.y);        ////Enemigo_avion4_Y 	
    elementoHtmlTempACargar = document.getElementById("juego_var_Enemigo_avion4_Z");     
    elementoHtmlTempACargar.value = avionE_4.z;        ////Enemigo_avion4_Z 	
    elementoHtmlTempACargar = document.getElementById("juego_var_Enemigo_avion4_Vida");     
    elementoHtmlTempACargar.value = Math.round(avionE_4.vida);        ////Enemigo_avion4_Vida 	
    elementoHtmlTempACargar = document.getElementById("juego_var_Enemigo_avion4_HayEnemigo");     
    elementoHtmlTempACargar.value = avionE_4.HayEnemigo;        ////Enemigo_avion4_HayEnemigo 	
    elementoHtmlTempACargar = document.getElementById("juego_var_Enemigo_avion4_TieneBomba");     
    elementoHtmlTempACargar.value = avionE_4.tieneBomba;        ////Enemigo_avion4_TieneBomba 

    elementoHtmlTempACargar = document.getElementById("juego_var_Enemigo_avion4_Angulo"); 
    elementoHtmlTempACargar.value = Math.round(avionE_4.angle); 
          	
     	
     	
    elementoHtmlTempACargar = document.getElementById("juego_var_Enemigo_avion4_CantCombustible");     
    elementoHtmlTempACargar.value = Math.round(avionE_4.cantCombustible);        ////Enemigo_avion4_CantCombustible 	
    elementoHtmlTempACargar = document.getElementById("juego_var_Enemigo_avion4_EsEnCampoEnemigo");     
    elementoHtmlTempACargar.value = avionE_4.isEnSuTerritorio;        ////Enemigo_avion4_EsEnCampoEnemigo 	
        
    elementoHtmlTempACargar = document.getElementById("juego_var_Enemigo_artillero1_X");     
    elementoHtmlTempACargar.value = Math.round(artilleroE_1.x);        ////Enemigo_artillero1_X 	
    elementoHtmlTempACargar = document.getElementById("juego_var_Enemigo_artillero1_Y");     
    elementoHtmlTempACargar.value = Math.round(artilleroE_1.y);        ////Enemigo_artillero1_Y 	
    elementoHtmlTempACargar = document.getElementById("juego_var_Enemigo_artillero1_Vida");     
    elementoHtmlTempACargar.value = Math.round(artilleroE_1.vida);        ////Enemigo_artillero1_Vida 	
    elementoHtmlTempACargar = document.getElementById("juego_var_Enemigo_artillero1_HayEnemigo");     
    elementoHtmlTempACargar.value = artilleroE_1.hayEnemigo;        ////Enemigo_artillero1_HayEnemigo 	
    elementoHtmlTempACargar = document.getElementById("juego_var_Enemigo_artillero1_Angulo");     
    elementoHtmlTempACargar.value = Math.round(artilleroE_1.angle);        ////Enemigo_artillero1_Angulo 	


    elementoHtmlTempACargar = document.getElementById("juego_var_Enemigo_artillero2_X");     
    elementoHtmlTempACargar.value = Math.round(artilleroE_2.x);        ////Enemigo_artillero2_X 	
    elementoHtmlTempACargar = document.getElementById("juego_var_Enemigo_artillero2_Y");     
    elementoHtmlTempACargar.value = Math.round(artilleroE_2.y);        ////Enemigo_artillero2_Y 	
    elementoHtmlTempACargar = document.getElementById("juego_var_Enemigo_artillero2_Vida");     
    elementoHtmlTempACargar.value = Math.round(artilleroE_2.vida);        ////Enemigo_artillero2_Vida 	
    elementoHtmlTempACargar = document.getElementById("juego_var_Enemigo_artillero2_HayEnemigo");     
    elementoHtmlTempACargar.value = artilleroE_2.hayEnemigo;        ////Enemigo_artillero2_HayEnemigo 	
    elementoHtmlTempACargar = document.getElementById("juego_var_Enemigo_artillero2_Angulo");     
    elementoHtmlTempACargar.value = Math.round(artilleroE_2.angle);        ////Enemigo_artillero2_Angulo 
    
    
    elementoHtmlTempACargar = document.getElementById("juego_var_Enemigo_artillero3_X");     
    elementoHtmlTempACargar.value = Math.round(artilleroE_3.x);        ////Enemigo_artillero3_X 	
    elementoHtmlTempACargar = document.getElementById("juego_var_Enemigo_artillero3_Y");     
    elementoHtmlTempACargar.value = Math.round(artilleroE_3.y);        ////Enemigo_artillero3_Y 	
    elementoHtmlTempACargar = document.getElementById("juego_var_Enemigo_artillero3_Vida");     
    elementoHtmlTempACargar.value = Math.round(artilleroE_3.vida);        ////Enemigo_artillero3_Vida 	
    elementoHtmlTempACargar = document.getElementById("juego_var_Enemigo_artillero3_HayEnemigo");     
    elementoHtmlTempACargar.value = artilleroE_3.hayEnemigo;        ////Enemigo_artillero3_HayEnemigo 	
    elementoHtmlTempACargar = document.getElementById("juego_var_Enemigo_artillero3_Angulo");     
    elementoHtmlTempACargar.value = Math.round(artilleroE_3.angle);        ////Enemigo_artillero3_Angulo 
    
    
    elementoHtmlTempACargar = document.getElementById("juego_var_Enemigo_artillero4_X");     
    elementoHtmlTempACargar.value = Math.round(artilleroE_4.x);        ////Enemigo_artillero4_X 	
    elementoHtmlTempACargar = document.getElementById("juego_var_Enemigo_artillero4_Y");     
    elementoHtmlTempACargar.value = Math.round(artilleroE_4.y);        ////Enemigo_artillero4_Y 	
    elementoHtmlTempACargar = document.getElementById("juego_var_Enemigo_artillero4_Vida");     
    elementoHtmlTempACargar.value = Math.round(artilleroE_4.vida);        ////Enemigo_artillero4_Vida 	
    elementoHtmlTempACargar = document.getElementById("juego_var_Enemigo_artillero4_HayEnemigo");     
    elementoHtmlTempACargar.value = artilleroE_4.hayEnemigo;        ////Enemigo_artillero4_HayEnemigo 	
    elementoHtmlTempACargar = document.getElementById("juego_var_Enemigo_artillero4_Angulo");     
    elementoHtmlTempACargar.value = Math.round(artilleroE_4.angle);        ////Enemigo_artillero4_Angulo 


    elementoHtmlTempACargar = document.getElementById("juego_var_Enemigo_artillero5_X");     
    elementoHtmlTempACargar.value = Math.round(artilleroE_5.x);        ////Enemigo_artillero5_X 	
    elementoHtmlTempACargar = document.getElementById("juego_var_Enemigo_artillero5_Y");     
    elementoHtmlTempACargar.value = Math.round(artilleroE_5.y);        ////Enemigo_artillero5_Y 	
    elementoHtmlTempACargar = document.getElementById("juego_var_Enemigo_artillero5_Vida");     
    elementoHtmlTempACargar.value = Math.round(artilleroE_5.vida);        ////Enemigo_artillero5_Vida 	
    elementoHtmlTempACargar = document.getElementById("juego_var_Enemigo_artillero5_HayEnemigo");     
    elementoHtmlTempACargar.value = artilleroE_5.hayEnemigo;        ////Enemigo_artillero5_HayEnemigo 	
    elementoHtmlTempACargar = document.getElementById("juego_var_Enemigo_artillero5_Angulo");     
    elementoHtmlTempACargar.value = Math.round(artilleroE_5.angle);        ////Enemigo_artillero5_Angulo 


    elementoHtmlTempACargar = document.getElementById("juego_var_Enemigo_artillero6_X");     
    elementoHtmlTempACargar.value = Math.round(artilleroE_6.x);        ////Enemigo_artillero6_X 	
    elementoHtmlTempACargar = document.getElementById("juego_var_Enemigo_artillero6_Y");     
    elementoHtmlTempACargar.value = Math.round(artilleroE_6.y);        ////Enemigo_artillero6_Y 	
    elementoHtmlTempACargar = document.getElementById("juego_var_Enemigo_artillero6_Vida");     
    elementoHtmlTempACargar.value = Math.round(artilleroE_6.vida);        ////Enemigo_artillero6_Vida 	
    elementoHtmlTempACargar = document.getElementById("juego_var_Enemigo_artillero6_HayEnemigo");     
    elementoHtmlTempACargar.value = artilleroE_6.hayEnemigo;        ////Enemigo_artillero6_HayEnemigo 	
    elementoHtmlTempACargar = document.getElementById("juego_var_Enemigo_artillero6_Angulo");     
    elementoHtmlTempACargar.value = Math.round(artilleroE_6.angle);        ////Enemigo_artillero6_Angulo 
        
        
    


}

