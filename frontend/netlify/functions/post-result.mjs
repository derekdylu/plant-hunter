import { getCollection } from './_shared/db.mjs'
import {
  HttpError,
  jsonResponse,
  methodNotAllowed,
  readJson,
} from './_shared/http.mjs'
import { isValidResultPayload } from './_shared/validation.mjs'

export default async function handler(request, context) {
  if (request.method !== 'POST') {
    return methodNotAllowed()
  }

  try {
    const payload = await readJson(request)
    if (!isValidResultPayload(payload)) {
      throw new HttpError(400, 'Invalid quiz result')
    }

    const collection = await getCollection('game')
    await collection.insertOne({
      recordedAt: new Date(),
      result: payload.result,
      selection: payload.selection,
    })

    return jsonResponse({ ok: true }, 201)
  } catch (error) {
    if (error instanceof HttpError) {
      return jsonResponse({ error: error.message }, error.status)
    }

    console.error('Failed to record quiz result', {
      errorType: error?.name || 'Error',
      requestId: context?.requestId,
    })
    return jsonResponse({ error: 'Unable to record quiz result' }, 500)
  }
}

/** @type {import('@netlify/functions').Config} */
export const config = {
  path: '/api/results',
  method: 'POST',
  rateLimit: {
    windowLimit: 15,
    windowSize: 60,
    aggregateBy: ['ip', 'domain'],
  },
}
