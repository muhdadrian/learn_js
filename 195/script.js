//private method

let add = function () {
  let counter = 0;
  return ++counter;
};

counter = 100;
console.log(add());
console.log(add());
console.log(add());

//but, the problem right now is all the output is 1. The solution is closure by making inner function. Go to 196
