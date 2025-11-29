/*
prevent default is a method in object event in e -> function(e). Its purpose is to prevent default action by an element

In HTML:
we replace <span class="close">x</span> with <a href="" class="close">x</a>

In CSS:
.card a {
  text-decoration: none;
}

when we click the x button it supposed to move to its href="" by default. But, we do not fill the href, so it will return to its own page.

Now, how to prevent that default action? We add preventDefault method
*/

const close = document.querySelectorAll('.close');

close.forEach(function (el) {
  el.addEventListener('click', function (e) {
    e.target.parentElement.style.display = 'none';
    e.preventDefault();
  });
});

/*
el represents each individual element with the class .close in the NodeList returned by document.querySelectorAll('.close').

Here's how it works:

@ document.querySelectorAll('.close') selects all elements with the class .close and returns a NodeList (a collection of DOM elements).

@ forEach(function (el) { ... }) iterates over each element in this NodeList.

@ el is the variable that holds the reference to each individual element in the list as the loop iterates. It allows you to attach event listeners to each .close element individually.

In simpler terms, el is the element that you're working with in each iteration of the loop.
*/

/*
e (short for "event") represents the event object passed to the event handler function. When an event occurs (in this case, a click on a .close element), the browser creates an event object that contains information about the event, such as:

@ e.target: The element that triggered the event (the one that was clicked).

@ e.preventDefault(): A method that prevents the default action associated with the event (such as following a link when a link is clicked).

@ e.type: The type of the event (e.g., 'click', 'mouseover', etc.).

In this case, e is passed to the function that handles the click event on the .close element. You use e.target to get the element that was clicked and e.preventDefault() to prevent the default behavior.
*/
