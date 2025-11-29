/*
Rest Parameter:
- to represent an unlimited argument in a function to be an array (MDN)
*/

//the parameter below will only capture 1 and 2 values
function myFunc(a, b) {
  return a; //try return b
}

console.log(myFunc(1, 2, 3, 4, 5));

//to capture the rest values go to 287
