let list: number[] = [ 1 , 2 , 3 ];
let list_nbr_str: (number|string) [] = [1,2,"alterra"];
let list_generic: Array<number> = [1,2,3];
let list_generic_nbr_str: Array<number|string> = [1,2,"alterra"];

console.log(list); // [ 1, 2, 3 ]
console.log(list_nbr_str); // [ 1, 2, 'alterra' ]
console.log(list_generic); // [ 1, 2, 3 ]
console.log(list_generic_nbr_str); //[ 1, 2, 'alterra' ]


