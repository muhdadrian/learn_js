function testPromise() {
  return new Promise((resolve, reject) => {
    const time = 5000;
    if (time < 5000) {
      setTimeout(() => {
        resolve('done');
      }, time);
    } else {
      reject('too long!');
    }
  });
}

//if async and await we can use try and catch block. try for resolve and catch for reject
async function testAsync() {
  try {
    const test = await testPromise();
    console.log(test);
  } catch (err) {
    //console.log(err);//we can replace this with code at below
    console.error(err);
  }
}

testAsync();
