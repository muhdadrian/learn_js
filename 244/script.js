const name = 'Adrian Nandu';
const age = 41;

function test(strings, ...values) {
  //it's compulsory to have two parameters, while third parameter is optional (index)
  //1st para is accumulator(result) to combine all the array elements
  //2nd para is str - element to be combined in string array. The string (three parts) will be passed to str and combined in result in loop
  //3rd, we need index so that we can loop the expressions
  //the optional 0 in the end is for number, while '' (empty string) is for string
  return strings.reduce(
    (result, str, i) => `${result}${str}${values[i] || ''}`,
    ''
  );
}

const tl = test`Hello, I am ${name}, and I am ${age} years old.`;
console.log(tl);
