# 函数式组件声明 React.FC

```tsx
type GuideWrapperProps = {
  highlightNode: React.ReactElement;
  onClose: () => void;
};

export const GuideView: React.FC<GuideWrapperProps> = ({
  highlightNode,
  onClose,
}) => {};
```
