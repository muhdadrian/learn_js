function a() {
  console.log('this is a');

  function b() {
    console.log('this is b');

    function c() {
      console.log('this is c');
    }
    c();
  }
  b();
}
a();

//copy & paste code above into JS visualizer to see the hoisting and stack execution
