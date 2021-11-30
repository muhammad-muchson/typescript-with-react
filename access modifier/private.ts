
class Person {
    private name: string;
    constructor(name: string){
        this.name = name;
    }
    private greet(): string {
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
        return `hai ${this.name}`;//error, propety name is private only accessible within class "person"
    }
 }

 let batman = new Person("bruce");
 console.log(batman.greet());
 let SuperHero = new Hero("Batman");
 console.log(SuperHero.greet());//error Property 'greet' is private and only accessible within class 'Person'
 
  