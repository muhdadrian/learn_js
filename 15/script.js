var busTotal = 10;
var operatingBus = 6; //try 8
var busNo = 1;

while (busNo <= operatingBus) {
  console.log('Bus No. ' + busNo + ' is operating well');
  busNo++;
}

// for (busNo = 7; busNo <= busTotal; busNo++) {
//   console.log('Bus No. ' + busNo + ' is not operating');
// }

//Better code for for loop above:
for (busNo = operatingBus + 1; busNo <= busTotal; busNo++) {
  console.log('Bus No. ' + busNo + ' is not operating');
}
