var nama = 'Adrian';
var username = '@adrian1982'; //IG username

//to print IG URL
function printURL(username) {
  var instagramURL = 'http://instagram.com/';
  return instagramURL + username;
}

console.log(printURL(username));

//each time function is called, it will make new execution context - the local one. It's called execution stack. After the function is done in its execution, the execution context will be erased from the stack (no more in the memory)

//another example at 175
