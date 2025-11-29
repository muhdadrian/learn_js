//Another example
const liStudents = document.querySelectorAll('li');
//console.log(liStudents); //this will output NodeList where we can loop
//console.log(liStudents[0].textContent); //to check the textContent, click the index 0 in the NodeList in console

//each list we put in var (for loop)
const students = [];
for (let i = 0; i < liStudents.length; i++) {
  students.push(liStudents[i].textContent);
}
console.log(students);

//we can use map too
const students2 = liStudents.map(s => s.textContent);
console.log(liStudents); //this will output nodelist, and there is no map function in nodelist (click in console) - it's not an array. Therefore the const students2 will output error. So, we got to change it to array by using spread operator. Go to 283
