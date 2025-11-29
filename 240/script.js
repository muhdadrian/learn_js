const name = 'Adrian Nandu';
const age = 41;

//the expression will go to the next parameter of name and age
//if we add another parameter for example email and return email, the output will be undefined
function test(strings, name, age) {
  return strings; //try to change the string word to name and age
}

const str = test`Hello, I am ${name}, and I am ${age} years old`;
console.log(str);
