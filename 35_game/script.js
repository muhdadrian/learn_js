//there's mistake in the code below

var ask = true;
while (ask) {
  //capture player selection
  var p = prompt('choose: elephant, ant, people');

  //capture computer selection
  //generate random number
  var comp = Math.random();

  if (comp < 0.34) {
    comp = 'elephant';
  } else if (comp >= 0.34 && comp < 0.67) {
    comp = 'people';
  } else {
    comp = 'ant';
  }

  //console.log(comp);

  //determine the rules
  var result = '';

  if (p == comp) {
    result = 'DRAW!';
  } else if (p == 'elephant') {
    // if (comp == 'peope') {
    //   result = 'WIN!';
    // } else {
    //   result = 'LOSE!';
    // }
    //Or use ternary:
    result = comp == 'people' ? 'WIN!' : 'LOSE!';
  } else if (p == 'people') {
    result = comp == 'elephant' ? 'LOSE!' : 'WIN!';
  } else if (p == 'ant') {
    result = comp == 'people' ? 'LOSE!' : 'WIN!';
  } else {
    result = 'you enter wrong selection';
  }

  //display the result
  alert(
    'You choose : ' +
      p +
      ' and computer chooses : ' +
      comp +
      '\nThe result is : You ' +
      result
  );
  ask = confirm('more?');
}
alert('thanks for playing the game');
