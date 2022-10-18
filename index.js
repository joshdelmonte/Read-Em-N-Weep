// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs');
const { type } = require('os');
const { title } = require('process');
const generateMarkdown = require('./utils/generateMarkdown')
// TODO: Create an array of questions for user input
const generateHTML = ({licensa, titulo, descricao, instalacao, contribucao, testing, username, email }) =>
`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<div class="jumbotron jumbotron-fluid">
    <div class="container">
        <h1>Title: ${titulo}</h1>
        <!-- Insert tags for the licences here -->
        <img src="" alt="">
        <h2>Description</h2>
        <p>${descricao}</p>
        <ul>
            <li><a href="#descricao">Description</a></li>
            <li><a href="#instalacao">Installation</a></li>
            <li><a href="#contribucao">Contributions</a></li>
            <li><a href="#testing">Testing</a></li>
            <li><a href="#contact"></a>Contact</li>
        </ul>

        <h2 id="instalacao">Installation</h2>
        <p>${instalacao}</p>

        <h2 id="contribucao">Contributions</h2>
        <p>${contribucao}</p>

        <h2 id="testing">Testing</h2>
        <p>${testing}</p>

        <h2 id="contact">Contact</h2>
        <p>${username}</p>
        <p>${email}<p>




    </div>
</div>
<body>
    
</body>
</html>`

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
        name:'email'
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
