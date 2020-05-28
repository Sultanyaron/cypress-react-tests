describe('App initialization', () => {
	it('Loads todos on page load', () => {
		// This is a pre written command in isde the cypress/supprt/commands
		cy.seedAndVisit();
		cy.get('.todo-list li').should('have.length', 4);
	});

	it('Displays an error on failure when app loads', () => {
		cy.server();
		cy.route({
			url: '/api/todos',
			method: 'GET',
			status: 500,
			response: {},
		});
		cy.visit('/');

		cy.get('.todo-list li').should('not.exist');
		cy.get('.error').should('be.visible');
	});
});
