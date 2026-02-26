function generatePaginationArray(pagesNum: number, currentPage: number, margin: number = 1): (number | string)[] {
  pagesNum = Math.max(1, pagesNum)
  margin = Math.max(0, margin)
  currentPage = Math.min(Math.max(currentPage, 1), pagesNum)

  const result: (number | string)[] = []
  const pagesSet = new Set<number>()

  pagesSet.add(1)
  pagesSet.add(pagesNum)

  if (pagesNum <= margin * 2 + 5) {
    for (let i = 2; i < pagesNum; i++) pagesSet.add(i)
  } else if (currentPage <= margin + 2) {
    for (let i = 2; i <= Math.max(margin * 2 + 2, currentPage + margin); i++) {
      if (i < pagesNum) pagesSet.add(i)
    }
  } else if (currentPage >= pagesNum - (margin + 1)) {
    for (let i = Math.max(2, pagesNum - (margin * 2 + 1)); i < pagesNum; i++) {
      pagesSet.add(i)
    }
  } else {
    for (let i = currentPage - margin; i <= currentPage + margin; i++) {
      if (i > 1 && i < pagesNum) pagesSet.add(i)
    }
    pagesSet.add(2)
    pagesSet.add(pagesNum - 1)
  }

  const sortedPages = Array.from(pagesSet).sort((a, b) => a - b)

  let prev = 0
  for (const page of sortedPages) {
    if (page - prev > 1) result.push('...')
    result.push(page)
    prev = page
  }
  return result
}

export { generatePaginationArray }

