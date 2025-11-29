var a = 1;

function test() {
  var a = 2;
  console.log(a); //a is local variable
}

test();
