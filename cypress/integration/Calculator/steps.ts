import { Given, Then, When } from '@badeball/cypress-cucumber-preprocessor';

Given(/^I access the application$/, () => {
	cy.visit('/');
});
Then(/^I should see the header$/, () => {
  cy.get('app-header').should('exist');
});
Then(/^I should see the calculator$/, () => {
	cy.get('app-core').should('exist');
});
Then(/^I should see the header label$/, () => {
	cy.get('[id=header-label]').should('exist');
});
Then(/^The header label should be "([^"]*)"$/, (label: string) => {
  cy.get('[id=header-label]').contains(label);
});
Then(/^The header should have an icon$/, () => {
	cy.get('mat-icon').should('exist');
});
Then(/^The header icon should be "([^"]*)"$/, (iconLabel: string) => {
	cy.get('mat-icon').contains(iconLabel);
});
Then(/^I should see the calculator display$/, () => {
	cy.get('app-screen-display').get('mat-card').get('mat-card-content').should('exist');
});
Then(/^I should see "([^"]*)" in calculator display$/, (defaultDisplayValue: string) => {
	cy.get('app-screen-display').get('mat-card').get('mat-card-content').contains(defaultDisplayValue);
});
Then(/^I should see buttons in calculator$/, () => {
	cy.get('app-buttons-display').should('exist');
});

When(/^Click in button number "([^"]*)"$/, (numberButtonLabel: string) => {
	cy.get('app-button').get(`#button-${numberButtonLabel}`).children().click();
});
When(/^Wait a 100ms$/, () => {
  cy.wait(100);
});
When(/^Click in button operation "([^"]*)"$/, (operationButtonLabel: string) => {
	cy.get('app-button').get(`#button-${operationButtonLabel}`).children().click();
});
When(/^Click in button "([^"]*)"$/, (equalButtonLabel: string) => {
	cy.get('app-button').get(`#button-${equalButtonLabel}`).children().click();
});
Then(/^I should see number "([^"]*)" in display$/, (displayValue: string) => {
  cy.get('app-screen-display').children().children().should('have.text', displayValue);
});


