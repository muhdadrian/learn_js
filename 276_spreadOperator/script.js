/*
Spread Operator vs Rest Parameter:
- both represented with three dots ...
- both notation are different
*/

/*
Spread Operator:
- to expand or unpack iterables to be a single element
*/

/*
Iterable Object:
1. String
2. Array
3. Arguments / NodeList
4. TypedArray
5. Map
6. Set
7. User-defined Iterables
*/

//unpack the iterables to be a single element
//array is iterable
//array can be destructured. If we destructure each element, they will be stored in var

const students = ['Sarah', 'Fatih', 'Fariq'];
console.log(students); //this will output array
console.log(...students); //this will unpack each element
console.log(...students[0]); //when we enter into array with index 0, where the 0 is a string and string is iterable. Each letter is iterated.

/*
When to use spread operator?
- to combine two arrays
*/
