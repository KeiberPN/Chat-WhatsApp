const body = document.getElementById("fondo");
const bloqueo = document.getElementById("bloqueo");
const header = document.getElementById("header");
const cambio = document.getElementById("flecha-cambio");
const perfil = document.getElementById("perfil");
const nombre_tel = document.getElementById("nombre");
const menu = document.getElementById("menu");
const menu_option = document.getElementById("menu-option");
const modo = document.getElementById("menu-option__option");
const nombre_tema = document.getElementById("modo");
const img_container = document.getElementById("img-container");
const img_fondo_1 = document.getElementById("img-container__img-1");
const img_fondo_2 = document.getElementById("img-container__img-2");
const img_fondo_3 = document.getElementById("img-container__img-3");
const img_fondo_4 = document.getElementById("img-container__img-4");
const img_fondo_5 = document.getElementById("img-container__img-5");
const img_fondo_6 = document.getElementById("img-container__img-6");
const img_fondo_7 = document.getElementById("img-container__img-7");
const img_fondo_8 = document.getElementById("img-container__img-8");
const img_fondo_9 = document.getElementById("img-container__img-9");
const img_fondo_luffy = document.getElementsByClassName("luffy");
const img_fondo_zoro = document.getElementsByClassName("zoro");
const img_perfil_container = document.getElementById("img-perfil-container");
const img_perfil_1 = document.getElementById("img-perfil-container__img-1");
const img_perfil_2 = document.getElementById("img-perfil-container__img-2");
const img_perfil_3 = document.getElementById("img-perfil-container__img-3");
const img_perfil_4 = document.getElementById("img-perfil-container__img-4");
const main = document.getElementById("main");
const cambio_img = document.getElementById("cambio-fondo");
const enviar = document.getElementById('enviar');
const mensaje = document.getElementById("texto");
const mensaje_container = document.getElementById("mensaje-container");
const footer = document.getElementById("footer");
var tel = 1;
var menu_ative = true;
var modo_oscuro_header = "#202c33";
var modo_oscuro_main = "#777";
var modo_oscuro_texto = "#fff";
var modo_oscuro_msg_enviados = "#005c4b";
var modo_oscuro_msg_recibidos = "#202c33";
var modo_oscuro_footer = "#202c33aa";
var modo_claro_header = "#008069";
var modo_claro_main = "#fff";
var modo_claro_texto = "#000";
var modo_claro_msg_enviados = "#d0ffc0";
var modo_claro_msg_recibidos = "#ffffff";
var modo_claro_footer = "#008069aa";
var modo_oscuro_texto_container = "#2225";
var fondo_tel_style = window.getComputedStyle(body);
var perfil_tel_1 = "url(img/perfil_1.png)";
var fondo_tel_1 = "url(img/fondo-pc-1.jpg)";
var nombre_tel_1 = "Keiber";
var tema_tel_1 = "oscuro";
var perfil_tel_2 = "url(img/perfil_2.jpg)";
var fondo_tel_2 = "url(img/fondo-pc-4.jpg)";
var nombre_tel_2 = "Kleider";
var tema_tel_2 = "oscuro";
var primer_enviado_tel_1 = true;
var primer_enviado_tel_2 = true;

var modo_claroOscuro = "oscuro";
for (let i of img_fondo_zoro) {
	i.style.display = "none";
}
setInterval(comprobar, 100);


function comprobar() {
	let min_height =  String(mensaje.clientHeight+10) +"px";
	if(mensaje.clientHeight > 50){
		footer.style.flexGrow = "1";
		footer.style.minHeight = min_height;
	}else{
		footer.style.flexGrow = "0";
		footer.style.minHeight = "50px";
	}

	if(mensaje.clientHeight > 82){
		footer.style.minHeight = "110px";
	}


}


enviar.addEventListener("click", enviar_msg);

cambio.addEventListener("click", cambio_tlf);

modo.addEventListener("click", cambio_tema);

