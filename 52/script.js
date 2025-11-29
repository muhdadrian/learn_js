function test() {
  var b = 2;
}

test();
console.log(b);

//Error: b is not defined. Because the variable b can only be identified within the function and not at outside. This is called function scope.
