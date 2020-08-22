import React from "react"
import { render } from "@testing-library/react"
import InstagramStep from "./InstagramStep"

test("renders InstagramStep with a simple message", () => {
  const { container, getByText, queryByText } = render(<InstagramStep message="doing something..." />)

  const message = getByText(/doing something.../i)
  expect(message).toBeInTheDocument()
})
