import api from "./api"
import fetchMock from "jest-fetch-mock"

describe("authorize API", () => {
  fetchMock.enableMocks()

  test("returns access token", () => {
    const body = {
      user_id: 123,
      access_token: "access_token",
    }
    fetch.mockResolvedValue({ json: async () => body })

    api
      .authorize("code")
      .then((token) => expect(token).toBe("access_token"))
      .catch((error) => fail("it should not return an error"))
  })

  test("returns expected error message", () => {
    const body = {
      error_message: "expected error",
    }
    fetch.mockResolvedValue({ json: async () => body })

    api
      .authorize("code")
      .then((token) => fail("it should not return an access token"))
      .catch((error) => expect(error).toBe("expected error"))
  })

  test("returns unexpected error due to server failure", () => {
    fetch.mockRejectedValue(new Error("unexpected server error"))

    api
      .authorize("code")
      .then((token) => fail("it should not return an access token"))
      .catch((error) => expect(error).toBe("unexpected server error"))
  })
})
