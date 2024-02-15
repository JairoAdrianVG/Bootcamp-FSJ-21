
type Producto = {
    id:number,
    nombre:string,
    descripcion:string,
}

export class Catalogo{

    protected productos: Producto[];
    protected numCatalogo: number;

    constructor(listaProductos:Producto[],numCatalogo:number) {
        this.productos = listaProductos;
        this.numCatalogo = numCatalogo;
    }

    menuCatalogo():Producto[] {
        return this.productos; 
    }

}


//Types 
//Types -> string, number, boolean, array


