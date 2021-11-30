function characteristic(wheels:number, color: string) {
    console.log(`${wheels} ${color} was running!`);
    return function (target, key, descriptor){
        console.log(`${key} is a Decorator`);
    };
}
   
class Car {
    @characteristic(4, "red")
    status() {
    console.log('running'); // Do something
    }
}
const ferrari = new Car();
ferrari.status();