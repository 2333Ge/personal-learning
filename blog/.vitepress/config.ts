import { defineConfig } from 'vitepress'
import { getPosts } from './theme/serverUtils'

// 每页文章数量（用于分页）
const pageSize = 10

export default defineConfig({
  lang: 'zh-CN',
  title: '2333Ge',
  description: '一个95后程序猿的学习小站',
  cleanUrls: true,
  outDir: '../docs',
  ignoreDeadLinks: true,
  markdown: {
    lineNumbers: true,
  },
  vite: {
    // 复用原 VuePress public 资源，避免重复搬运
    publicDir: 'blog/.vuepress/public',
  },
  themeConfig: {
    logo: '/logo.jpg',
    // 纯主题所需：文章元数据与分页
    posts: await getPosts(pageSize),
    website: 'https://github.com/2333Ge/personal-learning',
    // giscus 评论（如不需可忽略或后续补充真实信息）
    comment: {
      repo: '2333Ge/personal-learning',
      repoId: '',
      categoryId: ''
    },
    nav: [
      { text: '🏠 Home', link: '/' },
      { text: 'Category', link: '/pages/category' },
      { text: 'Timeline', link: '/pages/archives' },
      { text: 'Tags', link: '/pages/tags' },
      { text: 'About', link: '/pages/about' },
      // 保留原有常用直达入口
      // { text: 'CSS揭秘分享', link: '/_post/coding-summary/fe/css-secrets' },
      // { text: 'TS 笔记', link: '/_post/coding-summary/typescript/typescript-deep-dive-summary' },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/2333Ge' }
    ],
    outline: {
      label: '文章摘要'
    },
    search: {
      provider: 'local'
    }
  } as any,
})
