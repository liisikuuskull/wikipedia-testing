describe('Wikipedia Test', () => {
    it('Should load the Wikipedia homepage', () => {
      cy.visit('https://www.wikipedia.org/');
      cy.title().should('contain', 'Wikipedia');
    });
  
    context('Wikipedia', () => {
      beforeEach(() => {
        cy.visit('https://en.wikipedia.org/wiki/Main_Page');
      });
  
      it('has an img on the page', () => {
        cy.get('img').should('exist');
      });
    });
  });
  