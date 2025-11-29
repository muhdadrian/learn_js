var a = 1;

function test(a) {
  console.log(a); //this is local variable
}

test(a);
console.log(a);
//both test(a) and console.log(a) are referring to global variable

/*
global variables:
1. var a = 1;
2. test(a);
3. console.log(a);
*/

/*
local variables:
function test(a) {
  console.log(a);
}
*/
