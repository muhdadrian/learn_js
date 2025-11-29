//bus no 8 is ready to operate

var busTotal = 10;
var operatingBus = 6;

for (var busNo = 1; busNo <= busTotal; busNo++) {
  if (busNo <= operatingBus) {
    console.log('Bus No. ' + busNo + ' is operating well');
  } else if (busNo === 8) {
    console.log('Bus No. ' + busNo + ' is ready to operate');
  } else {
    console.log('Bus No. ' + busNo + ' is not operating');
  }
}

//  if (busNo <= 6) <- this is sandhika's answer
