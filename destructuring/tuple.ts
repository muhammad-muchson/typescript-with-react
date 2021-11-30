let tuple: [number, string, boolean, number, number] = [7, "hello", true, 2, 3];
let [a, b, c, ...d] = tuple; // a: number, b: string, c: boolean
console.log(a); // 7
console.log(b); // hello
console.log(c); // true
console.log(d); // [2, 3]
console.log(d[0]); // 2
let tuple2: [string, number] = ["alterra", 4];
let [g,h,i] = tuple2; // error, has no element at index 2 [i]
let [,z] = tuple2;
console.log(z); // 4