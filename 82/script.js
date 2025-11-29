//Method in Array

/*
var number = [1, 2, 3, 4, 5, 6, 7, 8];

number.forEach(function (e) {
  console.log(e);
});
*/

//we can simplify the code above to below:

var number = [1, 2, 3, 4, 5, 6, 7, 8];

var print = function (e) {
  console.log(e);
};

number.forEach(print);

//BTW, it's easier to use the code at the top and that's the advantage of using function expression
