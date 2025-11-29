/*
Asynchronous Function:
Is a function that is working asynchronously (through event loop), which will return (implicit) promise as its return value, but the code writing is using synchronous(standard).

There are three things we must understand:
1. the function is working asynchronously
2. will return implicit promise
3. its writing is similar to synchronous function (normal or standard function)

@ an async function has await keyword inside it to stop the function execution temporarily, while waiting the promise is resolved. 
 */

//we make promise first by using only a parameter - resolve
const test = new Promise(resolve => resolve('done'));
console.log(test); //the promise is totally completed. To make it asynchronous go to 339
