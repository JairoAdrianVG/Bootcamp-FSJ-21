
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



// ------ FUNCIONES  ------
// Tipos de Funciones: Funcion que devuelve un valor y funcion que no devuelve nada 
// Una funcion es una porcion de codigo que hace algo

//Declaracion de funcion
function miFuncionQueDevuelve(){
    return "Soy una funcion que devuelve"
}

function miFuncionVacia(){
    console.log("Soy una funcion tipo void");
}

let resultadoFuncion1 = miFuncionQueDevuelve();
let resultadoFuncion2 = miFuncionVacia();

console.log(resultadoFuncion1+" y devuelvo un string");
console.log(resultadoFuncion2+"y no devuelvo nada");

function sumarDosNumeros(){
    //console.log(5+5);
    return 5+5;
}

function saludarUsuario(){
    console.log("Hola Usuario");
}

let resultadoSuma = sumarDosNumeros() 
let veinte = resultadoSuma+10;
console.log(veinte);
saludarUsuario();

//PARAMETROS? Valor que recibe la funcion para trabajar
// Este valor, viene de afuera de la funcion 

function sumaDosNumerosParam(num1,num2) {
    console.log(num1+num2);
    return num1+num2
} 

let result = sumaDosNumerosParam(10,20);
let result2 = sumaDosNumerosParam(153,431)

saludarUsuarioParam("Jairo")
function saludarUsuarioParam (nombre) {
    console.log("Hola "+nombre);
}

saludarUsuarioParam("Steven")

// Funciones anonimas
// Son funciones sin nombre
miFuncioncita();

let miFuncioncita = function () {
   console.log("Hola");
}

miFechecita()
let miFechecita = () => {
    console.log("Hola");
}

//Callback = es una funcion que se pasa como parametro a otra 

function funcionoConCallback(funcion){
    funcion();
}

funcionoConCallback(miFechecita);

// ------ Condicionales  ------

//IF (CONDICION) { CODIGO A EJECUTAR }

if(nombreAlumnoMinus == "jairo"){
    console.log("Hola Jairo");
} else{
    console.log("Hola, ya se que no sos Jairo");
}

if(nombreAlumnoMinus === "jairo"){
    console.log("Hola Jairo");
} else if(nombreAlumnoMinus === "jose"){
    console.log("Hola Jose");
} else{
   console.log("Hola, no se quien sos, pero holi"); 
}

// Condicional Ternario
// CONDICION ? CASO TRUE : CASO FALSE;
let nombreAlumno = "katherine";
let nombreAlumnoMinus = nombreAlumno.toLowerCase();

//nombreAlumnoMinus === "katherine" ? console.log("Hola Katherine") : console.log("Hola quien seas");

//switch

switch(nombreAlumnoMinus){
    case "katherine": 
    console.log("Hola Kath")
    break;

    default: console.log("Hola otro nombre");
}

let opcion = 2;
switch(opcion){
    case 1: 
    console.log("Te estas comunicando con Josue")
    break;
    case 2: console.log("Te estas comunicando con Jose");
    break;
    case 3: console.log("Te estas comunicando con Marvin");
}

/* 
Calculadora Simple:
Crea una función llamada calculadora que tome dos números y un operador como argumentos y devuelva el resultado de la operación. 
Los operadores pueden ser suma (+), resta (-), multiplicación (*) o división (/).
*/

function calculadora(num1,num2,operador){

    switch(operador){
        case "+": return num1+num2;
        case "-": return num1-num2;
        case "*": return num1 * num2;
        case "/": return num1 / num2;
    }

}

console.log( calculadora(2,5,"/"));

// Crea una funcion que dado un numero, me imprima si este es par o impar

function parImpar(numero){

    if(numero % 2 === 0){
        console.log("El numero es par");
    }else{
        console.log("El numero es impar");
    }
}

parImpar(3);


/*
    Escribe una función llamada calificacionEstudiante que tome 3 notas como parametro y devuelva "Aprobado" 
    si el promedio es mayor a 7, caso contrario devolver "Desaprobado".
*/

function calificacionEstudiante(nota1,nota2,nota3) {
    let promedio = (nota1 + nota2 +nota3)/3;
    
    if(promedio >= 7){
        return "Aprobado"
    } else{
        return "Desaprobado"
    }
}

console.log(calificacionEstudiante(7,7,7));