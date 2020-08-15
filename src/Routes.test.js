import React from "react"
import { render } from "@testing-library/react"
import Routes from "./Routes"

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useLocation: () => ({
    search: "?code=1234567890&error_description=this+is+an+error",
  }),
}))

jest.mock("./Home", () => ({ query }) => <div className="Home" {...query} />)

test("renders default Route with query params", () => {
  const { container, debug } = render(<Routes />)
  const home = container.querySelector(".Home")
  expect(home).toBeInTheDocument()
  expect(home).toHaveAttribute("code", "1234567890")
  expect(home).toHaveAttribute("error", "this is an error")
})
