const user={
    username:"Divyansh",
    price:999,

    welcomeMessage: function () {
        console.log(`${this.username} , Welcome to Website`);  
        console.log(this);
    }
}
user.welcomeMessage() //returns Previous Context
user.username="sam" // changing the context
user.welcomeMessage() //returns new context 

console.log(this); // returns Empty context in Node Enviorment


// function chai() {
//     console.log(this);//returns all global values 
// }
// chai() 


// Arrow Functions

const chai=()=>{
    let username="hitesh"
    console.log(username)
}
// chai()
// implicit return in Arrow Functions
const addtwo =(num1,num2)=>(num1+num2)
console.log(addtwo(3,4));
