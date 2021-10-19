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

describe('Add a note test', function () {
    it('Gets, types and asserts', function () {
        cy.visit('https://provider.clh-staging.com/login')

        cy.get('#email')
            .type('ericlercha+nurse@gmail.com')
            .should('have.value', 'ericlercha+nurse@gmail.com')

        cy.get('#password')
            .type('Ericlerch1!')

        cy.contains('Log In').click()

        cy.get('[data-order="Carla Reyes"] > .patientNameLink').click()
        cy.get('.col-sm-6 > .btn').click()
        cy.get('#activityKey').select('CCM Welcome Call')
        cy.get('#activityKey').should('have.value', 'CCM Welcome Call')
        cy.get('#note').type('hola')

        cy.get('#Submit').click()
        cy.get('#update').click()





    });
});
