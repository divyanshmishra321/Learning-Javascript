
// ⬇️STRINGS in Javascript⬇️

const name="Sagar"
const repoCount = 50;

// below is the older way to concatenate any string 
console.log(name + repoCount+"value");

// Below is the best and modern Practice of Concatenation 
console.log(`${name} has ${repoCount} repositories`);

// Example Strings
const gameName = new String("Divyansh")

// ⬇️Strings Methods & Functions⬇️

// returns value at that index
console.log(gameName.charAt(2));
// adds other string to original one
console.log(gameName.concat('and', 'Tushar'));
// returns indexof that character
console.log(gameName.indexOf('v'));
// returns substrings depend as per user 
const newSubString=gameName.substring(0,4);
console.log(newSubString);
// returns a section of a string
const anotherString=gameName.slice(1,4);
console.log(anotherString);
// Removes the leading and trailing white space and line terminator characters from a string.
const trimmedString="Divyansh-Mishra"
console.log(trimmedString);
console.log(gameName.trim());

const url = "https://Divyansh.com/hitesh%20mishra"
// Replaces text in a string, using a regular expression or search string.
console.log(url.replace('%20','-')); 
// returnns true or false based upon the occurence of that substring
console.log(url.includes('sundar')); 
// Split a string into substrings using the specified separator and return them as an array.
console.log(trimmedString.split("-"));


