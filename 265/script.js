//Destructuring Function Argument
//we use student1 below, as we might have many students

const student1 = {
  name: 'Adrian Nandu',
  age: 41,
  email: 'adriannandu@mit.edu',
};

//you unpack in the return
function printStudent(student) {
  return `Hello my name is ${student.name}, I am ${student.age} years old`;
}

console.log(printStudent(student1));

//to use destructuring, go to 266
