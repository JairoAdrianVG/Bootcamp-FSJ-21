"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.animalito = exports.Animal = void 0;
var Animal = /** @class */ (function () {
    function Animal(name, age) {
        this.name = name;
        this.age = age;
    }
    Animal.prototype.getName = function () {
        return this.name;
    };
    return Animal;
}());
exports.Animal = Animal;
exports.animalito = new Animal("Jairo", 25);
