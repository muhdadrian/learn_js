//global scope / window scope
var a = 1;

function test() {
  var a = 2;
  console.log(window.a); //by adding window, it will access the window or global variable and not the local variable
}

test();
