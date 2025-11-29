function testPromise() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('done');
    }, 2000);
  });
}

async function testAsync() {
  //this async will tell JS in this function there will asynchronous script. JS then will look for await keyword
  const test = await testPromise(); //before this is executed, wait first until the promise is resolved
  console.log(test);
}

testAsync();

//when we use promise there are resolve and reject. Resolve can be captured by using then method. If fail, the reject will be captured by catch method.
//we use then and catch first at 345
