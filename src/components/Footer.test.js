import React from "react"
import { render } from "@testing-library/react"
import Footer from "./Footer"

test("renders Footer", () => {
  const { container, getByText } = render(<Footer />)
  const links = container.querySelectorAll(".Link")

  const author = getByText(/Made with ♡ by Fernando Machado/i)
  expect(author).toBeInTheDocument()
  expect(links[0]).toHaveAttribute("href", "https://fernandomachado90.github.io/")

  const icons = getByText(/Icons by Good Ware/i)
  expect(icons).toBeInTheDocument()
  expect(links[1]).toHaveAttribute("href", "https://www.flaticon.com/authors/good-ware")
})
