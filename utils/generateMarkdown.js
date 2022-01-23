// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const template = `# ${data.title}

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
${data.motivation}
## Description
${data.description}
# Code Styles
${data.codestyle}
# Frameworks and Tech
${data.frameworks}
# Installation
${data.installation}
## Usage
${data.usage}
# Credits
${data.credits}
## How to Use
${data.howto}
## License
${data.license}

# Contact
* GitHub : github.com/${data.github}
* E-mail :${data.email}
* Linkedin :${data.linkedin}`;

  return template;
}

module.exports = generateMarkdown;
