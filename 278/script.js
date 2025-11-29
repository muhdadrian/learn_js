//spread operator is more flexible than concat, as you can add an array in the middle of the two arrays
const students = ['Sarah', 'Fatih', 'Fariq'];
const teachers = ['Mel', 'Steph', 'John'];

//add another array in the middle
const people = [...students, 'Aji', ...teachers]; //spread operator can handle this, but, concat is complicated

console.log(people);

//so, spread operator can combine two or more arrays.
