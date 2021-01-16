import React from "react"
import { render } from "@testing-library/react"
import { MediaTest } from "./MediaTest"

test("renders react App", () => {})

const { getByText } = render(<MediaTest />)
const element = getByText(/MediaTest/i)
expect(element).toBeInTheDocument()
