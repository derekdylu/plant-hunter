const RESULT_COUNT = 4
const OPTION_COUNTS = [4, 4, 4, 4, 5, 2, 4, 2, 4, 4]
const SHARE_ACTIONS = new Set(['copy link', 'download', 'fb', 'line', 'unlock'])

const isPlainObject = (value) => (
  value !== null
  && typeof value === 'object'
  && !Array.isArray(value)
  && Object.getPrototypeOf(value) === Object.prototype
)

const hasOnlyKeys = (value, expectedKeys) => {
  const actualKeys = Object.keys(value).sort()
  const sortedExpectedKeys = [...expectedKeys].sort()

  return actualKeys.length === sortedExpectedKeys.length
    && actualKeys.every((key, index) => key === sortedExpectedKeys[index])
}

const isValidSelection = (entry, questionIndex) => {
  if (!isPlainObject(entry) || !hasOnlyKeys(entry, ['select'])) {
    return false
  }

  const selected = entry.select
  const maximumSelections = questionIndex === 1 ? OPTION_COUNTS[questionIndex] : 1

  if (
    !Array.isArray(selected)
    || selected.length < 1
    || selected.length > maximumSelections
    || new Set(selected).size !== selected.length
  ) {
    return false
  }

  return selected.every((value) => (
    Number.isInteger(value)
    && value >= 0
    && value < OPTION_COUNTS[questionIndex]
  ))
}

export const isValidResultPayload = (value) => (
  isPlainObject(value)
  && hasOnlyKeys(value, ['result', 'selection'])
  && Number.isInteger(value.result)
  && value.result >= 0
  && value.result < RESULT_COUNT
  && Array.isArray(value.selection)
  && value.selection.length === OPTION_COUNTS.length
  && value.selection.every(isValidSelection)
)

export const isValidSharePayload = (value) => (
  isPlainObject(value)
  && hasOnlyKeys(value, ['share'])
  && typeof value.share === 'string'
  && SHARE_ACTIONS.has(value.share)
)
