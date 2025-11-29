//Destructuring Function

function math(a, b) {
  return [a + b, a - b, a * b, a / b]; //how about if the divide is removed? It will output undefined. So, give default value to divide below
}

//destructuring
const [add, sub, multiply, divide = 'none'] = math(2, 3);
console.log(add);
console.log(sub);
console.log(multiply);
console.log(divide);
//if the add is switch with sub above. It will cause problem. Order is important.
//if you want the order not affecting your code, go to 263 for solution
