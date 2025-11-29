//Method in Array

//6. foreach, map - two of these methods used to loop the array
var number = [1, 2, 3, 4, 5, 6, 7, 8];

// for (var i = 0; i < number.length; i++) {
//   console.log(number[i]);
// }

//for loop above can be replaced with foreach below:

number.forEach(function (e) {
  console.log(e);
});
//for each element (e) in the number array do the function above
//foreach is great as we do not need to identify the index (var i = 0), how many times to loop (i < number.length) and increment (i++).
//foreach is simpler
