//Interface => Es la representacion generica de algo
//NO PUEDO CREAR OBJETOS A TRAVES DE UNA INTERFACE


export interface AnimalTerreste{
    //Atributos
    cola:string;
    fosasNazales:string;

    //Metodos => NO LLEVAN CODIGO A EJECUTAR
    respirar():void
}

abstract class AnimalTerresteAbstracto{
    protected cola:string;
    protected fosasNazales:string;
    
    abstract respirar():void
}
