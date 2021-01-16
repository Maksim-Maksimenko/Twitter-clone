import React from "react"
import { MenuItems } from "./MenuItems"
import { render } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { Router } from "react-router-dom"
import { createMemoryHistory } from "history"

describe("Item test", () => {
  it("should length 9 item", () => {
    const history = createMemoryHistory()
    const { getAllByRole } = render(
      <Router history={history}>
        <MenuItems />
      </Router>
    )
    expect(getAllByRole("listitem")).toHaveLength(9)
  })

  it("should change class item", async () => {
    const history = createMemoryHistory()
    const handleClickSpy = jest.fn()
    const { getByText } = render(
      <Router history={history}>
        <MenuItems handleClickSpy={handleClickSpy} />
      </Router>
    )

    const profile = getByText("Profile")
    const more = getByText("More")

    expect(profile).toHaveClass("titleActive")
    expect(more).not.toHaveClass("titleActive")

    userEvent.click(more, { shiftKey: true }) //вопросики

    expect(profile).not.toHaveClass("titleActive")
    expect(more).toHaveClass("titleActive")
  })
})
