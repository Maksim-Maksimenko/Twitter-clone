import React from 'react'
import { render } from '@testing-library/react'
import App from './App'

test('renders react App', () => {
  const { getByText } = render(<App />)
  const element = getByText(/Twitter/i)
  expect(element).toBeInTheDocument()
})
