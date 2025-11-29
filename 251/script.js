//Destructuring Assingment/Variable:

//Array:
const intro = ['Hello', 'my', 'name is', 'Adrian Nandu'];

//Skip the one and two by deleting the one and two, but not the comma. The comma will skip the one and two
const [greet, , , name] = intro;
console.log(name);
