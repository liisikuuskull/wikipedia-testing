describe('Wikipedia Test', () => {
  it('Should load the Wikipedia homepage', () => {
    cy.visit('https://www.wikipedia.org/');
    cy.title().should('contain', 'Wikipedia');
  });
});
