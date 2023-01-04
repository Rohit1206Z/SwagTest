/*1. Verify the title as Swag Labs- */
cy.visit('https://www.saucedemo.com/')
cy.title().should('eq', 'Swag Labs')

/*2. Verify the login button text is capitalized */
cy.get('#login-button').invoke('attr', 'value').contains('LOGIN', { matchCase: true })

/*3.Login with standard_user & secret_sauce*/
cy.get('#user-name').type('standard_user')
cy.get('#password').type('secret_sauce')
cy.get('#login-button').click()

/*4.Verify default filter dropdown is A-Z */
cy.get('.product_sort_container').select('az').should('have.value', 'Name (A to Z)')

/*5.Add the first product to the cart */
cy.get('#add-to-cart-sauce-labs-backpack').click()

/*6.Verify the cart badge has 1 product*/
cy.get('.shopping_cart_badge').should('have.value', '1')

/*7.Add the last product to the cart*/
cy.get('add-to-cart-test.allthethings()-t-shirt-(red)').click()

/*8.Remove the first product from the cart */
cy.get('#remove-sauce-labs-backpack').click()

/*9.Click on the cart */
cy.get('.shopping_cart_link').click()

/*10.Click on the continue shopping*/
cy.get('#continue-shopping').click()








