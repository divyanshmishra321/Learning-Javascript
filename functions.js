function add() {
  var sum = 0;
  for (var i = 0; i < arguments.length; i++) {
    sum = sum + arguments[i];
  }

  return sum;
}

console.log(add(5, 4, 4, 5, 5));


const sum = (x,y) => x+y;

console.log(sum(2,3))