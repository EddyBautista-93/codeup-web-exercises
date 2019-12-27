"use strict";

// increment loop for exercise one in a arrow function
const loopBy2 = () => {
    let i = 2;
    while (i < 70000){
        console.log(i);
        i = i * 2;
    }
};

console.log(loopBy2());

//Ice cream man sim made for class exercise
const iceCreamSimulator = () => {
let allCones = Math.floor(Math.random() * 50) + 50;
    console.log(`I currently have ${allCones} cones left`);
    do{
        let conesSold = Math.floor(Math.random() * 5) + 1;
        if(conesSold > allCones){
            console.log(`Sorry I only have ${allCones}, I dont have enough`);
        } else{
             allCones = allCones - conesSold;
            console.log(`I sold ${conesSold} cones, i have ${allCones} left`);
        }
    } while (allCones > 0);
    console.log("I am all out of cones")
};

console.log(iceCreamSimulator());

