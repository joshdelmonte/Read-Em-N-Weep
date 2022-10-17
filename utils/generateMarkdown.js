// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === `APACHE 2.0`) {
    return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
  }
  else if (license === `Hippocratic License 2.1`) {
    return "[![License: Hippocratic 2.1](https://img.shields.io/badge/License-Hippocratic_2.1-lightgrey.svg)](https://firstdonoharm.dev)"
  }
  else if (license === `Mozilla Public License 2.0`) {
    return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"
  }
  else if (license === `MIT License`){
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
  }
   
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.titulo}
${renderLicenseSection(data.licensa)}
`;
}

module.exports = generateMarkdown;
