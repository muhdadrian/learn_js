//Destructuring Function

function math(a, b) {
  return [a + b, a * b];
}

//my solution
const result = math(2, 3);
console.log(result); //will output array
console.log(result[0]); //to take the addition only
console.log(result[1]); //to take the multiplication

//sg's solution
const add = math(2, 3)[0];
const multiply = math(2, 3)[1];
console.log(add);
console.log(multiply);

//to use destructure, go to 261
