import React from "react"
import { render } from "@testing-library/react"
import InstagramStep from "./InstagramStep"

test("renders InstagramStep with simple message", () => {
  const { container, getByText, queryByText } = render(<InstagramStep message="doing something..." />)

  const message = getByText(/doing something.../i)
  expect(message).toBeInTheDocument()

  const retry = queryByText(/try again/i)
  expect(retry).not.toBeInTheDocument()
})

test("renders InstagramStep with error message and retry link", () => {
  const { container, getByText } = render(<InstagramStep message="an error" retry={true} />)

  const message = getByText(/an error/i)
  expect(message).toBeInTheDocument()

  const retry = getByText(/try again/i)
  expect(retry).toBeInTheDocument()

  const link = container.querySelector(".Link")
  expect(link).toHaveAttribute("href", "/aura-social/")
})
