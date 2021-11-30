function greet (name: string) {
    return `Hello ${name}`
}
function greet2(name: string, age:number, address?: string, id:number = 1): string {
    greet("Jefri"); //Hello masuk
    if (address != null) {
        return `Id.${id} My name is ${name} ${age} years old and i live in ${address}`;        
    }
    return `Id.${id} My name is ${name} ${age} years old`;
}

console.log(greet("bambang")); // Hello Bambang
console.log(greet2("Mawar", 20)); //Id.1 Nama saya Mawar dengan umur 20
console.log(greet2("Mawar", 20, "malang")); //Id.1 My name is Mawar 20 years old and i live in malang