// ⬇️Date and Time⬇️

let myDate=new Date() //Returns Current Instance Date
console.log(myDate);

console.log(myDate.toDateString()); //Returns a date as a string value.
console.log(myDate.toISOString()); //Returns a date as a string value in ISO format
console.log(myDate.toLocaleString()); //Converts a date and time to a string by using the current or specified locale.
console.log(myDate.toLocaleDateString()); //Converts a date to a string by using the current or specified locale.
console.log(myDate.toTimeString()); //Returns a time as a string value.
console.log(typeof myDate); //Returns type of myDate which is Object.

// Returns the Created Date and Day
let myCreateDate =new Date(2023,1,23)
console.log("My Created Date: ",myCreateDate.toDateString());
// returns date acc to indian format 
let myCreateDated =new Date(2023,0,23,5,6)
console.log("My Created Date: ",myCreateDated.toLocaleString());

// Returns current timestamp
let currenttime= Math.floor(Date.now()/1000);
console.log('Current Timestamp :',currenttime);
console.log("Current Timestamp :",currenttime);
console.log(myCreateDate.getTime());
console.log(myCreateDated.toDateString());

// Get month,day,date  
console.log(myCreateDate.getMonth());
console.log(myCreateDate.getDate());
console.log(myCreateDate.getDay());





