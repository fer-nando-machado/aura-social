import React from "react"
import { render, act, waitFor } from "@testing-library/react"
import Home from "./Home"

import api from "./external/api"
jest.mock("./external/api")

jest.mock("./components/InstagramMedia", () => ({ media }) => (
  <div className="InstagramMedia">
    {media.username} {media.images}
  </div>
))

describe("renders Home", () => {
  test("Instagram access step", async () => {
    const { container } = render(<Home />)

    expect(container.querySelector(".InstagramAccess")).toBeInTheDocument()
  })

  test("Instagram error step", async () => {
    const query = { error: "this is an error" }
    const { container, getByText } = render(<Home query={query} />)

    expect(getByText(/this is an error/i)).toBeInTheDocument()
    expect(container.querySelector(".InstagramError")).toBeInTheDocument()
  })

  test("Instagram authorizing step", async () => {
    api.authorize.mockImplementation(() => sleep(10000))

    const query = { code: 123 }
    const { container, getByText } = render(<Home query={query} />)

    await waitFor(() => expect(getByText(/Authorizing.../i)).toBeInTheDocument())
    expect(container.querySelector(".InstagramStep")).toBeInTheDocument()
  })

  test("Instagram authorizing step, but an error happens", async () => {
    api.authorize.mockRejectedValue("an error happened")

    const query = { code: 123 }
    const { container, getByText } = render(<Home query={query} />)

    await waitFor(() => expect(getByText(/an error happened/i)).toBeInTheDocument())
    expect(container.querySelector(".InstagramError")).toBeInTheDocument()
  })

  test("Instagram fetching media step", async () => {
    api.authorize.mockResolvedValue("token")
    api.fetchMedia.mockImplementation(() => sleep(10000))

    const query = { code: 123 }
    const { container, getByText } = render(<Home query={query} />)

    await waitFor(() => expect(getByText(/Fetching media.../i)).toBeInTheDocument())
    expect(container.querySelector(".InstagramStep")).toBeInTheDocument()
  })

  test("Instagram processing colors step", async () => {
    api.authorize.mockResolvedValue("token")
    api.fetchMedia.mockResolvedValue({ username: "user", images: ["a.jpg", "b.jpg", "c.jpg"] })

    const query = { code: 123 }
    const { container, getByText, debug } = render(<Home query={query} />)

    await waitFor(() => expect(container.querySelector(".InstagramMedia")).toBeInTheDocument())
    expect(container.querySelector(".InstagramStep")).not.toBeInTheDocument()
    expect(getByText(/user/i)).toBeInTheDocument()
    expect(getByText(/a.jpg/i)).toBeInTheDocument()
    expect(getByText(/b.jpg/i)).toBeInTheDocument()
    expect(getByText(/c.jpg/i)).toBeInTheDocument()
  })
})

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}
