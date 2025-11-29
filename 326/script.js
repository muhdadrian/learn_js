/*
Promise:
- it's an object to represent success or failure of an asynchronous event in the future
- states (fulfilled / rejected / pending)
- callback (resolve / reject / finally)
- action (then / catch) 
*/

//example of promise that not fulfilled directly - but we have to wait the process. Normally, we have to wait due to overload data or complex process

let fulfill = true;
const promise2 = new Promise((resolve, reject) => {
  if (fulfill) {
    setTimeout(() => {
      resolve('Fulfilled after few seconds!');
    }, 2000);
  } else {
    setTimeout(() => {
      resolve('Not fulfilled after few seconds!');
    }, 2000);
  }
});

console.log('start');
promise2
  .finally(() => console.log('done waiting!'))
  .then(response => console.log('OK! : ' + response))
  .catch(response => console.log('NOT OK! : ' + response)); //
console.log('ends');

//finally is executed when either then or catch is completely executed
//when the promise is not pending finally 1st will be executed, then either then or catch will be executed
//whatever the content inside let fulfill var above, finally will be executed 1st
//finally is normally used for loading animation
//when promise is executed the loading animation start, when finally is executed, the animation ends.
