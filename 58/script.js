//global scope / window scope
var a = 1;

function test() {
  a = 2; //by removing the var in front of a, JS will look if there's var a; declared in the function. If yes, then it's treated as local variable. If no, then JS will look at outside. In this case, yes.Then, a = 2 is treated as the reassignment of var a = 1;
}

test();

console.log(a);
