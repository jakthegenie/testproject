# SPIDER-UI

## Introduction
## Development Setup
## Build
`npm run build`
* will build a release bundle and increment the version for the site.
#### PLEASE CHECK THIS FILE IN DURING DEVELOPMENT!!
## Tests
### Running Tests
* npm run test
* jest is used as the test runner along with @testing-library
* jest config sits in a jest.config.js file in order to keep a minimal package.json file.
* a transformer is used in order to test React components, transformer config sits in config/jest folder.

#### VS Code Extensions for Debugging tests

These extensions should work staright out of the box with the current configuration:

`Jest Runner`
`Jest Test Explorer`
### Running Tests
`npm run test`
### Running Tests With Code Coverage
`npm run test:coverage` 