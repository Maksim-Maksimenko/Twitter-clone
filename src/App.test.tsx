import React from "react"
import { render } from "@testing-library/react"
import { App } from "./App"
import { createMemoryHistory } from "history"
import { Router } from "react-router-dom"

test("renders react App", () => {})
const history = createMemoryHistory()
const { getByText } = render(
  <Router history={history}>
    <App />
  </Router>
)
const element = getByText(/Trends for you/i)
expect(element).toBeInTheDocument()
