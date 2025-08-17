//import { cy } from '@faker-js/faker'
import { Given, When, And, Then } from 'cypress-cucumber-preprocessor/steps'

Given('que o usuário acessa a página de WebTables', () => {
    cy.visit('/')
    cy.validarAcessarWebTable()
})

When('o usuário abre o formulário de cadastro', () => {
    cy.acessarWebTable()
})

And('informa todos os campos obrigatórios com dados válidos', () => {
    cy.preencherCampos()
})

And('confirma o envio do formulário', () => {
    cy.confirmarEnvio()
})

Then('o sistema mostra o novo registro filtrado pelo email', () => {
    cy.filtroEmail()
})

And('os valores preenchidos aparecem corretamente na linha', () => {
    cy.validarDados()
})

Given('que existe um registro previamente inserido', () => {
    cy.acessarWebTable()
    cy.preencherCampos()
    cy.confirmarEnvio()
    cy.filtroEmail()
})

When('o usuário edita o cadastro desse registro', () => {
    cy.editarCadastro()
})

Then('o sistema exibe o registro alterado com os novos valores', () => {
    cy.carregarDados()
    cy.validarDadosEditados()
})

When('o usuário exclui o cadastro', () => {
    cy.excluirCadastro()
})

Then('o sistema não deve listar mais esse registro', () => {
    cy.validarRegistroExcluido()
})