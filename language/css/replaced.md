# 可替换元素

> An element whose content is outside the scope of the CSS formatting model, such as an image, embedded document, or applet. For example, the content of the HTML IMG element is often replaced by the image that its “src” attribute designates. Replaced elements often have intrinsic dimensions: an intrinsic width, an intrinsic height, and an intrinsic ratio. For example, a bitmap image has an intrinsic width and an intrinsic height specified in absolute units (from which the intrinsic ratio can obviously be determined). On the other hand, other documents may not have any intrinsic dimensions (for example, a blank HTML document).

Source: [3. Conformance: Requirements and Recommendations > 3.1 – Definitions](https://drafts.csswg.org/css2/conform.html)

可替换元素指的是展示效果不由CSS控制的元素。

- 它们是外部对象，外观渲染独立于CSS
- CSS仅可控制位置、定位方式，不影响其自身内容，元素不继承父文档样式

## 固有尺寸

> The term intrinsic dimensions refers to the set of the intrinsic height, intrinsic width, and intrinsic aspect ratio (the ratio between the width and height), each of which may or may not exist for a given object. These intrinsic dimensions represent a preferred or natural size of the object itself; that is, they are not a function of the context in which the object is used. CSS does not define how the intrinsic dimensions are found in general.

## 类型

### 内嵌内容

- applet
- audio
- object
- canvas

### 图片



类似于一个占位符元素，外部资源被加载后会接管该位置的渲染工作。



## 尺寸

1. 对象包含宽高和比例，则直接使用
2. 对象只有比例，自动维持比例
3. 未定义尺寸则维持宽高2:1，视窗大于300px时，最宽300px，小于300px，则使用auto