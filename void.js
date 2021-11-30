function warnUser() {
    console.log("this is my warning message");
}
var unusable = undefined;
//let nothing: never = null; // Error: Type 'null' is not assignable to type 'never'
function coba(masukan) {
    if (masukan == 1) {
        return "parameter = 1";
    }
    else if (masukan == 2) {
        return warnUser();
    }
}
console.log(coba(1)); // parameter = 1
console.log(coba(2)); // this is my warning message
