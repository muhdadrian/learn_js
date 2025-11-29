//function factories

function greet(time) {
  return function (nama) {
    console.log(`Hello ${nama}, Good ${time}, have a nice day`);
  };
}

//the three function greet('Morning'), greet('Afternoon') and greet('Night') below are called factory function
let morning = greet('Morning');
let afternoon = greet('Afternoon');
let night = greet('Night');

console.dir(night);
//inside the scope there's closure - night, which is using lexical scope of time (parameter in function greet), which content is night
//even we are yet executing the night in console.log, the function greet is already being executed by filling the data - time: 'Night'. It already partly executed. It's only waiting the name data: console.dir(night('Adrian'));

//for private method go to 193
