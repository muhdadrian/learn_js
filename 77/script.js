//Method in array

//2. push & pop - push to add array element in last of the array | pop does conversely (delete last element)
//in push you can add more than one element, but in pop only one element
var arr = ['Adrian', 'Hafizah', 'children'];
arr.push('cucu', 'cicit');
console.log(arr.join(' - '));

arr.pop();
arr.pop(); //2nd pop
console.log(arr.join(' - '));
