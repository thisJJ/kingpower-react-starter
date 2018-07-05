describe('Test product page', function() {
  it('Open home page', function() {
    cy.visit('http://localhost:3000')
  })

  it('Open Product page', function() {
    cy.get('#nav-product').click()
    cy.screenshot()
  })

  it('Test input sku', function() {
    cy.visit('http://localhost:3000/product')

    cy.get('#sku').type('3982969')
    cy.screenshot()
    
  })

  it('Test input lang', function() {
    cy.visit('http://localhost:3000/product')

    cy.get('#lang').type('EN')
    cy.screenshot()
  })

  it('Test input sku and lang', function() {
    cy.visit('http://localhost:3000/product')

    cy.get('#sku').type('3982969')
    cy.get('#lang').type('EN')
    cy.screenshot()
  })

  it('Test input success case', function() {
    cy.visit('http://localhost:3000/product')

    cy.get('#sku').type('3982969')
    cy.get('#lang').type(`EN`)

    cy.get('#product-btn').click()

    cy.get('h1').should('contain','REMINGTON Dual Foil Travel Shaver TF-70')
    cy.screenshot()
  })

  it('Test input fail case', function() {
    cy.visit('http://localhost:3000/product')

    cy.get('#sku').type('3982969')
    cy.get('#lang').type(`EN`)

    cy.get('#product-btn').click()

    cy.get('h1').should('contain','REMINGTON Dual Foil Travel Shaver xxxx')
    cy.screenshot()
  })

  it('Test selection sku', function() {
    cy.visit('http://localhost:3000/product')
    cy.get('#select-sku').select('Yiminghe')
    cy.screenshot()
  })

  it('Test open modal', function() {
    cy.visit('http://localhost:3000/product')
    cy.get('#open-modal').click()
  })

  it('Test open and close modal', function() {
    cy.visit('http://localhost:3000/product')
    cy.get('#open-modal').click()
    cy.get('#close-modal').click()
  })
  
})