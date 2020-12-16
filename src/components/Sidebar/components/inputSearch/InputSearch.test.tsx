import React from 'react'
import { InputSearch } from './InputSearch'
import { render, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

describe('Input', () => {
  it('input value', () => {
    const KeyPressHandlerSpy = jest.fn()
    const { getByTestId } = render(<InputSearch KeyPressHandlerSpy={KeyPressHandlerSpy} />)
    const input = getByTestId('input')

    //вопросики
    fireEvent.change(input, { target: { value: 'test one' } })
    expect(input).toHaveValue('test one')

    fireEvent.change(input, { target: { value: '' } })

    userEvent.type(input, 'test two')
    expect(input).toHaveValue('test two')
  })
})
