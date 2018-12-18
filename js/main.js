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

alert("La sumatoria de los números es: " + pruebaSpread(...numeros));
