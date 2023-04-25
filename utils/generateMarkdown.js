// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return '';
  }

  const licenseType = license.toLowerCase().replace(/ /g, '-');

  return '![License](https://img.shields.io/badge/license-${licenseType}-green.svg)';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) {
    return '';
  }

  const licenseType = license.toLowerCase().replace(/ /g, '-');

  switch (licenseType) {
    case 'apache-2.0':
      return 'https://opensource.org/licenses/Apache-2.0';
    case 'bsd-2-clause':
      return 'https://opensource.org/licenses/BSD-2-Clause';
    case 'bsd-3-clause':
      return 'https://opensource.org/licenses/BSD-3-Clause';
    case 'mit':
      return 'https://opensource.org/licenses/MIT';
    case 'mpl-2.0':
      return 'https://opensource.org/licenses/MPL-2.0';
      default:
        return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return '';
  }

  constLicenseType = license.toLowerCase().replace(/ /g, '-');
  const licenseLink = renderLicenseLink(license);

  return '';
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
return `# ${data.title}

## Description
${data.description}

## Installation
${data.installation}

## Usage
${data.usage}

## License
This project is licensed under the ${data.license} license.

## Tests
${data.tests}

## Questions
If you have any questions, you can contact me at ${data.email}. You can also find more info at https://github.com/${data.githubUsername}.
`;
}




module.exports = generateMarkdown;