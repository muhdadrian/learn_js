//Recursive is a function that is called itself

//function characteristic:
//input -> function -> output

//for recursive:
//input -> function <- call itself (loop) -> output. Be careful in using recursive, as it may be fall into infinite loop.
//in using recursive, its function must end and output a value

//inside the function below will return the test function itself in infinite loop until produced error -> maximum call stack
//the error means the recursive call is too much
function test() {
  return test();
}

test();
