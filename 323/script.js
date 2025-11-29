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
console.log(promise2); //we call the promise but it will be pending as we are yet writing then after it. Go to 324
console.log('ends');
