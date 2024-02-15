//Types -> Tipos de datos

//Tipos de datos primitivos
//String, Number, Boolean, Null

//Types son tipos de datos personalizados
//Creados en base a la necesidad

//Agregar Pseudonimos(Apodo)
type CadenaTexto = string;

let textito:CadenaTexto = "Soy un tipo nuevo "

type arrayNumeros = number[];

let nuevoArray:arrayNumeros = [123,123,5,5]

//Declarar moldes para objetos
//A traves de Objetos LITERALES

let objetoLiteral = {}

let Perro = {
    name: 'Firulais',
    age: 18,
    color: 'Blanco',
    raza: 'pichichu',
    cola: 'Corta',
    fosasNazales: 'Chicas'
}
console.log(Perro);

type Perro = {
    name:string,
    age:number,
    color:string,
    raza:string,
    cola:string | null ,
    fosasNazales:string
}

let Bobby:Perro =  {
    name: 'Bobby',
    age: 18,
    color: 'Blanco',
    raza: 'pichichu',
    cola: 'Corta',
    fosasNazales: 'Chicas'
}

console.log(Bobby);



