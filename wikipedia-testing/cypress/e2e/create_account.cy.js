describe('User Registration Test', () => {
    it('Should successfully create a new user account', () => {
      // Visit the registration page
      cy.visit('https://en.wikipedia.org/w/index.php?title=Special:CreateAccount&returnto=Main+Page');

      // Fill in the registration form fields
      cy.get('#wpName2').type('samanta234');
      cy.wait(1000);
      cy.get('#wpPassword2').type('Pa$$_w0rd');
      cy.wait(1000);
      cy.get('#confirmPassword').type('Pa$$_w0rd');
      cy.wait(1000);
      cy.get('#wpEmail').type('newuser_123@gmail.com');
      cy.wait(1000);

      // Click the "Create your account" button
      cy.contains('Create your account').click();

      // Wait for the success message or confirmation page
    cy.contains('Account created successfully', { timeout: 10000 }).should('be.visible');

   
    });
});

