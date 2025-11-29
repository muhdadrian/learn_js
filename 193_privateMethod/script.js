//private method

let counter = 0;
let add = function () {
  return ++counter;
};

console.log(add());
console.log(add());
console.log(add());

//this will not have problem and this is not closure
//but, if your program is already long in tens or hundreds of line, then there's:
//counter = 10 in one of those lines for example - this will incur problem. Go to 194
