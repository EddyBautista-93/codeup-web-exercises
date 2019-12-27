"use strict";

const breakAndContinue = () => {
    let numberSkipped = prompt('Enter a odd number to skip between 1 - 100!');
    let numberSkippedConverted = parseInt(numberSkipped);
    for(let i = 1; i < 50; i += 2){
        if(i === numberSkippedConverted){
            console.log(`Yikes, Skipping ${numberSkippedConverted}`);
            continue
        }
        console.log(`Here is an off number: ${i}`)
    }
};

breakAndContinue();

