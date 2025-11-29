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
console.log(promise2.then(() => console.log(promise2)));
console.log('ends');
