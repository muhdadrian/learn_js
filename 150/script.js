/*
click the x button first.
Refresh and click the card to pop out the alert 

But, the code below still has its weakness:
If you right click, inspect. In elements, you right click and Edit as HMTL to copy and paste fariq yusuf card (make another new card as real-time in browser not in script). The newly created card has no addEventLister and will not disappear when its x button is clicked. Go to 151 for solution.
 */

const close = document.querySelectorAll('.close');

close.forEach(function (el) {
  el.addEventListener('click', function (e) {
    e.target.parentElement.style.display = 'none';
    e.preventDefault();
    e.stopPropagation(); //to stop the bubble
  });
});

const cards = document.querySelectorAll('.card');
cards.forEach(function (card) {
  card.addEventListener('click', function (e) {
    alert('ok');
  });
});
