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