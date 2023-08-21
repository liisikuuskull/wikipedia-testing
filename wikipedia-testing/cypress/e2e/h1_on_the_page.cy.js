describe('Wikipedia Test', () => {
    it('Should load the Wikipedia homepage', () => {
      cy.visit('https://www.wikipedia.org/');
      cy.title().should('contain', 'Wikipedia');
    });
  
    context('Wikipedia', () => {
      beforeEach(() => {
        cy.visit('https://www.wikipedia.org/');
      });
  
      it('has an h1 on the page', () => {
        cy.get('h1').should('exist');
      });
    });
  });
  