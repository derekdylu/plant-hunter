const RESPONSE_HEADERS = {
  'cache-control': 'no-store',
  'content-type': 'application/json; charset=utf-8',
  'x-content-type-options': 'nosniff',
}

export class HttpError extends Error {
  constructor(status, message) {
    super(message)
    this.name = 'HttpError'
    this.status = status
  }
}

export const jsonResponse = (body, status = 200, additionalHeaders = {}) => (
  new Response(JSON.stringify(body), {
    status,
    headers: {
      ...RESPONSE_HEADERS,
      ...additionalHeaders,
    },
  })
)

export const readJson = async (request, maximumBytes = 4_096) => {
  const contentType = request.headers.get('content-type') || ''
  if (!contentType.toLowerCase().startsWith('application/json')) {
    throw new HttpError(415, 'Content-Type must be application/json')
  }

  const declaredLength = Number(request.headers.get('content-length'))
  if (Number.isFinite(declaredLength) && declaredLength > maximumBytes) {
    throw new HttpError(413, 'Request body is too large')
  }

  const text = await request.text()
  if (new TextEncoder().encode(text).byteLength > maximumBytes) {
    throw new HttpError(413, 'Request body is too large')
  }

  try {
    return JSON.parse(text)
  } catch {
    throw new HttpError(400, 'Request body must be valid JSON')
  }
}

export const methodNotAllowed = () => jsonResponse(
  { error: 'Method not allowed' },
  405,
  { allow: 'POST' },
)
