// While, DoWhile, For

//Mientras -> Condicion = True -> Va a hacer algo
/*
let contador = 0;

while(contador > 0){
    console.log(contador); //0
    contador++;
}

// Do While 
// HACER MIENTRAS 

do{
    console.log(contador); //1
    contador++; //10
    console.log("Estoy dentro del do While"+contador); //10
}while(contador<10  && contador>=1)

*/
// FOR 
// PARA
//FOR (INICIALIZACION ; CONDICION ; INCREMENTO/DECREMENTO ){ CODIGO A EJECUTAR}

for(let contador = 0; contador < 10; contador++){
    console.log(contador);
}

//1. Inicializacion
//2. Condicion
//3. Ejecutar 
//4. Incremento/Decremento

//1. Condicion
//2. Ejecutar 
//3. Incremento/Decremento

for(let contador = 0; contador <= 10; contador++){ //11
    console.log("Estoy dentro del for y el valor de contador es: "+contador);
}

//Realiza un bucle for el cual me imprima un contador desde el numero 6 hasta 16

for(let contador = 6; contador <= 16; contador++){
    console.log(contador);
}

//Realiza un bucle for el cual me imprima los numeros PARES del 0 hasta el 50
//y me reemplace los numeros impares por la palabra IMPAR

for(let contador = 0; contador<=50;contador++){
    if(contador%2 === 0){
        console.log("Numero par "+contador);
    }else{
        console.log("IMPAR");
    }
}


//Estructura de Datos = ARRAY
//Declaraciones de array
let array1 = new Array();
let array2 = [];
console.log(array2);

//Metodos Array Basicos
//Ingresar datos al final de un array
array2.push(1);
console.log(array2);

//Quitar el ultimo dato de un array
array2.pop();
console.log(array2);

array2.push(1)
//Agregar datos al principio del array
array2.unshift(2)
console.log(array2);

//Quitar datos del principio del array
array2.shift();
console.log(array2);

//Averiguar el largo de un array
let longanismo = array2.length;
console.log(longanismo);


let array3 = [15,13,12,9,22,95,48,6,454,4];//

/*
for(let contador = 0; contador<array3.length; contador++){
    console.log(array3[contador]);
}

//Realiza un bucle for el cual me imprima el array de el ultimo indice al primero
for(let i = array3.length-1; i >=0 ; i--){
    console.log(array3[i]);
}

//2da solucion
array3.reverse();
for(let i = 0; i<array3.length;i++){
    console.log(array3[i]);
}


//Ejemplo con While
let contador = 0
while(contador<array3.length){
    console.log(array3[contador]);
    contador++;
}
*/

