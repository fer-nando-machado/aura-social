import api from "./api"
import fetchMock from "jest-fetch-mock"

beforeAll(() => {
  fetchMock.enableMocks()
})

beforeEach(() => {
  fetch.resetMocks()
})

describe("authorize API", () => {
  test("returns access token", () => {
    const body = { user_id: 123, access_token: "access_token" }
    fetch.mockResolvedValue({ json: async () => body })

    api
      .authorize("code")
      .then((token) => expect(token).toBe("access_token"))
      .catch((error) => fail("it should not return an error"))
  })

  test("returns expected error message", () => {
    const body = { error_message: "expected error" }
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

describe("fetchMedia API", () => {
  test("returns media", () => {
    const bodyFirst = {
      data: [
        { username: "user", media_type: "IMAGE", media_url: "a.jpg" },
        { username: "user", media_type: "VIDEO", thumbnail_url: "b.jpg" },
      ],
      paging: { next: "next.url" },
    }
    const bodyLast = {
      data: [{ username: "user", media_type: "CAROUSEL_ALBUM", media_url: "c.jpg" }],
      paging: {},
    }
    fetch.mockResolvedValueOnce({ json: async () => bodyFirst })
    fetch.mockResolvedValueOnce({ json: async () => bodyLast })

    const expected = { username: "user", images: ["a.jpg", "b.jpg", "c.jpg"] }
    api
      .fetchMedia("token")
      .then((media) => expect(media).toStrictEqual(expected))
      .catch((error) => fail("it should not return an error"))
  })

  test("returns expected error message", () => {
    const body = { error: "expected error" }
    fetch.mockResolvedValue({ json: async () => body })

    api
      .fetchMedia("token")
      .then((media) => fail("it should not return media"))
      .catch((error) => expect(error).toBe("expected error"))
  })

  test("returns unexpected error due to server failure", () => {
    fetch.mockRejectedValue(new Error("unexpected server error"))

    api
      .fetchMedia("token")
      .then((media) => fail("it should not return media"))
      .catch((error) => expect(error).toBe("unexpected server error"))
  })
})
