import React from "react"
import { render } from "@testing-library/react"
import Routes from "./Routes"

test("renders default Route", () => {
  const { container, debug } = render(<Routes />)
  const home = container.querySelector(".Home")
  expect(home).toBeInTheDocument()
})
