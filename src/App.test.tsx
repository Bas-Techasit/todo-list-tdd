import { render, screen } from '@testing-library/react';
import App from './App';
import AddItem from './components/AddItem';
import userEvent from '@testing-library/user-event';

describe('Todo List App.', () => {

  describe('When the user visited websit first time.', () => {

    test('Should be visible the title "Todo List"', () => {
        render(<App />)
        const title = screen.getByTestId('title')
        expect(title.innerHTML).toContain("Todo List")
    })

    test('The input field should be empty " "', () => {
      render(<AddItem />)
      const inputElement: HTMLInputElement = screen.getByTestId('addItemField')
      expect(inputElement.value).toBe('')
    })

    test('Add-Button should be disable', () => {
      render(<AddItem />) 
      const buttonElement: HTMLButtonElement = screen.getByTestId('addButton')
      expect(buttonElement.innerHTML).toBe('Add')
      expect(buttonElement).toBeDisabled()
    })

    test('Should be show message "Todo List is Empty"', () => {
      render(<App />)
      const message = screen.queryByText(/Todo List is empty/i)
      expect(message).toBeInTheDocument()
    })
  })

  describe('User add somthing to the list.', () => {

    test('When user type in the text field, the add-button should enable.', () => {
      render(<AddItem />)
      const inputField: HTMLInputElement = screen.getByTestId('addItemField')
      userEvent.type(inputField, 'Do somthing that amazing!')
      expect(inputField.value).toBe('Do somthing that amazing!')
      
      const addButton: HTMLButtonElement = screen.getByTestId('addButton')
      expect(addButton).toBeEnabled()
    })
  })
})