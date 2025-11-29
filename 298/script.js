//Synchronous Callback
function displayMessage(callback) {
  const name = prompt('Enter Your Name : ');
  callback(name);
}

//displayMessage(function () {}); //we can make anonymous function or arrow function at below

displayMessage(name => alert(`Hello, ${name}`));
