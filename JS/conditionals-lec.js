"use strict";

// var raining = true;
//
// if(raining)
//     return "weather icon";
// }
//
//
// var life = 0;
//
// if(life){
//     return "game over";
// }
//
//
// var isRainy = true;
//
// if(isRainy) {
//     alert("it's raining");
// }


// var doorLocked = confirm("is door locked?")
//
// if (doorLocked) {
//     alert("Door is locked")
// } else {
//     alert("Door is not locked");
// }

//
// var pizzaPreference = prompt("What kind of pizza do you like?");
//
// if (pizzaPreference === "pineapple and hot sauce") {
//     alert("What a coincidence, that's my favorite!");
// } else if (pizzaPreference === "cheese") {
//     alert("Just plain cheese? Okay...");
// } else {
//     alert(pizzaPreference + " isn't my favorite, but let's order some!");
// }
// var input = prompt("What color is the light");
//
// console.log(trafficLight(input));
//
// function trafficLight(input) {
//     if (trafficLight === "green") {
//     return alert("Go");
// } else if ( trafficLight === "yellow"){
//         return alert("Caution");
//     } else (trafficLight === "red"){
//     {
//         return alert("stop");
//     }
// }







// (weather === "rainy") ?  showRainIcon(): showGenericIcon() ;


// 'use strict';
//
// var success = true;
//
// if (success) {
//     message = "Operation was successful.";
// } else {
//     message = "Oops, something went wrong.";
// }
//

// var message = (success) ? "Operation was successful." : "Oops, something went wrong.";
// console.log(message)

// var pizzaPreference = prompt("What kind of pizza do you like?");
//
// switch(pizzaPreference) {
//     case "pineapple and hot sauce":
//         alert("What a coincidence, that's my favorite!");
//         break;
//     case "cheese":
//         alert("Just plain cheese? Okay...");
//         break;
//     default:
//         alert(pizzaPreference + " isn't my favorite, but let's order some!");
//         break;
// }

// function evaluateTrafficLight(lightColor) {
//     if( lightColor === "Green") {
//         return "Keep driving, go go go";
//     } else if ( lightColor === "yellow") {
//         return "Slow Down";
//     } else if ( lightColor === "red") {
//         return "Stop HammerTime";
//     } else {
//         return "proceed with caution"
//     }
// }


function trafficLight(lightColor) {
    switch (lightColor) {
        case "green":
            return "GO GO GO";
        case "yellow":
            return "Slow Down";
        case "red":
            return "stop";
        default:
            return "Proceed with caution";

    }
}

console.log(trafficLight("hello"))
