//1st row 1 star
//2nd row 2 star until row n with its n stars

/*

 *
 **
 ***
 ****
 *****
 
 */

//my answer
var star = '';

for (var i = 1; i < 5; i++) {
  for (var j = 0; j < i; j++) {
    star += '*';
  }
  star += '\n';
}

console.log(star);

//how to read the code above?
//is i less than 7?
//if yes, then i++, this will execute later
//get into the nested loop, is j less than or equal to i? the answer is true, then j++
