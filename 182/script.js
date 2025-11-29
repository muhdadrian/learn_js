function init() {
  let nama = 'Adrian';
  function displayNama() {
    let nama = 'Hafizah'; //the inner function will not become closure, as local variable is used
    console.log(nama);
  }
  displayNama();
}
init();

//if we delete let nama = 'Hafizah' in the inner function, it will become closure
