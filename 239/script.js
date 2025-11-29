/*
Tagged Templates:
- it's more complex than Template Literals, where we can read the template literals through function (MDN)
*/

const name = 'Adrian Nandu';
const age = 41;

//this will return array (three elements)
function test(strings) {
  return strings;
}

//when we execute the template literal (normal) below, the tagged template will break each string, separated by expression. The expression does not include in the string
//so where the expression ${} goes?. It will go to the next parameter. Go to 240
const str = test`Hello, I am ${name}, and I am ${age} years old`;
console.log(str);
