/*
for..in:
- creates a loop only iterating over enumerable
- the enumerable means property in object
- previosly, the iterable has no object, as object can be looped its contents by using for in
*/

//Object Literal
const student = {
  name: 'Adrian',
  age: 41,
  email: 'adriannandu@gmail.com',
};

/*
//we cannot loop object above by using for of
for (s of student) {
  console.log(s);
}
//for of only for array
*/

//for in
for (s in student) {
  console.log(s);
}
//for in loops the enumerable: name, age and email

//the point is: to loop property in object, use for in, and to loop array and other iterable objects, use for of
