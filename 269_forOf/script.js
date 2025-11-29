//New Looping in JS (for..of & for..in)

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

//1. Array Looping

//a)for loop
const students = ['Sarah', 'Fatih', 'Fariq'];

// for (let i = 0; i < students.length; i++) {
//   console.log(students[i]);
// }

//b) forEach
//forEach is just for array looping
//it's simpler than for loop
//students.forEach(s => console.log(s));

//c) for of
//const s - we represent each element in the array in a new var
//we use const as the value is fixed
for (const s of students) {
  console.log(s);
}
