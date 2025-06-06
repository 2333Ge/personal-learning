---
title: 前端常见代码片段
date: 2023-05-23
category: FE
tags:
  - CSS
  - FE
---

<!-- more -->

## CSS

1. 上下居中

```css
.vertical-center {
  position: relative;
  top: 50%;
  transform: translateY(-50%);
}
```

2. 单行文本、多行文本

```css
.text_one_line {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 1;
}

.text_multi_line {
  text-overflow: ellipsis;
  display: -webkit-box;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}
```

3. 吸顶

```css
// 注意：上层不能设置overflow:hidden
.sticky {
  position: sticky;
  position: -webkit-sticky;
}

```

4. 隐藏滚动条

```css
.node::-webkit-scrollbar {
    display: none;
}
```

5. 分tab

```css

<div className={`${activeTab === 1 ? '' : styles.hidden}`}>{tab1}</div>
<div className={`${activeTab === 2 ? '' : styles.hidden}`}>{tab2}</div>

.hidden {
  display: none;
  visibility: hidden;
  opacity: 0;
}

```

## js

1. 滚动到指定区域

Element 接口的 scrollIntoView() 方法会滚动元素的父容器，使被调用 scrollIntoView() 的元素对用户可见。

```js
const element = document.getElementById("box");
element.scrollIntoView({ behavior: 'smooth', block: 'center' });
```

2. 判断是否URL

```typescript
  const isValidUrl = (url: string): boolean => {
    try {
      new URL(url)
      return true
    } catch {
      return false
    }
  }
```

3. 给吸顶元素单独加样式

```js
const scrollContainer = document.querySelector('.scroll-container');
const stickyElement = document.querySelector('.sticky-element');

scrollContainer.addEventListener('scroll', () => {
    const containerRect = scrollContainer.getBoundingClientRect();
    const elementRect = stickyElement.getBoundingClientRect();

    // 判断元素是否吸顶
    if (elementRect.top <= containerRect.top) {
        stickyElement.classList.add('sticky');
    } else {
        stickyElement.classList.remove('sticky');
    }
});
```