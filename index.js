// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a description of your project:',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the installation steps for your project?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How do you use your project?',
    },
    {
        type: 'list',
        name: 'license',
        message: 'What kind of license does your project have?',
        choices: ['MIT', 'GPL-3.0', 'Apache-2.0', 'BSD-3-Clause',],
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What are the test instructions for your project?',
    },
    {
        type: 'input',
        name: 'githubUsername',
        message: 'What is your github username? ',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    },
];

// TODO: Create a function to write README file
const fs = require('fs');


function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            console.error(err);
            return;
        }
        console.log('README file generated: ${fileName');
    });
} 


// TODO: Create a function to initialize app

function init() {
    inquirer.prompt(questions)
    .then(answers => {
        const markdown = generateMarkdown(answers);
        const fileName = '${answers.title.toLowerCase().replace(/\s/g, '-')}.md';
        writeToFile(fileName, markdown);
    })
    .catch(error => {
        console.error(error);
    });
}

// Function call to initialize app
init();
