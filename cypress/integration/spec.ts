describe('My First Test', () => {
  it('Visits the initial project page', () => {
    cy.visit('/')
    cy.contains('Exemplos Material Angular')
    cy.contains('Shiba Inu')
    cy.contains('SHARE').click()
    cy.contains('Badge').click()
    cy.contains('Action').click()
    cy.contains('Botões').click()
  })
})
