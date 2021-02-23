////CREACION WEBSOCKET




///// METODOS WEBSOCKETS




///// METODOS EVENTOS DE NAVEGADOR Y PESTAÑA





////---------------------

/*
s1_miCampo"         id="container_s1_miCampo"></div>
s2_campoEnemigo"    id="container_s2_campoEnemigo"></div>
s3_vistaLateral"    id="container_s3_vistaLateral"></div>
s4_tableroInfo"     id="container_s4_tableroInfo"></div>
s5_menu"            id="container_s5_menu"></div>
 */
   
import s1_miCampo from './s1_miCampo.js';
import s2_campoEnemigo from './s2_campoEnemigo.js';
import s3_vistaLateral from './s3_vistaLateral.js';
import s4_tableroInfo from './s4_tableroInfo.js';
import s5_menu from './s5_menu.js';

var nav_width = window.innerWidth
|| document.documentElement.clientWidth
|| document.body.clientWidth;

var nav_height = window.innerHeight
|| document.documentElement.clientHeight
|| document.body.clientHeight;

alert(nav_width + "x" + nav_height);

const config = {
    type: Phaser.AUTO,
    backgroundColor: '#001a57',
    parent: 'phaser-app',
    width: nav_width - 20,
    height: nav_height - 20,   
    scene: [s1_miCampo, s2_campoEnemigo, s3_vistaLateral,s4_tableroInfo, s5_menu]
};

let game = new Phaser.Game(config);


function resizeApp()
{
	// Width-height-ratio of game resolution
	let game_ratio = nav_width / nav_height;
	
	// Make div full height of browser and keep the ratio of game resolution
	let div = document.getElementById('phaser-app');
	div.style.width = (window.innerHeight * game_ratio) + 'px';
	div.style.height = window.innerHeight + 'px';
	
	// Check if device DPI messes up the width-height-ratio
	let canvas = document.getElementsByTagName('canvas')[0];
	
	let dpi_w = (parseInt(div.style.width) / canvas.width);
	let dpi_h = (parseInt(div.style.height) / canvas.height);		
	
	let height = window.innerHeight * (dpi_w / dpi_h);
	/* let width = height * 0.6; */
	
	canvas.style.width = width + 'px';
	canvas.style.height = height + 'px';
}

// Add to resize event
window.addEventListener('resize', resizeApp);

// Set correct size when page loads the first time
resizeApp();