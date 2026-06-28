## BFC是什么？
- 一、BFC（Block Formatting Context：块级格式化上下文）
- 独立的块元素渲染区域，区域+内部布局和外界互不干扰。
	- 触发条件：浮动、overflow≠visible、display:inline-block/flex/grid、position:absolute/fixed 等。
	- 作用：解决margin 塌陷、防止浮动元素覆盖、浮动高度塌陷（浮动元素会脱离文档流，导致父盒子包不住它，高度变成 0。）
- 二、IFC（Inline Formatting Context：行内格式化上下文）
	- 行内元素 / 行内块组成的文本流渲染区域，只管文字、行内标签。
		- 特点：元素沿水平方向排列，受 text-align、line-height 控制。行内元素无法设置 `width`、`height`、上下 `margin`（左右 margin 有效）
		- 场景：普通文字、<span>、<a>、<em> 等行内元素默认处在 IFC 中。
-