////CREACION WEBSOCKET




///// METODOS WEBSOCKETS




///// METODOS EVENTOS DE NAVEGADOR Y PESTAÑA





////---------------------

   
import s1_miCampo from './s1_miCampo.js';
import s2_campoEnemigo from './s2_campoEnemigo.js';
import s3_vistaLateral from './s3_vistaLateral.js';
import s6_lineaFrontera from './s6_lineaFrontera.js';
import s4_tableroInfo from './s4_tableroInfo.js';
import s5_menu from './s5_menu.js';


var nav_width = window.innerWidth
|| document.documentElement.clientWidth
|| document.body.clientWidth;

var nav_height = window.innerHeight
|| document.documentElement.clientHeight
|| document.body.clientHeight;


/* alert(nav_width + "  -x- " + nav_height); */
 




const config = {
	transparent: true,
    backgroundColor: 'rgba(0, 0, 0, 0)',
    type: Phaser.AUTO,
    parent: 'phaser-app',
    width: nav_width - 20,
    height: nav_height - 20,   
    scene: [s3_vistaLateral, s2_campoEnemigo, s6_lineaFrontera, s1_miCampo, s4_tableroInfo, s5_menu]
		/* 
		s1_miCampo, 
		s2_campoEnemigo, 
		s3_vistaLateral,
		s4_tableroInfo, 
		s5_menu] */
};

let game = new Phaser.Game(config);

function resizeApp()
{
/* 	// Width-height-ratio of game resolution
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
	let width = height;  /* * 0.6; */ 
	
	//canvas.style.width = width + 'px';
	//canvas.style.height = height + 'px';

/* 	 alert(canvas.style.width + "   por  " + canvas.style.height);
	
	
	 alert(nav_width + "  x   "   + nav_height);
 */
	nav_width = window.innerWidth
	|| document.documentElement.clientWidth
	|| document.body.clientWidth;

	nav_height = window.innerHeight
	|| document.documentElement.clientHeight
	|| document.body.clientHeight;

	/* alert(nav_width + "  x   "   + nav_height); */
	
	ajustarCordenadasYMedidasScenes(nav_width, nav_height);
}

// Add to resize event
window.addEventListener('resize', resizeApp);

// Set correct size when page loads the first time
resizeApp();


function ajustarCordenadasYMedidasScenes(in_innerWindows_width, in_innerWindows_height){
	var margenX = 10;
	var margenY = 10;
	
	global_var_s3_x= margenX;
	global_var_s3_y= margenY;
	global_var_s3_w= in_innerWindows_width * 0.20;
	global_var_s3_h= in_innerWindows_height * 0.70;

	global_var_s2_x= global_var_s3_w + margenX*2;
	global_var_s2_y= margenY;
	global_var_s2_w= in_innerWindows_width * 0.70;
	global_var_s2_h= in_innerWindows_height * 0.40;

	global_var_s6_x= global_var_s2_x;
	global_var_s6_y= global_var_s2_h + margenY;
	global_var_s6_w= global_var_s2_w;
	global_var_s6_h= in_innerWindows_height * 0.20; 

	global_var_s1_x= global_var_s2_x;
	global_var_s1_y= global_var_s2_h + margenY + (in_innerWindows_height * 0.10); //va otra scene creo
	global_var_s1_w= in_innerWindows_width * 0.70;
	global_var_s1_h= in_innerWindows_height * 0.40;

	global_var_s4_x= global_var_s3_x;
	global_var_s4_y= global_var_s3_h + margenY*2;
	global_var_s4_w= global_var_s3_w;
	global_var_s4_h= in_innerWindows_height * 0.19; 

	global_var_s5_x= in_innerWindows_width * 0.20;
	global_var_s5_y= in_innerWindows_height * 0.20;
	global_var_s5_w= in_innerWindows_width * 0.50;
	global_var_s5_h= in_innerWindows_height * 0.50; 

}