// @vitest-environment node

import { describe, expect, test } from 'vitest'
import {
  isValidResultPayload,
  isValidSharePayload,
} from '../netlify/functions/_shared/validation.mjs'
import resultHandler from '../netlify/functions/post-result.mjs'
import shareHandler from '../netlify/functions/post-share.mjs'

const validSelection = [
  { select: [0] },
  { select: [0, 2] },
  { select: [1] },
  { select: [2] },
  { select: [4] },
  { select: [1] },
  { select: [3] },
  { select: [0] },
  { select: [2] },
  { select: [1] },
]

describe('analytics validation', () => {
  test('accepts a complete quiz result', () => {
    expect(isValidResultPayload({ selection: validSelection, result: 2 })).toBe(true)
  })

  test('rejects incomplete or out-of-range quiz data', () => {
    expect(isValidResultPayload({ selection: validSelection.slice(0, 9), result: 2 })).toBe(false)
    expect(isValidResultPayload({ selection: validSelection, result: 4 })).toBe(false)
  })

  test('allows only known share actions', () => {
    expect(isValidSharePayload({ share: 'line' })).toBe(true)
    expect(isValidSharePayload({ share: 'arbitrary-value' })).toBe(false)
  })
})

describe('analytics request handling', () => {
  test('rejects methods other than POST', async () => {
    const response = await resultHandler(new Request('https://example.test/api/results'))
    expect(response.status).toBe(405)
    expect(response.headers.get('allow')).toBe('POST')
  })

  test('requires JSON without touching the database', async () => {
    const response = await shareHandler(new Request('https://example.test/api/shares', {
      method: 'POST',
      body: 'share=line',
      headers: { 'content-type': 'text/plain' },
    }))

    expect(response.status).toBe(415)
    await expect(response.json()).resolves.toEqual({
      error: 'Content-Type must be application/json',
    })
  })
})
