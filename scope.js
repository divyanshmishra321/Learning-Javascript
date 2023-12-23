// ⬇️Scope of Variables⬇️

if (true) {
  let a = 10;
  const b = 20;
  var c = 30;
} // Block Scope closes here for let/const all variable
//
// console.log(a); //returns error
// console.log(b); //returns error
console.log(c); //returns correct value because of Var

// Nested Scopes

function one() {
  const username = "Divyansh";

  function two() {
    const website = "youtube";
    console.log(username);
  }
//   console.log(website);//out of scope will gove error now
  two();
}

one(); //print complete body of that function

if(true){
    const username="Divyansh"
    if(username==="Divyansh"){
        const website="Youtube"
        console.log(username+website);
    }
    // console.log(website);//give error as its out of scope
}

// console.log(username);//give error as its out of scope

// **************************Intresting**********************

addone(5)
function addone(num) {
    return num+1
}

const addtwo=function (num) {
    return num+2;    
}
console.log(addtwo(5));
addtwo(5)



