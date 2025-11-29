var nama = 'Adrian';
var username = '@adrian1982';

//if we delete the parameter
function printURL() {
  var instagramURL = 'http://instagram.com/';
  return instagramURL + username;
}

console.log(printURL('@hafizah1990'));

/*
- if we write '@hafizah1990', there's nothing (due to no parameter / no object argument) to capture the value in the function parameter
- so the username inside the function will look for local variable inside the function, if there's no local variable in the function, it will look inside the argument, if there's no inside the argument, it will look global variable (outside function). So, it will use the global variable in this case.   
 */

//if there's no global variable. Go to 178
