//"use strict" //aclara que el código de este archivo es bien estricto. (No es obligatorio)
/*
var gato = "Esto es un gato";       //declarar e inicializar una variable
var barco = 424244;                 //variable cualquiera de número
*/

//const PI = 3.1416;                //declarar una constante

//Pruebas con funciones
// ........... funciones preinicializadas

function prueba(a,nombre="Javier"){
    document.write( a + " " + nombre);
}

//prueba("Otro nombre");

// ........... funciones Rest
function pruebaRest(...meses){
    for (let uno of meses){
        document.write(uno + "<br>");
    }
}

//pruebaRest("Javier" , "Andres", "Collazos" , "Gomez");

// ........... funciones Spread
function pruebaSpread(a,b,c){
    return a+b+c;
}

var numeros = [12,14,16];

//alert("La sumatoria de los números es: " + pruebaSpread(...numeros));


// ........... funciones Callback

var callback =  function(a){
	alert(a + " el mismo desde callback");
}

var prueba = function(param, otro){
	alert(param);
	otro(param);
}

//prueba("Javico", callback);

// ........... EVENTOS ...........

// ........... Eventos del ratón
/*
var eventoBotonSaludar = document.querySelector("#botonSaludar");

eventoBotonSaludar.addEventListener("click", function(){alert("Saludo")});
*/
//eventoBotonSaludar.addEventListener("mouseover", function(){alert("Saludo")});
//eventoBotonSaludar.addEventListener("mouseout", function(){alert("Saludo")});
//IMPORTANTE, el src="" en el html, debe estar al final de body, para asegurar que se cargaron todos los elementos.

// ........... Eventos del teclado

//window.addEventListener("keyup", function () {alert("Has presionado una tecla mantenida");});

//para conocer la tecla que se presionó

//codigo de la tecla que se presionó
/*
window.addEventListener("keydown",function(event){
    alert("Se presionó la tecla: " + event.keyCode);
});
*/

//la tecla que se presionó
/*
window.addEventListener("keydown",function(event){
    alert(String.fromCharCode(event.keyCode));
} );
*/

// ........... Eventos de carga y temporizadores ...........

//Para esperar la carga del documento HTML
//window.addEventListener("load", function(){alert("La página acaba de cargar")});

//Para ejecutar acciones repetitivamente en cierto tiempo
/*
var tiempo = setInterval(
    function(){
        document.write("Esto es el interval <br>");
    }, 3000); // Esto son 3 segundos
*/
//para ejecutar una acción en lo que se acabe el tiempo
/*
setTimeout(
    function(){
        document.write("Esto es el Timeout <br>");
    }, 5000); // Esto son 5 segundos
*/

// ........... Eventos multimedia ...........
/*
//Llama al video del documento HTML
var video = document.querySelector(".episodio");

//Ejecuta una función luego de darle play al video
video.addEventListener("play", function(){alert("Disfruta del episodio")});

//Ejecuta una función luego de haber finalizado el video
video.addEventListener("ended", function(){alert("Terminaste el episodio")});

//Ejecuta una función cuando adelantamos el video
video.addEventListener("seeking", function(){
    var mensaje= "";
    var number = 0;
    var change = false;

    if(this.currentTime >= 60)
    {
        number = this.currentTime/60;
        change = true;
    }
    else {
        number = this.currentTime;
    }

    change? mensaje = "Adelantaste al minuto: " + number : mensaje = "Adelantaste al segundo: " +  number;

    alert(mensaje);
});
*/

// ........... Cuadros de diálogos y ventanas emergentes ...........

// Ejemplo de uso de un confirm
/*
var a = confirm("Necesita ayuda?");

a? alert("Presionó aceptar") : alert("Presionó cancelar");
*/
//Ejemplo de prompt con valor predeterminado
/*
var b = prompt("Introduzca su nombre", "Nombre");

b == null? alert("Usted no puso ningún nombre") : alert("El nombre que puso fue: " + bz);
*/

// ........... working with numbers ...........
//Casting
//var a = "10.89";
//var b = Number(a);
//var c = parseInt(a);
//var d = parseFloat(a);

//alert(typeof d + " " +  d);

//Verificando
//var a = 5.8659;
//var b = "Hola";

//verifica si no es un número.
//alert(isNaN(a) + " " + isNaN(b));

//verifica si es un número ENTERO.
//alert(Number.isInteger(a) + " " + Number.isInteger(b));

//Redondeo
//alert(a.toFixed(0) + " " + a.toFixed(1) + " " + a.toFixed(2) );

// ........... working with String ...........

var mensaje = "Hola a todos, esto es un mensaje."

// lo mismo que indexOf, retorna la posición de lo que estemos buscando
//alert(mensaje.search("todos"));

// Retorna la ultima posición de lo que estemos buscando
//alert(mensaje.lastIndexOf('a'));

// Almacena los resultados de la busqueda en un arreglo
//var a = mensaje.match(/a/gi);
//alert(a);

// Recortar el String contando hacia la derecha
//alert(mensaje.substr(1,5));

// Recortar el String con posiciones exactas.
//alert(mensaje.substring(7, 12));

// Repetir un String
var a = "Hola";

alert(a.repeat(5));
