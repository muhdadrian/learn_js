// alert('hello world!');

/*
alert('hello');
alert('my');
alert('name');
alert('Adrian Nandu');
*/

/*
var name = prompt('enter name:');
//alert(name);
alert(`Your name is ${name}`);
*/

/*
var test = confirm('are you sure?');
alert(test);
*/

/*
var test = confirm('are you sure?');
if (test === true) {
  alert('user clicks OK!');
} else {
  alert('user clicks CANCEL!');
}
*/

alert('Welcome..');
var more = true;

while (more === true) {
  var name = prompt('enter name:');
  alert('hello ' + name);

  more = confirm('test more?');
}

alert('thank you..');
