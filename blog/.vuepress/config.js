module.exports = {
  lang: "zh-CN",
  title: "2333Ge",
  description: "一个95后程序猿的学习小站",
  port: 8089,
  dest: "./docs",
  theme: "vuepress-theme-maker",
  base: "/personal-learning-blog/",
  // 显示代码行数
  markdown: {
    lineNumbers: true,
  },
  themeConfig: {
    logo: "./logo.jpg",
    searchPlaceholder: "Search ⌘+K",
    /*-----------------博客及评论配置-----------------------*/
    blog: {
      directories: [
        {
          id: "post",
          dirname: "_post",
          path: "/",
          itemPermalink: "/post/:year/:month/:day/:slug.html",
          frontmatter: { title: "" },
          pagination: {
            perPagePosts: 10,
            prevText: "",
            nextText: "",
          },
        },
      ],
      frontmatters: [
        {
          id: "tag",
          keys: ["tag", "tags"],
          path: "/tags/",
          frontmatter: { title: "Tag" },
          pagination: {
            lengthPerPage: 10,
            prevText: "",
            nextText: "",
          },
        },
        {
          id: "category",
          keys: ["category", "categories"],
          path: "/categories/",
          frontmatter: { title: "Category" },
          pagination: {
            lengthPerPage: 10,
            prevText: "",
            nextText: "",
          },
        },
      ],
      comment: {
        service: "valine",
        appId: "zSewNHe2h7Ai4v6QVjthsgdV-gzGzoHsz",
        appKey: "FvGhEbriYXbYQnPHdvsc3xG4",
        placeholder: "Leave a comment ~",
        visitor: true,
        enableQQ: true,
      },
    },
    /*-----------------代码复制配置-----------------------*/
    copy: {
      copySelector: [
        'div[class*="language-"] pre',
        '.friend-link__content div[class*="language-"] pre',
      ],
      copyMessage: "代码复制成功",
      duration: 1000,
      showInMobile: false,
    },
    /*-----------------左侧导航配置-----------------------*/
    nav: [
      { text: "🏠 主页", link: "/" },
      { text: "Shell 实用指令概览", link: "/post/2022/04/21/shell.html" },
    ],
    /*-----------------设置 sidebar 底部社交媒体 URL。-----------------------*/
    social: [
      {
        type: "email",
        link: "ych.class@qq.com",
      },
      {
        type: "github",
        link: "2333Ge",
      },
      {
        type: "feed",
        link: "https://gitee.com/i2333g3/personal-learning",
      },
      {
        type: "feed",
        link: "https://juejin.cn/user/1082334819913486/posts",
      },
    ],
    /*-----------------主题配置-----------------------*/
    palette: {
      colors: [
        {
          btnColor: "#673ab7",
          paletteVars: {
            dark: `--theme-accent-color: #673ab7;
          --theme-foreground-color: #d8d8d8;
          --theme-border-color: #444;
          --theme-background: #202020;
          --theme-sidebar-background: #673ab7;
          --theme-card-background: #252525;
          --theme-card-color: #252525;
          --theme-bg-tertiary-color: #161b22;
          --theme-accent-color-005: rgba(103,58,183,0.05);
          --theme-accent-color-01: rgba(103,58,183,0.1);
          --theme-accent-color-02: rgba(103,58,183,0.2);
          --theme-accent-color-04: rgba(103,58,183,0.4);
          --theme-accent-color-08: rgba(103,58,183,0.8);`,
            light: `--theme-accent-color: #673ab7;
          --theme-foreground-color: #363636;
          --theme-border-color: #e0e0e0;
          --theme-sidebar-background: #673ab7 linear-gradient(to bottom, #673ab7 0%, #522e92 100%);
          --theme-card-background: #fff;
          --theme-bg-tertiary-color: #f6f8fa;
          --theme-accent-color-005: rgba(103,58,183,0.05);
          --theme-accent-color-01: rgba(103,58,183,0.1);
          --theme-accent-color-02: rgba(103,58,183,0.2);
          --theme-accent-color-04: rgba(103,58,183,0.4);
          --theme-accent-color-08: rgba(103,58,183,0.8);`,
          },
        },
        {
          btnColor: "#3f51b5",
          paletteVars: {
            dark: `--theme-accent-color: #3f51b5;
                --theme-foreground-color: #d8d8d8;
                --theme-border-color: #444;
                --theme-background: #202020;
                --theme-sidebar-background: #3f51b5;
                --theme-card-background: #252525;
                --theme-card-color: #252525;
                --theme-bg-tertiary-color: #161b22;
                --theme-accent-color-005: rgba(63,81,181,0.05);
                --theme-accent-color-01: rgba(63,81,181,0.1);
                --theme-accent-color-02: rgba(63,81,181,0.2);
                --theme-accent-color-04: rgba(63,81,181,0.4);
                --theme-accent-color-08: rgba(63,81,181,0.8);`,
            light: `--theme-accent-color: #3f51b5;
                  --theme-foreground-color: #363636;
                  --theme-border-color: #e0e0e0;
                  --theme-sidebar-background: #3f51b5 linear-gradient(to bottom, #3f51b5 0%, #324191 100%);
                  --theme-card-background: #fff;
                  --theme-bg-tertiary-color: #f6f8fa;
                  --theme-accent-color-005: rgba(63,81,181,0.05);
                  --theme-accent-color-01: rgba(63,81,181,0.1);
                  --theme-accent-color-02: rgba(63,81,181,0.2);
                  --theme-accent-color-04: rgba(63,81,181,0.4);
                  --theme-accent-color-08: rgba(63,81,181,0.8);`,
          },
        },
        {
          btnColor: "#2196f3",
          paletteVars: {
            dark: `--theme-accent-color: #2196f3; --theme-sidebar-background: #2196f3;`,
            light: `--theme-accent-color: #2196f3; --theme-sidebar-background: #2196f3;`,
          },
        },
        {
          btnColor: "#009688",
          paletteVars: {
            dark: `--theme-accent-color: #009688; --theme-sidebar-background: #009688;`,
            light: `--theme-accent-color: #009688; --theme-sidebar-background: #009688;`,
          },
        },
        {
          btnColor: "#4caf50",
          paletteVars: {
            dark: `--theme-accent-color: #4caf50; --theme-sidebar-background: #4caf50;`,
            light: `--theme-accent-color: #4caf50; --theme-sidebar-background: #4caf50;`,
          },
        },
        {
          btnColor: "#ff9800",
          paletteVars: {
            dark: `--theme-accent-color: #ff9800; --theme-sidebar-background: #ff9800;`,
            light: `--theme-accent-color: #ff9800; --theme-sidebar-background: #ff9800;`,
          },
        },
        {
          btnColor: "#ff5722",
          paletteVars: {
            dark: `--theme-accent-color: #ff5722; --theme-sidebar-background: #ff5722;`,
            light: `--theme-accent-color: #ff5722; --theme-sidebar-background: #ff5722;`,
          },
        },
        {
          btnColor: "#795548",
          paletteVars: {
            dark: `--theme-accent-color: #795548; --theme-sidebar-background: #795548;`,
            light: `--theme-accent-color: #795548; --theme-sidebar-background: #795548;`,
          },
        },
        {
          btnColor: "#607D8B",
          paletteVars: {
            dark: `--theme-accent-color: #607D8B; --theme-sidebar-background: #607D8B;`,
            light: `--theme-accent-color: #607D8B; --theme-sidebar-background: #607D8B;`,
          },
        },
        {
          btnColor: "#2a2b33",
          paletteVars: {
            dark: `--theme-accent-color: #2a2b33; --theme-sidebar-background: #2a2b33;`,
            light: `--theme-accent-color: #2a2b33; --theme-sidebar-background: #2a2b33;`,
          },
        },
      ],
    },
  },
};
