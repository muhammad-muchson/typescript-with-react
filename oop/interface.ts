interface Car {
  name: string;
  wheel?: number;
  [property: string]: any;
}
function printCar(labeledObj: Car) {
  console.log(labeledObj.name); //Ferrari
  if (labeledObj.wheel != undefined) {
    console.log("with " + labeledObj.wheel, "wheels"); // with 4 wheels
  }
  if (labeledObj.logo != undefined) {
    console.log("and a " + labeledObj.logo + " logo"); // and a horse logo
  }
}
let myObj = { name: "Ferrari", wheel: 4, logo: "horse" };
printCar(myObj);
