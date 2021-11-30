let firstAndVar = true;
let secondAndVar = false; 

console.log( firstAndVar && secondAndVar  );   //false
console.log( firstAndVar && true );        //true
console.log( firstAndVar && 10 );          //10 which is also 'true'
console.log( firstAndVar && '10' );        //'10'  which is also 'true'
