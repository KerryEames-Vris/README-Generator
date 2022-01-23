const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      return console.log(err);
    } else {
      console.log("success");
    }
  });
}

function init() {
  inquirer
    .prompt([
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
        name: "codestyle",
        message: "What code styles does your project use?",
      },
      {
        type: "input",
        name: "frameworks",
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
        name: "howto",
        message: "Give a description of how to use your product",
      },
      {
        type: "list",
        name: "license",
        message: "Please select which license you would like to list.",
        choices: ["APACHE 2.O", "BSD 3", "GVL-GPL 3.0", "MIT", "None"],
      },
      {
        type: "input",
        name: "github",
        message: "What is your GitHub username?",
      },
      {
        type: "input",
        name: "email",
        message: "What is your email?",
      },
      {
        type: "input",
        name: "linkedin",
        message: "What is your LinkedIn?",
      },
    ])
    .then(function (data) {
      writeToFile("README.md", generateMarkdown(data));
      console.log(data);
    });
}

init();
