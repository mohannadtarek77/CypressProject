// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
// import SignIn from '../Pages/SignIn.page.js';
// const Sign = new SignIn();
// Cypress.Commands.add('SignIn', () => {
//   cy.visit('/login');
//   cy.fixture('SignIn.json').then(SignIn => {
//     cy.wait(500);

//     Sign.getEmail().type(SignIn.email);

//     Sign.getPassword().type(SignIn.password);

//     Sign.getHideButton().click();

//     Sign.getLogInButton().click();

//     cy.url().should('eq', SignIn.url);
//   });
// });

// import "cypress-file-upload";
