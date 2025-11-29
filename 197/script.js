//private method

let add = function () {
  let counter = 0; //this counter is as if become private, cannot be accessed from outside. But, the value is maintained to be a closure (parent and inner function relationship)
  return function () {
    return ++counter;
  };
};

let a = add(); //add will execute all the function, while a for executing the inner function. Each time we execute the inner function, the ++counter will point to the counter at parent function. This is weird as we make variable to store. There's another way to automatically execute the inner function without passing the a variable and passing to a in console.log. Go to 198

console.log(a());
console.log(a());
console.log(a());
