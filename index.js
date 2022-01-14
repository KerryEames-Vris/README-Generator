const fs = require("fs");
const inquirer = require("inquirer");

const questions = [
  {
    type: "input",
    name: "title",
    message: "What is your project's name?",
  },
  {
    type: "input",
    name: "motivation",
    message: "Why did you make this project?",
  },
  {
    type: "input",
    name: "description",
    message: "Give a description of your project",
  },
  {
    type: "input",
    name: "code styles",
    message: "What code styles does your project use?",
  },
  {
    type: "input",
    name: "tech and frameworks",
    message:
      "What kind of technology or frameworks does your project incorporate?",
  },
  {
    type: "input",
    name: "installation",
    message: "what are the steps for installing your project?",
  },
  {
    type: "input",
    name: "usage",
    message: "what are the applications for your projects usage?",
  },
  {
    type: "input",
    name: "credits",
    message: "Who is credited on the work?",
  },
  {
    type: "input",
    name: "how to use",
    message: "Give a description of how to use your product",
  },
  {
    type: "list",
    name: "license",
    message: "Please select which license you would like to list.",
    choices: ["APACHE 2.O", "BSD 3", "GVL-GPL 3.0", "MIT", "None"],
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, function (err) {
    console.log(fileName);
    console.log(data);
    if (err) {
      return console.log(err);
    } else {
      console.log("success");
    }
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then(function (data) {
    writeToFile("README.md", generatorMarkdown(data));
    console.log(data);
  });
}

// Function call to initialize app
init();
