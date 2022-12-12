export function classNames(...classes: unknown[]): string {
  return classes.filter(Boolean).join(' ')
}

export function lstorage(
  op: 'get' | 'set',
  key: string,
  value: unknown = null
) {
  const valueStorage = localStorage.getItem(key)

  if (op === 'get') {
    if (!valueStorage) return null
    return JSON.parse(valueStorage)
  } else if (op === 'set') {
    localStorage.setItem(key, JSON.stringify(value))
  }
}
