// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(licensa) {
  if (licensa === `APACHE 2.0`) {
    return "![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)"
  }
  else if (licensa === `Hippocratic License 2.1`) {
    return "![License: Hippocratic 2.1](https://img.shields.io/badge/License-Hippocratic_2.1-lightgrey.svg)"
  }
  else if (licensa === `Mozilla Public License 2.0`) {
    return "![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)"
  }
  else if (licensa === `MIT License`){
    return "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)"
  }
   
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.titulo}
${renderLicenseSection(data.licensa)}
`;
}

module.exports = generateMarkdown;
