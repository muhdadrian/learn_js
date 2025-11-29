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

//2. String Looping
//forEach cannot be used to loop string. It is for array looping only
//n var is liberal where you can use any name to represent each element in the string looping
const name = 'Adrian';
//for (const n of name) {
//console.log(n); //this will loop each char of the string
//}

//we try forEach (this will output error)
//name.forEach(n => console.log(n));
//forEach is not a method for the name, as the name is not array prototype
