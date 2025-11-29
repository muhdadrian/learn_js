//Factorial is used in recursive

//5! = 5 x 4 x 3 x 2 x 1 (5 factorial means 5 x 4 x 3 x 2 x 1 ) -> this will be easier done with recursive

function factorial(n) {
  if (n === 0) return 1; //base case
  //console.log(n);
  return n * factorial(n - 1); //the function return n * (recursive) factorial(n-1);
}

//why it returns 1? The real value is 1

//factorial(5);
console.log(factorial(5));

//the 5 will get into argument n.
//check whether 5 === 0. No, then skip to the next line
//5 x factorial(5-1) -> 4
//the 4, 3, 2, 1, 0 will get back into n argument in loop until it reached 0. Then it stopped.

/*
factorial(5)
5 * factorial (4)
5 * (4 * factorial(3))
5 * (4 * (3 * factorial(2)))
5 * (4 * (3 * (2 * factorial(1))))
5 * (4 * (3 * (2 * 1)))
5 * (4 * (3 * 2))
5 * (4 * 6)
5 * 24
120
*/

// The factorial of 5 is:
//5 * 4 * 3 * 2 * 1 = 120
