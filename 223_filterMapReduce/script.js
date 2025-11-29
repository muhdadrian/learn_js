/*
Example of Higher Order Function for array:
1. Array.prototype.map()
2. Array.prototype.filter()
3. Array.prototype.reduce()
*/

/*
- map is similar to forEach, but map will output new array, while forEach not
- map is like the pieces of fruits, fish etc being cut, while reduce will combine them all into products (hotdog for example)
- reduce will output new array
*/
const number = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];

//look for number >= 3 by using for loop
const newNumber = [];
for (let i = 0; i < number.length; i++) {
  if (number[i] >= 3) {
    newNumber.push(number[i]);
  }
}
console.log(newNumber);

//use filter
//the function below is function callback
//the parameter we can write anything to represent each element in the number
const newNumber2 = number.filter(function (e) {
  return e >= 3;
});
console.log(newNumber2);

//we can make the filter function above into arrow function like below:
const newNumber3 = number.filter(e => e >= 3);
console.log(newNumber3);

//use map
//times each element with 2
const newNumber4 = number.map(e => e * 2); //you can try add etc
console.log(number);
console.log(newNumber4);

//use reduce
//add all elements in the array
//reduce must have two arguments
//you can use any name for parameter
//by default, there is value 0 after currentValue:
//accumulator + currentValue, 0
//0 + -1 + 8 + 9 + 1 + 4 + -5 + -4 + 3 + 2 + 9 -> there's 0 in the early number actually, and you can change the number from 0 to 5 etc
const newNumber5 = number.reduce(
  (accumulator, currentValue) => accumulator + currentValue
);
console.log(newNumber5);

//chaining method by combining all the Higher Order Function in an execution, and no need to put in variable 1st
//find number > 5, times it with 3 and total them

const result = number
  .filter(e => e > 5) //8,9,9
  .map(e => e * 3) //24, 27, 27
  //.map(e => e / 2) // you can add another map and filter
  .reduce((acc, cur) => acc + cur); //78
console.log(result);
