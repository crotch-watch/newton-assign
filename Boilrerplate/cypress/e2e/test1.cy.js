/// <reference types="cypress" />

const LOCALHOST = 'http://localhost:3000/';

describe('Test Suite', () => {
  it('Fetch Posts', () => {
    cy.visit(LOCALHOST);
    cy.get('button').click();
    cy.wait(500);
    cy.get('.post').should('be.visible');
  });
});
