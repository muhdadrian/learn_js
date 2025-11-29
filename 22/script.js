//bus no 5, 8 and 10 are ready to operate

var busTotal = 10;
var operatingBus = 6;

for (var busNo = 1; busNo <= busTotal; busNo++) {
  if (busNo <= 4 || busNo === 6) {
    console.log('Bus No. ' + busNo + ' is operating well');
  } else if (busNo === 5 || busNo === 8 || busNo === 10) {
    console.log('Bus No. ' + busNo + ' is ready to operate');
  } else {
    console.log('Bus No. ' + busNo + ' is not operating');
  }
}

//sandhika's answer go to 23
