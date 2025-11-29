//Destructuring Assingment/Variable:

//Destructuring Object:

//Take field in object, after being sent as parameter for function
const student = {
  id: 123,
  name: 'Adrian Nandu',
  age: 41,
  email: 'adriannandu@mit.edu',
};

//we can get student id above by using function
//this function will that student object in parameter
function getIdStudent(student) {
  return student.id;
}

console.log(getIdStudent(student));

//the code above is normal where object passing object
//to destructure go to 259
