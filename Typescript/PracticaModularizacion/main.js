"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Este va a ser nuestro main
var Animal_1 = require("./clases/Animal");
var Animal_2 = require("./clases/Animal");
var Perro_1 = require("./clases/Perro");
console.log(Animal_1.animalito);
var animalLindo = new Animal_2.Animal("Hector", 1);
console.log(animalLindo);
var bobby = new Perro_1.Perro("Bobby", 25, "Marron", "pichichu", "Larga", "Grandes");
console.log(bobby);
var firulais = new Perro_1.Perro("Firulais", 18, "Blanco", "pichichu", "Corta", "Chicas");
console.log(firulais);
firulais.cola = "Larga";
console.log(firulais);
