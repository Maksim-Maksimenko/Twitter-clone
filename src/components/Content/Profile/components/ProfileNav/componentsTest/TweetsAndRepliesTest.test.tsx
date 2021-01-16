import React from "react"
import { render } from "@testing-library/react"
import { TweetsAndRepliesTest } from "./TweetsAndRepliesTest"

test("renders react App", () => {})

const { getByText } = render(<TweetsAndRepliesTest />)
const element = getByText(/TweetsAndRepliesTest/i)
expect(element).toBeInTheDocument()
