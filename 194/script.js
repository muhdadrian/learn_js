//private method

let counter = 0;
let add = function () {
  return ++counter;
};

counter = 10; //this will cause problem (from 193). This is due to hoisting, where the ++counter in the function is affected. The solution is so that the counter = 0 is not disturbed, put it inside the function. Go to 195

console.log(add());
console.log(add());
console.log(add());
