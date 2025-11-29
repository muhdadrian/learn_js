//Function Declaration
function displayMessage(nama) {
  alert('hello ' + nama);
}

displayMessage('Sarah');

//Function Expression
//the function is anonymous function
let displayMessage2 = function (nama2) {
  alert('hello ' + nama2);
};

displayMessage2('Fatih');

//Arrow Function
//it's a shorten version of function expression (MDN)
let displayMessage3 = nama3 => {
  alert('hello ' + nama3);
};

displayMessage3('Fariq');