menu.addEventListener("click", menu_tema);

bloqueo.addEventListener("click", ocultar);

cambio_img.addEventListener("click", menu_fondo);

img_fondo_1.addEventListener("click", () => {cambio_fondo("img_1");});
img_fondo_2.addEventListener("click", () => {cambio_fondo("img_2");});
img_fondo_3.addEventListener("click", () => {cambio_fondo("img_3");});
img_fondo_4.addEventListener("click", () => {cambio_fondo("img_4");});
img_fondo_5.addEventListener("click", () => {cambio_fondo("img_5");});
img_fondo_6.addEventListener("click", () => {cambio_fondo("img_6");});
img_fondo_7.addEventListener("click", () => {cambio_fondo("img_7");});
img_fondo_8.addEventListener("click", () => {cambio_fondo("img_8");});
img_fondo_9.addEventListener("click", () => {cambio_fondo("img_9");});

perfil.addEventListener("click",menu_perfil);

img_perfil_1.addEventListener("click", () => {cambio_perfil("img_1");});
img_perfil_2.addEventListener("click", () => {cambio_perfil("img_2");});
img_perfil_3.addEventListener("click", () => {cambio_perfil("img_3");});
img_perfil_4.addEventListener("click", () => {cambio_perfil("img_4");});

document.addEventListener('keydown', (event) => {
	//alert(event.key);
  if (event.ctrlKey) {

     if (event.key==="Enter") {
         enviar_msg();
     }
  }
}, false);

function enviar_msg() {
	//alert(footer.clientHeight);
	//alert(fondo.getPropertyValue("background-image"));
	
	if (mensaje.innerHTML != "") {
		let p = document.createElement("p");
		let separador = document.createElement("div");
		let hora = document.createElement("div");
		let contenedor_p = document.createElement("div");


		separador.style.width = "100%";
		separador.style.height = "auto";
		p.innerHTML = mensaje.innerHTML;
		hora.classList.add("hora");
		contenedor_p.classList.add("container_p");

		let momentoActual = new Date();
		let hora_2 = momentoActual.getHours();
    	if (hora_2>12) {hora_2 -= 12;};
    	let minuto = momentoActual.getMinutes();
    	let horaImprimible = hora_2 + ":" + minuto;
		hora.innerHTML = " " + horaImprimible;
		contenedor_p.appendChild(p);
		contenedor_p.appendChild(hora);

		if (tel === 1) {
			//p.className = "enviados tel_1";
			if (primer_enviado_tel_1) {
				contenedor_p.classList.add("enviados","tel_1", "primer_enviado");
				primer_enviado_tel_1 = false;
				primer_enviado_tel_2 = true;
			}else{
				contenedor_p.classList.add("enviados","tel_1");
				primer_enviado_tel_2 = true;
			}
			
			
		//if (modo_claroOscuro === "oscuro") {p.style.backgroundColor=modo_oscuro_msg_enviados}else if (modo_claroOscuro === "claro") {p.style.backgroundColor=modo_claro_msg_enviados}

		}else{
			//p.className = "recibidos";
			if (primer_enviado_tel_2) {
				contenedor_p.classList.add( "tel_2", "enviados", "primer_enviado");
				primer_enviado_tel_2 = false;
				primer_enviado_tel_1 = true;
			}else{
				contenedor_p.classList.add( "tel_2", "enviados");
				primer_enviado_tel_1 = true;

			}
			
			
		//if (modo_claroOscuro === "oscuro") {p.style.backgroundColor=modo_oscuro_msg_recibidos}else if (modo_claroOscuro === "claro") {p.style.backgroundColor=modo_claro_msg_recibidos}

		}
		separador.appendChild(contenedor_p);
		mensaje_container.appendChild(separador);
		mensaje.innerHTML = "";
		tema();

		mensaje_container.scrollTo(0, mensaje_container.scrollHeight);
	}
	

}

