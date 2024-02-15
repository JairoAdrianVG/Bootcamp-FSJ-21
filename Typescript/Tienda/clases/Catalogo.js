"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Catalogo = void 0;
var Catalogo = /** @class */ (function () {
    function Catalogo(listaProductos, numCatalogo) {
        this.productos = listaProductos;
        this.numCatalogo = numCatalogo;
    }
    Catalogo.prototype.menuCatalogo = function () {
        return this.productos;
    };
    return Catalogo;
}());
exports.Catalogo = Catalogo;
//Types 
//Types -> string, number, boolean, array
