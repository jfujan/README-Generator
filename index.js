// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is your Github username",
        name: "github"
    },
    {
        type: "input",
        message: "What is your email",
        name: "email"
    },
    {
        type: "input",
        message: "What is your projects title?",
        name: "title"
    },
    {
        type: "input",
        message: "Give a description of your project",
        name: "description"
    },
    {
        type: "input",
        message: "What command should I run to install?",
        name: "installation",
        default: "npm i"
    },
    {
        type: "input",
        message: "What does the user need to know about using the repo?",
        name: "usage"
    },
    {
        type: "input",
        message: "List your collaberators",
        name: "credits"
    },
    {
        type: "input",
        message: "What does the user need to know about contributing to this project?",
        name: "contributing"
    },
    {
        type: 'list',
        name: 'license',
        message: 'What kind of license should your project have?',
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
    },
    {
        type: "input",
        message: "What command should be run to run tests?",
        name: "tests"
    },
];

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((answers) => {
        const readMeContent = generateMarkdown(answers)
        console.log(readMeContent)
        
        fs.writeFile('README.md', readMeContent, (err) =>
      err ? console.log(err) : console.log('Successfully created README.md!')
    );
      })
      .catch((error) => {
        if (error.isTtyError) {
          // Prompt couldn't be rendered in the current environment
        } else {
          // Something else went wrong
        }
      });
}

// Function call to initialize app
init();
