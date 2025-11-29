var number = prompt('Enter number:');
if (number % 2 === 0) {
  alert(number + ' is EVEN');
} else if (number % 2 === 1) {
  alert(number + ' is ODD');
} else {
  alert('Your input is not a number');
}
