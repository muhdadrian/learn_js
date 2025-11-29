var passengers = [];
var addPassengers = function (passengerName, passengers) {
  passengers.push(passengerName);
  return passengers;
};

addPassengers('John', passengers);
addPassengers('Jane', passengers);

console.log(passengers);

/*
var passengers = [];: This line initializes an empty array called passengers. Arrays in JavaScript are used to store multiple values in a single variable.

var addPassengers = function(passengerName, passengers) {: This line defines a function named addPassengers. The function takes two parameters: passengerName and passengers.

passengers.push(passengerName);: Inside the addPassengers function, this line uses the push method to add the passengerName to the end of the passengers array. The push method is a built-in JavaScript method for adding elements to the end of an array.

return passengers;: After adding the new passenger, the function returns the modified passengers array. This is done so that you can capture the updated array when you call the function.

Here's an example of how you might use this code:

// Add passengers using the addPassengers function
addPassengers("John", passengers);
addPassengers("Jane", passengers);

// The passengers array now contains ["John", "Jane"]
console.log(passengers);

In this example, you call the addPassengers function twice, adding "John" and "Jane" to the passengers array. The console.log(passengers) statement would output ["John", "Jane"].
*/
