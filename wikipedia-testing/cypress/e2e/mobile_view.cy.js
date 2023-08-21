describe('Wikipedia Test', () => {
    beforeEach(() => {
        // Set the viewport to simulate a mobile device
        cy.viewport('iphone-x');
    });

    it('Should load the Wikipedia homepage', () => {
        cy.visit('https://www.wikipedia.org/');
        cy.title().should('contain', 'Wikipedia');
    });
});
