/// <reference types="cypress" />

import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';

Given('que o usuário está na página de login do swags labs', () => {
    cy.visit('https://www.saucedemo.com/');
    cy.log('Navegou para a página de login do Swag Labs');
});

When('o usuário informar usuário e senha', () => {
    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.log('Usuário informou credenciais');
});

When('clique no botão Login', () => {
    cy.get('[data-test="login-button"]').click();
});

Then('o usuário deve ser redirecionado para a página Products', () => {
    cy.get('[data-test="title"]').should('be.visible');
    cy.log('Usuário foi redirecionado para a página Products com sucesso');
    cy.screenshot();
});

// Cenário: Login inválido - Usuário inválido
When('o usuário informar um usuário inválido e uma senha válida', () => {
    cy.get('[data-test="username"]').type('usuario_invalido');
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.log('Usuário informou usuário inválido e senha válida');
});

Then('o usuário deve ver uma mensagem de erro indicando que o usuário não existe', () => {
    cy.get('[data-test="error"]').should('contain', 'Username and password do not match');
    cy.log('Mensagem de erro de usuário inválido exibida');
    cy.screenshot();
});

// Cenário: Login inválido - Senha inválida
When('o usuário informar um usuário válido e uma senha inválida', () => {
    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').type('senha_invalida');
    cy.log('Usuário informou usuário válido e senha inválida');
});

Then('o usuário deve ver uma mensagem de erro indicando que a senha está incorreta', () => {
    cy.get('[data-test="error"]').should('contain', 'Username and password do not match');
    cy.log('Mensagem de erro de senha inválida exibida');
    cy.screenshot();
});

// Cenário: Login inválido - Username vazio
When('o usuário deixar o campo de username vazio e informar uma senha válida', () => {
    cy.get('[data-test="username"]').clear();
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.log('Usuário deixou username vazio e informou senha válida');
});

Then('o usuário deve ver uma mensagem de erro indicando que o username é obrigatório', () => {
    cy.get('[data-test="error"]').should('contain', 'Username is required');
    cy.log('Mensagem de erro de username obrigatório exibida');
    cy.screenshot();
});

// Cenário: Login inválido - Senha vazia
When('o usuário informar um username válido e deixar o campo de senha vazio', () => {
    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').clear();
    cy.log('Usuário informou username válido e deixou senha vazia');
});

Then('o usuário deve ver uma mensagem de erro indicando que a senha é obrigatória', () => {
    cy.get('[data-test="error"]').should('contain', 'Password is required');
    cy.log('Mensagem de erro de senha obrigatória exibida');
    cy.screenshot();
});

// Cenário: Login inválido - Várias combinações
When('o usuário informar {string} e {string}', (username, password) => {
    if (username != '') {
        cy.log('USername fornecido: ' + username );
        cy.get('[data-test="username"]').clear().type(username);
    } else {
        cy.get('[data-test="username"]').clear();
    }
    if (password) {
        cy.get('[data-test="password"]').clear().type(password);
    } else {
        cy.get('[data-test="password"]').clear();
    }
    cy.log(`Usuário informou username: '${username}' e password: '${password}'`);
});

Then('o usuário deve ver a mensagem de erro {string}', (errorMessage) => {
    cy.get('[data-test="error"]').should('contain', errorMessage);
    cy.log(`Mensagem de erro esperada exibida: ${errorMessage}`);
    cy.screenshot();
});