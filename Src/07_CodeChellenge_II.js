/*********   CODE CHALLENGE 02 **********/

/*
Geben über eine Prompt-Anforderung einen Namen ein
Geben über eine Prompt-Anforderung ein Alter ein

Geben Sie in Abhängigkeit vom angegebenen Alter 
folgende Getränkeauswahl in die Konsole aus :

Alter 0-5 // Milch  --> age > 0 AND age < 6
Alter 6-12 // Saft
Alter 13-17 // Cola
18 + // Wein

-->zB: "Max trinkt Cola."

/* Getränke-Challenge */


/******* Vorüberlegung / SWITCH|CASE 2 *******/

// const cond = true;
// const value = 10;

// switch (cond) {
//     case (value == 1):
//         console.log("Value hat den Wert 1.");
//         break;
//     case (value == 2):
//         console.log("Value hat den Wert 2.");
//         break;
//     default:
//         console.log("Value hat einen anderen Wert.");
//         break;
// }

const prompt = require('prompt-sync')({sigint: true});
const firstName = prompt("Bitte Namen eingeben: ");
const age =  parseInt(prompt("Bitte Alter eingeben: ")); // "2" --> 2

mapBeveragesToAge(firstName,age);


function mapBeveragesToAge(name,age) {

    switch (true) {
        case (age >= 0) && (age <= 5) :
            output(firstName + " trinkt Milch.");
            break;
        case (age >= 6) && (age <= 12):
            output(firstName + " trinkt Saft.");
            break;
        case (age >= 13) && (age <= 17):
            output(firstName + " trinkt Cola.");
            break;
        case (age >= 18) && (age <= 130):
            output(firstName + " trinkt Wein.");
            break;   
        default:
            output("Bitte Tee trinken!");   
            break;
    }
    
}

function output(outputData) {
    console.log(outputData);
 }