function cambio_tlf() {

	var msg_enviados = document.getElementsByClassName("tel_1");
	var msg_recibidos = document.getElementsByClassName("tel_2");

	if (tel === 1) {

		perfil.style.backgroundImage = perfil_tel_2;
		body.style.backgroundImage = fondo_tel_2;
		nombre_tel.innerHTML = nombre_tel_2;
		
		for (let i of img_fondo_zoro) {
			i.style.display = "inline-block";
		}
		for (let i of img_fondo_luffy) {
			i.style.display = "none";
		}
		
		

		for (let msg of msg_enviados) {
			
			msg.classList.remove("enviados");
			msg.classList.add("recibidos");
			if (msg.classList.contains( 'primer_enviado' )) {
				msg.classList.remove("primer_enviado");
				msg.classList.add("primer_recibido");
			}
			

		}

		for (let msg of msg_recibidos) {
			
			msg.classList.remove("recibidos");
			msg.classList.add("enviados");
			if (msg.classList.contains( 'primer_recibido' )) {
				msg.classList.remove("primer_recibido");
				msg.classList.add("primer_enviado");
			}

		}
		
		tel = 0;
		tema_tel()
	}else{

		perfil.style.backgroundImage = perfil_tel_1;
		body.style.backgroundImage = fondo_tel_1;
		nombre_tel.innerHTML = nombre_tel_1;
		
		for (let i of img_fondo_zoro) {
			i.style.display = "none";
		}
		for (let i of img_fondo_luffy) {
			i.style.display = "inline-block";
		}

		for (let msg of msg_enviados) {

			msg.classList.remove("recibidos");
			msg.classList.add("enviados");
			if (msg.classList.contains( 'primer_recibido' )) {
				msg.classList.remove("primer_recibido");
				msg.classList.add("primer_enviado");
			}

		}

		for (let msg of msg_recibidos) {
			
			msg.classList.remove("enviados");
			msg.classList.add("recibidos");
			if (msg.classList.contains( 'primer_enviado' )) {
				msg.classList.remove("primer_enviado");
				msg.classList.add("primer_recibido");
			}
		}
		
		tel = 1;
		tema_tel()
	}
	tema();

}

function tema_tel(){
	if (tel===1) {
		if (tema_tel_1 === "oscuro") {
			modo_claroOscuro = "oscuro";
			tema();
		}else if (tema_tel_1 === "claro") {
			modo_claroOscuro = "claro";
			tema();
		}
	}else {
		if (tema_tel_2 === "oscuro") {
		modo_claroOscuro = "oscuro";
		tema();
	}else if (tema_tel_2 === "claro") {
		modo_claroOscuro = "claro";
		tema();
	}
	}
	
}

function tema() {
	if (modo_claroOscuro === "claro") {
		fondo.style.color = modo_claro_texto;
		header.style.backgroundColor = modo_claro_header;
		header.style.color = "#fff";
		menu_option.style.color = "#fff";
		menu_option.style.backgroundColor = modo_claro_header;
		footer.style.backgroundColor = modo_claro_footer;
		for (let msg of document.getElementsByClassName("enviados")) {
			msg.style.backgroundColor = modo_claro_msg_enviados;
		}
		for (let msg of document.getElementsByClassName("recibidos")) {
			msg.style.backgroundColor = modo_claro_msg_recibidos;
		}
		
		nombre_tema.innerHTML = "Tema oscuro";



	}else if (modo_claroOscuro === "oscuro") {
		
		fondo.style.color = modo_oscuro_texto;
		header.style.backgroundColor = modo_oscuro_header;
		header.style.color = "#fff";
		menu_option.style.color = "#fff";
		menu_option.style.backgroundColor = modo_oscuro_header;
		footer.style.backgroundColor = modo_oscuro_footer;
		for (let msg of document.getElementsByClassName("enviados")) {
			msg.style.backgroundColor = modo_oscuro_msg_enviados;
		}
		for (let msg of document.getElementsByClassName("recibidos")) {
			msg.style.backgroundColor = modo_oscuro_msg_recibidos;
		}
		nombre_tema.innerHTML = "Tema claro";

	}
}

