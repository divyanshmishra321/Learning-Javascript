function add() {
  var sum = 0;
  for (var i = 0; i < arguments.length; i++) {
    sum = sum + arguments[i];
  }

  return sum;
}

console.log(add(5, 4, 4, 5, 53, 3));

//➡️hoisting is the process of moving declaration of all functions in program at the top of the program

//➡️ Lets see FUNCTION ASSIGNMENT- a simpple function gets assigned to a variaable
let FuncAssi = function sum1() {
  var add = 0;
  for (let i = 0; i < arguments.length; i++) {
    add = add + arguments[i];
  }
  return add;
};

console.log(FuncAssi(4, 5, 6, 7, 8, 9, 9, 10));
// const sum = (x,y) => x+y;

// console.log(sum(2,3))

// ➡️REST OPERATOR (...args)

function sum(a, b, ...args) {
  //...args is a Rest Operator which will store all the remaining arguments of that function in a Args Array by default. It is always a Last Parameter.
  var total = 0;
  for (let value of arguments) {
    total = total + value;
  }
  return total;
}

console.log(sum(1, 2, 3, 4, 5, 6, 7));

// ➡️DEFAULT PARAMETERS
// when user forgot passing his own parameters then in that case teh code will perform the program with default parameters

function interest(principal, rate = 5, time = 1) {
  return (principal * rate * time) / 100;
}
console.log(interest(1000));

// ➡️GETTER & SETTER Concept
// ➡️GETTER --> Access properties
// ➡️SETTER --> Change or Mutate Properties

// Below is the Read Only function
let person = {
  fname: "Divyansh",
  Lname: "Mishra",
  get Fullname() {
    return `${person.fname}  ${person.Lname}`;
  },
  set Fullname(value) {
    let parts = value.split(' ');
    this.fname = parts[0];
    this.Lname = parts[1];
  }
};
// Calling GETTER 
console.log(person.Fullname);

// Calling SETTER
person.Fullname='Sagar Mishra';
console.log(person.Fullname);

  

