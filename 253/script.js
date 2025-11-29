//Destructuring Assingment/Variable:

//Array:

//destructuring array can also be uses as a return value of a function
function test() {
  return [1, 2];
}

const a = test();
console.log(a); //it will return array

//if I want the value of 2
console.log(a[1]);

//but, by using destructuring variable, we can directly store the value like below:
const [b, c] = test();
console.log(b);
console.log(c);
//we can unpack the array in return to be stored in var b and c
