//the parameter below is empty, but the value is resolved by the arguments variable

function add() {
  var result = 0;
  for (var i = 0; i < arguments.length; i++) {
    result += arguments[i];
  }
  return result;
}

var answer = add(1, 2, 3); //try add 4 etc. It's very flexible without adjusting the function above
console.log(answer);

//this is about pseudo arguments variable in JS function
