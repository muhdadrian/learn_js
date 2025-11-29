//print five * = *****

//console.log('*****');

/*
//row | horizontal

var star = '';

for (var i = 0; i < 5; i++) {
  star += '*'; //concatenate
}

console.log(star);
*/

/*
//column | vertical

var star = '';

for (var i = 0; i < 5; i++) {
  star += '*';
  star += '\n';
}

console.log(star);
*/

//row & column

var star = '';

for (var i = 0; i < 5; i++) {
  for (var j = 0; j < 5; j++) {
    star += '*';
  }
  star += '\n';
}

console.log(star);

//after each five star in row, it will get out from the loop and start another one due to \n loop.
