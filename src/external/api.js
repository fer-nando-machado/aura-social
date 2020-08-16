const api = {
  authorize: async (code) => {
    const url = process.env.REACT_APP_API + "authorize"
    const data = {
      client_id: process.env.REACT_APP_INSTAGRAM_CLIENT_ID,
      redirect_uri: process.env.REACT_APP_URL,
      code: code,
    }

    try {
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
}

export default api
