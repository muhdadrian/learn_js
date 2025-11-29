//Function Expression
const displayNama = function (nama) {
  return `Hello, ${nama}`;
};

console.log(displayNama('Sarah'));
//change the code above to arrow function

//Arrow Function
const displayNama2 = nama2 => {
  return `Hello, ${nama2}`;
};

console.log(displayNama2('Fatih'));

//Arrow Function in more than a parameter
const displayNama3 = (nama, time) => {
  return `Good ${time}, ${nama}`;
};

console.log(displayNama3('Fariq', 'night'));

//If parameter only one
//if only a parameter, no need the round bracket. if two para, yes, you have to use it
//if the function content only like this: {return `Hello, ${nama4}`;}; - no need to write the return word and {}
//when the return keyword is removed, it will be called as 'implicit return'
const displayNama4 = nama4 => `Hello, ${nama4}`;
console.log(displayNama4('Adrian'));

//Arrow without parameter - it's compulsory to write the round bracket
const displayMessage = () => `Hello World!`;
console.log(displayMessage());
