describe('Color Testing', () => {
    it('Should check the color of elements', () => {
        
        cy.visit('https://en.wikipedia.org/wiki/Main_Page');

        // Find elements whose color you want to test
        cy.get('#mp-tfa-h2').should('have.css', 'background-color').and('eq', 'rgb(206, 242, 224)'); 
        cy.get('#mp-tfa-h2').should('have.css', 'border-color').and('eq', 'rgb(163, 191, 177)');

        // You can also test other elements and colors as needed
        cy.get('.mw-parser-output #mp-right .mp-h2').should('have.css', 'background-color').and('eq', 'rgb(206, 223, 242)'); 
        cy.get('.mw-parser-output #mp-right .mp-h2').should('have.css', 'border-color').and('eq', 'rgb(163, 176, 191)'); 

        cy.get('.mw-parser-output #mp-left .mp-h2').should('have.css', 'background-color').and('eq', 'rgb(206, 242, 224)'); 
        cy.get('.mw-parser-output #mp-left .mp-h2').should('have.css', 'border-color').and('eq', 'rgb(163, 191, 177)'); 
    });
});
