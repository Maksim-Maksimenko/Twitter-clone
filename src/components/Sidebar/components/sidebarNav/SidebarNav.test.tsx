import React from "react"
import { SidebarNav } from "./SidebarNav"
import { render } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { Router } from "react-router-dom"
import { createMemoryHistory } from "history"

describe("Button", () => {
  it("should call onClickHandler on Tweet button click", () => {
    const onClickHandlerSpy = jest.fn()
    const history = createMemoryHistory()
    const { getByText } = render(
      <Router history={history}>
        <SidebarNav onClickHandler={onClickHandlerSpy} />
      </Router>
    )

    userEvent.click(getByText("Terms"))

    expect(onClickHandlerSpy).toHaveBeenCalled()
  })
})
