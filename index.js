///// GIVEN a command-line application that accepts user input
///// WHEN I am prompted for information about my application repository
///// THEN a quality, professional README.md is generated with the title of your project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
///// WHEN I enter my project title
///// THEN this is displayed as the title of the README
///// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
///// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
///// WHEN I choose a license for my application from a list of options
///// THEN a badge for that license is added hear the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
///// WHEN I enter my GitHub username
///// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
///// WHEN I enter my email address
///// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
///// WHEN I click on the links in the Table of Contents
///// THEN I am taken to the corresponding section of the README

const fs = require('fs');
const inq = require('inquirer');
const append = append => fs.appendFileSync('README.md', append, err => err ? console.log(err) : console.log(append));
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
        type: "input",
        message: "Please enter installation instructions:",
        name: "installation"
    }, {
        type: "input",
        message: "Please enter a usage description:",
        name: "usage"
    }, {
        type: "list",
        message: "Please select a license:",
        name: "license",
        choices: ["MIT", "GPLv2", "GPLv3", "Apache", "Unlicensed"]
    }, {
        type: "input",
        message: "Please detail proper contributing instructions:",
        name: "contributing"
    }, {
        type: "input",
        message: "Please explain tests:",
        name: "tests",
    }, {
        type: "input",
        message: "Enter your GitHub username:",
        name: "username",
    }, {
        type: "input",
        message: "Enter your email address:",
        name: "email"
    }]).then(function (response) {
        switch (response.license) {
            case "MIT":
                append("![License](https://shields.io/category/license/apm/l/:packageName) \n");
                break;
            case "GPLv2":
                append("![License](https://shields.io/category/license/apm/l/:packageName) \n");
                break;
            case "GPLv3":
                append("![License](https://shields.io/category/license/apm/l/:packageName) \n");
                break;
            case "Apache":
                append("![License](https://shields.io/category/license/apm/l/:packageName) \n");
                break;
            case "Unlicensed":
                append("![License](https://shields.io/category/license/apm/l/:packageName) \n");
                break;
            default:
                append("![License](https://shields.io/category/license/apm/l/:packageName) \n");
                break;
        };
        append("# " + response.title + "\n");
        if (response.contents) {
            append("### Table of contents \n" +
                "* [Description](#Description) \n" +
                "* [Installation](#Installation) \n" +
                "* [Usage](#Usage) \n" +
                "* [Contributing](#Contributing) \n" +
                "* [Tests](#Tests) \n" + 
                "* [Questions](#Questions) \n"
            );
        };
        append("## Description \n" + response.description + "\n");
        append("### Installation \n" + response.installation + "\n");
        append("### Usage \n" + response.usage + "\n");
        append("#### Contributing \n" + response.contributing + "\n");
        append("#### Tests \n" + response.tests + "\n");
        append("#### Questions \n [Github](https://github.com/" + response.username + ")\n \n" +
            "Please email me with any questions at: " + response.email + "\n");
    });