describe('Show main page of Kittens To Witches', () => {

  beforeEach(() => {
    cy.fixture('mockSwanson.json')
      .then(mockRon => {
        cy.intercept('GET', 'https://ron-swanson-quotes.herokuapp.com/v2/quotes', {
          statusCode: 200,
          delay: 100,
          body: mockRon
        })
      })
    cy.visit('http://localhost:3000/')
  })

  it('Should be able to open to the main page', () => {
    cy.url().should('eq', 'http://localhost:3000/')
  })






})
