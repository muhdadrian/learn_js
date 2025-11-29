//we want to total all the rest parameter values

//we use rest parameter and for of (we can also use normal for loop)
function total(...number) {
  //a for accumulator | b for current index
  return number.reduce((a, b) => a + b);
}

console.log(total(1, 2, 3, 4, 5));
