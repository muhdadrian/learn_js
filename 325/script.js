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
//console.log(promise2.then(() => console.log(promise2)));

//we'll never see the pending if we write like below:
promise2
  .then(response => console.log('OK! : ' + response))
  .catch(response => console.log('NOT OK! : ' + response)); //the pending is not seen as what is being executed is inside it
//if we use the method in 324, we can see the process
console.log('ends');

//we can add finally method in 326
