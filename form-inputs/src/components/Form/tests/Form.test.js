import { render, screen, cleanup, fireEvent } from '@testing-library/react'
import { act } from 'react-dom/test-utils'
import { Form } from '../Form'


afterEach(() => {
    cleanup()
})

//Checking random things to see if they are loaded
test('Should render Form component', () => {
    render(<Form />)
    const formElement = screen.getByTestId('form-element')
    expect(formElement).toBeInTheDocument()
    expect(formElement).toHaveTextContent('Form Inputs')
    expect(formElement).toContainHTML('<input type="text" placeholder="Put text"')
})

//Checking if the buttons are loaded

test('Should have submit & reset buttons', () => {
    render(<Form />)
    const submitBtn = screen.getByTestId('submit-btn')
    const resetBtn = screen.getByTestId('reset-btn')
    expect(submitBtn).toBeInTheDocument()
    expect(resetBtn).toBeInTheDocument()
})

// Testing if user sees the error

test('Should have error messages', async () => {
    const { container } = render(<Form />)

    await act(async () => {
        const textInput = screen.getByTestId('text-input')
        fireEvent.change(textInput, { target: { value: 'nesh' } })
        fireEvent.blur(textInput)
    })
    await act(async () => {
        const urlInput = screen.getByTestId('url-input')
        fireEvent.change(urlInput, { target: { value: 'nesh' } })
        fireEvent.blur(urlInput)
    })
    expect(container.innerHTML).toMatch('Text need to be at least 6 charters')
    expect(container.innerHTML).toMatch('Url is invalid')
})

test('There should be no error', async () => {
    const { container } = render(<Form />)

    await act(async () => {
        const textInput = screen.getByTestId('text-input')
        fireEvent.change(textInput, { target: { value: 'some text' } })
        fireEvent.blur(textInput)
    })
    await act(async () => {
        const urlInput = screen.getByTestId('url-input')
        fireEvent.change(urlInput, { target: { value: 'https://asdasd.com' } })
        fireEvent.blur(urlInput)
    })
    expect(container.innerHTML).not.toMatch('Text need to be at least 6 charters')
    expect(container.innerHTML).not.toMatch('Url is invalid')
})
test('Reset button functionality', async () => {
    const { container } = render(<Form />)

    await act(async () => {
        const textInput = screen.getByTestId('text-input')
        const resetBtn = screen.getByTestId('reset-btn')
        fireEvent.change(textInput, { target: { value: 'some text' } })
        fireEvent.click(resetBtn)
    })

    expect(container.innerHTML).not.toMatch('some text')
})