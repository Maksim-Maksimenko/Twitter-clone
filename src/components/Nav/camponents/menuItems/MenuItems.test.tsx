import React from 'react'
import { MenuItems } from './MenuItems'
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

describe('Item test', () => {
  it('should length 9 item', () => {
    const { getAllByRole } = render(<MenuItems />)
    expect(getAllByRole('listitem')).toHaveLength(9)
  })

  it('should change class item', async () => {
    const handleClickSpy = jest.fn()
    const { getByText } = render(<MenuItems handleClickSpy={handleClickSpy} />)

    const profile = getByText('Profile')
    const more = getByText('More')

    expect(profile).toHaveClass('titleActive')
    expect(more).not.toHaveClass('titleActive')

    userEvent.click(more, { shiftKey: true }) //вопросики

    expect(profile).not.toHaveClass('titleActive')
    expect(more).toHaveClass('titleActive')
  })
})
