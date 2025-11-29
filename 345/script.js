function testPromise() {
  return new Promise((resolve, reject) => {
    const time = 3000; //try to change to 5000 to make it fail. It will be rejected on the spot
    if (time < 5000) {
      setTimeout(() => {
        resolve('done');
      }, time);
    } else {
      reject('too long!');
    }
  });
}

const test = testPromise();
test.then(() => console.log(test)).catch(() => console.log(test));

//to use async and await go to 346
