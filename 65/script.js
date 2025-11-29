//BASE CASE:
//the last condition of the recursive that is outputting value

//if we want the loop to stop in recursive function, we must put base case:

function displayNumber(n) {
  if (n === 0) {
    return;
  }
  console.log(n);
  displayNumber(n - 1);
}

displayNumber(10);

/*
//base case:

  if (n === 0) {
    return;
  }
*/

//the return above is not being given any value as its function only to stop the loop

//simpler code:
function displayNumber(n) {
  if (n === 0) return;

  console.log(n);
  displayNumber(n - 1);
}

displayNumber(10);
