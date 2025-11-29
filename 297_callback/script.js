/*
Callback:
- function that is passed as parameter (string, int, array, object and function) to another function (MDN)
*/

/*
Callback:
- function that is to be executed after another function had been executed (codeburst)
*/

//Synchronous Callback
function hello(name) {
  alert(`Hello, ${name}`);
}

//the name in the paramter is free to use any name
function displayMessage(callback) {
  const name = prompt('Enter Your Name : ');
  callback(name); //calling function in a function
}

displayMessage(hello);

//the 1st function at the top will be sent as parameter to another function (2nd one)
//the Synchronous Callback above we'll use it rarely. We will use asynchronous callback

//another example of Synchronous Callback at 298
