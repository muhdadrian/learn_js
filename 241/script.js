const name = 'Adrian Nandu';
const age = 41;

//there's possibility, when we develop string, we do not know how many expressions in the template literals
//it's not possible we have arg1, arg2 etc in the parameter, as we do not know how many arguments
//in latest JS has an argument called rest parameter. It can cope all expressions in the template literal
//how to write? - write three dots and then followed by variable name which is free to use any name (for example: ...values)
//the values will be array that contained all expressions in the template literal
function test(strings, ...values) {
  return values; //this will output expressions
}
//strings - to fetch normal strings
//values - to fetch expressions

const str = test`Hello, I am ${name}, and I am ${age} years old`;
console.log(str);
