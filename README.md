![GitHub CI Status](https://github.com/MuhaddiMu/Enterprise-Vue-Boilerplate/workflows/GitHub%20CI/badge.svg)

# mevn-enterprise-boilerplate

The code for [Vue.js Enterprise Development Crash Course](https://crash-course.enterprisevue.com/).


## Changes I made
- Deployment Pipeline using recent GitHub actions feature
- Bump Dependencies

## To Do
- Write more unit tests
- Add authentication functionality and it's test cases

## My Notes
Here are my notes. Perhaps somebody can get a benefit from them.

1. MEVN stands for Mongo, Express, Vue, Node
2. The server can be in the same codebase instead of making a separate one
3. Testing the specific functionality of the app is called Unit Testing. Example, Sign In, SignUp, Modal
4. E2E Testing is the testing of the Vue app based on how it will look for the end-user. That is how the app is behaving in the browser
5. Mocha and Jest is used for Unit testing
6. Cypress and Nightwatch is used for E2E testing
7. Tests are essential for the application
8. Continuous deployment means the application is ready to be deployed at any time.
9. CD can be achieved with CD tools like Circle CI, Travis CI, Jenkins, GitHub Actions and Gitlab CI
10. Heroku is used for the deployment of Node applications

## Recent Changes
- Added a new component - Profile
- Updated About view to display profile information
- Added new unit tests for the Profile component

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Run your end-to-end tests
```
npm run test:e2e
```

### Lints and fixes files
```
npm run lint
```

## Deployment

- Create a new Heroku app
- In Gitlab UI go to *Settings > CI > Variables* and set `HEROKU_APP_NAME` and `HEROKU_API_KEY`.
