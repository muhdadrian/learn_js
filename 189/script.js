function init() {
  //let nama = 'Adrian';

  //give parameter to the function
  function displayNama(nama) {
    console.log(nama);
  }
  return displayNama;
}
init();

let callNama = init();
callNama('Adrian'); //to execute this, we need parameter. You can change other name. This is one of the usage in closure

//we can shorten the function above. Go to 190
