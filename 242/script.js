const name = 'Adrian Nandu';
const age = 41;

//map will output new array, while forEach not
//we loop each string 0, 1, 2 and combined with values 0, 1, 2
//forEach parameter - 1st para: str to fetch the element in strings array, 2nd para: i (index) to loop the values content
function test(strings, ...values) {
  let result = '';
  //we return by using arrow function
  strings.forEach((str, i) => {
    result += `${str}${values[i]}`; //combine string and expression
  });
  return result; //this will output undefined after the dot - it's because the last values has no value. Str will always more than values for 1 element. Its solution go to 243
}

const tl = test`Hello, I am ${name}, and I am ${age} years old.`;
console.log(tl);
