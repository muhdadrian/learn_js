//filtering
//we want to do filtering in parameter

function filterBy(type, ...values) {
  return values.filter(v => typeof v === type); //the good thing about filter is, it will display array
}

console.log(filterBy('number', 1, 2, 'Adrian', false, 10, true, 'Hafizah')); //you can change the 'number' to 'string' or 'boolean' to look for other data type
