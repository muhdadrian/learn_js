function myFunc(a, ...myArgs) {
  return myArgs;
}

console.log(myFunc(1, 2, 3, 4, 5));

//1 is captured by a, while the rest in myArgs
