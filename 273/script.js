/*
for..of:
- creates a loop iterating over iterable object

Iterable Object:
1. String
2. Array
3. Arguments / NodeList
4. TypedArray
5. Map
6. Set
7. User-defined Iterables
*/

//4. Arguments
/*
function totalNumbers() {
  console.log(arguments); //if we do not provide argument in the parameter, by default, the value of totalNumbers(1, 2, 3, 4, 5); will be captured by 'arguments' var. It's arguments, not array
}

totalNumbers(1, 2, 3, 4, 5);
*/

/*
//if array (this will output error, as it's not array)
function totalNumbers() {
  return arguments.reduce((a, i) => a + i);
}

console.log(totalNumbers(1, 2, 3, 4, 5));
*/

/*
//if it's array - [6, 7, 8, 9], then, it's ok.
function totalNumbers() {
  return [6, 7, 8, 9].reduce((a, i) => a + i);
}

console.log(totalNumbers(1, 2, 3, 4, 5));
*/

/*
//if we use forEach
function totalNumbers() {
  let total = 0;
  arguments.forEach(a => (total += a));
  return total; //this will output error, as arguments is not array. But if you change to array like the next code below. It's ok
}

console.log(totalNumbers(1, 2, 3, 4, 5));
*/

/*
function totalNumbers() {
  let total = 0;
  [6, 7, 8, 9].forEach(a => (total += a));
  return total;
}

console.log(totalNumbers(1, 2, 3, 4, 5));
*/

//the point is you cannot use reduce and forEach to loop arguments (unless you replace the arguments with array - for e.g, number), but for of, yes, it can like below

function totalNumbers() {
  let total = 0;
  for (n of arguments) {
    total += n;
  }
  return total;
}

console.log(totalNumbers(1, 2, 3, 4, 5));
