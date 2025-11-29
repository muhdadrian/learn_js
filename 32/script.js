//sandhika's answer

var star = '';

for (var i = 0; i < 5; i++) {
  for (var j = 0; j <= i; j++) {
    star += '*';
  }
  star += '\n';
}

console.log(star);

//try to change the number above from 5 to any number for example 15 etc
