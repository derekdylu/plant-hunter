import { getCollection } from './_shared/db.mjs'
import {
  HttpError,
  jsonResponse,
  methodNotAllowed,
  readJson,
} from './_shared/http.mjs'
import { isValidSharePayload } from './_shared/validation.mjs'

export default async function handler(request, context) {
  if (request.method !== 'POST') {
    return methodNotAllowed()
  }

  try {
    const payload = await readJson(request, 512)
    if (!isValidSharePayload(payload)) {
      throw new HttpError(400, 'Invalid share event')
    }

    const collection = await getCollection('share')
    await collection.insertOne({
      recordedAt: new Date(),
      share: payload.share,
    })

    return jsonResponse({ ok: true }, 201)
  } catch (error) {
    if (error instanceof HttpError) {
      return jsonResponse({ error: error.message }, error.status)
    }

    console.error('Failed to record share event', {
      errorType: error?.name || 'Error',
      requestId: context?.requestId,
    })
    return jsonResponse({ error: 'Unable to record share event' }, 500)
  }
}

/** @type {import('@netlify/functions').Config} */
export const config = {
  path: '/api/shares',
  method: 'POST',
  rateLimit: {
    windowLimit: 30,
    windowSize: 60,
    aggregateBy: ['ip', 'domain'],
  },
}
