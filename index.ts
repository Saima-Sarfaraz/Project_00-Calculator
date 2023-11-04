#!usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";

const sleep = () => {
    return new Promise((res) => {
        setTimeout(res, 2000);
    })
}

async function welcome() {
    let rainbowTitle = chalkAnimation.rainbow('lets start commond line calculator');
    await sleep();
    rainbowTitle.replace('with NODE.JS,INQUIRER and CHALK');
    await sleep();
    rainbowTitle.replace('lets enjoy calculator!!!');
    await sleep();
    rainbowTitle.stop();

    let pulseTitle = chalkAnimation.pulse('Developed by SAIMA KHAN for typescript faculty test');
    await sleep();
    pulseTitle.stop();
}

async function askQuestion() {

    let answer = await inquirer.prompt([
        {
            type: "list",
            name: "operator",
            message: chalk.yellowBright("Which operation you want to perform?\n"),
            choices: ["+ Addition", "- Subtraction", "* Multiplication", "/ Division"]
        },
        {
            type: "number",
            name: "num1",
            message: chalk.greenBright("Enter first name: ")
        },
        {
            type: "number",
            name: "num2",
            message: chalk.greenBright("Enter second nimber: ")
        }

    ])
    switch (answer.operator) {
        case "+ Addition": {
            console.log(chalk.blue(`${answer.num1} + ${answer.num2} = ${answer.num1 + answer.num2}`));
            break;
        }
        case "- Subtraction": {
            console.log(chalk.blue(`${answer.num1} - ${answer.num2} = ${answer.num1 - answer.num2}`));
            break;
        } case "* Multiplication": {
            console.log(chalk.blue(`${answer.num1} x ${answer.num2} = ${answer.num1 * answer.num2}`));
            break;
        }
        case "/ Division": {
            console.log(chalk.blue(`${answer.num1} / ${answer.num2} = ${answer.num1 / answer.num2}`));
            break;
        }
        default: {
            console.log("Default code.");
            break;
        }
    }
}

async function startLoop() {
    do {
        await askQuestion();
        var again = await inquirer.prompt([
            {
                type: "checkbox",
                name: "restart",
                choices: ['Yes', 'No'],
                message: chalk.yellowBright("Do you want to continue:")
            }
        ])
    } while (again.restart == 'Yes');

}
startLoop();







