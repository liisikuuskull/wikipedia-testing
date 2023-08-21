describe('Wikipedia Test', () => {
    it('Should load the Wikipedia homepage', () => {
      cy.visit('https://en.wikipedia.org/wiki/Main_Page');
      cy.title().should('contain', 'Wikipedia');
    });
  
    it('Can open the burger menu', () => {
      // Find the burger menu checkbox and click it
      cy.get('#vector-main-menu-dropdown-checkbox').click();
  
      // Verify that the menu content is visible
      cy.get('.vector-dropdown-content').should('be.visible');
      cy.contains('Main menu');
    });
  });
  