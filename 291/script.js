//we want to total all the rest parameter values

//we use rest parameter and for of (we can also use normal for loop)
function total(...number) {
  let total = 0;
  for (const a of number) {
    total += a;
  }
  return total;
}

console.log(total(1, 2, 3, 4, 5));

//we can shorten the code above by using higher order function that is 'reduce'. Go to 292
