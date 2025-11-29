/*
function myFunc() {
  return arguments; //this is not an array. So, we cannot use methods in array
}

console.log(myFunc(1, 2, 3, 4, 5));
*/

/*
//we use rest paramter:
function myFunc(...myArgs) {
  return myArgs;
}

console.log(myFunc(1, 2, 3, 4, 5));
*/

/*
//we can use arguments on the top by changing it to array first to below code
function myFunc() {
  return Array.from(arguments);
}

console.log(myFunc(1, 2, 3, 4, 5));
//this is another way besides using rest parameter
*/

//we also can use spread operator:
function myFunc() {
  return [...arguments];
}

console.log(myFunc(1, 2, 3, 4, 5));
