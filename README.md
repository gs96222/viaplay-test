# ViaplayTest

### This projects uses keyboard keys (Arrows keys) to navigate, (Enter key) to open the popup, (Backspace and Escape keys) to close the popup of the image and its detials.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.0.1.

## Directory Structure

```
.
└── viaplay-test
    ├── main.ts(bootstrapping)
    ├── index.html
    ├── style.scss
    ├── assets
    └── app
        ├── constants
        ├── material
        ├── models
        ├── services
        |   ├──http-request service
        │   ├── movie service
        |   ├── utility service
        └── components
            ├── footer
            ├── header
            ├── home
            ├── moview
            ├── movie cards
            └── movie view

```

## Installation Guide

Clone the project.

```
git clone git@github.com:gs9622/viaplay-test.git
```

## Start development

1. Open `viaplay-test` directory.

2. Install dependencies.

```
npm install
```

3. start Development Server.

```
npm run start
```

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

`assets`

> Contains the static assets like images.

`components`

> it contains all components that is being used in the development of the application.

`services`

> services are singleton in angular. they are like intialize once and used anywhere. we have defined utiliy services which contains utility methods and wrapper service for the http client and movie service to fetch the details of the move from the api

> Contains all pages in the application. If there is any router implemented. It should load this components.
