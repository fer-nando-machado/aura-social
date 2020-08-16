import React from "react"
import { render, act, waitFor } from "@testing-library/react"
import Home from "./Home"

import api from "./external/api"
jest.mock("./external/api")

jest.mock("./components/InstagramMedia", () => ({ props }) => <div className="InstagramMedia" {...props} />)

describe("renders Home", () => {
  test("Instagram access step", async () => {
    const { container } = render(<Home />)

    const step = container.querySelector(".InstagramAccess")
    expect(step).toBeInTheDocument()
  })

  test("Instagram error step", async () => {
    const query = { error: "this is an error" }
    const { container, getByText } = render(<Home query={query} />)

    expect(getByText(/this is an error/i)).toBeInTheDocument()
    const step = container.querySelector(".InstagramStep")
    expect(step).toBeInTheDocument()
  })

  test("Instagram authorizing step", async () => {
    api.authorize.mockImplementation(() => sleep(10000))

    const query = { code: 123 }
    const { container, getByText } = render(<Home query={query} />)

    await waitFor(() => expect(getByText(/Authorizing.../i)).toBeInTheDocument())
    const step = container.querySelector(".InstagramStep")
    expect(step).toBeInTheDocument()
  })

  test("Instagram authorizing step, but an error happens", async () => {
    api.authorize.mockRejectedValue("an error happened")

    const query = { code: 123 }
    const { container, getByText } = render(<Home query={query} />)

    await waitFor(() => expect(getByText(/an error happened/i)).toBeInTheDocument())
    const step = container.querySelector(".InstagramStep")
    expect(step).toBeInTheDocument()
  })

  test("Instagram fetching media step", async () => {
    api.authorize.mockResolvedValue("token")
    api.fetchMedia.mockImplementation(() => sleep(10000))

    const query = { code: 123 }
    const { container, getByText } = render(<Home query={query} />)

    await waitFor(() => expect(getByText(/Fetching media.../i)).toBeInTheDocument())
    const step = container.querySelector(".InstagramStep")
    expect(step).toBeInTheDocument()
  })
})

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}
