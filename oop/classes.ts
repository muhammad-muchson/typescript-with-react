class Person {
   name: string;
   constructor(name: string){
       this.name = name;
   }
   greet(): string {
       return `Hello ${this.name}`
   }
}

class Hero extends Person {
    superpowers: string[] = [];
    constructor (name: string){
        super(name);
    }
    addPower (power: string):void{
        this.superpowers.push(power);
    }
    listPower(): string[] {
        return this.superpowers;
    }
    Greet(){
        return `hai ${this.name}`;
    }
 }
 
let Human = new Person('Bruce');
console.log(Human.greet()); //Hello Bruce
console.log("==========");
let SuperHero = new Hero('Batman');
SuperHero.addPower("fly");
SuperHero.addPower("stun");
console.log(SuperHero.greet()); //Hello Bruce
console.log(SuperHero.listPower()); // [ 'fly', 'stun' ]