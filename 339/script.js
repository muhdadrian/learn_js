/*
Asynchronous Function:
Is a function that is working asynchronously (through event loop), which will return (implicit) promise as its return value, but the code writing is using synchronous(standard).

There are three things we must understand:
1. the function is working asynchronously
2. will return implicit promise
3. its writing is similar to synchronous function (normal or standard function)

@ an async function has await keyword inside it to stop the function execution temporarily, while waiting the promise is resolved. 
 */

const test = new Promise(resolve => {
  setTimeout(() => {
    resolve('done');
  }, 2000);
});
console.log(test); //The promise is pending because we do it in synchronous by using console.log directly. To make it wait for 2 seconds go to 340
