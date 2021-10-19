describe('Provider-Add a Patient Test', function () {
    it('Gets, types and asserts', function () {
        cy.visit('https://provider.clh-staging.com/login')

        cy.get('#email')
            .type('ericlercha+provider@gmail.com')
            .should('have.value', 'ericlercha+provider@gmail.com')

        cy.get('#password')
            .type('Ericlerch1!')

        cy.contains('Log In').click()

        cy.get('.icon--add-patient--big').click()
cy.pause()

    });
});

describe('Provider-Add a Note Test', function () {
    it('Gets, types and asserts', function () {
        cy.visit('https://provider.clh-staging.com/login')

        cy.get('#email')
            .type('ericlercha+provider@gmail.com')
            .should('have.value', 'ericlercha+provider@gmail.com')

        cy.get('#password')
            .type('Ericlerch1!')

        cy.contains('Log In').click()

        cy.get(':nth-child(1) > :nth-child(1) > div > .in-table-link').click()

    });
});
