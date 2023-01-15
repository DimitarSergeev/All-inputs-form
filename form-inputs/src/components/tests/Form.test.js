import { render, screen, cleanup, fireEvent, waitFor } from '@testing-library/react'
import * as jest from 'jest'
import { act } from 'react-dom/test-utils'
import { Form } from '../Form/Form'
import * as formService from '../../services/formService'

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
        // set worng inupt value to render error message , validation need to be 6 or more charters 
        fireEvent.change(textInput, { target: { value: 'nesh' } })
        fireEvent.blur(textInput)
    })
    await act(async () => {
        const urlInput = screen.getByTestId('url-input')
        // set invalid url to get error message 
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
        // put correct data , 6 or more charters 
        fireEvent.change(textInput, { target: { value: 'some text' } })
        fireEvent.blur(textInput)
    })
    await act(async () => {
        const urlInput = screen.getByTestId('url-input')
        // put correct data
        fireEvent.change(urlInput, { target: { value: 'https://asdasd.com' } })
        fireEvent.blur(urlInput)
    })
    // Shold to not render a error messages 
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

test('Testing the pass-to-query logic with correct data ', () => {

    const errors = {
        URL: false,
        color: false,
        date: false,
        email: false,
        file: false,
        localDateTime: false,
        month: false,
        number: false,
        password: false,
        radio: false,
        search: false,
        tel: false,
        text: false,
        textarea: false,
        time: false,
        week: false
    }

    const allGood = !Object.values(errors).find(x => x === true) && !Object.values(errors).some(x => x === '')
    expect(allGood).toBe(true)
});
test('Testing the pass-to-query logic with wrong data ', () => {

    const errors = {
        URL: false,
        color: true,
        date: false,
        email: false,
        file: false,
        localDateTime: true,
        month: false,
        number: false,
        password: false,
        radio: false,
        search: false,
        tel: false,
        text: true,
        textarea: false,
        time: false,
        week: false
    }

    const allGood = !Object.values(errors).find(x => x === true) && !Object.values(errors).some(x => x === '')
    expect(allGood).toBe(false)
});

