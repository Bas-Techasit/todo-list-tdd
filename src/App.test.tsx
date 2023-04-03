import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import App from './App';

describe('Todo List App.', () => {

    describe('When the user visited website first time.', () => {

        test('Should be visible the title "Todo List"', () => {
            render(<App/>)
            const title = screen.getByTestId('title')
            expect(title.innerHTML).toContain("Todo List")
        })

        test('The input field should be empty " "', () => {
            render(<App/>)
            const inputElement: HTMLInputElement = screen.getByTestId('addItemField')
            expect(inputElement.value).toBe('')
        })

        test('Add-Button should be disable', () => {
            render(<App/>)
            const buttonElement: HTMLButtonElement = screen.getByTestId('addButton')
            expect(buttonElement.innerHTML).toBe('Add')
            expect(buttonElement).toBeDisabled()
        })

        test('Should be show message "Todo List is Empty"', () => {
            render(<App/>)
            const message = screen.queryByText(/Todo List is empty/i)
            expect(message).toBeInTheDocument()
        })
    })

    describe('User add something to the list.', () => {

        const fakeData = "Something"

        test('When user type in the text field, the add-button should enable.', async () => {
            render(<App/>)
            const inputField: HTMLInputElement = screen.getByTestId('addItemField')
            await userEvent.type(inputField, fakeData)
            expect(inputField.value).toBe(fakeData)

            const addButton: HTMLButtonElement = screen.getByTestId('addButton')
            expect(addButton).toBeEnabled()
        })

        test('Clean the text field, when user clicked the add-button.', async () => {
            render(<App/>)

            const inputField: HTMLInputElement = screen.getByTestId('addItemField')
            userEvent.type(inputField, fakeData)

            const addButton: HTMLButtonElement = screen.getByTestId('addButton')
            await userEvent.click(addButton)

            expect(inputField.value).toEqual('')
        })

        test('It Contains a list, When user clicked add-button.', async () => {
            render(<App />)

            const inputField: HTMLInputElement = screen.getByTestId('addItemField')
            const addButton: HTMLButtonElement = screen.getByTestId('addButton')

            await userEvent.type(inputField, fakeData)
            await userEvent.click(addButton)

            const checkbox: HTMLInputElement = screen.getByTestId('checkButton')
            expect(checkbox).toBeInTheDocument()
            expect(checkbox.type).toEqual('checkbox')

            const deleteButton: HTMLButtonElement = screen.getByTestId('deleteButton')
            expect(deleteButton).toBeInTheDocument()

            const text = screen.getByTestId('textContent')
            expect(text.innerHTML).toBe(fakeData)
            expect(screen.queryByText(/Todo list is empty!/i)).toBeNull()
        })

    })
})