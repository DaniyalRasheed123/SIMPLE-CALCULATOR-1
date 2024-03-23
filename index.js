#! /usr/bin/env node
import inquirer from "inquirer";
const answere = await inquirer.prompt([
    { message: "Enter your first number", type: "number", name: "firstNumber" },
    { message: "Enter your second number", type: "number", name: "secondNumber" },
    {
        message: "Select one of operator to perform action",
        type: "list",
        name: "operator",
        choices: ["ADDITION", "SUBTRACTION", "MULTIPLICATION", "DIVISION"],
    },
]);
// CONDITIONAL STATEMENT
if (answere.operator === "ADDITION") {
    console.log(answere.firstNumber + answere.secondNumber);
}
else if (answere.operator === "SUBTRACTION") {
    console.log(answere.firstNumber - answere.secondNumber);
}
else if (answere.operator === "MULTIPLICATION") {
    console.log(answere.firstNumber * answere.secondNumber);
}
else if (answere.operator === "DIVISION") {
    console.log(answere.firstNumber / answere.secondNumber);
}
else {
    "please select correct operator";
}
