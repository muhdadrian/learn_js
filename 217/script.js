//Example:

//the return value is function and we've learned this in closure
//the function greet below is a higher order function, as inside it, there's 'Return Value', which is a function
function greet(time) {
  return function (nama) {
    console.log(`Hello ${nama}, Good ${time}, have a nice day!`);
  };
}

let goodNight = greet('Night');
console.dir(goodNight('Adrian'));

/*
Question:
Why we use higher order function instead of normal function?
- abstraction - to make the code simple because by using function, we avoid difficulties
*/

/*
The bigger the program, the higher its complexity and more confusing to the programmer (eloquentjavascript.net)

- we need to separate the program into functions. If there's function inside funtion, it will be much simpler
*/
