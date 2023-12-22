function add() {
  var sum = 0;
  for (var i = 0; i < arguments.length; i++) {
    sum = sum + arguments[i];
  }

  return sum;
}

console.log(add(5, 4, 4, 5, 53, 3));

// hoisting is the process of moving declaration of all functions in program at the top of the program

// Lets see FUNCTION ASSIGNMENT- a simpple function gets assigned to a variaable
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

function sum(a,b,...args)  { //...args is a Rest Operator which will store all the remaining arguments of that function in a Args Array by default. It is always a Last Parameter.
  var total=0
  for(let value of arguments){
    total=total+value;
  }
return total;
}

console.log(sum(1,2,3,4,5,6,7));



// REST operator (...)

 
