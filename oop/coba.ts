interface saya {
  name: string;
}
function gabungan(data: saya) {
  return "nama saya adalah = " + data.name;
}
let data = { name: "ibi" };
console.log(gabungan(data));
