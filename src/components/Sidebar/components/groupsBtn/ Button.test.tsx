import React from 'react'
import { Button } from './Button'
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

describe('Button Sidebar', () => {
  it('should call onClickHandler on  button click', () => {
    const onClickHandlerSpy = jest.fn()
    const { getByText } = render(<Button onClick={onClickHandlerSpy} />)

    userEvent.click(getByText('Follow'))

    expect(onClickHandlerSpy).toHaveBeenCalledTimes(1)
    expect(onClickHandlerSpy).toHaveBeenCalledWith(false)

    userEvent.click(getByText('Subs...'))

    expect(onClickHandlerSpy).toHaveBeenCalledTimes(2)
    expect(onClickHandlerSpy).toHaveBeenCalledWith(true)
  })
})
