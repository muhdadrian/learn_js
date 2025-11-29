/*
for..of:
- creates a loop iterating over iterable object

Iterable Object:
1. String
2. Array
3. Arguments / NodeList
4. TypedArray
5. Map
6. Set
7. User-defined Iterables
*/

//3. NodeList
//use to query in DOM
const liName = document.querySelectorAll('.name');
console.log(liName); //the output is in nodelist, not array, even there's array and content

//with new browser, we can loop nodelist by using forEach even forEach is just for array. In old browser, not support forEach
//liName.forEach(n => console.log(n.textContent));

//we can use 'for of', as nodelist is iterable object
for (n of liName) {
  console.log(n.innerHTML);
}
