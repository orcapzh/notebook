# 布局

## 常用居中方法

### 水平

- 行内元素：父容器 `text-align: center;`
- 定宽块元素：左右`margin: auto;`
- 不定宽块元素：子元素`display: inline-block;`按照行内元素居中
- 通用方案：`display: flex; justify-content: center;`

### 垂直

- 单行

## 常见布局

### 两列布局

左定宽、右自适应

```

```


## 比例不变的响应式元素

```css
.wrapper {
  width: 100%;
}

.inner {
  padding: 100%; // 与包含块的宽度有关
}
```