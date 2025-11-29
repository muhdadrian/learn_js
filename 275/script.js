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

//to loop value and not object property
for (s in student) {
  console.log(student[s]);
}
