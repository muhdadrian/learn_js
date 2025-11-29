//Method in Array

//4. splice
var arr = ['Adrian', 'Hafizah', 'children'];
//splice(earlyIndex, toDelete, newElement, newElement2, ...)

//arr.splice(2, 0, 'Fatih', 'Fariq'); //start at 2, 0(nothing to delete, addNewElement (Fatih), addNewElement (Fariq))

arr.splice(1, 2, 'Fatih', 'Fariq'); //start at index 1,delete 2 elements (Hafizah and children) and add another two new elements (Fatih and Fariq)
console.log(arr.join(' - '));
