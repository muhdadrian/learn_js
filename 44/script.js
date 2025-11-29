function add(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

var result = multiply(add(1, 2), add(3, 4));
console.log(result);
