
// COMENTARIOS = PARTES DE CODIGO QUE NO SE EJECUTAN
// COMENTARIO DE UNA SOLA LINEA

/* ESTO ES UN
    COMENTARIO  
        MULTI LINEAS */

// ------ Tipos de Datos ------
/*
 NUMERICO = Number
 TEXTO = String
 CARACTER = String
 BOLEANOS = Boolean 

*/

// ------ Variables ------
// Variable = Un lugar o espacio en el cual podemos guardar algo 
// ESE DATO TIENE QUE SER ALGO QUE CAMBIE


// PALABRA RESERVADA + NOMBRE DE LA VARIABLE + ASIGNACION + VALOR A GUARDAR
var nombre = "Jairo"

// ------ Sintaxis tipos de datos ------
var NUMERICO = 30
var BOLEANOVERDADERO = true
var BOLEANOFALSO = false
var CARACTER = "a"
var TEXTO = 'Holiwi soy un texto'


// ------ Tipos de Variables------
// LET Y VAR 
//Var = es la primer palabra reservada para declarar variables
//Let = es la segunda palabra reservada y la mas usada
// Var permite redeclarar y let NO

let edad = "25"
console.log("Holi como andis?")
console.log(edad)
edad = "26"
console.log(edad)


// ------ Operadores Matematicos ------
let suma = 5 + 5
let resta = 6 - 3
let division = 138 / 2
let multiplicacion = 28 * 2
let residuo = 10 % 2

// ------ Operadores Logicos ------
// ESTOS DAN COMO RESULTADO UN BOOLEANO
let igualdad = 10 == "10"
console.log(igualdad)
let igualdadEstricta = 10 === "10"
console.log(igualdadEstricta)
let desigualdad = 10 != "10"
console.log(desigualdad)
let desigualdadEstricta = 10 !== "10"
console.log(desigualdadEstricta);

// Y siempre va a esperar que ambas cosas sean TRUE
let y = 10 == 10 && 10 === "10"
console.log(y);

//O siempre va a esperar que 1 de las cosas sea TRUE
let o = 10 == 10 || 10 === "10" 
console.log(o);
