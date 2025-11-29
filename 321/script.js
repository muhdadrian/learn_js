/*
Promise:
- it's an object to represent success or failure of an asynchronous event in the future
- states (fulfilled / rejected / pending)
- callback (resolve / reject / finally)
- action (then / catch) 
*/

//Normally, we use promise to request for an API
//The code below is only for example
//we make object by using new keyword, but it's special object (promise object)
let fulfill = true;
const promise1 = new Promise((resolve, reject) => {
  if (fulfill) {
    resolve('Promise has been fulfilled!');
  } else {
    reject('Unfulfilled promise!');
  }
});

console.log(promise1);
//you can also type promise1 in console
