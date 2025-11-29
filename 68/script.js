//Loop
function factorial(n) {
  var result = 1;
  for (var i = n; i > 0; i--) {
    result *= i;
  }
  return result;
}

//Recursive
function factorial(n) {
  if (n === 0) return 1;
  return n * factorial(n - 1);
}

//We use recursive to make the code more elegant

console.log(factorial(5));

/*
Recursive Implementation:
1. To replace looping
2. Fibonacci
3. To trace the list and tree of data structure
4. It is used for programming language that has no loop: Haskell, Erlang, Prolog etc
5. Etc.. 
*/
