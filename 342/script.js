function testPromise() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('done');
    }, 2000);
  });
}

const test = testPromise();
test.then(() => console.log(test));

//to use asycn and await go to 343
