
beforeEach(() => {
  cy.visit('http://localhost:3000')
})

describe('Todo List app', () => {
  it('User visited this website first time.', () => {
      cy.get('[data-testid="title"]')
        .should('be.visible')
        .contains('Todo List')

      cy.get('[data-testid="addItemField"]')
        .should('have.value', '')
      
      cy.get('[data-testid="addButton"')
        .should('be.disabled')

      cy.contains(/Todo List is empty!/i)
  })

  it('User add a something in the list.', () => {
    cy.get('[data-testid="addItemField"')
      .type('Do something that amazing!')

    cy.get('[data-testid="addButton"]')
      .should('be.enabled')
      .click()
    
    cy.get('[data-testid="addItemField"]')
      .should('have.value', '')

    cy.get('[data-testid="textContent"]')
      .should('contain.text', 'Do something that amazing!')

    cy.get('[data-testid="checkButton"]')
      .should('be.visible')

    cy.get('[data-testid="deleteButton"]')
      .should('be.visible')

    cy.findByText(/Todo list is empty!/i)
      .should('not.exist')
  })
})