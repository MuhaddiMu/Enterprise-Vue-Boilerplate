![pipeline status](https://gitlab.com/ecnop04/mevn-enterprise-boilerplate/badges/master/pipeline.svg)

# mevn-enterprise-boilerplate

The code for [Vue.js Enterprise Development Crash Course](https://crash-course.enterprisevue.com/).


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
