var busTotal = 10;
var operatingBus = 6; //try 8

for (var busNo = 1; busNo <= busTotal; busNo++) {
  if (busNo <= operatingBus) {
    console.log('Bus No. ' + busNo + ' is operating well');
  } else {
    console.log('Bus No. ' + busNo + ' is not operating');
  }
}

//  if (busNo <= 6) <- this is sandhika's answer
