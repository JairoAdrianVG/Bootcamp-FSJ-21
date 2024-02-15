//Este va a ser nuestro main
import { animalito } from "./clases/Animal"
import { Animal } from "./clases/Animal";
import { Perro } from "./clases/Perro";

console.log(animalito);

const animalLindo = new Animal("Hector",1);
console.log(animalLindo);

const bobby = new Perro("Bobby",25,"Marron","pichichu","Larga","Grandes");
console.log(bobby);

const firulais = new Perro("Firulais",18,"Blanco","pichichu","Corta","Chicas");
console.log(firulais)
firulais.cola = "Larga"
console.log(firulais)

