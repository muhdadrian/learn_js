/*
Promise:
- it's an object to represent success or failure of an asynchronous event in the future
- states (fulfilled / rejected / pending)
- callback (resolve / reject / finally)
- action (then / catch) 
*/

let fulfill = true; //you test with false
const promise1 = new Promise((resolve, reject) => {
  if (fulfill) {
    resolve('Promise has been fulfilled!');
  } else {
    reject('Unfulfilled promise!');
  }
});

//to capture resolve and reject, we console log in then and catch method
//the response name is liberal like movies name in ajax callback (jQuery)

promise1
  .then(response => console.log('OK! : ' + response)) //whatever the result in resolve function above we execute in arrow function, while taking the response value. If fail, we chain another function
  .catch(response => console.log('NOT OK! : ' + response));

//another example go to 323
