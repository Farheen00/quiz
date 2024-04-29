#! /usr/bin/env node
import inquirer from "inquirer";
console.log("WELCOME TO DAILY QUIZ APPLICATION");
let points = 0;
let answers = await inquirer.prompt([
    {
        name: "questionOne",
        type: "list",
        message: "How many days in a week?",
        choices: ["4", "6", "3", "7"]
    },
    {
        name: "questionTwo",
        type: "list",
        message: "How many months in a year?",
        choices: ["10", "12", "8", "6"]
    },
    {
        name: "questionThree",
        type: "list",
        message: "How many hours in a day?",
        choices: ["12", "15", "20", "24"]
    },
    {
        name: "questionFour",
        type: "list",
        message: "How many minutes in an hour?",
        choices: ["60", "50", "100", "120"]
    },
    {
        name: "questionFive",
        type: "list",
        message: "How many prayers in a day?",
        choices: ["4", "6", "5", "10"]
    }
]);
if (answers.questionOne == "7") {
    console.log("Correct Answer!");
    points++;
}
else {
    console.log("Incorrect Answer");
}
;
if (answers.questionTwo == "12") {
    console.log("Correct Answer!");
    points++;
}
else {
    console.log("Incorrect Answer");
}
;
if (answers.questionThree == "24") {
    console.log("Correct Answer!");
    points++;
}
else {
    console.log("Incorrect Answer");
}
;
if (answers.questionFour == "60") {
    console.log("Correct Answer!");
    points++;
}
else {
    console.log("Incorrect Answer");
}
;
if (answers.questionFive == "5") {
    console.log("Correct Answer!");
    points++;
}
else {
    console.log("Incorrect Answer");
}
;
console.log(`Your score is: ${points}`);
console.log("THE END");
