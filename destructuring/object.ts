let firstName: string;
let age : number;
({ firstName, age } = { firstName: "alterra", age: 25 });
console.log(age); // 101
let user = {
    username: "albert",
    id: 1,
    address: "Malang"
};
let { username, ...other} = user;
console.log(username); // albert
console.log(other); // { b: 1, c: 'Malang' }
console.log(other.address); // "Malang"