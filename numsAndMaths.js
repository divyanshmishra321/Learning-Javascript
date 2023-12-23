// ⬇️Numbers and Maths⬇️
// Defining a number
const num = 400; //dynamic way
const num1 = new Number(400); // user defined

// Returns a string containing a number represented either in exponential or fixed-point notation with a specified number of digits.
const otherNumber = 123.89666;
console.log(otherNumber.toPrecision(8));
// Returns a string containing a number represented in exponential notation.
console.log(otherNumber.toExponential(8));

// ⬇️**********************MATHS***************************⬇️

// A built-in JavaScript object that is used to perform mathematical tasks. All the math functions are properties of this object.
console.log(Math);
// The abs() method returns the absolute value of a number.
console.log(Math.abs(-4));
// Rounds a number to the nearest integer.
console.log(Math.round(4.5));
// Returns the smallest integer greater than or equal to its numeric argument.
console.log(Math.ceil(4.5));
// Returns the greatest integer less than or equal to its numeric argument.
console.log(Math.floor(4.5));
// Returns a pseudorandom number between 0 and 1
console.log(Math.random());
// manipulating Random() value
console.log(Math.random() * 10 + 1);
console.log(Math.floor(Math.random() * 10) + 1);

// Hack for Random()
const min = 5;
const max = 20;
//formula to get random number between range of min and max
console.log(Math.floor(Math.random() * (max - min + 1)) + min); 


