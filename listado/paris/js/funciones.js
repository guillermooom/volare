if (document.addEventListener)
	window.addEventListener("load",inicio)
else if (document.attachEvent)
	window.attachEvent("onload",inicio);

function inicio(){
	let boton1=document.getElementById("boton1");
    let boton2=document.getElementById("boton2");
    let boton3=document.getElementById("boton3");

    if (document.addEventListener){
        boton1.addEventListener("click",fondo1);
        boton2.addEventListener("click",fondo2);
        boton3.addEventListener("click",fondo3);
    }else if (document.attachEvent){
        boton1.attachEvent("onclick",fondo1);
        boton2.attachEvent("onclick",fondo2);
        boton3.attachEvent("onclick",fondo3);
    }
	
}

function fondo1(){
    document.getElementById("vista").src="./img/Paris.webp";
}

function fondo2(){
    document.getElementById("vista").src="./img/paris2.jpg";
}

function fondo3(){
    document.getElementById("vista").src="./img/paris3.webp";
}