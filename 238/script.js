/*
Tagged Templates:
- it's more complex than Template Literals, where we can read the template literals through function (MDN)
*/

const name = 'Adrian Nandu';
const age = 41;

//this function will return 'test' word where the string after the test in str var is ignored
function test() {
  return 'test';
}

//by default the the tagged template (test) below can accept parameter from function above. Go to 239
const str = test`Hello, I am ${name}, and I am ${age} years old`;
console.log(str);
