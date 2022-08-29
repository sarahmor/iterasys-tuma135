Cypress.Commands.add('login', (email, password) => {
    cy.request({
        method: 'POST',
        url: '/api/auth',
        body :{
            email: email,
            password: password
        }
    }).then(({ status }) => {
        expect(status).to.eq(200)

        Cypress.Cookies.defaults({
            preserve: 'jwt'
        })

        // cy.log(body.jwt)
        // jwtPedro = body.jwt
    })
})

Cypress.Commands.add('getElement', (seletor) => {
    return cy.get(`[data-test=${seletor}]`)
})