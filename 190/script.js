function init() {
  //shorten by putting the return in front of function and make the function anonymous function
  return function (nama) {
    console.log(nama);
  };
}
init();

let callNama = init();
callNama('Adrian');
callNama('Nandu'); //we can call different name. This is also one of closure examples

/*
Why we use closure?
- to make function factories (MDN)
- to make private method (MDN)
*/
