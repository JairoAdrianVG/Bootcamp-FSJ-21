"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Soy un main de mi tiendita
var Catalogo_1 = require("./clases/Catalogo");
var arrayProductos = [{
        id: 1,
        nombre: "Curso HTML Y CSS EN 5 MINUTOS",
        descripcion: "Aprende a programar en 5 minutos"
    },
    {
        id: 2,
        nombre: "Curso Javascript EN 15 MINUTOS",
        descripcion: "Aprende a programar Javascript en 15 minutos"
    }];
var catalogo1 = new Catalogo_1.Catalogo(arrayProductos, 1);
console.log(catalogo1.menuCatalogo());
var diasSemana;
(function (diasSemana) {
    diasSemana[diasSemana["domingo"] = 0] = "domingo";
    diasSemana[diasSemana["lunes"] = 1] = "lunes";
    diasSemana[diasSemana["martes"] = 2] = "martes";
    diasSemana[diasSemana["miercoles"] = 3] = "miercoles";
    diasSemana[diasSemana["jueves"] = 4] = "jueves";
    diasSemana[diasSemana["viernes"] = 5] = "viernes";
    diasSemana[diasSemana["sabado"] = 6] = "sabado";
})(diasSemana || (diasSemana = {}));
var dia = diasSemana.domingo; //0
if (dia === diasSemana.domingo) {
    console.log("Domingo"); //Domingo
}
console.log(diasSemana[0]);
