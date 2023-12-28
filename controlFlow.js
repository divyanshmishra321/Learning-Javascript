// ⬇️Logic Control Flow in javascript⬇️

// ➡️If Statement
// if(condition to be checked){
//     if condition is true then this code will execute
// }

const userLoggedIn=true
const debitCard=true
const age=9;
if(userLoggedIn && debitCard && age>=18){
    console.log("Allow to buy Course");
}
else{
    console.log("You are not allowed to Buy Course");
}

//➡️Switch Statements
const month=4;
switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("february");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
            console.log("April");
        break;
    case 5:
        console.log("May");
        break;

    default:
        console.log("Default Month");
        break;
}
 