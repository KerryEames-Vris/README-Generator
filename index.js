const fs = require("fs");
const inquirer = require("inquirer");

inquirer
  .prompt([
    {
      type: "input",
      name: "title",
      message: "What is your project's name?",
      validate: (value) => {
        if (value) {
          return true;
        } else {
          return "I need a value to continue";
        }
      },
    },
    {
      type: "input",
      name: "motivation",
      message: "Why did you make this project?",
      validate: (value) => {
        if (value) {
          return true;
        } else {
          return "I need a value to continue";
        }
      },
    },
    {
      type: "input",
      name: "description",
      message: "Give a description of your project",
      validate: (value) => {
        if (value) {
          return true;
        } else {
          return "I need a value to continue";
        }
      },
    },
    {
      type: "input",
      name: "codestyle",
      message: "What code styles does your project use?",
      validate: (value) => {
        if (value) {
          return true;
        } else {
          return "I need a value to continue";
        }
      },
    },
    {
      type: "input",
      name: "frameworks",
      message:
        "What kind of technology or frameworks does your project incorporate?",
      validate: (value) => {
        if (value) {
          return true;
        } else {
          return "I need a value to continue";
        }
      },
    },
    {
      type: "input",
      name: "installation",
      message: "what are the steps for installing your project?",
      validate: (value) => {
        if (value) {
          return true;
        } else {
          return "I need a value to continue";
        }
      },
    },
    {
      type: "input",
      name: "usage",
      message: "what are the applications for your projects usage?",
      validate: (value) => {
        if (value) {
          return true;
        } else {
          return "I need a value to continue";
        }
      },
    },
    {
      type: "input",
      name: "credits",
      message: "Who is credited on the work?",
      validate: (value) => {
        if (value) {
          return true;
        } else {
          return "I need a value to continue";
        }
      },
    },
    {
      type: "input",
      name: "howto",
      message: "Give a description of how to use your product",
      validate: (value) => {
        if (value) {
          return true;
        } else {
          return "I need a value to continue";
        }
      },
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
      validate: (value) => {
        if (value) {
          return true;
        } else {
          return "I need a value to continue";
        }
      },
    },
    {
      type: "input",
      name: "email",
      message: "What is your email?",
      validate: (value) => {
        if (value) {
          return true;
        } else {
          return "I need a value to continue";
        }
      },
    },
    {
      type: "input",
      name: "linkedin",
      message: "What is your LinkedIn?",
      validate: (value) => {
        if (value) {
          return true;
        } else {
          return "I need a value to continue";
        }
      },
    },
  ])
  .then(
    ({
      title,
      motivation,
      description,
      codestyle,
      frameworks,
      installation,
      usage,
      credits,
      howto,
      license,
      github,
      email,
      linkedin,
    }) => {
      const template = `# ${title}

  * [Motivation](#motivation)
  * [Description](#description)
  * [Codestyle](#codestyle)
  * [Frameworks](#frameworks)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [Howto](#howto)
  * [License](#license)
  ## Motivation
  ${motivation}
  ## Description
  ${description}
  # Code Styles
  ${codestyle}
  # Frameworks and Tech
  ${frameworks}
  # Installation
  ${installation}
  ## Usage
  ${usage}
  # Credits
  ${credits}
  ## How to Use
  ${howto}
  ## License
  ${license}

  # Contact
  * GitHub :${github}
  * E-mail :${email}
  * Linkedin :${linkedin}`;
    }
  );

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
