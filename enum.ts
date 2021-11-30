enum WeekDay {monday, tuesday, wednesday, thursday, friday, saturday, sunday};
let x: WeekDay = WeekDay.monday;
let y: string = WeekDay[0];
console.log(x);//0
console.log(y);//monday

enum Color {red = 1, green, blue};
let z:Color = Color.green;
console.log(z); // 2
