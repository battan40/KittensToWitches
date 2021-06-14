describe('Show about page on route', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000/about')
  });

  it('Should be able to open to the main page', () => {
    cy.url().should('eq', 'http://localhost:3000/about')
  });
  
}
