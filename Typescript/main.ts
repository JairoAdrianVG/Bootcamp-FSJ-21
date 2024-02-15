//Tipado Fuerte,Estricto,Duro
//Necesitamos el tipo de la variable
/* let nombre:string;
nombre = "5";
*/
// POO OOP Programacion Orientada a Objetos - Object Oriented Programming

//Que es la POO?
// A traves de un molde(clases), podemos crear cosas(objetos). 

//Que es una clase?
//Descripcion de caracteristicas(cualidades) de un objeto.

//Que compone la clase?
// Caracteristicas y metodos(funciones)

//Que es un objeto?
//Cualquier cosa que usamos o no usamos en el dia dia
//Entidad en la cual describimos ciertas cosas
//Son caracteristicas que adoptan valores
//Algo que va a contener propiedades o caracteristicas

//Declaracion de Clase
class Person{

    //Que caracteristicas tiene una Persona?
    firstName:string;
    lastName:string;
    age:number;
    alive:boolean;

    constructor(firstName:string,lastName:string,age:number,alive:boolean){
        //Asignar el valor recibo a un atributo
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.alive = alive;
    }

    //Metodos son acciones de una clase
    eat() :string {
        return "Estoy comiendo";
    }

    sleep():string {
        return "ZzzzZZZzzZz";
    }
}

//Creamos un Objeto
let person1 = new Person("Jairo","Vega",25,true);
/*
person1.firstName = ;
person1.lastName = ;
person1.age = 25;
*/
person1.alive = false;

console.log(person1);
console.log(person1.eat());
let person2 = new Person("Steven","Diaz",23,true);
console.log(person2);


// ------------ Pilares de POO  ------------
// Son buenas practicas para que nuestro codigo sea mejor, en legibilidad, construccion.
//  Y mejorar su escalabilidad

//Encapsulamiento => Limitar acceso a ciertos datos (atributos o metodos) de nuestra clase
//Limitadores de acceso 
//Public => Publico, se puede acceder desde cualquier parte de mi codigo
//Private => Privados, solo se podran acceder desde la misma clase.
//Protected => Protegidos, se podran accedes desde la misma clase y las clases hijas
class Vehicle{ 
    private color:string;
    private weels:number;
    private price:number;

    constructor(color:string,weels:number,price:number){
        this.color = color;
        this.weels = weels;
        this.price = price;
    }

    setColor(color:string){
        this.color = color;
    }

    getColor(){
        return this.color;
    }
}

let car1 = new Vehicle("Rojo",4,600);
console.log(car1);

car1.setColor("Azul");
console.log(car1); 
console.log(car1.getColor());

//Abstraccion => Es la capacidad de crear metodos para interactuar con datos limitados de una clase
//Getters y Setters
//Son los metodos encargados de cambiar o mostrar informacion encapsulada

//Herencia => Capacidad que tiene una clase hija(subclase) de traer atributos y metodos del padre(clase)
//Polimorfismo => Cambio de forma de un metodo


class Animal{

    //Atributos o Caracterisiticas
    protected color:string;
    protected raza:string;

    constructor(color:string,raza:string){
        this.color = color;
        this.raza = raza;
    }

    //Metodos
    comer():string{
        return "Soy un animal y estoy comiendo nam";
    }

    respirar():string{
        return "Soy un animal y estoy respirando";
    }
    
    getColor():string{
        return this.color;
    }

    getRaza():string{
        return this.raza;
    }
}


let pez = new Animal("Naranja","Pez Payaso");

class Perro extends Animal{

    //Atributos
    private cantPatas:number;
    private cola:string;
    private altura:number;
    private peso:number;

    //constructor
    constructor(color:string,raza:string,cantPatas:number,cola:string,altura:number,peso:number){
        super(color,raza);
        this.cantPatas = cantPatas;
        this.cola = cola;
        this.altura = altura;
        this.peso = peso;
    }

    //Metodos
    ladrar():string{
        return "Guau re Guau";
    }

    caminar():string{
        return "Soy un perro y estoy caminando";
    }

    comer():string{
        return `Soy un ${this.raza} y estoy comiendo`;
    }

}

let salchicha = new Perro("Marron","Perro Salchicha",4,"Corta",60,25);

console.log(salchicha.comer());
console.log(salchicha.ladrar());
console.log(salchicha.caminar());
/*
Diseña una clase llamada CuentaBancaria que tenga atributos como saldo, titular y numeroCuenta. Implementa métodos públicos para depositar dinero, retirar dinero y obtener el saldo actual de la cuenta. Asegúrate de que solo se puedan modificar el saldo y el titular mediante métodos específicos, protegiendo así la integridad de los datos.
*/

class CuentaBancaria{

    private saldo:number;
    private titular:string;
    private numCuenta: number;

    constructor(saldo:number,titular:string,numCuenta:number){
        this.saldo = saldo;
        this.titular = titular;
        this.numCuenta = numCuenta;
    }

    depositarDinero(deposito:number){
       return this.saldo += deposito
    }
    
    retirarDinero(retiro:number){
        //saldo minimo = 0
        //retiro maximo = 750

        if(this.saldo > retiro && retiro < 750){
            this.saldo -=  retiro; 
        }else{
            console.log(`El saldo es insuficiente. Tu saldo actual es ${this.saldo}`);
        }
        
    }

    getSaldo(){
        return this.saldo;
    }

    setTitular(nuevoTitular:string){
        this.titular = nuevoTitular;
    }

    getTitular(){
        return this.titular;
    }
}

let cuentitaAhorros = new CuentaBancaria(0,"Jairo Vega",1234567);
console.log(cuentitaAhorros.getSaldo());
cuentitaAhorros.depositarDinero(50);
console.log(cuentitaAhorros.getSaldo());
cuentitaAhorros.retirarDinero(30);
console.log(cuentitaAhorros.getSaldo());
cuentitaAhorros.retirarDinero(30);
console.log(cuentitaAhorros.getSaldo());

