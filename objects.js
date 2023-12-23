// // ⬇️Objects in javascript⬇️

// // Defining an Object
// // const object_Name={key:value}  //Oject is an Datastructure that contains key:value pairs of some info

// const user1 = {
//   name: "divyansh",
//   fullname: "Divyanshmishra",
//   age: 18,
//   location: "lucknow",
//   email: "divyanshmishra@gmail.com",
//   isLoggedIn: false,
//   lastLoginDay: ["monday", "Saturday", "Thursday"],
// };

// // Accessing Objects Key Values
// console.log(user1["email"]);

// // Modify Key and values in Objects
// user1.email = "divyanshmishra863@gmail.com";
// console.log(user1["email"]);
// freeeze any  object from modification
// Object.freeze(user1);
// user1.age = 20;
// console.log(user1);

// // Add Greeting to your Objects
// user1.greeting = function () {
//   console.log("Hello Js Users");
// };
// user1.greetingTwo = function () {
//   console.log(`Hello Js Users ${this.fullname}`);
// };
// console.log(user1.greeting());
// console.log(user1.greetingTwo());

// // Singleton

// const TinderUser = new Object(); //Singleton Object
// TinderUser.id = "1234";
// TinderUser.isLoggedIn = false;
// TinderUser.Name = "Divyansh";

// console.log(TinderUser);

// // Nesting of an Object
// const Tinderuser2 = {
//   email: "divyansh@gmail.com",
//   fullname: {
//     userFullName: {
//       fName: "Divyansh",
//       lName: "Mishra",
//     },
//   },
// }; //Non-Singleton

// console.log(Tinderuser2); //Returns complete all Objects
// console.log(Tinderuser2.fullname.userFullName.fName);

// // Combine Two Objects together

// const obj1 = { 1: "a", 2: "b", 3: "c", 4: "d" };
// const obj2 = { 1: "a", 2: "b", 3: "c", 4: "d" };
// const obj3 = Object.assign({}, obj1, obj2); //returns combined Objects
// console.log(obj3);
// const obj4={...obj1,...obj2} //combining two objects using Spread
// console.log(obj4);


// *******************Obejects Destructuring*****************

const course={
    courseName:"Js in Hindi",
    price:"999",
    Teacher:"Divyansh"
}

// const {Value_name U want to extract}=(object ka naam jaha se krni hai )

const {Teacher}=course;
console.log(Teacher);
 