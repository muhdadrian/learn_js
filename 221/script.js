//two arguments: 1st, n for how many times the action to be repeated and 2nd, action (what action to be done) - console.log or alert
//the 2nd parameter is function. So this case can be done effectively by using higher order function
function repeat(n, action) {
  for (let i = 0; i < n; i++) {
    action(i);
  }
}

repeat(10, console.log);
repeat(3, alert);