function cambio_tema() {
	if (modo_claroOscuro === "claro") {
		fondo.style.color = modo_oscuro_texto;
		header.style.backgroundColor = modo_oscuro_header;
		header.style.color = "#fff";
		menu_option.style.color = "#fff";
		menu_option.style.backgroundColor = modo_oscuro_header;
		footer.style.backgroundColor = modo_oscuro_footer;
		for (let msg of document.getElementsByClassName("enviados")) {
			msg.style.backgroundColor = modo_oscuro_msg_enviados;
		}
		for (let msg of document.getElementsByClassName("recibidos")) {
			msg.style.backgroundColor = modo_oscuro_msg_recibidos;
		}

		if (tel === 1) {
			tema_tel_1 = "oscuro";
		}else{
			tema_tel_2 = "oscuro";

		}

		nombre_tema.innerHTML = "Tema claro";
		modo_claroOscuro = "oscuro";
	}else if (modo_claroOscuro === "oscuro") {
		fondo.style.color = modo_claro_texto;
		header.style.backgroundColor = modo_claro_header;
		header.style.color = "#fff";
		menu_option.style.color = "#fff";
		menu_option.style.backgroundColor = modo_claro_header;
		footer.style.backgroundColor = modo_claro_footer;
		for (let msg of document.getElementsByClassName("enviados")) {
			msg.style.backgroundColor = modo_claro_msg_enviados;
		}
		for (let msg of document.getElementsByClassName("recibidos")) {
			msg.style.backgroundColor = modo_claro_msg_recibidos;
		}

		if (tel === 1) {
			tema_tel_1 = "claro";
		}else{
			tema_tel_2 = "claro";
		}

		nombre_tema.innerHTML = "Tema oscuro";
		modo_claroOscuro = "claro";
	}
}

function menu_tema(){
	if(menu_ative){
		menu_option.style.display = "none";
		bloqueo.style.display = "none";
		menu_ative=false;
	}else{
		menu_option.style.display = "inline";
		bloqueo.style.display = "block";
		menu_ative=true;
	}
}

function ocultar(){
	
	bloqueo.style.display = "none";
	if(menu_ative){
		menu_option.style.display = "none";
		img_container.style.display = "none";
		img_perfil_container.style.display = "none";
		menu_ative=false;
	}
	
}

function menu_fondo(){

	if(menu_ative){
		img_container.style.display = "none";
		bloqueo.style.display = "none";
		menu_ative=false;
	}else{
		img_container.style.display = "block";
		bloqueo.style.display = "block";
		menu_ative=true;
	}
}

