//When to use spread operator?
//1. To combine two arrays
const students = ['Sarah', 'Fatih', 'Fariq'];
const teachers = ['Mel', 'Steph', 'John'];

//we make another array to combine both array above
const people = [...students, ...teachers];
console.log(people);

//we can use other method - concate. There is concate method in Prototype Array
console.log(students.concat(teachers));
