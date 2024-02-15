import { Animal } from "./Animal";
import { AnimalTerreste } from "./AnimalTerreste";

export class Perro extends Animal implements AnimalTerreste {
    private color:string;
    private raza:string;
    cola:string;
    fosasNazales: string;

    constructor(name:string,age:number,color:string,raza:string,cola:string,fosasNazales:string){
        super(name,age);
        this.color = color;
        this.raza = raza;
        this.cola = cola;
        this.fosasNazales = fosasNazales;
    }

    ladrar(){
        return "Guau re guau"
    }

    respirar(): void {
        console.log("Estoy respirando");
    }
    
}