function cambio_fondo(img){
	
	switch(img){
		case "img_1":
			if (tel === 1) {
				fondo_tel_1 = "url(img/fondo-pc-1.jpg)";
				fondo.style.backgroundImage = fondo_tel_1; 
			}else{
				fondo_tel_2 = "url(img/fondo-pc-1.jpg)";
				fondo.style.backgroundImage = fondo_tel_2; 
			}
			
			break;
		case "img_2":
			if (tel === 1) {
				fondo_tel_1 = "url(img/fondo-pc-2.jpg)";
				fondo.style.backgroundImage = fondo_tel_1; 
			}else{
				fondo_tel_2 = "url(img/fondo-pc-2.jpg)";
				fondo.style.backgroundImage = fondo_tel_2; 
			}
			break;
		case "img_3":
			if (tel === 1) {
				fondo_tel_1 = "url(img/fondo-pc-3.jpg)";
				fondo.style.backgroundImage = fondo_tel_1; 
			}else{
				fondo_tel_2 = "url(img/fondo-pc-3.jpg)";
				fondo.style.backgroundImage = fondo_tel_2; 
			}
			break; 
		case "img_4":
			if (tel === 1) {
				fondo_tel_1 = "url(img/fondo-pc-4.jpg)";
				fondo.style.backgroundImage = fondo_tel_1; 
			}else{
				fondo_tel_2 = "url(img/fondo-pc-4.jpg)";
				fondo.style.backgroundImage = fondo_tel_2; 
			}
			break; 
		case "img_5":
			if (tel === 1) {
				fondo_tel_1 = "url(img/fondo-pc-5.jpg)";
				fondo.style.backgroundImage = fondo_tel_1; 
			}else{
				fondo_tel_2 = "url(img/fondo-pc-5.jpg)";
				fondo.style.backgroundImage = fondo_tel_2; 
			}
			break; 
		case "img_6":
			if (tel === 1) {
				fondo_tel_1 = "url(img/fondo-pc-6.jpeg)";
				fondo.style.backgroundImage = fondo_tel_1; 
			}else{
				fondo_tel_2 = "url(img/fondo-pc-6.jpeg)";
				fondo.style.backgroundImage = fondo_tel_2; 
			}
			break; 
		case "img_7":
			if (tel === 1) {
				fondo_tel_1 = "url(img/fondo-pc-7.jpg)";
				fondo.style.backgroundImage = fondo_tel_1; 
			}else{
				fondo_tel_2 = "url(img/fondo-pc-7.jpg)";
				fondo.style.backgroundImage = fondo_tel_2; 
			}
			break; 
		case "img_8":
			if (tel === 1) {
				fondo_tel_1 = "url(img/fondo-pc-8.jpg)";
				fondo.style.backgroundImage = fondo_tel_1; 
			}else{
				fondo_tel_2 = "url(img/fondo-pc-8.jpg)";
				fondo.style.backgroundImage = fondo_tel_2; 
			}
			break; 
		case "img_9":
			if (tel === 1) {
				fondo_tel_1 = "url(img/fondo-pc-9.jpg)";
				fondo.style.backgroundImage = fondo_tel_1; 
			}else{
				fondo_tel_2 = "url(img/fondo-pc-9.jpg)";
				fondo.style.backgroundImage = fondo_tel_2; 
			}
			break; 
	}
}

function menu_perfil(){
	if(menu_ative){
		img_perfil_container.style.display = "none";
		bloqueo.style.display = "none";
		menu_ative=false;
	}else{
		img_perfil_container.style.display = "block";
		bloqueo.style.display = "block";
		menu_ative=true;
	}
}   

function cambio_perfil(img){
	
	switch(img){
		case "img_1":
			if (tel === 1) {
				perfil_tel_1 = "url(img/perfil_1.png)";
				perfil.style.backgroundImage = perfil_tel_1; 
			}else{
				perfil_tel_2 = "url(img/perfil_1.png)";
				perfil.style.backgroundImage = perfil_tel_2; 
			}
			
			break;
		case "img_2":
			if (tel === 1) {
				perfil_tel_1 = "url(img/perfil_2.jpg)";
				perfil.style.backgroundImage = perfil_tel_1; 
			}else{
				perfil_tel_2 = "url(img/perfil_2.jpg)";
				perfil.style.backgroundImage = perfil_tel_2; 
			}
			break;
		case "img_3":
			if (tel === 1) {
				perfil_tel_1 = "url(img/perfil-luffy.jpg)";
				perfil.style.backgroundImage = perfil_tel_1; 
			}else{
				perfil_tel_2 = "url(img/perfil-luffy.jpg)";
				perfil.style.backgroundImage = perfil_tel_2; 
			}
			break; 
		case "img_4":
			if (tel === 1) {
				perfil_tel_1 = "url(img/perfil-zoro.webp)";
				perfil.style.backgroundImage = perfil_tel_1; 
			}else{
				perfil_tel_2 = "url(img/perfil-zoro.webp)";
				perfil.style.backgroundImage = perfil_tel_2; 
			}
			break; 
	}
}