#! /usr/bin/env node

import inquirer from "inquirer";

// 1) Computer will generate a random number

// 2)user input for gusing number

// 3) campare user input with computer generate number and show result

const randomNumber = Math.floor(Math.random() * 6 + 1);


const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Please guess a number between 1 to 10: ",

    },
]);

if (answers.userGuessedNumber === randomNumber) {
    console.log("Congratulations! You got it right!");

} else {
    console.log("you guessed the wrong number");


}