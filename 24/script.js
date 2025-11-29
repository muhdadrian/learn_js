/*
var number = prompt('enter number:');

if (number == 1) {
  alert('you enter number 1');
} else if (number == 2) {
  alert('you enter number 2');
} else if (number == 3) {
  alert('you enter number 3');
} else {
  alert('you enter wrong number!');
}
*/

var number = parseInt(prompt('enter number:'));

//console.log(typeof number);

if (number === 1) {
  alert('you enter number 1');
} else if (number === 2) {
  alert('you enter number 2');
} else if (number === 3) {
  alert('you enter number 3');
} else {
  alert('you enter wrong number!');
}

//var number = prompt('enter number:'); -> this is string, so in strict equality, the code above will not work unless you use parseInt function
//you can also use Number(prompt('enter number:'));
