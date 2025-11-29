//When to use spread operator?
//2. To copy array
/*
const students = ['Sarah', 'Fatih', 'Fariq'];
//to copy, make a new var
const students1 = [...students]; //the students1 content is the real copy of students var above
console.log(students1); //console.log(students) - this will also output the same.
*/

//To check whether the copy is working or not:
const students = ['Sarah', 'Fatih', 'Fariq'];
const students1 = [...students];
students1[0] = 'Adrian';
console.log(students1); //The will change the first element, while console.log(students) will remain the same for its initial var
