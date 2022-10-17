// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs');
const { type } = require('os');
const { title } = require('process');
const generateMarkdown = require('./utils/generateMarkdown')
// TODO: Create an array of questions for user input
const pergunta = [
    {
        type: 'input',
        name:'titulo',
        message: ' What name would you like to give your README?',
    },
    {
        type: 'input',
        name:'descricao',
        message: 'Could you give a basic description of this README?',
    },
    {
        type: 'input',
        name:'instalacao',
        message: ' How would one go about installing your README?'
    },
    {
        type: 'list',
        name: 'licensa',
        message: ' What badges would you like for this README?',
        choices:['APACHE 2.0', 'Hippocratic License 2.1', 'Mozilla Public License 2.0', 'MIT License'],
    },
    {
        type: 'input',
        message: ' Were there any contribution guidlines to your README?',
        name:'contribucao'
    },
    {
        type: 'input',
        message: ' Did we have any testing instructions for this README?',
        name:'testing'
    },
    {
        type: 'input',
        message: ' Would you please enter your github username for contact purposes?',
        name:'username'
    },
    {
        type: 'input',
        message: ' Would you please enter your e-mail username for contact purposes?',
        name:'e-mail'
    },
];

inquirer.prompt(pergunta)
.then(riposta => {
    console.log(riposta)
    writeToFile(`./output/README.md`, riposta) 
})
.catch(err=> console.log(err))

// TODO: Create a function to write README file
function writeToFile(fileName, riposta){
    fs.writeFile(fileName, generateMarkdown(riposta), (err) => {
        if (err) {
            console.log(err)
        }}) 
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
