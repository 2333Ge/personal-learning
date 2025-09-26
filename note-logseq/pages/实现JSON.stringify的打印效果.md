- 手动实现`JSON.stringify(obj,null,2)`的打印效果，入参只需要obj
  ```javascript
  function stringify(obj, indent = 2, level = 0) {
    const space = ' '.repeat(indent * level);
  
    if (obj === null) return "null";
    if (typeof obj === "string") return `"${obj}"`;
    if (typeof obj === "number" || typeof obj === "boolean") return String(obj);
  
    // 数组处理
    if (Array.isArray(obj)) {
      if (obj.length === 0) return "[]";
      const items = obj
        .map(item => stringify(item, indent, level + 1))
        .join(`,\n${' '.repeat(indent * (level + 1))}`);
      return `[\n${' '.repeat(indent * (level + 1))}${items}\n${space}]`;
    }
  
    // 对象处理
    if (typeof obj === "object") {
      const keys = Object.keys(obj);
      if (keys.length === 0) return "{}";
      const props = keys
        .map(
          key =>
            `"${key}": ${stringify(obj[key], indent, level + 1)}`
        )
        .join(`,\n${' '.repeat(indent * (level + 1))}`);
      return `{\n${' '.repeat(indent * (level + 1))}${props}\n${space}}`;
    }
  
    // 其他类型（函数、undefined）
    return `"${String(obj)}"`;
  }
  
  ```