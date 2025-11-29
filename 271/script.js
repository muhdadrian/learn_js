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

//forEach in array to get both element and index
//n - element in array
//i - index
//forEach has additional parameter. Besides n, we can give another parameter(i)
const students = ['Sarah', 'Fatih', 'Fariq'];
//students.forEach(n => console.log(n));
//students.forEach((n, i) => console.log(n, i));

//In better string:
//students.forEach((n, i) => console.log(`${n} is the student number ${i + 1}`));

//for of by default has no index
//you cannot write (const s, i of students) and console.log(i);
// for (const s of students) {
//   console.log(s);
// }

//but, if you insist to use for of to get index, you can use entries method
// for (const s of students.entries()) {
//   console.log(s); //s is array in output
// }

//use destructure in s (const s) to capture both name and index var
for (const [i, s] of students.entries()) {
  console.log(`${s} is the student number ${i + 1}`);
}
