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

//we use destructuring
//the gred.test is complicated as there's dot to fetch the property. The solution is we destructure more the gred in the argument (nested destructuring). Go to 268
function printStudent({ name, age, gred }) {
  return `Hello my name is ${name}, I am ${age} years old, and my text gred is ${gred.test}`;
}

console.log(printStudent(student1));
