import { globby } from 'globby'
import matter from 'gray-matter'
import fs from 'fs-extra'
import { resolve } from 'path'
import { convertDateV2 } from './date'

async function getPosts(pageSize: number) {
  const isProd = process.env.NODE_ENV === 'production'
  const ignorePaths = isProd
    ? ['blog/_post/draft/**/*.md', 'blog/_post/private-notes/**/*.md', 'blog/_post/trash/**/*.md']
    : []

  let paths = await globby(['blog/_post/**/**.md'], { ignore: ignorePaths })

  await generatePaginationPages(paths.length, pageSize)

  let posts = await Promise.all(
    paths.map(async (item) => {
      const content = await fs.readFile(item, 'utf-8')
      const { data } = matter(content)
      // 生成站点内的可访问路径，移除物理目录前缀 "blog/"
      const sitePath = item.replace(/^blog\//, '')
      return {
        frontMatter: {
          ...data,
          date: convertDateV2(data.date),
          order: _convertOrder((data as any).order)
        },
        regularPath: `/${sitePath.replace('.md', '.html')}`
      }
    })
  )
  posts.sort(_compareDate as any)
  return posts
}

async function generatePaginationPages(total: number, pageSize: number) {
  let pagesNum = total % pageSize === 0 ? total / pageSize : Math.floor(total / pageSize) + 1
  const paths = resolve('./blog')

  if (total > 0) {
    for (let i = 1; i < pagesNum + 1; i++) {
      const page = `
---
page: true
title: ${i === 1 ? 'home' : 'page_' + i}
aside: false
comment: false
---
<script setup>
import Page from "./.vitepress/theme/components/Page.vue";
import { useData } from "vitepress";
const { theme } = useData();
const posts = theme.value.posts.slice(${pageSize * (i - 1)},${pageSize * i})
</script>
<Page :posts="posts" :pageCurrent="${i}" :pagesNum="${pagesNum}" />
`.trim()

      const file = paths + `/page_${i}.md`
      await fs.writeFile(file, page)
    }
  }
  const src = paths + '/page_1.md'
  const dest = paths + '/index.md'
  if (await fs.pathExists(src)) {
    await fs.move(src, dest, { overwrite: true })
  }
}

function _compareDate(
  obj1: { frontMatter: { date: number; order: number } },
  obj2: { frontMatter: { date: number; order: number } }
) {
  const orderCompare = obj2.frontMatter.order - obj1.frontMatter.order
  if (orderCompare !== 0) return orderCompare
  return obj1.frontMatter.date < obj2.frontMatter.date ? 1 : -1
}

function _convertOrder(input?: unknown): number {
  if (input === undefined || input === null) return 0
  if (typeof input === 'number') return input
  const num = Number(input)
  return isNaN(num) ? 0 : num
}

export { getPosts }
