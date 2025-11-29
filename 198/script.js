//private method

/*
let add = function () {
  let counter = 0;
  return function () {
    return ++counter;
  };
};

console.log(add());
console.log(add());
console.log(add());
*/

//the code above is partly executed as what display in the console is the function
//to fully execute it we use 'Immediately Invoked Function' at below

let add = (function () {
  let counter = 0;
  return function () {
    return ++counter;
  };
})(); //we wrap the function with round bracket and add another round bracket at outside the main round bracket in the end

//if we write another counter at below, it will not affect the function above
counter = 100;

console.log(add());
console.log(add());
console.log(add());

//we add another line
console.log(add());
console.log(add());
