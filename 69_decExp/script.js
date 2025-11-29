//function declaration Vs function expression

//function declaration:
//function identifier (ParameterList - optional) {FunctionBody}
//more flexible - can write anywhere, before or after the function call. It happened as in JS there's hoisting concept - function declaration is saved first in memory.
//easier for the beginner

//displayMessage('adrian'); -> this also will display due to hoisting concept

function displayMessage(name) {
  alert('hello ' + name);
}

//displayMessage('adrian');

//function expression:
//function idetifier - optional (ParameterList - optional) {FunctionBody}
//less flexible as the function must be defined first before it is called
//More powerful:
//1. because of closure (next video)
//2. can be argument for another function
//3. IIFE(immediately invoked function expression)

//displayMessage('adrian'); //to call before the function will not work

var displayMessage = function (name) {
  alert('hello ' + name);
};

//displayMessage('adrian');
