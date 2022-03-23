export const data = {
  "key": "v-09765c4e",
  "path": "/%E6%8A%80%E6%9C%AF%E6%80%BB%E7%BB%93/%E7%BC%96%E7%A8%8B%E7%BB%8F%E9%AA%8C/%E5%89%8D%E7%AB%AF/ssr.html",
  "title": "传统vue浏览器渲染问题",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [],
  "git": {
    "updatedTime": 1641987987000,
    "contributors": [
      {
        "name": "杨朝浩",
        "email": "yangchaohao@meicai.cn",
        "commits": 1
      }
    ]
  },
  "filePathRelative": "技术总结/编程经验/前端/ssr.md"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
