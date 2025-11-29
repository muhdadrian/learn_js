//In JS, if the argument is more than the parameter, the excess argument will be omitted

function add(a, b) {
  return a + b;
}

var answer = add(5, 10, 20);
console.log(answer);

//If the parameter is more than the argument, the excess parameter will be filled with undefined value

function add(aa, bb, cc) {
  return aa + bb;
}

var answer2 = add(5, 10);
console.log(answer2);

//the cc parameter above is undefined
