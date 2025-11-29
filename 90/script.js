//9. filter and find - these two methods used to find element in array
//find will return a value, while filter can return many values

var number = [1, 2, 10, 5, 20, 3, 6, 8, 4];

var number2 = number.find(function (x) {
  return x > 5;
});

//console.log(number2.join(' - ')); //this will result error, as find is not outputting array, but a value. So cannot use join, as join is used to find array

console.log(number2);
