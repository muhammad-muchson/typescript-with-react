var person = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    fullName (){
      return this.firstName + " " + this.lastName;
    }
  };
console.log(person.fullName()); // John Doe

