//function declaration

function studentObject(name, ID, email, faculty) {
  var student = {}; //object declaration
  student.name = name;
  student.ID = ID;
  student.email = email;
  student.faculty = faculty;
  return student; //return the object
  //we fill the object with properties by using the argument in function
}

var student = studentObject(
  'Adrian Nandu',
  '060882',
  'adriannandu@mit.edu',
  'Software Engineering'
);

var student2 = studentObject(
  'Hafizah Hamran',
  '900314',
  'hafizahhamran@utim.edu',
  'Islamic Finance'
);

console.log(student);
console.log(student2);

//function declaration is simpler than literal as we do the declaration once and then we do object repeatedly
