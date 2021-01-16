import React from "react"
import { render } from "@testing-library/react"
import { LikesTest } from "./LikesTest"

test("renders react App", () => {})

const { getByText } = render(<LikesTest />)
const element = getByText(/LikesTest/i)
expect(element).toBeInTheDocument()
