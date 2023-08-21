
/*
describe('Wikipedia Test', () => {
    it('Should load the Wikipedia homepage', () => {
        cy.visit('https://en.wikipedia.org/wiki/Main_Page');
        cy.title().should('contain', 'Wikipedia');
    });

    it('Can open the language dropdown and select Eesti', () => {
        // Find and click the "47 languages" element using cy.contains
        cy.contains('47 languages').click();

        // Wait for the dropdown content to be visible
        cy.get('.uls-search-trigger', { timeout: 10000 }).should('be.visible');

        // Choose Eesti (Estonian) from the dropdown
        cy.contains('Eesti').click();

        // Wait for a moment to allow the page to switch languages
        cy.wait(3000);

        // Verify that the page has been translated to Eesti
        cy.contains('Tere tulemast Vikipeediasse').should('be.visible'); // Text in Estonian
    });
});

*/


describe('Wikipedia Test', () => {
    it('Should load the Wikipedia homepage', () => {
        cy.visit('https://en.wikipedia.org/wiki/Main_Page');
        cy.title().should('contain', 'Wikipedia');
    });

    it('Can open the language dropdown and select a language', () => {
        // Find and click the "47 languages" element
        cy.contains('47 languages').click();

        // Wait for the dropdown content to be visible
        cy.get('.uls-search-trigger', { timeout: 10000 }).should('be.visible');

        // Click on the specific list item based on its content
        cy.contains('.vector-dropdown-label-text', 'Language 8').click(); // Replace 'Language 8' with the actual content

        // Wait for a moment to allow the page to switch languages
        cy.wait(3000);

        // Verify that the page has been translated to the selected language
        cy.contains('Tere tulemast Vikipeediasse').should('be.visible');
    });
});
