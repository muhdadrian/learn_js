/*
event bubbling:
when we give event to close and give event to card - if we click the x button, the pop up event in card will occur first before the event in close

If we add another event in container, it will occur first before the card and close until it explode after the top event

How to stop the bubble? Go to 150
*/

const close = document.querySelectorAll('.close');

close.forEach(function (el) {
  el.addEventListener('click', function (e) {
    e.target.parentElement.style.display = 'none';
    e.preventDefault();
  });
});

const cards = document.querySelectorAll('.card');
cards.forEach(function (card) {
  card.addEventListener('click', function (e) {
    alert('ok');
  });
});
