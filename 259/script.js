//Destructuring Assingment/Variable:

//Destructuring Object:

const student = {
  id: 123,
  name: 'Adrian Nandu',
  age: 41,
  email: 'adriannandu@mit.edu',
};

//in id (the parameter), the object already been unpacked after it captured the student object sent from the console.log
function getIdStudent({ id }) {
  return id;
}

console.log(getIdStudent(student));
