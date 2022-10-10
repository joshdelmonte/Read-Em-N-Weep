// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs');
const { type } = require('os');
const { title } = require('process');
// TODO: Create an array of questions for user input
const pergunta = [
    {
        message: ' What name would you like to give your README?',
        type: 'input',
        name:'titulo'
    }
];

inquirer.createPromptModule(pergunta)
.then(riposta => {
    console.log(riposta)
})
.catch(err=> console.log(err))

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
