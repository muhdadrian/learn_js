function testPromise() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('done');
    }, 2000);
  });
}

function testAsync() {
  const test = testPromise();
  console.log(test);
}

testAsync(); //this will be pending. Add async keyword. Go to 344
