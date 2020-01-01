Quick Table of Contents
1. About the CSS 2.1 Specification

2. Introduction to CSS 2.1
3. Conformance: Requirements and Recommendations
4. Syntax and basic data types
5. Selectors
6. Assigning property values, Cascading, and Inheritance
7. Media types
8. Box model
9.  Visual formatting model
10. Visual formatting model details
11. Visual effects
12. Generated content, automatic numbering, and lists
13. Paged media
14. Colors and Backgrounds
15. Fonts
16. Text
17. Tables
18. User interface


---

## 语法

1. 注释
   1. /**/
2. 声明与属性：
   1.  由：分隔的属性名、属性值组成，
   2.  属性名是标识符
   3.  值是 标识符、字符串、数字、长度、百分比、URI、颜色、计数器
   4.  多个声明通过；分隔
3. 规则集
   1. 选择器+声明块
   2. 通过，分隔多个选择器
   3. 当某个选择器出现错误，整个规则及
4. 块：花括号包括的区域
5. @规则：以@关键字开头，@字符后面跟随标识符（@import, @page）
   1. 下一个分号前包括分号在内
      ```css
      @import "module.css"
      ```
   2. 下一个块的所有内容
      ```css
      @media print {
        body { font-size: 12px; }
      }
      ```
6. 语句： 任何版本的样式表都是由一系列语句组成。语句包含@规则和语句集。
7. 关键字： 标识符，非字符串，例如 red

- CSS语法大小写不敏感，但是不由CSS控制的部分除外。例如html中的属于id、class的值，字体名字及URI都是大小写敏感的。
- 反斜线（\）字符有三种可能：
  - 字符转义：
  - CSS注释
  - 代表自身
  如果反斜线后面紧跟着样式表结束了，也代表自身


相对单位

- em
- rem

绝对单位

- in: 英寸 — 1in等于2.54cm
- cm: 厘米
- mm: 毫米
- pt: 磅（points） — CSS中的1pt等于1in的1/72
- pc: 倍卡（picas） — 1pc等于12pt
- px: 像素单位 — 1px等于0.75pt

#### 计数器

- 计数器通过`count-reset: <name> <integer>`初始化、重置。
- `counter-increment：<name> <integer>`对计数器修改。
- 如果元素递增/重置一个计数器并使用了它（在其:before或:after伪元素的'content'属性中），计数器是在递增/重置之后才使用的
- 如果元素重置并递增了一个计数器，计数器会先重置再递增
- 要同时重置两个计数器的话，它们必须一起指定
  ```css
  // 只会执行后一句
  H1 { counter-reset: section -1 }
  H1 { counter-reset: imagenum 99 }

  //需要合并
  H1 { counter-reset: section -1 imagenum 99 }
  ```
- 计数器的作用域从文档中具有'counter-reset'该计数器的第一个元素开始，包括该元素的后代和后续兄弟及其后代。但不包括处于同名计数器作用域中的任何元素，（同名计数器）由该元素的后续兄弟或后续同（类型）元素的'counter-reset'创建
- 如果一个元素或伪元素上的'counter-increment'或者'content'引用了一个不处于任何'counter-reset'作用域的计数器，实现应该表现得就像已经通过该元素或伪元素上的'counter-reset'把该计数器重置为0了一样

```html
<style>
OL { counter-reset: item }
LI { display: block }
LI:before { content: counter(item) ". "; counter-increment: item }
</style>
<OL>                    <!-- {item[0]=0        -->
  <LI>item</LI>         <!--  item[0]++ (=1)   -->
  <LI>item              <!--  item[0]++ (=2)   -->
    <OL>                <!--  {item[1]=0       -->
      <LI>item</LI>     <!--   item[1]++ (=1)  -->
      <LI>item</LI>     <!--   item[1]++ (=2)  -->
      <LI>item          <!--   item[1]++ (=3)  -->
        <OL>            <!--   {item[2]=0      -->
          <LI>item</LI> <!--    item[2]++ (=1) -->
        </OL>           <!--                   -->
        <OL>            <!--   }{item[2]=0     -->
          <LI>item</LI> <!--    item[2]++ (=1) -->
        </OL>           <!--                   -->
      </LI>             <!--   }               -->
      <LI>item</LI>     <!--   item[1]++ (=4)  -->
    </OL>               <!--                   -->
  </LI>                 <!--  }                -->
  <LI>item</LI>         <!--  item[0]++ (=3)   -->
  <LI>item</LI>         <!--  item[0]++ (=4)   -->
</OL>                   <!--                   -->
<OL>                    <!-- }{item[0]=0       -->
  <LI>item</LI>         <!--  item[0]++ (=1)   -->
  <LI>item</LI>         <!--  item[0]++ (=2)   -->
</OL>                   <!--                   -->
```

## 选择器

选择器类型有：
- 通配选择器 *
- 标签选择器 h1
- 后代选择器 空格  `div * p`可选择孙级别的p标签
- 子选择器 >
- 伪类选择器
  - 伪类：:first-child :link :visited :hover :active :focus :lang
  - 伪元素：:first-line :first-letter :before :after
- 相邻选择器 +
- 属性选择器 \[attr\] \[attr=val\] \[attr~=val\] \[attr&#124;=val\]
- 类选择器 .
- ID选择器 #

注意 \[lang&#124;=xx\]和:lang(xx)的区别。在该HTML示例中，只有BODY匹配\[lang&#124;=fr\]（因为它有LANG属性），但BODY和P都匹配:lang(fr)（因为都是法语）

```html
<body lang=fr>
  <p>Je suis Français.</p>
</body>
```

选择器分组： 用逗号分隔的多个选择器

｜Pattern |	Meaning|
|   --    |   --   |
|*|	匹配所有元素 |
|E| 匹配所有E元素(即，E类型的元素) |
|E F| 匹配所有E元素后代中的F元素 |
|E > F| 匹配所有E元素子级中的F元素 |
|E:first-child| 匹配父元素的第一个子级为E的E元素（Matches element E when E is the first child of its parent）|
|E:link、E:visited| 匹配未访问过的(:link)或者已被访问过的(:visited)超链接源锚点（anchor）的E元素|
|E:active、E:hover、E:focus| 匹配处于某些用户动作期间的E元素 |
|E:lang(c)|| 匹配语言为（人类）语言c的E元素（文档语言会指定怎样确定语言）｜
|E + F| 匹配所有前面紧跟着一个E元素兄弟的F元素 |
|E\[foo\]| 匹配设置了"foo"属性（无论值是什么）的E元素 |
|E\[foo="warning"\]| 匹配所有"foo"属性值恰好是"wraning"的E元素 |
|E\[foo~="warning"\]| 匹配所有"foo"属性值为一列空格分隔的值，且其中之一恰好是"warning"的E元素 |
|E\[lang&#124;="en"\]| 匹配所有"lang"属性值为一列以"en"开头（从左向右）用连字符分隔的值的E元素 |
|DIV.warning| 语言特定的（HTML中，与DIV\[class~="warning"\]相同 |
|E#myid| 匹配所有ID为"myid"的E元素 |

## 媒体类型

样式表一个最重要的特性就是它们能指定一个文档在不同的媒体上怎样展示：在屏幕上，纸上，用语音合成器，用盲文设备等等

通过 @media 规则指定一个块
```css
@media print {
  body { font-size: 10pt }
}
@media screen {
  body { font-size: 13px }
}
@media screen, print {
  body { line-height: 1.2 }
}
```
