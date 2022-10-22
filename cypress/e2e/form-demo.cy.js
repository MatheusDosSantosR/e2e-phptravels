describe('empty spec', () => {
    beforeEach(() => {
        cy.viewport(1368, 768)
    })

    it('Form filling.', () => {
        cy.visit('https://phptravels.com/demo/')
        cy.scrollTo('top')
        cy.get('.first_name').type('name', { force: true })
        cy.get('.last_name').type('last name', { force: true })
        cy.get('.business_name').type('bussines', { force: true })
        cy.get('.email').type('teste@teste.com', { force: true })
            //Somar numeros
        cy.get('#numb1').invoke('text').then((number1) => {
            cy.get('#numb2').invoke('text').then((number2) => {
                console.log(typeof number1, typeof number2)
                let result = parseInt(number1) + parseInt(number2)
                cy.get('#number').type(result, { force: true })
            })
        })
        cy.get('#demo').click({ force: true })
        cy.get('.animation-ctn').should('be.visible')
        cy.get('.completed > h2.text-center > strong').should('have.text', ' Thank you!')
    })
})