import { render, screen } from '@testing-library/react';
import App from './App';
import AddItem from './components/AddItem';

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
  })
})