/*
function box(a, b) {
  var volumeA;
  var volumeB;
  var total;

  volumeA = a * a * a;
  volumeB = b * b * b;

  total = volumeA + volumeB;

  return total;
}

console.log(box(8, 3));
*/

//Refactor code above to below:

function box(a, b) {
  return a * a * a + b * b * b;
}

console.log(box(8, 3));
