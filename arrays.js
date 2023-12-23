// ⬇️Arrays in Javascript⬇️

const myArray=[1,2,3,4,5,6,7,8];
console.log(myArray);
//Accessing elements of an array:
let element=myArray[0];
console.log("The first element is "+element);

// Arrays Mathods
//push()-adds one or more elements to the end of an array and returns new length
myArray.push(6)
console.log("After PUSH " +myArray);
// Removes the last element from an array and returns it
myArray.pop()
console.log("After POP " +myArray);
//Adds one or more elements to the beginning of an array and returns new length
myArray.unshift(9)
console.log("After UNSHIFT " +myArray);
//Removes the first element from an array and returns it
myArray.shift()
console.log("After SHIFT " +myArray);
// Adds all the elements of an array into a string, separated by the specified separator string.
const newArr = myArray.join()
console.log(newArr);
console.log(typeof newArr);

//Slice and Splice
//The slice() method extracts parts of an array and returns the extracted parts in a new array object. It does not change the original array.

console.log("A", myArray);
var sliced = myArray.slice(2,5);
// console.log(sliced);
console.log("B", sliced);

// Spread Operator(...) is a operator used to concatenate two or more  arrays together.
// uses->

const arr1=["spiderman", "divyansh","Yash"];
const arr2=["rohit", "sagar", "shubh"];
// below is a way to combine two or more arrays together using spread array
const combArray=[...arr1,...arr2];
console.log(combArray);

// Flat Function is used to resolve the depth of array in arrays
 const leveledArray=[1,2,4,5,6,6,[2,3,5,8,9,0,7,[1,2,4,5,6,6,5]]];
const flatenArray=leveledArray.flat(Infinity);
console.log(flatenArray );

// Create Array from and of new elements using single methods
console.log(Array.from("Divyansh")); //returns new array of Divyansh

let score1=200;
let score2=200;
let score3=200;
console.log(Array.of(score1,score2,score3));  //Returns a new array from a set of elements.

// ******************************ARRAY__COMPLETES******************************