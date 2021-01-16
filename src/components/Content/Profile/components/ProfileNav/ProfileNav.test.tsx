import React from "react"
import { render } from "@testing-library/react"
import { Router } from "react-router-dom"
import { createMemoryHistory } from "history"
import { ProfileNav } from "./ProfileNav"
import userEvent from "@testing-library/user-event"

// вопросики
describe("React Router", () => {
  it("should render the home page", () => {
    const history = createMemoryHistory()
    const { container, getByTestId } = render(
      <Router history={history}>
        <ProfileNav />
      </Router>
    )

    const nav = getByTestId("Tweets") //название пункта меню
    const link = getByTestId("Tweets") // путь, ссылка
    expect(container.innerHTML).toMatch("Tweets") // проверяем имя пункта
    expect(nav).toContainElement(link) // пункт меню имеет ссылку
  })

  it("should navigate to the contact page", () => {
    const history = createMemoryHistory()
    const { container, getByTestId } = render(
      <Router history={history}>
        <ProfileNav />
      </Router>
    )

    userEvent.click(getByTestId("Media"))
    expect(container.innerHTML).toMatch("Media")
  })
})
