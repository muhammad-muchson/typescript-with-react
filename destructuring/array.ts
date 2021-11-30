let input = [1, 2, 3, 4, 5, 6];
let [first, second, ...last] = input;
let [...all] = input;
console.log(first); // outputs 1
console.log(second); // outputs 2
console.log(last); // outputs [ 3, 4, 5, 6 ]
console.log(last[1]); // outputs 4

[first, second] = [second, first]
console.log(first); // 2
console.log(second); // 1

let [, second_2, , fourth_4] = input
console.log(second_2); // 2
console.log(fourth_4); // 4
function f([first, second]: [number, number]) {
    console.log(first);
    console.log(second);
}
f([1, 2]); // 1 2
