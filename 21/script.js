//bus no 8 and 10 are ready to operate

var busTotal = 10;
var operatingBus = 6;

for (var busNo = 1; busNo <= busTotal; busNo++) {
  if (busNo <= 6) {
    console.log('Bus No. ' + busNo + ' is operating well');
  } else if (busNo === 8 || busNo === 10) {
    console.log('Bus No. ' + busNo + ' is ready to operate');
  } else {
    console.log('Bus No. ' + busNo + ' is not operating');
  }
}

//(busNo === 8 && busNo === 10) -> there will be no two numbers in the same variable with &&

/*

The condition busNo === 8 || busNo === 10 means "if the bus number is 8 OR the bus number is 10". It checks if the bus number is either 8 or 10. This is because the bus number cannot be both 8 and 10 at the same time.

If you use busNo === 8 && busNo === 10 in the else if condition, it would mean "if the bus number is 8 AND the bus number is 10". This condition would never be true because a single number cannot be both 8 and 10 simultaneously. Therefore, using && (logical AND) in this case wouldn't make sense because it's impossible for busNo to simultaneously equal both 8 and 10.

That's why || (logical OR) is the correct choice for checking if busNo is either 8 or 10.
*/
