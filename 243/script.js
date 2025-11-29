const name = 'Adrian Nandu';
const age = 41;

function test(strings, ...values) {
  let result = '';
  strings.forEach((str, i) => {
    result += `${str}${values[i] || ''}`; //we use or, if the values has value, display it, if no, display empty string so that the undefined word does not come out
  });
  return result;
}
//we can simplify the code above by using Higher Order Function - reduce. Reduce can combine array elements. Go to 244

const tl = test`Hello, I am ${name}, and I am ${age} years old.`;
console.log(tl);
