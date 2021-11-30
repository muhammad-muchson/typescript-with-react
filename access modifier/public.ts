class Person {
   public name: string;
   // name: string;
constructor(name: string){
       this.name = name;
   }
   greet(): string { // public access modifier
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
let batman = new Hero("bruce");
console.log(batman.greet()); // Hello Bruce
batman.addPower('Fly')
batman.addPower('Strong')

console.log(batman.listPower()); // Hello Bruce