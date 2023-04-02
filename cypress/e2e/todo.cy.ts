
beforeEach(() => {
  cy.visit('http://localhost:3000')
})

describe('Todo List app', () => {
  it('When the user visits the website first time.', () => {
      cy.get('[data-testid="title"]')
        .should('be.visible')
        .contains('Todo List')

      cy.get('[data-testid="addItemField"]')
        .contains('')
      
      cy.get('[data-testid="addButton"')
        .should('be.disabled')

      cy.contains('Todo List is empty!')
  })
})