/*
for (var i = 10; i >= 1; i--) {
  console.log(i);
}
*/

//the loop above we can change it to recursive function:

/*
function displayNumber(n) {
  console.log(n);
  return displayNumber(n - 1);
}

displayNumber(10);
*/

//the infinite loop above will stop in the end and produce RangeError: Maximum call stack size exceeded
