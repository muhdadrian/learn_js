//8b. sort

//be careful if there are 10, 20 in the element as they are sorted according to their first numbers/characters like below:

/*
var number = [4, 2, 10, 3, 1, 5, 8, 20, 6, 7];
number.sort();
console.log(number.join(' - '));
*/

//to sort them correctly use function to compare the number

//sorted correctly at below:
var number = [4, 2, 10, 3, 1, 5, 8, 20, 6, 7];
number.sort(function (a, b) {
  return a - b;
});
console.log(number.join(' - '));

/*
Let's visualize how the sorting algorithm works with a simplified example of the array [4, 2, 10, 3] using the provided sort function:

Original array: [4, 2, 10, 3]

First Pass:

Compare 4 and 2 (result is positive, swap): [2, 4, 10, 3]
Compare 4 and 10 (result is negative, no swap): [2, 4, 10, 3]
Compare 10 and 3 (result is positive, swap): [2, 4, 3, 10]
After the first pass: [2, 4, 3, 10]

Second Pass:

Compare 2 and 4 (result is negative, no swap): [2, 4, 3, 10]
Compare 4 and 3 (result is positive, swap): [2, 3, 4, 10]
After the second pass: [2, 3, 4, 10]

Third Pass:

Compare 2 and 3 (result is negative, no swap): [2, 3, 4, 10]
After the third pass: [2, 3, 4, 10]

No more swaps are needed, so the array is now sorted.

So, the sort function works by repeatedly comparing pairs of adjacent elements in the array and swapping them if they are in the wrong order. This process continues until the entire array is sorted. The comparison function (a - b in this case) determines the direction of the sorting.
*/
