describe('Test kingpower', function() {
  let productPrice = {
    product1: '',
    product2: '',
    grandTotal: '',
  }

  const login = {
    email: 'thinnakrit.idesign@gmail.com',
    password: 'nattapon'
  }

  it('Open home page', function() {
    cy.visit('http://dev-web.kpc-dev.com/product/create-ion-roll-brush-iron-ii-26-mm?collection=online-exclusive&lang=en')
    cy.get('#product-detail-button-delivery').click()
    cy.get('#product-detail-label-product-price span').then(($price) => {
      productPrice.product1 = $price
    })
    cy.get('#product-detail-button-addtocart').click()
    cy.get('#product-detail-container-add-to-cart-button-checkout').click()

    cy.visit('http://dev-web.kpc-dev.com/product/apple-i-phone-x-silver-P8189212?lang=en')
    cy.get('button[name=64gb]')
      .should('be.visible')
      .click({force: true, waitForAnimations: false, animationDistanceThreshold: 50})
    cy.get('button[name=64gb]').click()

    cy.get('#product-detail-button-delivery').click()
    cy.get('#product-detail-label-product-price span').then(($price) => {
      productPrice.product2 = $price
    })
    cy.get('#product-detail-button-addtocart').click()
    cy.get('#product-detail-container-add-to-cart-button-checkout').click()
    
    cy.get('#cart-summary-grand-total-price-label span').then(($price) => {
      productPrice.grandTotal = $price
    })
    cy.get('#cart-checkout-button').click()

    cy.get(':nth-child(1) > .row > .Login__Button-s1ayij50-1 > a > .btn').click()

    cy.get('#signin-text-input-email').type(login.email)
    cy.get('#signin-text-input-password').type(login.password)
    cy.get('#signin-button-signin').click()

    cy.get('#cart-summary-grand-total-price-label span').then(($price) => {
      productPrice.grandTotal = $price
    })
    cy.get('#cart-checkout-button').click()

    cy.get('#checkout-information-button-continue')
      .should('be.visible')
      .click({force: true, waitForAnimations: false, animationDistanceThreshold: 50})
    cy.get('#checkout-information-button-continue').click()

    cy.get('#checkout-payment-method-credit-alipay-radio')
      .should('be.visible')
      .click({force: true, waitForAnimations: false, animationDistanceThreshold: 50})
    cy.get('#checkout-payment-method-credit-alipay-radio').click()

    cy.get('#checkout-payment-placeorder-button')
      .should('be.visible')
      .click({force: true, waitForAnimations: false, animationDistanceThreshold: 50})
    cy.get('#checkout-payment-placeorder-button').click()

    cy.get('#checkout-payment-confirm-button')
      .should('be.visible')
      .click({force: true, waitForAnimations: false, animationDistanceThreshold: 50})
    cy.get('#checkout-payment-confirm-button').click()

  })
})