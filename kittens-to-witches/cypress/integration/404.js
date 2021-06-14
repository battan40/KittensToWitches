describe('Show about page on route', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000/about')
  });

  it('Should be able to open to the 404 error page', () => {
    cy.url().should('eq', 'http://localhost:3000/404')
  });

  it('Should find a message on the 404 page', () => {
    cy.get('.error-page').should('be.visible')
      .get('.error-page').should('contain', '404')
  })

  it('Should find a message on the 404 page', () => {
    cy.get('.error-page').should('be.visible')
      .get('.error-page').should('have.css', 'font-family')
  })

}
