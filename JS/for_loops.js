"use strict";

const showMultiplacation = (num) => {
    for(let i = 1; i <= 10; i++){
        console.log(`${num} X ${i} = ${i * num}`);
    }
};

showMultiplacation(7);

console.log("=========================================");

const evenOrOddGenerator = () => {
    for (let i = 1; i <= 10; i++){
        let randomNumber = Math.floor(Math.random() * 181) + 20;
        if(randomNumber % 2 === 0){
            console.log(`${randomNumber} is Even`);
        } else {
            console.log(`${randomNumber} is Odd`);
        }
    }
};

evenOrOddGenerator();

console.log("=========================================");

const numberPyramid9 = () => {
    let output = "";
    for(let i = 1; i <= 9; i++){
    output = output + i;
    console.log(output);
    }
};
numberPyramid9();

console.log("=========================================");

const countdownBy5 = () => {
    for(let i = 100; i >=0; i -= 5){
        console.log(i);
    }
};
countdownBy5();
