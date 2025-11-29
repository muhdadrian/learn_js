//console.log(sayHello); //the function content being executed
//console.log(sayHello()); //the output for both variables are undefined due to hoisting. If we move the console.log(sayHello()); to the bottom of the two variables below, then the right output will be displayed
//there will be undefined in the console below the output. To remove it, change the console.log to return inside the function

var nama = 'Adrian';
var age = 41;

console.log(sayHello());

function sayHello() {
  // console.log(`Hello, my name is ${nama}, I am ${age} years old`);
  return `Hello, my name is ${nama}, I am ${age} years old`;
}

//behind the scene:
//1. creation phase: hoisting on the two variables (nama and age), and filled the function

//function is not like variables, as variables are filled with undefined, while function filled with its function string. Therefore, if you write the console.log(sayHello()) before the function, there will be no problem. But, it will be a problem if you do the same to the variables.

//For JavaScript visualization, please visit pythontutor.com
