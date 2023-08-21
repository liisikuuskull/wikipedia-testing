describe('Wikipedia Test', () => {
    it('Should load the Wikipedia homepage', () => {
      cy.visit('https://www.wikipedia.org/');
      cy.title().should('contain', 'Wikipedia');
    });
  
    context('Wikipedia', () => {
      beforeEach(() => {
        cy.visit('https://www.wikipedia.org/');
      });
  
      it('has a search bar', () => {
        cy.get('#searchInput', { timeout: 10000 }).should('exist');
      });
  
      it('can type into the search bar', () => {
        const searchText = 'Cypress testing';
        cy.get('#searchInput').type(searchText).should('have.value', searchText);
      });

      /*

      it('displays search results', () => {
        const searchText = 'Cypress testing';
        cy.get('#searchInput').type(searchText);
        cy.get('#search-form').submit(); // Simulate pressing Enter
        cy.get('.search-result').should('exist');
      });
      
      it('can submit a search', () => {
        const searchText = 'Cypress testing';
        cy.get('#searchInput').type(searchText);
        cy.get('#search-form button[type="submit"]').click();
        cy.url().should('include', `search=${searchText}`);
      });
  
      it('displays search results', () => {
        const searchText = 'Cypress testing';
        cy.get('#searchInput').type(searchText);
        cy.get('#search-form button[type="submit"]').click();
        cy.get('.search-result').should('exist');
      });

      */
    });
  });
  