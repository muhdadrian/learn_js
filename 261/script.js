//Destructuring Function

function math(a, b) {
  return [a + b, a * b];
}

//use destructuring
const [add, multiply] = math(2, 3);
console.log(add);
console.log(multiply);

//how about if more than add and multiply in return. Go to 262
