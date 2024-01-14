describe('Login and movie validation', () => {
	it('must login and navigate to movie details', () => {
		cy.visit('http://localhost:3000/login')
		cy.get('input[name="email"]').type('email@email.com')
		cy.get('input[name="password"]').type('123')
		cy.get('button[type="submit"]').click()
		cy.url().should('include', '/home')

		cy.get('.home-movie-card').should('have.length', 20)

		cy.get('.home-movie-card').first().click()
		cy.url().should('include', '/movie')

		cy.get('img').should('have.a.attr', 'src')
		cy.get('h2').should('not.be.empty')
		cy.get('p').should('not.be.empty')
	})
})
