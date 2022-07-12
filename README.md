# Angular Calculator

![build-badge](https://img.shields.io/github/workflow/status/Eduk29/angular-calculator/Angular%20Calculator%20Actions/main?style=plastic)
![code-coverage-badge](https://badgen.net/codecov/c/github/eduk29/angular-calculator)
![check-badge](https://img.shields.io/github/checks-status/Eduk29/angular-calculator/main)
![latest-tag-badge](https://badgen.net/github/tag/eduk29/angular-calculator)
![last-commit-badge](https://img.shields.io/github/last-commit/eduk29/angular-calculator?style=plastic)

This project is a study application, so it may contain some errors. Will be a pleasure receive your code review, suggestions and/or tips. :raised_hands:

This application is based in Angular with Typescript and RxJS. For unit test, the application use Karma and Jasmine and for E2E tests, application use Cypress. This readme presents to you the installation details, application startup guide, dependencies and more. This application use some patterns like [Javascript Design Patterns](https://www.patterns.dev/posts/classic-design-patterns/), [Semantic Commit Messages](https://gist.github.com/joshbuchea/6f47e86d2510bce28f8e7f42ae84c716) and [Git flow](https://nvie.com/posts/a-successful-git-branching-model/).

If you want a live version [click here](https://angular-calculator-hazel.vercel.app/). But if you want to run the application in your pc, follow the Installation and Start Application section and we recommend to you download the following versions/dependencies installed on your computer to start the application:

- NodeJS => v.16.14.0
- NPM => v8.3.1
- Angular CLI => v13.3.11

Obs.: Angular CLI could be installed as global resource, but if you want to use angular from project. Do not install angular CLI global in node (npm i -g @angular/cli).

## Installation

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.1.2 and actual version is 13.3.11

**1 -** Clone the project and install the dependencies:

```bash
$ git clone https://github.com/Eduk29/angular-calculator.git
$ cd angular-calculator
$ npm install
```

## Start Application

After you clone the repository, to start the application open the root directory (the directory of package.json) in a command terminal and run the following instruction:

```bash
ng serve
```

When the build is over, open your favorite browser in [http://localhost:4200](http://localhost:4200) to view it.

## Running unit tests

To run the unit tests of application run the following instruction:

```bash
npm run test
```

But if you want only the code coverage run the following instruction:

```bash
npm run test-coverage
```

## Running lint

To run the lint in application run the following instruction:

```bash
npm run lint
```
## Dependecies

- Angular Framework
- Angular Material
- Bootstrap
- Cypress
- Cucumber
- ESLint
- Karma
- Jasmine
- Prettier
- RxJS
- Typescript

## Deploy Plataform and CI/CD

- [Vercel](https://vercel.com/)
- [Github Actions](https://github.com/features/actions)

## Application Roadmap

- Use ESLint and Prettier as Linter :heavy_check_mark:
- E2E tests with Cypress :heavy_check_mark:
- Upgrade E2E tests with Cucumber :heavy_check_mark:
- Use [Husky](https://github.com/typicode/husky) to inspect commits and improvements
- Implement a percentage calculator
- Implement a square root calculator
- Add [release-please](https://github.com/googleapis/release-please) to project

## Developer :computer:

José Eduardo Trindade E Marques  
[LinkedIn](https://www.linkedin.com/in/eduardomarques29/)  
edu.temarques@gmail.com
