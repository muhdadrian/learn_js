function myFunc(a, b, ...myArgs) {
  return `a = ${a}, b = ${b}, myArgs = ${myArgs}`;
}

console.log(myFunc(1, 2, 3, 4, 5));

//rest parameter can only be used in the last argument in parameter.That's why it's called rest
//another example in 289
