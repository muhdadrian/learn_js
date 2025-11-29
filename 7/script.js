var repeat = true;
while (repeat) {
  console.log('hello world');
  repeat = confirm('more?');
}

//repeat = confirm === true (bool value) if we click OK
//repeat = confirm === false (bool value) if we click Cancel
