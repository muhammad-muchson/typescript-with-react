type typeUser { 
   name: string;
   age? : number;
}
type typeUser { //error because type User duplicate
   address: string;
}
let humantypeUser :typeUser = {name: "Josh",age: 23, address:"Malang" };
console.log(humantypeUser.name);
console.log(humantypeUser.age);
console.log(humantypeUser.address);//not exist

