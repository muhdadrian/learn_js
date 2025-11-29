//Destructuring Function Return Value

//to make the order not affecting your code, change the return value from array to object
function math(a, b) {
  return {
    add: a + b,
    sub: a - b,
    multiply: a * b,
    divide: a / b,
  };
}

//we can also destructure object like below
const { divide, add, multiply, sub } = math(2, 3);
console.log(sub);

//the point is: if you do not want the order affecting your code, use object destructuring in the return value in the function
