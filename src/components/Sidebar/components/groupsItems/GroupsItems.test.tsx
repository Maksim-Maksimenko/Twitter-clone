import React from "react"
import { GroupsItem } from "./GroupsItems"
import { render } from "@testing-library/react"
import userEvent from "@testing-library/user-event"

/**
 * 1. Хотим проверить, что onClickHandler вызывается по клику на кнопку;
 */

describe("GroupsItems", () => {
  it("should call onClickHandler on show more button click", () => {
    const onClickHandlerSpy = jest.fn()
    const { getByText } = render(<GroupsItem onClickHandler={onClickHandlerSpy} />)

    userEvent.click(getByText("Show more"))

    expect(onClickHandlerSpy).toHaveBeenCalledTimes(1)
    expect(onClickHandlerSpy).toHaveBeenCalledWith(false)
  })

  it("render", () => {
    const onClickHandlerSpy = jest.fn()
    const { getAllByRole, getByText } = render(<GroupsItem onClickHandler={onClickHandlerSpy} />)
    expect(getAllByRole("listitem")).toHaveLength(3)

    userEvent.click(getByText("Show more"))

    expect(onClickHandlerSpy).toHaveBeenCalledTimes(1)
    expect(getAllByRole("listitem")).toHaveLength(6)
  })
})
