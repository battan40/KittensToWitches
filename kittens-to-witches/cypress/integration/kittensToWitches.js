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

  it('Should be show a background image covering the whole page', () => {
    cy.get('main').should('have.css', 'background-image', 'url("http://localhost:3000/static/media/enchantedForest.3b87ed50.png")')
  })

  it('Should display title on the main page display', () => {
    cy.get('.app-title').should('contain', 'Kittens')
  })

  it('Should load display for quote and image upon page load', () => {
    cy.get('.kit-card').should('be.visible')

  })

  it('Should display ron quote', () => {
    cy.get('.ronspiration').should('contain', 'I')
  })

  it('Should maintain one display of swanspiration on the main page view', () => {
    cy.get('.ronspiration').should('have.length', 1)
  })

  it('Should have a place to enter spells', () => {
    cy.get('form').find('input').should('be.visible')
      .get('form input[type=text]').should('be.visible')
      .get('.spell-composition').should('be.visible')
      .get('.send-spell').should('be.visible')
  })

  it('Should be able to type text in form', () => {
    cy.get('.title-input').type('Name Spell')
    cy.get('.spell-composition').type('Compose Spell')
  })

  it('Should give the user a button to cast spell after typing it', () => {
    cy.get('.send-spell').should('contain', 'Cast')
      .get('.send-spell').click()
  })

  it('Should open with a message inviting users to cast a spell', () => {
    cy.get('.invitation').should('contain', 'Cast')
  })

  it('Should show a new card with a spell after the user clicks the cast button', () => {
    cy.get('.spell-card').should('be.visible')
  })







})
