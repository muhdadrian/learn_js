var busTotal = 10;
var operatingBus = 6; //try 8
var busNo = 1;

for (busNo = 1; busNo <= busTotal; busNo++) {
  if (busNo <= operatingBus) {
    console.log('Bus No. ' + busNo + ' is operating well');
  } else {
    console.log('Bus No. ' + busNo + ' is not operating');
  }
}

//you forget the var inside the for (busNo = 1;) and no need to write var busNo = 1;
//check the correction in 18
