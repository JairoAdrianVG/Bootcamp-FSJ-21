export class Animal{
    protected name:string;
    protected age:number;

    constructor(name:string,age:number){
        this.name = name;
        this.age = age;
    }

    getName(){
        return this.name;
    }
}

export const animalito = new Animal("Jairo",25);