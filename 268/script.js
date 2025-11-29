//Destructuring Function Argument

const student1 = {
  name: 'Adrian Nandu',
  age: 41,
  email: 'adriannandu@mit.edu',
  gred: {
    assignment: 80,
    quiz: 85,
    test: 75,
  },
};

//unpack the gred in the argument
function printStudent({ name, age, gred: { assignment, quiz, test } }) {
  return `Hello my name is ${name}, I am ${age} years old, and my text gred is ${test}`;
}

console.log(printStudent(student1));
