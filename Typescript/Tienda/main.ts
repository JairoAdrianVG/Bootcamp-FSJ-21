// Soy un main de mi tiendita
import { Catalogo } from "./clases/Catalogo";

let arrayProductos = [{
    id:1,
    nombre:"Curso HTML Y CSS EN 5 MINUTOS",
    descripcion: "Aprende a programar en 5 minutos"
},
{
    id:2,
    nombre:"Curso Javascript EN 15 MINUTOS",
    descripcion: "Aprende a programar Javascript en 15 minutos"
}]

let catalogo1:Catalogo = new Catalogo(arrayProductos,1);

console.log(catalogo1.menuCatalogo());


