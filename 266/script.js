//Destructuring Function Argument

const student1 = {
  name: 'Adrian Nandu',
  age: 41,
  email: 'adriannandu@mit.edu',
};

//we use destructuring
//the unpack happened in the argument
function printStudent({ name, age }) {
  return `Hello my name is ${name}, I am ${age} years old`;
}

console.log(printStudent(student1));

//the code above is useful when the object becomes more complex.
//go to 267
