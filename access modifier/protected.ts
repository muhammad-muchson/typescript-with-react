class Person {
    protected name: string;
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
        return `hai ${this.name}`;
    }
 }
 let batman = new Person("bruce");
 console.log(batman.greet()); // hai bruce
 let SuperHero = new Hero("Batman");
 console.log(SuperHero.Greet());// hai Batman
 
   