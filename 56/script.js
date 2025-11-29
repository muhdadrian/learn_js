var a = 1;

function test() {
  var a = 2;
}

test();

console.log(a);

//the variable above is called name conflict, where we have two variables with same name, but different scope
//above is two different variables
