describe('Test Nav link', function() {
  it('Open home page', function() {
    cy.visit('http://localhost:3000')
    cy.screenshot()
  })

  it('Product nav', function() {
    cy.get('#nav-home').click()
    cy.screenshot()
  })

  it('About nav', function() {
    cy.get('#nav-about').click()
    cy.screenshot()
  })

  it('About and home nav', function() {
    cy.get('#nav-about-home').click()
    cy.screenshot()
  })

  it('Product nav', function() {
    cy.get('#nav-product').click()
    cy.screenshot()
  })

  it('Register nav', function() {
    cy.get('#nav-register').click()
    cy.screenshot()
  })
})