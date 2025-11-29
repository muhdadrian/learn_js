//Destructuring Assingment/Variable:

//Array:

//We swap the array element
//use let as we want to swap the element
let a = 1;
let b = 2;
console.log(a);
console.log(b);

//normally, tp swap the array we need an additional var to store the temporary value
//but, by using destructuring array we can swap directly
[a, b] = [b, a];
console.log(a);
console.log(b);

//destructuring syntax can also use to swap values in variables like above
