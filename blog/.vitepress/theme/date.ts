/**
 * 标准化日期时间格式（YYYY-MM-DD HH:mm）
 */
export function convertDateV2(input: Date | string): string {
  if (typeof input === 'string' && input.includes('T')) {
    input = new Date(input)
  }
  if (input instanceof Date && !isNaN(input.getTime())) {
    const pad = (n: number) => n.toString().padStart(2, '0')
    return [input.getFullYear(), pad(input.getMonth() + 1), pad(input.getDate())].join('-')
  }
  if (typeof input === 'string') {
    const trimmed = input.trim()
    const parts = trimmed.split(/\s+/)
    const datePart = parts[0]
    if (parts.length < 2 || parts[1].trim() === '') return datePart
    const timeComponents = parts[1].split(':').map((c) => c.padStart(2, '0'))
    return `${datePart} ${timeComponents.join(':')}`
  }
  return ''
}

export function convertDate(date = new Date().toString()) {
  const json_date = new Date(date).toJSON()
  return json_date.split('T')[0]
}

