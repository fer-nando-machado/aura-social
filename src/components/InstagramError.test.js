import React from "react"
import { render } from "@testing-library/react"
import InstagramError from "./InstagramError"

test("renders InstagramError", () => {
  const { container, getByText } = render(<InstagramError message="an error" />)

  const message = getByText(/an error/i)
  expect(message).toBeInTheDocument()

  const retry = getByText(/try again/i)
  expect(retry).toBeInTheDocument()

  const link = container.querySelector(".Link")
  expect(link).toHaveAttribute("href", "/aura-social/")
})
