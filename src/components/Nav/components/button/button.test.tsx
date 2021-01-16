import React from "react"
import { Button } from "./Button"
import { render } from "@testing-library/react"
import { createMemoryHistory } from "history"
import { Router } from "react-router-dom"

describe("Button", () => {
  it("should render link tweet", () => {
    const history = createMemoryHistory()
    const { container, getByTestId, getByText } = render(
      <Router history={history}>
        <Button />
      </Router>
    )
    // вопросики
    const nav = getByText("Tweet") //название пункта меню
    const link = getByTestId("testBtn") // путь, ссылка
    expect(container.innerHTML).toMatch("Tweet") // проверяем имя пункта
    expect(nav).toContainElement(link) // пункт меню имеет ссылку
  })
})
