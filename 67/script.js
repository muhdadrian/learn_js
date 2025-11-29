//ALL LOOPING CAN BE DONE IN RECURSIVE, BUT NOT IN REVERSE

//Loop:
function displayNumber(n) {
  for (var i = n; i >= 1; i--) {
    console.log(i);
  }
}

//Loop above converted into recursive at below:
function displayNumber(n) {
  if (n === 0) return;
  console.log(n);
  displayNumber(n - 1);
}

displayNumber(5);
