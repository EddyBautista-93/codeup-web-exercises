"use strict";
console.log("Hello from external JavaScript");

alert("Welcome to my website!");

var userInput = prompt('What is your favorite color?');

alert("Great,"+ userInput + "" + " is my favorite color too!");
// console.log('Great'+ userInput + " " + ' is my favorite color too!');

//use plus opp
//
// var rentalCost = 3;
// var littleMermaidDaysRented = prompt("How many days did you rent The Little Mermaid for?");
// var brotherBearDaysRented = prompt("How many days did you rent Brother Bear for?");
// var herculesDaysRented = prompt("How many days did you rent Hercules for?");
//
// var totalRentalCost = Number(littleMermaidDaysRented) + Number(brotherBearDaysRented) +  Number(herculesDaysRented);
// alert("Your total will be $" + totalRentalCost * rentalCost);
//
// var facebookPay = Number(prompt("how much did Facebook Pay you?"));
// var googlePay = prompt("how much did Google Pay you?");
// var amazonPay = prompt("how much did Amazon Pay you?");
//
// var facebookHoursWorked = prompt("How many Hours did you work at Facebook");
// var googleHoursWorked = prompt("How many Hours did you work at Google");
// var amazonHoursWorked = prompt("How many Hours did you work at Amazon");
//
// var totalPay = Number(facebookPay) + Number(googlePay) + Number(amazonPay);
// var totalHour = Number(facebookHoursWorked) + Number(googleHoursWorked) + Number(amazonHoursWorked);
//
// alert("Total Hours worked: " + totalHour + " Total Pay: " + totalPay)

    //
    // var classIsNotFull = confirm("Is the Class full?");
    // console.log (classIsNotFull);
    // var classScheduleDoesNotConflict = confirm("Does your schedule fit?");
    // console.log(classScheduleDoesNotConflict);
    // var studentEnrolled = classScheduleDoesNotConflict && classIsNotFull;
    // alert("You Made it in");



var numberOfItems = prompt("How many items do you have");
var offerIsValid = confirm("Is your offer valid?");
var isPremiumMember = confirm("Are you A Premium Member?");
var productDiscountApplied = offerIsValid && (isPremiumMember || numberOfItems > 2);

alert("product discount apllirf " + productDiscountApplied);
