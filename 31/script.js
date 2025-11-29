var star = '';

for (var i = 0; i < 5; i++) {
  for (var j = 0; j < i; j++) {
    star += '*';
  }
  star += '\n';
}

console.log(star);

//why the first row in console there's no star?
//(j = 0) < (i = 0) -> the answer is false (bool value). So, the code is not executed. It then goes to the next loop ('\n).
