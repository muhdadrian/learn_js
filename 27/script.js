var item = prompt(
  'enter healthy food / drink items : \n (for e.g: rice, meat, milk, burger, softdrink)'
);

switch (item) {
  case 'rice':
  case 'meat':
  case 'milk':
    alert('healthy food / drink');
    break;
  case 'burger':
  case 'softdrink':
    alert('UNhealthy food / drink');
    break;
  default:
    alert('you enter wrong item of food / drink');
    break;
}
