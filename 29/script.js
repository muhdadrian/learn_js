//7 row and each row contains 10 stars

var star = '';

for (var i = 0; i < 7; i++) {
  for (var j = 0; j < 10; j++) {
    star += '*';
  }
  star += '\n';
}

console.log(star);
