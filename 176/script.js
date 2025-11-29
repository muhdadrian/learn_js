var nama = 'Adrian';
var username = '@adrian1982'; //IG username

//to print IG URL
function printURL(username) {
  var instagramURL = 'http://instagram.com/';
  return instagramURL + username;
}

//console.log(printURL(username));// we change the username to @hafizah1990 like below and see the result

console.log(printURL('@hafizah1990'));

//why the username changed even the username variable is different? It's because of scope
//when we write '@hafizah1990', the value will be passed to function parameter, and the value will be returned.
//if we delete the parameter in function, go to 177
