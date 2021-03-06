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
  });

  it('Should be able to open to the main page', () => {
    cy.url().should('eq', 'http://localhost:3000/')
  });

  it('Should be show a background image covering the whole page', () => {
    cy.get('main').should('have.css', 'background-image', 'url("http://localhost:3000/static/media/enchantedForest.3b87ed50.png")')
  });

  it('Should display title on the main page display', () => {
    cy.get('.app-title').should('contain', 'Kittens')
  });

  it('Should load display for quote and image upon page load', () => {
    cy.get('.kit-card').should('be.visible')
  });

  it('Should have styles to make the initial card feel witchy', () => {
    cy.get('.kit-card').should('be.visible')
      .get('.kit-card').should('have.css', 'box-shadow')
  });

  it('Should display ron quote', () => {
    cy.get('.ronspiration').should('contain', 'I')
  });

  it('Should maintain one display of swanspiration on the main page view', () => {
    cy.get('.ronspiration').should('have.length', 1)
  });

  it('Should have a place to enter spells', () => {
    cy.get('form').find('input').should('be.visible')
      .get('form input[type=text]').should('be.visible')
      .get('.spell-composition').should('be.visible')
      .get('.send-spell').should('be.visible')
  });

  it('Should be able to type text in form', () => {
    cy.get('.title-input').type('Name Spell')
    cy.get('.spell-composition').type('Compose Spell')
  });

  it('Should give the user a button to cast spell after typing it', () => {
    cy.get('.send-spell').should('contain', 'Cast')
      .get('.send-spell').click()
  });

  it('Should open with a message inviting users to cast a spell', () => {
    cy.get('.invitation').should('contain', 'Cast')
  });

  it('Should show a new card with a spell after the user clicks the cast button', () => {
      cy.get('.send-spell').click()
        .get('.spell-card').should('be.visible')
  });

  it('Should bless the spell with the card invocation', () => {
    cy.get('.title-input').should('be.visible').type('words')
      .get('.spell-composition').should('be.visible').type('more words')
      .get('.send-spell').should('be.visible').click()
      .get('.invocation').should('contain', 'Ashe')
  });

  it('Should display different styling on the spell card for better UX', () => {
    cy.get('.title-input').should('be.visible').type('words')
      .get('.spell-composition').should('be.visible').type('more words')
      .get('.send-spell').should('be.visible').click()
      .get('.spell-card').should('be.visible')
      .get('.spell-card').should('have.css', 'background-color')
  });

  it('Should maintain the users spell title and description from input', () => {
    cy.get('.title-input').should('be.visible').type('words')
      .get('.spell-composition').should('be.visible').type('more words')
      .get('.send-spell').should('be.visible').click()
      .get('.title').should('be.visible').should('contain', 'words')
      .get('.spell').should('be.visible').should('contain', 'more words')
  });

  it('Should have a button for favoriting the spell', () => {
    cy.get('.title-input').should('be.visible').type('words')
      .get('.spell-composition').should('be.visible').type('more words')
      .get('.send-spell').should('be.visible').click()
      .get('.love-button').should('contain', 'Keep')
      .get('.love-button').click()
  });

});

describe('Populate image on load', () => {

  beforeEach(() => {
    cy.fixture('mockKittens.json')
      .then(mockKit => {
        cy.intercept('GET', 'https://aws.random.cat/meow', {
          statusCode: 200,
          delay: 100,
          body: mockKit
        })
      })
    cy.visit('http://localhost:3000/')
  });

  it('Should be able to open to the main page', () => {
    cy.url().should('eq', 'http://localhost:3000/')
  });

  it('Should load an alt tag with main page view', () => {
    cy.get('.cat-pic').should('be.visible')
      .get('.cat-pic').should('have.attr', 'alt')
  });

  it('Should have an image with a circular presentation so user feels visited through a portal', () => {
  cy.get('.cat-pic').should('be.visible')
    .get('.cat-pic').should('have.css', 'border-radius')
  });

});
