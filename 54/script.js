var a = 1;

function test() {
  var b = 2;
  console.log(a); //can access global variable
}

test();
console.log(b);

//In function we can access global variable
//If in outside, we cannot access local variable, but in function we can access global variable

//Just think that you're inside a car with dark tinted where you can see people at outside, but the people at outside cannot see you

//the a can see at outside, while the b can't
