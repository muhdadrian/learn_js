//sandhika's answer

var star = '';

for (var i = 10; i > 0; i--) {
  for (var j = 0; j < i; j++) {
    star += '*'; //this will concatenate 10x through loop (start from index 0). then it will go out from the 1st loop before come in again for the 2nd loop, 3rd loop etc..
  }
  star += '\n';
}

console.log(star);

//0 < 10, 1
