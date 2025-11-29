var number = prompt('enter number:');

switch (number) {
  case '1':
    alert('you enter number 1');
    break;
  case '2':
    alert('you enter number 2');
    break;
  case '3':
    alert('you enter number 3');
    break;
  default:
    alert('you enter wrong number');
    break;
}

//the prompt is string so type case '1': instead of case 1:, unless you use parseInt function or Number in front of the prompt
