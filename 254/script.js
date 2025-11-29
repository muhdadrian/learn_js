//Destructuring Assingment/Variable:

//Array:

//we want to destructuring array elements, but we are unsure how many of the elements - use rest parameter
const [a, b] = [1, 2];
console.log(a);
console.log(b);

//but, how about if we have three values of array, or it keeps on adding? we use rest parameter after the 1st var
//the 1 will be stored in var c, the rest will be stored in values array(it's an array)
const [c, ...values] = [1, 2, 3];
console.log(c);
console.log(values);
console.log(values[1]);
