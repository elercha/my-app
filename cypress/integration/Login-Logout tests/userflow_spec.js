describe('Login-Logout Nurse Test', function () {
    it('Gets, types and asserts', function () {
        cy.visit('https://provider.clh-staging.com/login')

        cy.get('#email')
            .type('ericlercha+nurse@gmail.com')
            .should('have.value', 'ericlercha+nurse@gmail.com')

        cy.get('#password')
            .type('Ericlerch1!')

        cy.contains('Log In').click()

        cy.pause()
        cy.get('.callback-admin-fix > .dropdown-toggle').click()

        cy.get(':nth-child(5) > a').click()

    });
});

describe('Login-Logout Provider Test', function () {
    it('Gets, types and asserts', function () {
        cy.visit('https://provider.clh-staging.com/login')

        cy.get('#email')
            .type('ericlercha+provider@gmail.com')
            .should('have.value', 'ericlercha+provider@gmail.com')

        cy.get('#password')
            .type('Ericlerch1!')

        cy.contains('Log In').click()

        cy.pause()
        cy.get('.callback-admin-fix > .dropdown-toggle').click()

        cy.get('.callback-admin-fix > .dropdown-menu > :nth-child(2) > a').click()

    });
});

describe('Login-Logout Admin Test', function () {
    it('Gets, types and asserts', function () {
        cy.visit('https://superadmin.clh-staging.com/login')

        cy.get('#email')
            .type('ericlercha+admin@gmail.com')
            .should('have.value', 'ericlercha+admin@gmail.com')

        cy.get('#password')
            .type('Ericlerch1!')

        cy.contains('Log In').click()

        cy.pause()
        cy.get('.navbar-right > :nth-child(4) > .dropdown-toggle').click()

        cy.get('.open > .dropdown-menu > :nth-child(3) > a').click()

    });
});

