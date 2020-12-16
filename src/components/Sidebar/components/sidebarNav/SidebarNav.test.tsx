import React from 'react'
import { SidebarNav } from './SidebarNav'
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

describe('Button', () => {
  it('should call onClickHandler on Tweet button click', () => {
    const onClickHandlerSpy = jest.fn()
    const { getByText } = render(<SidebarNav onClickHandler={onClickHandlerSpy} />)

    userEvent.click(getByText('Terms'))

    expect(onClickHandlerSpy).toHaveBeenCalled()
  })
})
