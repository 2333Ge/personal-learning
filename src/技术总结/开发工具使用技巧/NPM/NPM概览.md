# 概览

## 实用命令

|           快捷键            |         描述         |
| :-------------------------: | :------------------: |
| npm view deepmerge versions |   查看模块所有版本   |
|     npm ls -g --depth=0     | 查看全局安装依赖版本 |

## 技巧

## 通过 git 安装依赖

` package.json`按照如下方式配置

```json
{
  "dependencies": {
    "bestzip": "git+<git 地址>#分支"
  }
}
```

执行 `npm i`

# 相关资料

- [剖析 npm 的包管理机制](https://juejin.cn/post/6844904022080667661)

- [多工程开发-安装本地依赖](https://www.npmjs.com/package/install-local)
