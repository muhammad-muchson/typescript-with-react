interface IPerson {
    name: string;
 }
 
 interface IHero extends IPerson {
    superpower: string;
 }
 let batman: IHero = {name: "Bruce", superpower:"money"}
 console.log(batman.name); //Bruce
 console.log(batman.superpower); // money