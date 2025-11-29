function testPromise() {
  return new Promise((resolve, reject) => {
    const time = 5000; //this will output uncaught means that the data is not captured. We use try and catch at 347
    if (time < 5000) {
      setTimeout(() => {
        resolve('done');
      }, time);
    } else {
      reject('too long!');
    }
  });
}

async function testAsync() {
  const test = await testPromise();
  console.log(test);
}

testAsync();

//we cannot use then in async function. What we execute is after the promise is resolved. Await means we assume the promise is resolved.
