///// GIVEN a command-line application that accepts user input
///// WHEN I am prompted for information about my application repository
//// THEN a quality, professional README.md is generated with the title of your project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// WHEN I enter my project title
// THEN this is displayed as the title of the README
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added hear the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README

const fs = require('fs');
const inq = require('inquirer');

inq.prompt([
    {
        type: "input",
        message: "Enter Title:",
        name: "title"
    }, {
        type: "input",
        message: "Enter a Description:",
        name: "description"
    }, {
        type: "confirm",
        message: "Would you like a Table of Contents to fill out?",
        name: "contents",
        default: true
    }, {
        type: "confirm",
        message: "Would you like an Installation section to fill out?",
        name: "installation",
        default: false
    }, {
        type: "confirm",
        message: "Would you like a Usage section to fill out?",
        name: "usage",
        default: false
    }, {
        type: "confirm",
        message: "Would you like a License section to fill out?",
        name: "license",
        default: false
    }, {
        type: "confirm",
        message: "Would you like a Contributing section to fill out?",
        name: "contributing",
        default: false
    }, {
        type: "confirm",
        message: "Would you like a Tests section to fill out?",
        name: "tests",
        default: false
    }, {
        type: "confirm",
        message: "Would you like a Questions section to fill out?",
        name: "questions",
        default: false
    }]).then(function (response) {
        fs.appendFile('README.md', response, err => err ? console.log(err) : console.log("README generated!"));
    });