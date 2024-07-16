// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkDown");

// TODO: Create an array of questions for user input
const questions = [];
questions[0] = "What is the name for your project?";
questions[1] = "Description of the project";
questions[2] = "Please include installation instructions:";
questions[3] = "Enter usage information:";
questions[4] = "Enter contribution guidelines:";
questions[5] = "What are the test instructions?";
questions[6] = "Please choose a license for your application:";
questions[7] = "Enter your GitHub username:";
questions[8] = "Enter your email address:";

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    
const readMeInfo =

`${generateMarkdown(data)}

## Description

${data.description}

## Table of Contents (Optional)

If your README is long, add a table of contents to make it easy for users to find what they need.

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

${data.installation}

## Usage

${data.usageInfo}

## Credits

List your collaborators, if any, with links to their GitHub profiles.

If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.

If you followed tutorials, include links to those here as well.

## License

The last section of a high-quality README file is the license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).

---

🏆 The previous sections are the bare minimum, and your project will ultimately determine the content of this document. You might also want to consider adding the following sections.

## Badges

![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)

Badges aren't necessary, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.

## Features

If your project has a lot of features, list them here.

## How to Contribute

${data.contributionGuide}

## Tests

${data.testInstructions}

## Questions
For questions about the project, you can reach me via:
- GitHub: [${data.gitHub}](https://github.com/${data.gitHub})
- Email: ${data.email}
` ;
fs.writeFile(fileName, readMeInfo, (err) =>
err ? console.error(err) : console.log('README has been successfully made!')
);
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt([
            {
                type: "input",
                message: `${questions[0]}`, 
                name: 'title'
            }, 
            {
                type: "input",
                message: `${questions[1]}`, 
                name: 'description'
            }, 
            {
                type: "input",
                message: `${questions[2]}`, 
                name: 'installation'
            }, 
            {
                type: "input",
                message: `${questions[3]}`, 
                name: 'usageInfo'
            }, 
            {
                type: "input",
                message: `${questions[4]}`, 
                name: 'contributionGuide'
            }, 
            {
                type: "input",
                message: `${questions[5]}`, 
                name: 'testInstructions'
            }, 
            {
                type: "list",
                message: `${questions[6]}`, 
                name: 'badge',
                choices: [`GNU AGPLv3`, `GNU GPLv3`, `GNU LGPLv3`, `Mozilla Public License 2.0`, `Apache License 2.0`, `MIT License`],
            }, 
            {
                type: "input",
                message: `${questions[7]}`, 
                name: 'gitHub'
            }, 
            {
                type: "input",
                message: `${questions[8]}`, 
                name: 'email'
            }, 
        ])

        .then((data) => {
          writeToFile('README.md', data)
        });

}
// Function call to initialize app
init();
