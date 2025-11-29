//9. filter and find - these two methods used to find element in array
//find will return a value, while filter can return many values

var number = [1, 2, 10, 5, 20, 3, 6, 8, 4];

var number2 = number.filter(function (x) {
  return x > 5;
});

//console.log(number2);
console.log(number2.join(' - ')); //use join to look elegant
