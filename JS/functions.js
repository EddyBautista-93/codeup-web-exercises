

/**
 * TODO:
 * Create a function called 'sayHello' that takes a parameter 'name'.
 * When called, the function should return a message that says hello to the passed in name.
 *
 * Example
 * > sayHello("codeup") // returns "Hello, codeup!"
 */

       // ES5 way of making a function
//     function sayHello(name) {
//     return "hello" + " " + name + "!";
// }
//     console.log(sayHello("Codeup"));

    // es6 arrow function with template literals

    const sayHello = (name) => `Hello, ${name}!`;

/**
 * TODO:
 * Call the function 'sayHello' and pass your name as a string literal argument.
 * Store the result of the function call in a variable named 'helloMessage'.
 *
 * console.log 'helloMessage' to check your work
 */

    let helloMessage = sayHello("eddy");
    console.log(helloMessage);
/**
 * TODO:
 * Store your name as a string in a variable named 'myName', and pass that
 * variable to the 'sayHello' function. You should see the same output in the
 * console.
 */

    // function is sayHello
    // var myName = "eddy"

    // Oh old Eddy, you have come a long way child
//     function sayHello(str){
//         var myName = str;
//         return myName;
// }
//     console.log(sayHello("eddy"));

    // var myName = "eddy:";
    // console.log(myName);

    let name = 'Eddy';
    console.log(sayHello(name));




// Don't modify the following line, it generates a random number between 1 and 3
// and stores it in a variable named random
var random = Math.floor((Math.random() * 3) + 1);

/**
 * TODO:
 * Create a function called 'isTwo' that takes a number as a parameter.
 * The function should return a boolean value based on whether or not the passed
 * number is the number 2.
 *
 * Example
 *  isTwo(1) // returns false
 *  isTwo(2) // returns true
 *  isTwo(3) // returns false
 *
 * Call the function 'isTwo' passing the variable 'random' as a argument.
 *
 * console.log *outside of the function* to check your work (you should see a
 * different result everytime you refresh the page if you are using the random
 * number)
 */
//output is number


    //Cleaning that old es5
//     function isTwo(num) {
//     return num === 2;
//      }

    //es6
    const isTwo = (number) => number === 2;

    console.log(isTwo(random));

console.log(isTwo(1));
console.log(isTwo(2));
console.log(isTwo(3));
/**
 * TODO:
 * Create a function named 'calculateTip' to calculate a tip on a bill at a
 * restaurant. The function should accept a tip percentage and the total of the
 * bill, and return the amount to tip
 *
 * Examples:
 * > calculateTip(0.20, 20) // returns 4
 * > calculateTip(0.25, 25.50) // returns 6.37
 * > calculateTip(0.15, 33.42) // returns 5.013
 */
//es5 tip calc

// function calculateTip(num1, num2){
//  return num * num2:
// }
//
// console.log(calculateTip(0.15, 10.00))

    //es6
const calculateTip = (tipPercent, amount) => tipPercent * amount;

// console.log(calculateTip(0.20, 20),'4');
// console.log(calculateTip(0.25, 25.50),'6.37');
// console.log(calculateTip(0.15, 33.42),'5.013');



/**
 * TODO:
 * Use prompt and alert in combination with your calculateTip function to
 * prompt the user for the bill total and a percentage they would like to tip,
 * then display the dollar amount they should tip
 */
    //the old way
    // var totalBill = prompt("How much is your bill");
    // var tipPrecentage =prompt("How much do you want to tip");
    //

    //es6
    let totalBill = prompt("Enter thr total amount of your bill");
    let tipPrecentage = prompt("What percent would you like to tip?");
    const tipAmount = parseInt(calculateTip(totalBill,tipPrecentage));
    let stringToNum = parseInt(totalBill);
    console.log(tipAmount);
    alert("Your total with tip is " + (tipAmount + stringToNum));






// what was i doing here?!?
// function formatNumToCurrency(){
//     return "$" + num.toFixed(2);
// }
//
// alert("Your total tip is $" + formatNumToCurrency(totalBill, tipPrecentage));
//


/**
 * TODO:
 * Create a function named `applyDiscount`. This function should accept a price
 * (before a discount is applied), and a discount percentage (a number between 0
 * and 1). It should return the result of applying the discount to the original
 * price.
 *
 * Example:
 * > var originalPrice = 100;
 * > var dicountPercent = .2; // 20%
 * > applyDiscount(originalPrice, dicountPercent) // 80
 *
 * > applyDiscount(45.99, 0.12) // 40.4712
 */
// function applyDiscount(originalPrice, discountPercent) {
//     return originalPrice-(originalPrice * discountPercent);

// }
// console.log(applyDiscount(100, .2))



