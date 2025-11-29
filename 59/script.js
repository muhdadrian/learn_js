function test() {
  a = 2; //if there's no var in front of a, JS will look variable declaration inside the function, if there's no, then it will look at outside. If there's no, then JS will make 'var a;' at outside automatically, until a = 2 is treated as global variable.
}

test();
console.log(a);

//if you intend to make local variable, don't forget to write var keyword inside the function
//you can also declare like this inside the function:
//var a;
//a = 2;
