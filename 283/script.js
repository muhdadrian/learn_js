//Another example
const liStudents = document.querySelectorAll('li');
//console.log(liStudents); //this will output NodeList where we can loop
//console.log(liStudents[0].textContent); //to check the textContent, click the index 0 in the NodeList in console

//we can use map too
const students = [...liStudents].map(s => s.textContent);
console.log(students);
