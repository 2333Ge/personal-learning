- Sass 是 CSS 的超集，通过添加编程特性使 CSS 更易维护和扩展，主要解决 CSS 缺乏逻辑能力和代码复用的问题。
- ## 常见问题
- ### Sass 相比 CSS 的优势？
- 变量和计算能力
	- 对比CSS，虽然CSS现在支持变量（自定义属性），但Sass变量在预编译阶段提供了更强大的能力：
		- **编译时处理**：Sass变量在编译时就被计算和替换，最终输出静态值，而CSS变量需要在运行时由浏览器计算，这会带来性能差异
		- **数据类型丰富**：Sass支持包括map、list在内的复杂数据结构，可以进行迭代和复杂运算，CSS变量本质上都是字符串
		- **工程化优势**：Sass变量可以与mixins、函数等特性配合，实现主题配置、间距系统等工程化方案
		- **作用域控制**：Sass变量有清晰的文件作用域管理，而CSS变量受DOM结构影响
- 嵌套规则减少重复代码
- Mixins/Extend 提高复用性
- 模块化管理大型项目样式
- 内置函数简化复杂操作
- ### Sass 变量与 CSS 变量的区别？
- | 特性 | Sass 变量 | CSS 变量 (var) |
  | ---- | ---- | ---- |
  | 编译时机 | 编译时替换 | 运行时计算 |
  | 作用域 | Sass 文件作用域 | DOM 作用域 |
  | 浏览器支持 | 需要编译 | 原生支持 |
  | 动态更新 | 编译后固定 | 可JS动态修改 |
- ## 核心语法特性
- 变量
  ```sass
  $primary-color: #3498db;
  $font-stack: Helvetica, sans-serif;
  
  body {
    color: $primary-color;
    font-family: $font-stack;
  }
  ```
-
- 嵌套
  ```sass
  nav {
    ul {
      margin: 0;
      li { 
        display: inline-block;
        &:hover { color: red; } // & 表示父选择器
      }
    }
  }
  ```
- 混合
  ```sass
  @mixin transform($property) {
    -webkit-transform: $property;
    -ms-transform: $property;
    transform: $property;
  }
  
  .box { 
    @include transform(rotate(30deg)); 
  }
  ```
- 继承 `@extend`
- 函数
- ## 示例
- ### 主题系统实现对比
- **Sass方案**：
  
  ```sass
  // 编译时确定主题
  $themes: (
    light: (bg: white, text: black),
    dark: (bg: black, text: white)
  );
  
  @mixin theme($name) {
    $theme: map-get($themes, $name);
    background: map-get($theme, bg);
    color: map-get($theme, text);
  }
  
  .dark-mode { @include theme(dark); }
  ```
- **CSS变量方案**：
  ```css
  /* 运行时切换主题 */
  :root {
    --bg: white;
    --text: black;
  }
  
  .dark-mode {
    --bg: black;
    --text: white;
  }
  
  body {
    background: var(--bg);
    color: var(--text);
  }
  ```