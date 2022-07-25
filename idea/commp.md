# 开发记录

## 测试

- 


## 踩坑

1. eslint: tsx import 报错

报错：

```
import App from "./App";

Casing of ./App does not match the underlying filesystem.eslintimport/no-unresolved
Missing file extension "json" for "./App"eslintimport/extensions
```

[参考](https://github.com/import-js/eslint-plugin-import/issues/1573#issuecomment-566373069)(❌)

```
  settings: {
    "import/resolver": {
      webpack: {
        config: {
          resolve: {
            alias: {
              "~": path.join(__dirname, "src/app"),
            },
            extensions: [".js", ".jsx", ".ts", ".tsx", ".mjs"],
          },
        },
      },
    },
  },
```

[成功](https://github.com/import-js/eslint-plugin-import/issues/1573#issuecomment-578548701) ✅

```js
settings: {
    "import/extensions": [".js", ".jsx", ".ts", ".tsx"],
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"],
    },
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },
  },
  rules: {
    "import/extensions": [
      2,
      "ignorePackages",
      {
        js: "never",
        jsx: "never",
        ts: "never",
        tsx: "never",
      },
    ],
  },
```
