"use strict";

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *

 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 */

var willContinue = confirm("Will you enter a number");

if (willContinue){

   var userInput = prompt("Would number would you like to enter?");
    var isNum = !isNaN(userInput);

    if(isNum) {
        var userNum = parseFloat(userInput);

        var isEven = userInput % 2 === 0;


        var isOdd = userInput % 2 === 1;
    } else {
        alert("That's not a number!")
    }




}






// confirm("Would you like to enter a number?");
// var num = +prompt("Put a number ");


// function isNumOddEven(num) {
//     if (num % 2 === 1){
//         return ("Your number is odd!");
//     } else if (num % 2 === 0) {
//         return ("Your number is even!")
//     }
// }
// // console.log(isNumOddEven("5"));
// function numPlus100(num) {
//     return ("Your number + 100 = " + (+num + 100));
// }
// // console.log(numPlus100(30));
// function isNumNegativeOrPositive(num) {
//     if (num < 0) {
//         return ("Your number is negative.")
//     } else if (num > 0) {
//         return ("Your number is positive")
//     }
// }
// // console.log(isNumNegativeOrPositive(3));
// var askForNum = confirm("Do you want to enter a number?");
// var num;
// if (askForNum) {
//     num = prompt ("Please enter a number:");
//     if (isNaN(num)) {
//         alert ("That is not a number!");
//     } else {
//         alert (isNumOddEven(num));
//         alert (numPlus100(num));
//         alert (isNumNegativeOrPositive(num));
//     }
// }else {
//     alert ("bye!")
// }


/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined above, if the color passed is not
 * one of the ones defined above, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color everytime the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];

    function analyzeColor(colors) {
        if (colors === 'blue') {
            return "blue is the color of the sky";
        } else if (colors === 'red') {
            return "Strawberries are red";
        } else if ( colors === 'cyan') {
            return "I don't know anything about cyan";
        } else {
            return "I don't Know that color."
        }
    }
//
console.log(analyzeColor('blue'));
console.log(analyzeColor('red'));
console.log(analyzeColor('cyan'));


/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message everytime you refresh the page
 */
// console.log(analyzeColor(randomColor));

/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */
//
// function analyzeColor(colors) {
//     switch (colors) {
//         case 'blue':
//             return "blue is the color of the sky";
//         case 'red':
//             return "Strawberries are red";
//         case 'cyan':
//             return "I don't know anything about cyan";
//         default:
//             return "I dont know that color";
//     }
// }
//     console.log(analyzeColor(randomColor));

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

//  var userInput = prompt("Enter your favorite color");
// function analyzeColor(colors) {
//     if (colors === 'blue') {
//         alert ("blue is the color of the sky");
//     } else if (colors === 'red') {
//         alert("Strawberries are red");
//     } else if ( colors === 'cyan') {
//         alert("I don't know anything about cyan");
//     } else {
//         alert("I don't Know that color.");
//     }
// }
//
// console.log(analyzeColor(userInput));

/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */
function calculateTotal(luckyNumber, price) {
    if( luckyNumber === 0 ) {
        return price;
    } else if ( luckyNumber === 1) {
        return ( price - (price * .10 ));
    } else if (luckyNumber === 2){
        return ( price - (price * .25 ));
    } else if ( luckyNumber === 3){
        return ( price - (price * .35 ));
    } else if ( luckyNumber === 4) {
        return ( price - (price * .50 ));
    } else {
        return (price - price);
    }
}

console.log(calculateTotal(4, 100));


/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
Generate a random number between 0 and 6
var luckyNumber = Math.floor(Math.random() * 6);
var price = prompt("What is your Bill?");

function calculateTotal(luckyNumber, price) {
    if( luckyNumber === 0 ) {
        alert("Your number was 0 , your bill is " + price);
    } else if ( luckyNumber === 1) {
        alert("Your number was 1, your bill of " + price + " is now " + " " + ( price - (price * .10 )));
    } else if (luckyNumber === 2){
        alert("Your number was 2, your bill of " + price + " is now " + " " + ( price - (price * .25 )));
    } else if ( luckyNumber === 3){
        alert("Your number was 3, your bill of " + price + " is now " + " " + ( price - (price * .35 )));
    } else if ( luckyNumber === 4) {
        alert("Your number was 4, your bill of " + price + " is now " + " " + ( price - (price * .50 )));
    } else {
        alert("Your number was 5, your bill of " + price + " is now " + " " + ( price - price));
    }
}

console.log(calculateTotal(luckyNumber, price));
