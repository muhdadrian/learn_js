function add() {
  return arguments;
}

var answer = add(5, 10, 20, 'hi', false);
console.log(answer);

//the value above will be ignored by the function, but they will be passed in the arguments inside the function
