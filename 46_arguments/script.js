//in JS there's special variable called ARGUMENTS. It's different with argument term.
//ARGUMENTS is an array that contained value that is sent when the function is called

function add(a, b) {
  return a + b;
}

var answer = add(5, 10, 20);
//the value 20 is omitted for the function above. But, all the arguments above, besides they are being sent to the parameter, they are also contained in ARGUMENTS VARIABLE.

//FOR EXAMPLE:

add(5, 10, 20, 'hi', false);
//all the argument above is contained in arguments variable below with array data type:
arguments = [5, 10, 20, 'hi', false]; //each value or element has index
