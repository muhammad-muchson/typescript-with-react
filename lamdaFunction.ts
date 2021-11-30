var foo = (x:number)=>10 + x 
console.log(foo(100)) // 110

var foo2 = (x:number)=> {    
  x = 10 + x 
  console.log(x)  
} 
foo2(100) // 110
