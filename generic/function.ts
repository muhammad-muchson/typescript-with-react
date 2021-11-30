function getArray<T>(items: T[]): T[] {
  return new Array<T>().concat(items);
}

let myNumArr = getArray<number>([100, 200, 300]);
let myStrArr = getArray<string>(["Hello", "World"]);

myNumArr.push(400); // OK
myStrArr.push("Hello TypeScript"); // OK

// myNumArr.push("400"); // Compiler Error
// myStrArr.push(500); // Compiler Error

console.log(myNumArr); // [ 100, 200, 300, 400 ]
console.log(myStrArr); // [ 'Hello', 'World', 'Hello TypeScript' ]
