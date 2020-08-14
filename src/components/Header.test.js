import React from "react"
import { render } from "@testing-library/react"
import Header from "./Header"

test("renders Header", () => {
  const { container, getByText, getByAltText } = render(<Header />)

  const title = getByText(/Aura Social/i)
  expect(title).toBeInTheDocument()

  const img = getByAltText(/Aura Social/i)
  expect(img).toBeInTheDocument()
  expect(img.src).toContain(`${process.env.REACT_APP_IMAGES}lotus.svg`)

  expect(container.firstChild).toHaveClass("Header")
  expect(container.firstChild).not.toHaveClass("HeaderInner")
})

test("renders Header with inner variant", () => {
  const { container } = render(<Header inner={true} />)
  expect(container.firstChild).toHaveClass("Header")
  expect(container.firstChild).toHaveClass("HeaderInner")
})
