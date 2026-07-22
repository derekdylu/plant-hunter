const sendEvent = async (path, payload) => {
  try {
    const response = await fetch(path, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(payload),
      keepalive: true,
    })

    return response.ok
  } catch {
    return false
  }
}

export const recordQuizResult = (selection, result) => (
  sendEvent('/api/results', { selection, result })
)

export const recordShare = (share) => (
  sendEvent('/api/shares', { share })
)
