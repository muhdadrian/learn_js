//7. Map
//Map is like forEach, but much better as in map, it will return array, but forEach not

var number = [1, 2, 3, 4, 5, 6, 7, 8];

// number.forEach(function (e) {
//   console.log(e);
// });

//the result foreach and map below is the same
// number.map(function (e) {
//   console.log(e);
// });

//map will return array value
//if we change the map below to forEach, it will output error
var number2 = number.map(function (e) {
  return e * 2;
});

console.log(number2.join(' - '));
