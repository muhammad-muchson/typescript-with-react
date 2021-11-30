interface User {
   name: string;
   age?: number;
}
interface User {
   address: string;
}

let humanUser: User = { name: "Josh", age: 23, address: "Malang" };
console.log(humanUser.name);
console.log(humanUser.age);
console.log(humanUser.address);