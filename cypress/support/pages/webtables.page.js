const VL_PAGE = '.text-center'
const ADD_BT = '#addNewRecordButton'
const SUMIT_BT = '#submit'
const FIST_NAME_CP = '#firstName'
const LAST_NAME_CP = '#lastName'
const EMAIL_CP = '#userEmail'
const AGE_CP = '#age'
const SALARY_CP = '#salary'
const DEPARTMENT_CP = '#department'
const EDIT_BT = '#edit-record-4'

Cypress.Commands.add('validarAcessarWebTable', () => {
    cy.get(VL_PAGE).should('be.visible')
})

Cypress.Commands.add('acessarWebTable', () => {
    cy.get(ADD_BT).should('be.visible').click()
})

Cypress.Commands.add('preencherCampos', () => {
    cy.get(FIST_NAME_CP).type(Cypress.env('firstName'),{log: false})
    cy.get(LAST_NAME_CP).type(Cypress.env('lastName'),{log: false})
    cy.get(EMAIL_CP).type(Cypress.env('email'),{log: false})
    cy.get(AGE_CP).type(Cypress.env('age'),{log: false})
    cy.get(SALARY_CP).type(Cypress.env('salary'),{log: false})
    cy.get(DEPARTMENT_CP).type(Cypress.env('department'),{log: false})
})

Cypress.Commands.add('confirmarEnvio', () => {
    cy.get(SUMIT_BT).click()
})

Cypress.Commands.add('filtroEmail', () => {
    cy.get('#searchBox').type(Cypress.env('email'), { log: false })
    cy.get('.rt-tbody').should('contain',Cypress.env('email'), { log: false })
})

Cypress.Commands.add('validarDados', () => {
    cy.get('.rt-tbody').should('contain', Cypress.env('firstName'))
    cy.get('.rt-tbody').should('contain', Cypress.env('lastName'))
    cy.get('.rt-tbody').should('contain', Cypress.env('email'))
    cy.get('.rt-tbody').should('contain', Cypress.env('age'))
    cy.get('.rt-tbody').should('contain', Cypress.env('salary'))
    cy.get('.rt-tbody').should('contain', Cypress.env('department'))
})

Cypress.Commands.add('editarCadastro', () => {
    cy.get(EDIT_BT).click()
    cy.get(FIST_NAME_CP).clear().type('o usuario editou o nome')
    cy.get(LAST_NAME_CP).clear().type('o usuario editou o snome')
    const email = Cypress.env('emailGerado')
    cy.get(EMAIL_CP).clear().type(email)
    cy.get(AGE_CP).clear().type('18')
    cy.get(SALARY_CP).clear().type('12345678')
    cy.get(DEPARTMENT_CP).clear().type('dep editar')
    cy.get(SUMIT_BT).click()    
    })    

Cypress.Commands.add('carregarDados', () => {
    const email = Cypress.env('emailGerado')
    cy.get('#searchBox').clear().type(email, { log: false })
})    

Cypress.Commands.add('validarDadosEditados', () => {
  cy.contains('.rt-tr-group', Cypress.env('emailGerado'))
    .should('exist')
    .within(() => {
      cy.get('.rt-td').eq(0).should('have.text', 'o usuario editou o nome')    
      cy.get('.rt-td').eq(1).should('have.text', 'o usuario editou o snome')    
      cy.get('.rt-td').eq(2).should('have.text', '18')                          
      cy.get('.rt-td').eq(3).should('have.text', Cypress.env('emailGerado'))    
      cy.get('.rt-td').eq(4).should('have.text', '12345678')                    
      cy.get('.rt-td').eq(5).should('have.text', 'dep editar') 
    })
})

Cypress.Commands.add('excluirCadastro', () => {
    cy.get('#delete-record-4').click()
})

Cypress.Commands.add('validarRegistroExcluido', () => {
    cy.get('.rt-tbody').should('not.contain', Cypress.env('emailGerado'))
})