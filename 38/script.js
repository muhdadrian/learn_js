//to add the volume of two boxes (kubus)
//below is sandhika's answer without using function

var a = 8;
var b = 3;
var volumeA;
var volumeB;
var total;

volumeA = a * a * a;
volumeB = b * b * b;

total = volumeA + volumeB;
console.log(total);

//if we have another box c and d, we need to declare another variable and repeat the process to calculate them, which is not effective.
//the solution is function to avoid the DRY.

function box(c, d) {
  var volumeA;
  var volumeB;
  var total;

  volumeA = c * c * c;
  volumeB = d * d * d;

  total = volumeA + volumeB;

  return total;
}

console.log(box(8, 3)); //can use alert to display the result
console.log(box(10, 15));
