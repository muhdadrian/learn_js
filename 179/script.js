var nama = 'Adrian';
var username = '@adrian1982';

function printURL() {
  console.log(arguments);
  var instagramURL = 'http://instagram.com/';
  return instagramURL + username;
}

console.log(printURL('@hafizah1990'));

//so where does '@hafizah1990' go? It will enter into arguments object - console.log(arguments); inside the function

//there will be new arguments object (arguments) during the creation and execution phase in Local Execution Context.Refer to the note below

/*
previous notes:

function to make Local Execution Context:
- inside it, there are creation and execution phases
- window
- arguments
- hoisting
*/

//In console, @hafizah1990 will be in index 0. Something captured it
//type console.log(arguments[0]); inside the function above to display the result in the console. The data is not lost
//if you type two arguments: console.log(printURL('@hafizah1990', '@sarah')); - there will be two values in arguments object
//for another exercise go to 180
