const api = {
  authorize: async (code) => {
    try {
      const url = process.env.REACT_APP_API + "authorize"
      const data = {
        client_id: process.env.REACT_APP_INSTAGRAM_CLIENT_ID,
        redirect_uri: process.env.REACT_APP_URL,
        code: code,
      }

      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
      const body = await response.json()
      if (body.user_id) return body.access_token
      throw new Error(body.error_message)
    } catch (error) {
      throw error.message
    }
  },
  fetchMedia: async (token) => {
    try {
      let url =
        "https://graph.instagram.com/me/media" +
        "?fields=username,media_type,media_url,thumbnail_url" +
        "&access_token=" +
        token

      let images = []
      let username = ""
      while (url) {
        const response = await fetch(url)
        const body = await response.json()
        if (body.error) throw new Error(body.error)
        if (!body.data.length) throw new Error("No media found")

        for (let i = 0; i < body.data.length; i++) {
          const m = body.data[i]
          images.push(m.media_type === "VIDEO" ? m.thumbnail_url : m.media_url)
        }
        username = body.data[0].username
        url = body.paging.next
      }
      return { username: username, images: images }
    } catch (error) {
      throw error.message
    }
  },
}

export default api
