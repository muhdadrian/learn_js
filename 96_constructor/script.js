//Constructor

//it's similar to function declaration.
//constructor is specially to make object
//name function convention is first character is capital letter - to differentiate between constructor and function declaration

function Student(name, ID, email, faculty) {
  //var this = {};
  this.name = name;
  this.ID = ID;
  this.email = email;
  this.faculty = faculty;
  //return this;
}

var student = new Student(
  'Adrian Nandu',
  '820806',
  'adriannandu@mit.edu',
  'Software Engineering'
);
console.log(student);

//the difference between constructor and function declaration is the variable declaration (var this = {};) and return object (return this;).

//if you remove the new keyword in front of student, JS assumed that you are calling the object using function declaration.
