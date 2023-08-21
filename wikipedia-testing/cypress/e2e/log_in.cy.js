  describe('Wikipedia Test', () => {
    it('Should load the Wikipedia homepage', () => {
      cy.visit('https://www.wikipedia.org/');
      cy.title().should('contain', 'Wikipedia');
    });
  
    context('Wikipedia', () => {
      beforeEach(() => {
        cy.visit('https://en.wikipedia.org/w/index.php?title=Special:UserLogin&returnto=Main+Page');
      });
  
      it('types into an username field', () => {
        cy.visit('https://en.wikipedia.org/w/index.php?title=Special:UserLogin&returnto=Main+Page');
      
        // Wait for the form to load
        cy.get('#userloginForm', { timeout: 10000 }).should('be.visible');
      
        // Type into the username and password fields
        cy.get('#wpName1').type('marimaasikas680');
        cy.get('#wpPassword1').type('MariMaasikas555&');

        cy.get('#wpLoginAttempt').click();
      
        // Wait for a moment
        cy.wait(1000);
      
        console.log('test is finished');
      });
      
    });
  });
  