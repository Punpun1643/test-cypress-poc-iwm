describe('Newsletter subscribe form', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })

    it('allows users to subscribe to email list', () => {
        cy.get('[data-test="email-input"]').type('example@gmail.com')
        cy.get('[data-test="submit-button"]').click()
        cy.get('[data-test="success-message"]').should('exist').contains('example@gmail.com')
    })

    it('does not allow invalid email address', () => {
        cy.get('[data-test="email-input"]').type('hoho')
        cy.get('[data-test="submit-button"]').click()
        cy.get('[data-test="success-message"]').should('not.exist')
    })

    it('does not allow already subscribed', () => {
        cy.get('[data-test="email-input"]').type('john@example.com')
        cy.get('[data-test="submit-button"]').click()
        cy.get('[data-test="server-error-message"]').should('exist').contains('already exists')
    })
})