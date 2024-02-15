//Tipado Fuerte,Estricto,Duro
//Necesitamos el tipo de la variable
/* let nombre:string;
nombre = "5";
*/
// POO OOP Programacion Orientada a Objetos - Object Oriented Programming
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var Person = /** @class */ (function () {
    function Person(firstName, lastName, age, alive) {
        //Asignar el valor recibo a un atributo
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.alive = alive;
    }
    //Metodos son acciones de una clase
    Person.prototype.eat = function () {
        return "Estoy comiendo";
    };
    Person.prototype.sleep = function () {
        return "ZzzzZZZzzZz";
    };
    return Person;
}());
//Creamos un Objeto
var person1 = new Person("Jairo", "Vega", 25, true);
/*
person1.firstName = ;
person1.lastName = ;
person1.age = 25;
*/
person1.alive = false;
console.log(person1);
console.log(person1.eat());
var person2 = new Person("Steven", "Diaz", 23, true);
console.log(person2);
// ------------ Pilares de POO  ------------
// Son buenas practicas para que nuestro codigo sea mejor, en legibilidad, construccion.
//  Y mejorar su escalabilidad
//Encapsulamiento => Limitar acceso a ciertos datos (atributos o metodos) de nuestra clase
//Limitadores de acceso 
//Public => Publico, se puede acceder desde cualquier parte de mi codigo
//Private => Privados, solo se podran acceder desde la misma clase.
//Protected => Protegidos, se podran accedes desde la misma clase y las clases hijas
var Vehicle = /** @class */ (function () {
    function Vehicle(color, weels, price) {
        this.color = color;
        this.weels = weels;
        this.price = price;
    }
    Vehicle.prototype.setColor = function (color) {
        this.color = color;
    };
    Vehicle.prototype.getColor = function () {
        return this.color;
    };
    return Vehicle;
}());
var car1 = new Vehicle("Rojo", 4, 600);
console.log(car1);
car1.setColor("Azul");
console.log(car1);
console.log(car1.getColor());
//Abstraccion => Es la capacidad de crear metodos para interactuar con datos limitados de una clase
//Getters y Setters
//Son los metodos encargados de cambiar o mostrar informacion encapsulada
//Herencia => Capacidad que tiene una clase hija(subclase) de traer atributos y metodos del padre(clase)
//Polimorfismo => Cambio de forma de un metodo
var Animal = /** @class */ (function () {
    function Animal(color, raza) {
        this.color = color;
        this.raza = raza;
    }
    //Metodos
    Animal.prototype.comer = function () {
        return "Soy un animal y estoy comiendo nam";
    };
    Animal.prototype.respirar = function () {
        return "Soy un animal y estoy respirando";
    };
    Animal.prototype.getColor = function () {
        return this.color;
    };
    Animal.prototype.getRaza = function () {
        return this.raza;
    };
    return Animal;
}());
var pez = new Animal("Naranja", "Pez Payaso");
var Perro = /** @class */ (function (_super) {
    __extends(Perro, _super);
    //constructor
    function Perro(color, raza, cantPatas, cola, altura, peso) {
        var _this = _super.call(this, color, raza) || this;
        _this.cantPatas = cantPatas;
        _this.cola = cola;
        _this.altura = altura;
        _this.peso = peso;
        return _this;
    }
    //Metodos
    Perro.prototype.ladrar = function () {
        return "Guau re Guau";
    };
    Perro.prototype.caminar = function () {
        return "Soy un perro y estoy caminando";
    };
    Perro.prototype.comer = function () {
        return "Soy un ".concat(this.raza, " y estoy comiendo");
    };
    return Perro;
}(Animal));
var salchicha = new Perro("Marron", "Perro Salchicha", 4, "Corta", 60, 25);
console.log(salchicha.comer());
console.log(salchicha.ladrar());
console.log(salchicha.caminar());
/*
Diseña una clase llamada CuentaBancaria que tenga atributos como saldo, titular y numeroCuenta. Implementa métodos públicos para depositar dinero, retirar dinero y obtener el saldo actual de la cuenta. Asegúrate de que solo se puedan modificar el saldo y el titular mediante métodos específicos, protegiendo así la integridad de los datos.
*/
var CuentaBancaria = /** @class */ (function () {
    function CuentaBancaria(saldo, titular, numCuenta) {
        this.saldo = saldo;
        this.titular = titular;
        this.numCuenta = numCuenta;
    }
    CuentaBancaria.prototype.depositarDinero = function (deposito) {
        return this.saldo += deposito;
    };
    CuentaBancaria.prototype.retirarDinero = function (retiro) {
        //saldo minimo = 0
        //retiro maximo = 750
        if (this.saldo > retiro && retiro < 750) {
            this.saldo -= retiro;
        }
        else {
            console.log("El saldo es insuficiente. Tu saldo actual es ".concat(this.saldo));
        }
    };
    CuentaBancaria.prototype.getSaldo = function () {
        return this.saldo;
    };
    CuentaBancaria.prototype.setTitular = function (nuevoTitular) {
        this.titular = nuevoTitular;
    };
    CuentaBancaria.prototype.getTitular = function () {
        return this.titular;
    };
    return CuentaBancaria;
}());
var cuentitaAhorros = new CuentaBancaria(0, "Jairo Vega", 1234567);
console.log(cuentitaAhorros.getSaldo());
cuentitaAhorros.depositarDinero(50);
console.log(cuentitaAhorros.getSaldo());
cuentitaAhorros.retirarDinero(30);
console.log(cuentitaAhorros.getSaldo());
cuentitaAhorros.retirarDinero(30);
console.log(cuentitaAhorros.getSaldo());
