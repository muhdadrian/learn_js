//element in array can be different data types:
var myArr = ['text', 2, false]; //string, int, boolean

var myFunc = function () {
  alert('Hello World!');
};

//we can add function in array
var myArr2 = ['text', 2, false, myFunc];

//we can add array in array knows as multi-dimension array
var myArr3 = ['text', 2, false, myFunc, [4, 5, 6]];

console.log(myArr3[4][1]); //to display 5
