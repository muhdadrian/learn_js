/*
What is closure?
- closure is a combination between function and lexical scope (lingkungan lexical) in the function (MDN)

- closure is a function when it has access to its parent scope, even the parent scope has already been executed (W3School)

- closure is a returned function by another function that has access to the lexical scope when it's created (code fellow)

- closure is a function where it was previously has data due to another function (Techsith)
*/

//Lexical Scope

function init() {
  let nama = 'Adrian'; //local variable

  //inner function(closure*)
  function displayNama() {
    console.log(nama); //access to parent variable
  }
  displayNama();
}
init();

//the inner function above can have access to its parent variable
//the console.log(nama) in the inner function will look var nama in the function, if no, it will look at higher level in function init, if no, it will go to another level until it found global object that is window - this is called lexical scope
//the function displayNama has access to var nama even it's located outside the function
//the inner function needs the variable inside its parent scope. Therefore, the inner function is called 'closure'.
//let's code in 182
