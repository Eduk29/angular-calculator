/**  Old cypress implementation, upgraded by cucumber implementation  */
describe('Test Application', () => {

  beforeEach(() => {
    cy.visit('/');
  });

  it('Application SHOULD have a header WHEN start', () => {
    cy.get('app-header').should('exist');
  });

  it('Application SHOULD have a calculator WHEN start', () => {
    cy.get('app-core').should('exist');
  });

  it('Header SHOULD have a label WHEN app runs', () => {
    cy.get('[id=header-label]').should('exist');
  });

  it('Header SHOULD have a label with name "Angular Calculator" WHEN app runs', () => {
    cy.get('[id=header-label]').contains("Angular Calculator");
  });

  it('Header SHOULD have an icon WHEN app runs', () => {
    cy.get('mat-icon').should('exist');
  });

  it('Header SHOULD have an icon "calculate" WHEN app runs', () => {
    cy.get('mat-icon').contains('calculate');
  });

  it('Application SHOULD have a display WHEN app start', () => {
    cy.get('app-screen-display').get('mat-card').get('mat-card-content').should('exist');
  });

  it('Display SHOULD displaying 0 WHEN app start', () => {
    cy.get('app-screen-display').get('mat-card').get('mat-card-content').contains('0');
  });

  it('Calculator SHOULD have buttons WHEN app runs', () => {
    cy.get('app-buttons-display').should('exist');
  });

  it('Display SHOULD change value WHEN some button clicked', () => {
    cy.get('app-button').get('#button-2').children().click();
    cy.wait(100);
    cy.get('app-screen-display').children().children().should('have.text', ' 2 ');
  });

  it('Display SHOULD return value to 0 WHEN some operation button clicked', () => {
    cy.get('app-button').get('#button-2').children().click();
    cy.get('app-button').get('#button-add').children().click();
    cy.wait(100);
    cy.get('app-screen-display').children().children().should('have.text', ' 0 ');
  });

  it('Display SHOULD display new value WHEN some new number button clicked', () => {
    cy.get('app-button').get('#button-2').children().click();
    cy.get('app-button').get('#button-add').children().click();
    cy.get('app-button').get('#button-6').children().click();
    cy.wait(100);
    cy.get('app-screen-display').children().children().should('have.text', ' 6 ');
  });

  it('Display SHOULD display result WHEN equal button clicked', () => {
    cy.get('app-button').get('#button-2').children().click();
    cy.get('app-button').get('#button-add').children().click();
    cy.get('app-button').get('#button-6').children().click();
    cy.wait(100);
    cy.get('app-screen-display').children().children().should('have.text', ' 6 ');
  });


  it('Display SHOULD display result WHEN equal button clicked', () => {
    cy.get('app-button').get('#button-2').children().click();
    cy.get('app-button').get('#button-add').children().click();
    cy.get('app-button').get('#button-6').children().click();
    cy.get('app-button').get('#button-equal').children().click();
    cy.wait(100);
    cy.get('app-screen-display').children().children().should('have.text', ' 8 ');
  });

  it('Display SHOULD display decimal number WHEN decimal button clicked', () => {
    cy.get('app-button').get('#button-2').children().click();
    cy.get('app-button').get('#button-decimal').children().click();
    cy.get('app-button').get('#button-6').children().click();
    cy.wait(100);
    cy.get('app-screen-display').children().children().contains('.');
  });
});
