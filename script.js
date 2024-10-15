//your JS code here. If required.
describe('Accio Jobs website', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000'); // Ensure your server is running on this port
    });

    it('should render all main tags', () => {
        cy.get('h1').should('exist');
        cy.get('h2').should('exist');
        cy.get('img').should('exist');
    });

    it('should display correct marquee content', () => {
        cy.get('marquee h1').should('contain', 'Welcome to Accio Jobs!');
    });

    it('should have images with height 200px', () => {
        cy.get('img').each(($img) => {
            cy.wrap($img).should('have.css', 'height', '200px');
        });
    });

    it('should have valid links for articles', () => {
        cy.get('.article a').each(($link) => {
            cy.wrap($link).should('have.attr', 'href').and('not.be.empty');
        });
    });

    it('should have valid image sources', () => {
        cy.get('img').each(($img) => {
            cy.wrap($img).should('have.attr', 'src').and('not.be.empty');
        });
    });
});