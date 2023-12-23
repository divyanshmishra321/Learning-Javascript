//➡️➡️ERROR HANDLING
// whenwver you know that there is any possibility for any part of code that can throw error can be handled using this
// TRY->
// CATCH->
//

// Example Program  using GETTER and SETTER

let person = {
  fname: "Divyansh",
  Lname: "Mishra",
  get Fullname() {
    return `${person.fname}  ${person.Lname}`;
  },
  set Fullname(value) {
    if (typeof value!== 'string') {
        throw new Error("You have not sent String");
        
    }
    let parts = value.split(" ");
    this.fname = parts[0];
    this.Lname = parts[1];
  },
};
// Calling GETTER
console.log(person.Fullname);
// Calling   SETTER
try {
  // code which have error chances
  person.Fullname = true;
} catch (error) {
  console.log("You have sent a number in FullName");
}

console.log(person.Fullname);
