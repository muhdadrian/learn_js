//Destructuring Function Argument
//we use student1 below, as we might have many students

const student1 = {
  name: 'Adrian Nandu',
  age: 41,
  email: 'adriannandu@mit.edu',
};

//this is function declaration
function printStudent(name, age) {
  return `Hello my name is ${name}, I am ${age} years old`;
}

console.log(printStudent(student1.name, student1.age));

//other option by passing object. Go to 265
