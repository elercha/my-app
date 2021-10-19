describe('Super-Admin Test', function () {
    it('Gets, types and asserts', function () {
        cy.visit('https://superadmin.clh-staging.com/login')

        cy.get('#email')
            .type('ericlercha+admin@gmail.com')
            .should('have.value', 'ericlercha+admin@gmail.com')

        cy.get('#password')
            .type('Ericlerch1!')

        cy.contains('Log In').click()

        cy.get('.navbar-right > :nth-child(2) > a').click()

        cy.pause()
        cy.get('.dropdown-trigger > .text-90').click()
        cy.get('.block').click()
    });
});

describe('Provider-Admin Test', function () {
    it('Gets, types and asserts', function () {
        cy.visit('https://superadmin.clh-staging.com/login')

        cy.get('#email')
            .type('ericlercha+admin@gmail.com')
            .should('have.value', 'ericlercha+admin@gmail.com')

        cy.get('#password')
            .type('Ericlerch1!')

        cy.contains('Log In').click()

        cy.get('.navbar-right > :nth-child(3) > a').click()

        cy.pause()
        cy.get('.callback-admin-fix > .dropdown-toggle').click()
        cy.get('.callback-admin-fix > .dropdown-menu > :nth-child(2) > a').click()

    });
});
