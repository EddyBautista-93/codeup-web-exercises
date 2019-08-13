"use strict";

//
var userInput = prompt("Enter a odd number between 0-50")

//
// for (oddNumber; oddNumber < 50; oddNumber += 3) {
//
//     console.log(oddNumber);
//
//     if (oddNumber === numberToStopAt) {
//         console.log('Skipping this number');
//
//         break;
//
//     }
// }
//

for (var i = 1; i < 50; i += 2) {

    if (i == userInput) {
        console.log("Skipping this number");
        continue

    }

    console.log('Here is a odd number: ' + i);
}

