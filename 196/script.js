//private method

let add = function () {
  let counter = 0;
  return function () {
    ++counter;
  };
};

console.log(add());
console.log(add());
console.log(add());
//the code above will display function, as only the add function is being executed, while its inner function not yet - partly executed
//the solution is by making global variable outside the function. Go to 197
