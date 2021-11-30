interface IPerson {
    name: string;
    address: string;
 }
 
 class Person implements IPerson {
    name: string;
    constructor(name: string){
        this.name = name;
    }
    greet(): string {
        return `Hello ${this.name}`
    }
 }
 let human = new Person("albert");
 console.log(human.greet()); //Hello albert
 
 
 