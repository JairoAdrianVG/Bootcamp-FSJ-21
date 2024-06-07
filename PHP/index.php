<?php
//Comentario de una sola linea 

/*
COMENTARIO
MULTI
LINEA
*/

// Sintaxis PHP

// Imprimir un dato
print("Holi FSJ21"."\n");
print("Llegamos a PHP"."\n");

echo "Holi FSJ21 con ECHO"."\n";

//Concatenacion = .

//Variables
//$(Inicializar)NOMBREVARIABLE = VALOR
$saludo = "Hola";

//Tipos de datos (primitivos)

$cadenaTexto = "Soy un STRING";
$numeroEntero = 15;
$decimal = 10.5;
$boleanos = false;

//Operadores Matematicos
$suma = 5+5;
$resta = 8-4;
$multiplicacion = 10*7;
$division = 17/3;
$residuo = 24%2;

//Operadores Comparacion
$igualdad = 5 == "5";
$exactamenteIgual = 5 === 5;
$desigualdad = 5 != "5";
$exactamenteDesigual = 5 !== "3";

$mayorQue = 3>5;
$menorQue = 3<5;
$menorIgual = 3<=5;
$mayorIgual = 3>=5;

//Operadores Logicos
// AND(&&) y OR(||)  

//Estructuras condicionales
//If | If-Else | If-ElseIf-Else

/*
if($mayorQue){
    echo "Dio true";
}elseif($menorQue){
    echo "Dio False";
}else{
    echo "Ya no se que da. AIUDA";
};

//Switch
//EJEMPLO CON VALORES
$i = 1;
switch($i){
    case "1":
    echo "el kilo cuesta 59cent";
    break;

    default: echo "no cumple casos";
}

//Ternario
//Es una condicion que expresa true o false de forma mas legible y en una sola linea
$num1 = 5;
$num2 = 10;
// IF (CONDICION) {TRUE} ELSE {CASO FALSE}
$ternario = 1 > 2 ? print "Si es mayor que" : print "NO es mayor que";

$name = "Goku";
$mensaje = $name === "Goku" ? "Si señor" : "Lo siento bro";
echo $mensaje;

//Funciones
// Void
function Saludar(){
    echo "Holi";
}

// Que devuelve valor
function Sumar($numero1,$numero2){
    return $numero1 + $numero2;
}

// Llamada a funcion
Saludar();
Sumar(1,2);

// Funcion flecha
$funcioncita = fn($nombre) => $nombre;
$funcioncita("Jairo");

//Estructuras Repetitivas
//For

for($i = 1; $i < 5; $i++){
    echo $i;
}

//While

$o = 0;
/*
while($o>0 && $o <5){
    echo $o++;
}


//DoWhile

do{
    echo $o++;
}while( $o>0 && $o <5);


//Arrays
//Declaracion corta de arrays
$arraycito = [1,2,3];

//Foreach
// Retornar la suma de todos los valores del array
// Imprimir los valores de un array

$suma = 0;

foreach($arraycito as $i){
    $suma += $numero;
}

echo "la suma es: ".$suma."\n"; 
*/
//Declaracion a traves de constructor de array
$arrayzote = array(1,2,3);

//Tomar el largo de un array
count($arrayzote);

//Metodos de arrays

//Ingresar datos en un array prexistente
array_push($arrayzote,4,5,6);
//Imprimir arrays
print_r($arrayzote);

//Extraer el ultimo dato (eliminar)
$datoEliminado = array_pop($arrayzote);
print_r($arrayzote);
print($datoEliminado);

//RETO 1: Ordenar un array numerico y revertirlo.
$arrayNum = [9,1575,40,-512,24];

//Ordenar un array de forma ascendente
sort($arrayNum);

//Dar vuelta el array (espejar)
$revertido = array_reverse($arrayNum);

//While y pop
/*
$revertido = [];
while($elemento = array_pop($arrayNum)){
    $revertido[] = $elemento;
}*/

print_r($revertido);

//print_r($arrayNum);

// RETO 2: Crear una funcion que dado un array de números enteros y una función de comparación personalizada (par o impar), 
// cuenta cuántos elementos del array cumplen la condición definida por la función.
// Tiempo = 10min

function contarElementosCumple($array,$comparacion){
    $contador = 0;
    foreach($array as $numero){
        if($comparacion($numero)){
            $contador++;
        }
    }
    return $contador;
}

function par($numero){
    return $numero % 2 == 0;
}

function esImpar($numero){
    return $numero % 2 != 0;
}

$arrayLibertado = [4,5,18,35,2,21];
$cantidadImpares = contarElementosCumple($arrayLibertado,'esImpar');
$cantidadPares = contarElementosCumple($arrayLibertado, 'par');
echo "Cantidad de numeros pares: ".$cantidadPares."\n";
echo "Cantidad de numeros impares: ".$cantidadImpares;


?>