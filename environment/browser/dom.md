# DOM

描述文档的结构、操作和事件，参见 https://dom.spec.whatwg.org

- node和element的区别在于node包含了所有节点，包括文本、注释等，但我们操作时可能只是操作元素节点，所以使用element
- parentNode一般和parentElement返回的都是父节点，一般来说是同一个节点，只有当父节点是document时，两者才有区别，因为document不是一个element
- dom中null代表没有节点不存在
- `getElementsBy*`返回的是实时集合，`querySelectorAll`返回的是静态集合

<?xml version="1.0" encoding="UTF-8"?>
<svg width="478px" height="364px" viewBox="0 0 478 364" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <!-- Generator: sketchtool 55.2 (78181) - https://sketchapp.com -->
    <title>dom-class-hierarchy.svg</title>
    <desc>Created with sketchtool.</desc>
    <g id="dom" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="dom-class-hierarchy.svg">
            <rect id="Rectangle-9" stroke="#E8C48E" stroke-width="2" fill="#FFF9EB" x="181" y="6" width="118" height="28"></rect>
            <rect id="Rectangle-8" stroke="#E8C48E" stroke-width="2" fill="#FFF9EB" x="181" y="74" width="118" height="28"></rect>
            <text id="EventTarget" font-family="PTMono-Regular, PT Mono" font-size="12" font-weight="normal" fill="#8A704D">
                <tspan x="200.9" y="24">EventTarget</tspan>
            </text>
            <text id="Node" font-family="PTMono-Regular, PT Mono" font-size="12" font-weight="normal" fill="#8A704D">
                <tspan x="225.6" y="91">Node  </tspan>
            </text>
            <path id="Line-2" d="M241.5,53.5 L241.5,70.5 L239.5,70.5 L239.5,53.5 L233.5,53.5 L240.5,39.5 L247.5,53.5 L241.5,53.5 Z" fill="#EE6B47" fill-rule="nonzero"></path>
            <rect id="Rectangle-8-Copy" stroke="#E8C48E" stroke-width="2" fill="#FFF9EB" x="181" y="144" width="118" height="28"></rect>
            <text id="Element" font-family="PTMono-Regular, PT Mono" font-size="12" font-weight="normal" fill="#8A704D">
                <tspan x="214.8" y="161">Element  </tspan>
            </text>
            <path id="Line-2-Copy" d="M241.5,123.5 L241.5,140.5 L239.5,140.5 L239.5,123.5 L233.5,123.5 L240.5,109.5 L247.5,123.5 L241.5,123.5 Z" fill="#EE6B47" fill-rule="nonzero"></path>
            <rect id="Rectangle-8-Copy-4" stroke="#E8C48E" stroke-width="2" fill="#FFF9EB" x="181" y="230" width="118" height="28"></rect>
            <text id="HTMLElement" font-family="PTMono-Regular, PT Mono" font-size="12" font-weight="normal" fill="#8A704D">
                <tspan x="200.4" y="247">HTMLElement  </tspan>
            </text>
            <path id="Line-2-Copy-4" d="M241.5,209.5 L241.5,226.5 L239.5,226.5 L239.5,209.5 L233.5,209.5 L240.5,195.5 L247.5,209.5 L241.5,209.5 Z" fill="#EE6B47" fill-rule="nonzero"></path>
            <rect id="Rectangle-8-Copy-6" stroke="#E8C48E" stroke-width="2" fill="#FFF9EB" x="171" y="300" width="138" height="28"></rect>
            <text id="HTMLBodyElement" font-family="PTMono-Regular, PT Mono" font-size="12" font-weight="normal" fill="#8A704D">
                <tspan x="186" y="317">HTMLBodyElement  </tspan>
            </text>
            <path id="Line-2-Copy-6" d="M241.5,279.5 L241.5,296.5 L239.5,296.5 L239.5,279.5 L233.5,279.5 L240.5,265.5 L247.5,279.5 L241.5,279.5 Z" fill="#EE6B47" fill-rule="nonzero"></path>
            <rect id="Rectangle-8-Copy-7" stroke="#E8C48E" stroke-width="2" fill="#FFF9EB" x="12" y="300" width="138" height="28"></rect>
            <text id="HTMLInputElement" font-family="PTMono-Regular, PT Mono" font-size="12" font-weight="normal" fill="#8A704D">
                <tspan x="24.4" y="317">HTMLInputElement  </tspan>
            </text>
            <path id="Line-2-Copy-7" d="M159.56301,270.384521 L129.324588,293.903293 L128.096707,292.324588 L158.335128,268.805816 L154.651485,264.069703 L170,261 L163.246653,275.120634 L159.56301,270.384521 Z" fill="#EE6B47" fill-rule="nonzero"></path>
            <rect id="Rectangle-8-Copy-8" stroke="#E8C48E" stroke-width="2" fill="#FFF9EB" x="332" y="300" width="138" height="28"></rect>
            <text id="HTMLAnchorElement" font-family="PTMono-Regular, PT Mono" font-size="12" font-weight="normal" fill="#8A704D">
                <tspan x="341.3" y="317">HTMLAnchorElement  </tspan>
            </text>
            <path id="Line-2-Copy-8" d="M317.084628,268.762186 L338.41207,292.577831 L336.922169,293.91207 L315.594727,270.096426 L311.125024,274.099145 L307,259 L321.55433,264.759468 L317.084628,268.762186 Z" fill="#EE6B47" fill-rule="nonzero"></path>
            <rect id="Rectangle-8-Copy-2" stroke="#E8C48E" stroke-width="2" fill="#FFF9EB" x="45" y="126" width="118" height="28"></rect>
            <text id="Text" font-family="PTMono-Regular, PT Mono" font-size="12" font-weight="normal" fill="#8A704D">
                <tspan x="89.6" y="144">Text  </tspan>
            </text>
            <path id="Line-2-Copy-2" d="M160.67283,105.505239 L141.340917,120.905238 L140.094762,119.340917 L159.426676,103.940918 L155.688214,99.2479546 L171,96 L164.411292,110.198202 L160.67283,105.505239 Z" fill="#EE6B47" fill-rule="nonzero"></path>
            <rect id="Rectangle-8-Copy-3" stroke="#E8C48E" stroke-width="2" fill="#FFF9EB" x="315" y="126" width="118" height="28"></rect>
            <text id="Comment" font-family="PTMono-Regular, PT Mono" font-size="12" font-weight="normal" fill="#8A704D">
                <tspan x="348.8" y="144">Comment  </tspan>
            </text>
            <path id="Line-2-Copy-3" d="M318.637855,103.84604 L338.40389,119.329434 L337.170566,120.90389 L317.404531,105.420496 L313.704559,110.143864 L307,96 L322.337827,99.1226713 L318.637855,103.84604 Z" fill="#EE6B47" fill-rule="nonzero"></path>
            <path id="Line-2-Copy-9" d="M318.637855,181.84604 L338.40389,197.329434 L337.170566,198.90389 L317.404531,183.420496 L313.704559,188.143864 L307,174 L322.337827,177.122671 L318.637855,181.84604 Z" fill="#EE6B47" fill-rule="nonzero"></path>
            <rect id="Rectangle-8-Copy-5" stroke="#E8C48E" stroke-width="2" fill="#FFF9EB" x="315" y="205" width="118" height="28"></rect>
            <text id="SVGElement" font-family="PTMono-Regular, PT Mono" font-size="12" font-weight="normal" fill="#8A704D">
                <tspan x="338" y="223">SVGElement  </tspan>
            </text>
            <text id="&lt;div&gt;Text&lt;/div&gt;" font-family="PTMono-Regular, PT Mono" font-size="12" font-weight="normal">
                <tspan x="48" y="171" fill="#8A704D">&lt;div&gt;</tspan>
                <tspan x="84" y="171" fill="#F5A623">Text</tspan>
                <tspan x="112.8" y="171" fill="#8A704D">&lt;/div&gt;</tspan>
            </text>
            <text id="&lt;input-type=&quot;â¦&quot;&gt;" font-family="PTMono-Regular, PT Mono" font-size="12" font-weight="normal" fill="#F5A623">
                <tspan x="24.4" y="341">&lt;input type="â¦"&gt;</tspan>
            </text>
            <text id="&lt;body&gt;" font-family="PTMono-Regular, PT Mono" font-size="12" font-weight="normal" fill="#F5A623">
                <tspan x="220.4" y="341">&lt;body&gt;</tspan>
            </text>
            <text id="&lt;a-href=&quot;â¦&quot;&gt;" font-family="PTMono-Regular, PT Mono" font-size="12" font-weight="normal" fill="#F5A623">
                <tspan x="358.8" y="341">&lt;a href="â¦"&gt;</tspan>
            </text>
            <text id="&lt;div&gt;Text&lt;/div&gt;" font-family="PTMono-Regular, PT Mono" font-size="12" font-weight="normal">
                <tspan x="189" y="188" fill="#8A704D">&lt;</tspan>
                <tspan x="196.2" y="188" fill="#F5A623">div</tspan>
                <tspan x="217.8" y="188" fill="#8A704D">&gt;</tspan>
                <tspan x="225" y="188" fill="#998364">Text</tspan>
                <tspan x="253.8" y="188" fill="#8A704D">&lt;/</tspan>
                <tspan x="268.2" y="188" fill="#F5A623">div</tspan>
                <tspan x="289.8" y="188" fill="#8A704D">&gt;</tspan>
            </text>
            <text id="&lt;!--comment--&gt;" font-family="PTMono-Regular, PT Mono" font-size="12" font-weight="normal" fill="#F5A623">
                <tspan x="327.6" y="171">&lt;!--comment--&gt;</tspan>
            </text>
        </g>
    </g>
</svg>

- **EventTarget** —— 是根的“抽象”类。该类的对象从未被创建。它作为一个基础，为了让所有 DOM 节点都支持所谓的“事件”，我们会在之后对它进行学习。
- **Node** —— 也是一个“抽象”类，充当 DOM 节点的基础。它提供了树的核心功能：parentNode、nextSibling、childNodes 等（它们都是 getter）。Node 类的对象从未被创建。但是一些具体的节点类却继承自它，例如：Text 表示文本节点，Element 用于元素节点，以及更多外来的类（如注释节点 Comment）。
- **Element** —— 是 DOM 元素的基类。它提供了元素级的导航，比如 nextElementSibling、children 以及像 getElementsByTagName、querySelector 这样的搜索方法。浏览器中不仅有 HTML，还会有 XML 和SVG 文档。Element 类充当以下更具体类的基类：SVGElement、XMLElement 和 HTMLElement。
- HTMLElement —— 最终会成为所有 HTML 元素的基类。由各种 HTML 元素继承：
HTMLInputElement —— `<input>` 元素的类，
HTMLBodyElement —— `<body>` 元素的类，
HTMLAnchorElement —— `<a>` 元素的类，等等，每个标记都有可以为自己提供特定属性和方法的类。

DOM 节点的属性主要有：

**nodeType**

我们可以从 DOM 对象类中获取 nodeType，但我们通常只需要查看它是文本节点还是元素节点。nodeType 属性就可以我们的需求。它有数值，最重要的是：1 —— 是元素，3 —— 是文本。只读。

**nodeName/tagName**

对于元素来说，标记名（除了 XML 模式外都要大写）。对于非元素节点，nodeName 则描述了它是什么。只读。

**innerHTML**

HTML 的元素内容。可以被修改。

**outerHTML**

元素的完整 HTML。写入 elem.outerHTML 的操作不会涉及 elem 自身。相反，它会在外部上下文中被替换成新的 HTML。原本的元素保持原样。

**nodeValue/data**

非元素节点（文本、注释）内容。两者几乎一样，我们通常使用 data。允许被修改。

**textContent**

元素中的文本，基本上是 HTML 减去所有`<tags>`。将文本写入元素中，并把所有特殊字符和标记完全视为文本。可以安全地插入用户生成的文本，防止不必要的 HTML 插入。

**hidden**

当设置为 true 时，执行与 CSS display:none 相同的操作。
DOM 节点还具有其他属性，具体内容则取决于它们的类。例如，`<input>`元素（HTMLInputElement）支持 value、type，而 `<a>` 元素（HTMLAnchorElement）则支持 href 等。大多数标准 HTML 属性都具有相应的 DOM 属性。


以下几个方法是针对元素特性的操作：

`elem.hasAttribute(name)` —— 检验是否拥这个特性。
`elem.getAttribute(name)` —— 获取到这个特性值。
`elem.setAttribute(name, value)` —— 设置这个特性值。
`elem.removeAttribute(name)` —— 移除这个特性。

- 它们的书写是大小写不敏感的（id 也可以写作 ID）。
- 特性的值只能是字符串。
- 改变特性值 value 会更新到属性(props)上。
- 但是直接改变属性的值却不会作用在特性的值上。
- DOM 属性的字符串可能跟特性值的字符串所表示的不是同一个东西
- 特性 —— 写在 HTML 中。
- 属性 —— 是一个 DOM 对象。


`node.append(...nodes or strings)` —— 在 node 末尾插入节点或者字符串，
`node.prepend(...nodes or strings)` —— 在 node 开头插入节点或者字符串，
`node.before(...nodes or strings`) —— 在 node 前面插入节点或者字符串，
`node.after(...nodes or strings)` —— 在 node 后面插入节点或者字符串，
`node.replaceWith(...nodes or strings)` —— 将 node 替换为节点或者字符串。

"beforebegin" —— 在 elem 开头位置前插入 html，
"afterbegin" —— 在 elem 开头位置后插入 html（译注：即 elem 元素内部的第一个子节点之前），
"beforeend" —— 在 elem 结束位置前插入 html（译注：即 elem 元素内部的最后一个子节点之后），
"afterend" —— 在 elem 结束位置后插入 html。

在管理 class 时，有两个 DOM 属性：

- className —— 字符串值可以很好地管理整个类集合。
- classList —— 拥有 add/remove/toggle/contains 方法的对象可以很好地支持单独的类。

改变样式：

- style 属性是一个带有 camelCased 样式的对象。对它的读取和修改 "style" 属性中的单个属性等价。要留意如果应用 important 和其他稀有内容 —— 在 MDN 上有一个方法列表。

- style.cssText 属性对应于整个“样式”属性，即完整的样式字符串。

获取已经解析的样式（对应于所有类，在应用所有 CSS 并计算最终值后）：

- getComputedStyle(elem[, pseudo]) 返回与 style 对象类似且包含了所有类的对象，是只读的。

<?xml version="1.0" encoding="UTF-8"?>
<svg width="670px" height="602px" viewBox="0 0 670 602" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <!-- Generator: sketchtool 55.2 (78181) - https://sketchapp.com -->
    <title>metric-all.svg</title>
    <desc>Created with sketchtool.</desc>
    <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="linearGradient-1">
            <stop stop-color="#FFFFFF" offset="0%"></stop>
            <stop stop-color="#F1F1F1" offset="100%"></stop>
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="linearGradient-2">
            <stop stop-color="#FFFFFF" offset="0%"></stop>
            <stop stop-color="#F1F1F1" offset="100%"></stop>
        </linearGradient>
    </defs>
    <g id="dom" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="metric-all.svg">
            <text id="Introduction" font-family="OpenSans-Bold, Open Sans" font-size="16" font-weight="bold" fill="#5A4739">
                <tspan x="160" y="94">Introduction</tspan>
                <tspan x="260.726562" y="94" font-family="OpenSans-Regular, Open Sans" font-size="14" font-weight="normal"></tspan>
                <tspan x="160" y="122" font-family="OpenSans-Regular, Open Sans" font-size="14" font-weight="normal">This Ecma Standard is based on several </tspan>
                <tspan x="160" y="141" font-family="OpenSans-Regular, Open Sans" font-size="14" font-weight="normal">originating technologies, the most well </tspan>
                <tspan x="160" y="160" font-family="OpenSans-Regular, Open Sans" font-size="14" font-weight="normal">known being JavaScript (Netscape) and </tspan>
                <tspan x="160" y="179" font-family="OpenSans-Regular, Open Sans" font-size="14" font-weight="normal">JScript (Microsoft). The language was </tspan>
                <tspan x="160" y="198" font-family="OpenSans-Regular, Open Sans" font-size="14" font-weight="normal">invented by Brendan Eich at Netscape and </tspan>
                <tspan x="160" y="217" font-family="OpenSans-Regular, Open Sans" font-size="14" font-weight="normal">first appeared in that companyâs Navigator </tspan>
                <tspan x="160" y="236" font-family="OpenSans-Regular, Open Sans" font-size="14" font-weight="normal">2.0 browser. It has appeared in all </tspan>
                <tspan x="160" y="255" font-family="OpenSans-Regular, Open Sans" font-size="14" font-weight="normal">subsequent browsers from Netscape and </tspan>
                <tspan x="160" y="274" font-family="OpenSans-Regular, Open Sans" font-size="14" font-weight="normal">in all browsers from Microsoft starting with </tspan>
                <tspan x="160" y="293" font-family="OpenSans-Regular, Open Sans" font-size="14" font-weight="normal">Internet Explorer 3.0.</tspan>
                <tspan x="160" y="312" font-family="OpenSans-Regular, Open Sans" font-size="14" font-weight="normal">The development of this Standard started </tspan>
                <tspan x="160" y="331" font-family="OpenSans-Regular, Open Sans" font-size="14" font-weight="normal">in November 1996. The first edition of this </tspan>
                <tspan x="160" y="350" font-family="OpenSans-Regular, Open Sans" font-size="14" font-weight="normal">Ecma Standard was adopted by the Ecma </tspan>
                <tspan x="160" y="369" font-family="OpenSans-Regular, Open Sans" font-size="14" font-weight="normal">General Assembly of June 1997.</tspan>
                <tspan x="160" y="388" font-family="OpenSans-Regular, Open Sans" font-size="14" font-weight="normal">That Ecma Standard was submitted to ISO/</tspan>
                <tspan x="160" y="407" font-family="OpenSans-Regular, Open Sans" font-size="14" font-weight="normal">IEC JTC 1 for adoption under the fast-track </tspan>
                <tspan x="160" y="426" font-family="OpenSans-Regular, Open Sans" font-size="14" font-weight="normal">procedure, and approved as international </tspan>
                <tspan x="160" y="445" font-family="OpenSans-Regular, Open Sans" font-size="14" font-weight="normal">standard ISO/IEC 16262, in April 1998. The </tspan>
                <tspan x="160" y="464" font-family="OpenSans-Regular, Open Sans" font-size="14" font-weight="normal">Ecma General Assembly of June 1998 </tspan>
                <tspan x="160" y="483" font-family="OpenSans-Regular, Open Sans" font-size="14" font-weight="normal">approved the second edition of ECMA-262 </tspan>
                <tspan x="160" y="502" font-family="OpenSans-Regular, Open Sans" font-size="14" font-weight="normal">to keep it fully aligned with ISO/IEC 16262. </tspan>
                <tspan x="160" y="521" font-family="OpenSans-Regular, Open Sans" font-size="14" font-weight="normal">Changes between the first and the second </tspan>
                <tspan x="160" y="540" font-family="OpenSans-Regular, Open Sans" font-size="14" font-weight="normal">edition are editorial in nature.</tspan>
            </text>
            <path d="M466,187 L142,187 L142,427 L466,427 L466,187 Z M117,162 L491,162 L491,452 L117,452 L117,162 Z" id="Rectangle-1" fill-opacity="0.88" fill="#E8C48F"></path>
            <rect id="Rectangle-2" stroke-opacity="0.8" stroke="#E8C48F" stroke-width="2" x="141" y="62" width="326" height="500"></rect>
            <text id="scrollHeight" transform="translate(592.000000, 310.000000) rotate(-90.000000) translate(-592.000000, -310.000000) " font-family="PTMono-Regular, PT Mono" font-size="14" font-weight="normal" fill="#EE6B47">
                <tspan x="541.6" y="314.5">scrollHeight</tspan>
            </text>
            <text id="offsetHeight" transform="translate(558.000000, 310.000000) rotate(-90.000000) translate(-558.000000, -310.000000) " font-family="PTMono-Regular, PT Mono" font-size="14" font-weight="normal" fill="#EE6B47">
                <tspan x="507.6" y="314.5">offsetHeight</tspan>
            </text>
            <text id="scrollTop" transform="translate(508.000000, 114.000000) rotate(-90.000000) translate(-508.000000, -114.000000) " font-family="PTMono-Regular, PT Mono" font-size="14" font-weight="normal" fill="#EE6B47">
                <tspan x="470.2" y="118.5">scrollTop</tspan>
            </text>
            <path d="M466.5,62 L614.639999,62" id="Line-27" stroke="#EE6B47" stroke-width="2" stroke-linecap="square" stroke-dasharray="3,6"></path>
            <path d="M492.5,163 L584.639999,163" id="Line-28" stroke="#EE6B47" stroke-width="2" stroke-linecap="square" stroke-dasharray="3,6"></path>
            <path d="M492.5,451 L584.639999,451" id="Line-29" stroke="#EE6B47" stroke-width="2" stroke-linecap="square" stroke-dasharray="3,6"></path>
            <path d="M467.5,189 L539.639999,189" id="Line-33" stroke="#EE6B47" stroke-width="2" stroke-linecap="square" stroke-dasharray="3,6"></path>
            <path d="M467.5,427 L539.639999,427" id="Line-32" stroke="#EE6B47" stroke-width="2" stroke-linecap="square" stroke-dasharray="3,6"></path>
            <path d="M466.5,561 L614.639999,561" id="Line-26" stroke="#EE6B47" stroke-width="2" stroke-linecap="square" stroke-dasharray="3,6"></path>
            <path id="Line-25" d="M606,78.5 L606,544.5 L612,544.5 L605,558.5 L598,544.5 L604,544.5 L604,78.5 L598,78.5 L605,64.5 L612,78.5 L606,78.5 Z" fill="#EE6B47" fill-rule="nonzero"></path>
            <path id="Line-30" d="M572,178.5 L572,433.5 L578,433.5 L571,447.5 L564,433.5 L570,433.5 L570,178.5 L564,178.5 L571,164.5 L578,178.5 L572,178.5 Z" fill="#EE6B47" fill-rule="nonzero"></path>
            <text id="clientHeight" transform="translate(514.000000, 304.000000) rotate(-90.000000) translate(-514.000000, -304.000000) " font-family="PTMono-Regular, PT Mono" font-size="14" font-weight="normal" fill="#EE6B47">
                <tspan x="463.6" y="308.5">clientHeight</tspan>
            </text>
            <path id="Line-34" d="M528,205.5 L528,411.5 L534,411.5 L527,425.5 L520,411.5 L526,411.5 L526,205.5 L520,205.5 L527,191.5 L534,205.5 L528,205.5 Z" fill="#EE6B47" fill-rule="nonzero"></path>
            <text id="offsetTop" transform="translate(104.000000, 83.000000) rotate(-90.000000) translate(-104.000000, -83.000000) " font-family="PTMono-Regular, PT Mono" font-size="14" font-weight="normal" fill="#EE6B47">
                <tspan x="66.2" y="87.5">offsetTop</tspan>
            </text>
            <text id="clientLeft" transform="translate(130.500000, 237.000000) rotate(-90.000000) translate(-130.500000, -237.000000) " font-family="PTMono-Regular, PT Mono" font-size="14" font-weight="normal" fill="#C74A6C">
                <tspan x="88.5" y="241.5">clientLeft</tspan>
            </text>
            <path id="Line-36" d="M118,18.5 L118,146.5 L124,146.5 L117,160.5 L110,146.5 L116,146.5 L116,18.5 L110,18.5 L117,4.5 L124,18.5 L118,18.5 Z" fill="#EE6B47" fill-rule="nonzero"></path>
            <path id="Line-31" d="M522,78.5 L522,143.5 L528,143.5 L521,157.5 L514,143.5 L520,143.5 L520,78.5 L514,78.5 L521,64.5 L528,78.5 L522,78.5 Z" fill="#EE6B47" fill-rule="nonzero"></path>
            <rect id="Rectangle-14" fill-opacity="0.88" fill="#FFFFFF" x="154" y="73" width="312" height="89"></rect>
            <rect id="Rectangle-15" fill-opacity="0.88" fill="#FFFFFF" x="154" y="451" width="312" height="93"></rect>
            <path id="Line-39" d="M159.639999,485.09 L430.999985,485.09 L430.999985,479.09 L444.999985,486.09 L430.999985,493.09 L430.999985,487.09 L159.639999,487.09 L159.639999,493.09 L145.639999,486.09 L159.639999,479.09 L159.639999,485.09 Z" fill="#EE6B47" fill-rule="nonzero"></path>
            <path d="M445.639999,510 L445.639999,426" id="Line-42" stroke="#EE6B47" stroke-width="2" stroke-linecap="square" stroke-dasharray="3,6"></path>
            <path d="M141.639999,510 L141.639999,426" id="Line-43" stroke="#EE6B47" stroke-width="2" stroke-linecap="square" stroke-dasharray="3,6"></path>
            <text id="clientWidth" font-family="PTMono-Regular, PT Mono" font-size="14" font-weight="normal" fill="#EE6B47">
                <tspan x="261.3" y="478">clientWidth</tspan>
            </text>
            <path id="Line-41" d="M18.6399994,162.09 L100,162.09 L100,156.09 L114,163.09 L100,170.09 L100,164.09 L18.6399994,164.09 L18.6399994,170.09 L4.63999939,163.09 L18.6399994,156.09 L18.6399994,162.09 Z" fill="#EE6B47" fill-rule="nonzero"></path>
            <text id="clientTop" font-family="PTMono-Regular, PT Mono" font-size="14" font-weight="normal" fill="#C74A6C">
                <tspan x="147.7" y="178">clientTop</tspan>
            </text>
            <text id="offsetLeft" font-family="PTMono-Regular, PT Mono" font-size="14" font-weight="normal" fill="#EE6B47">
                <tspan x="17.5" y="154">offsetLeft</tspan>
            </text>
            <path id="Line-40" d="M134.639999,528.09 L474.999985,528.09 L474.999985,522.09 L488.999985,529.09 L474.999985,536.09 L474.999985,530.09 L134.639999,530.09 L134.639999,536.09 L120.639999,529.09 L134.639999,522.09 L134.639999,528.09 Z" fill="#EE6B47" fill-rule="nonzero"></path>
            <path d="M490.639999,551 L490.639999,447" id="Line-45" stroke="#EE6B47" stroke-width="2" stroke-linecap="square" stroke-dasharray="3,6"></path>
            <path d="M116.639999,551 L116.639999,447" id="Line-44" stroke="#EE6B47" stroke-width="2" stroke-linecap="square" stroke-dasharray="3,6"></path>
            <text id="offsetWidth" font-family="PTMono-Regular, PT Mono" font-size="14" font-weight="normal" fill="#EE6B47">
                <tspan x="258.3" y="516">offsetWidth</tspan>
            </text>
            <rect id="Rectangle-233" stroke="#8A704D" stroke-width="2" x="1" y="1" width="668" height="600"></rect>
            <g id="Scrollbar" transform="translate(450.000000, 187.000000)">
                <rect id="Rectangle-19" stroke="#E9E9E9" fill="#F3F2F2" x="0.5" y="0.5" width="15" height="239" rx="3"></rect>
                <g id="Rectangle-18-+-Triangle-1">
                    <rect id="Rectangle-18" stroke="#CFCFCF" fill="url(#linearGradient-1)" x="0.5" y="0.5" width="15" height="19" rx="3"></rect>
                    <polygon id="Triangle-1" fill="#92979F" points="8 7 11.2 13 4.8 13"></polygon>
                </g>
                <g id="Rectangle-18-+-Triangle-2" transform="translate(8.000000, 230.000000) scale(1, -1) translate(-8.000000, -230.000000) translate(0.000000, 220.000000)">
                    <rect id="Rectangle-18" stroke="#CFCFCF" fill="url(#linearGradient-1)" x="0.5" y="0.5" width="15" height="19" rx="3"></rect>
                    <polygon id="Triangle-1" fill="#92979F" points="8 7 11.2 13 4.8 13"></polygon>
                </g>
                <g id="Rectangle-18-+-Triangle-3-+-Group" transform="translate(0.000000, 50.000000)">
                    <g id="Rectangle-18-+-Triangle-3" transform="translate(8.000000, 25.500000) scale(1, -1) translate(-8.000000, -25.500000) " fill="url(#linearGradient-2)" stroke="#CFCFCF">
                        <rect id="Rectangle-18" x="0.5" y="0.5" width="15" height="50" rx="3"></rect>
                    </g>
                    <g id="Group" transform="translate(4.000000, 20.000000)" fill="#D8D8D8" stroke="#979797">
                        <rect id="Rectangle-22" x="0.5" y="0.5" width="7" height="1"></rect>
                        <rect id="Rectangle-23" x="0.5" y="3.5" width="7" height="1"></rect>
                        <rect id="Rectangle-24" x="0.5" y="6.5" width="7" height="1"></rect>
                        <rect id="Rectangle-25" x="0.5" y="9.5" width="7" height="1"></rect>
                    </g>
                </g>
            </g>
            <g id="Group" transform="translate(115.000000, 162.000000)">
                <g id="Line-4-+-Line-5" transform="translate(23.000000, 19.000000)" stroke="#C74A6C" stroke-linecap="square" stroke-width="2">
                    <path d="M2.5,0.5 L0,6" id="Line-4" transform="translate(1.500000, 3.000000) scale(1, -1) translate(-1.500000, -3.000000) "></path>
                    <path d="M5.5,0.5 L3,6" id="Line-5" transform="translate(4.500000, 3.000000) scale(-1, -1) translate(-4.500000, -3.000000) "></path>
                </g>
                <g id="Line-4-+-Line-6" transform="translate(26.000000, 4.000000) scale(1, -1) translate(-26.000000, -4.000000) translate(23.000000, 1.000000)" stroke="#C74A6C" stroke-linecap="square" stroke-width="2">
                    <path d="M2.5,0.5 L0,6" id="Line-4" transform="translate(1.500000, 3.000000) scale(1, -1) translate(-1.500000, -3.000000) "></path>
                    <path d="M5.5,0.5 L3,6" id="Line-5" transform="translate(4.500000, 3.000000) scale(-1, -1) translate(-4.500000, -3.000000) "></path>
                </g>
                <path d="M14,13.5 L14,38.5" id="Line-49" stroke="#C74A6C" stroke-width="2" stroke-linecap="round" stroke-linejoin="bevel" transform="translate(14.000000, 26.000000) rotate(-270.000000) translate(-14.000000, -26.000000) "></path>
                <path d="M26,25.5 L26,0.5" id="Line-50" stroke="#C74A6C" stroke-width="2" stroke-linecap="round" stroke-linejoin="bevel"></path>
                <path d="M23.8833908,26.1363636 L20.0861971,24.4103665 L19.1758306,23.9965635 L20.0034365,22.1758306 L20.9138029,22.5896335 L26.4138029,25.0896335 L27.3241694,25.5034365 L26.7348224,26.8 L26.8241694,26.9965635 L26.5989404,27.0989404 L26.4965635,27.3241694 L26.3,27.2348224 L25.9138029,27.4103665 L20.4138029,29.9103665 L19.5034365,30.3241694 L18.6758306,28.5034365 L19.5861971,28.0896335 L23.8833908,26.1363636 Z" id="Line-4" fill="#C74A6C" fill-rule="nonzero"></path>
                <path d="M4.11660919,26.1363636 L8.41380294,28.0896335 L9.32416942,28.5034365 L8.49656353,30.3241694 L7.58619706,29.9103665 L2.08619706,27.4103665 L1.7,27.2348224 L1.50343647,27.3241694 L1.40105963,27.0989404 L1.17583058,26.9965635 L1.26517764,26.8 L0.675830578,25.5034365 L1.58619706,25.0896335 L7.08619706,22.5896335 L7.99656353,22.1758306 L8.82416942,23.9965635 L7.91380294,24.4103665 L4.11660919,26.1363636 Z" id="Line-4" fill="#C74A6C" fill-rule="nonzero"></path>
            </g>
        </g>
    </g>
</svg>

元素具有以下几何属性：

`offsetParent` — 是最近的有定位属性的祖先元素，或者是 td、th、table、body。
`offsetLeft/offsetTop` — 是相对于 offsetParent 的左上角边缘坐标。
`offsetWidth/offsetHeight` — 元素的“外部”宽/高 ，边框尺寸计算在内。
`clientLeft/clientTop` — 从元素左上角外部到内部的距离，对于从左到右渲染元素的操作系统，它始终是左/顶部边界的宽度，而对于从右到左的操作系统，垂直滚动条在左边，所以 clientLeft 也包括滚动条的宽度。
`clientWidth/clientHeight` — 内容的宽度/高度，包括内间距，但没有滚动条。
`scrollWidth/scrollHeight` — 内容的宽度/高度，包括可滚动的可视区域外的尺寸，也包括内间距，但不包括滚动条。
`scrollLeft/scrollTop` — 从左上角开始的元素的滚动部分的宽度/高度。

几何：

文档可视范围的宽度/高度（内容区域的宽高）：`document.documentElement.clientWidth/Height
`
整个文档的宽度/高度，包括滚动区域外的部分：

```js
let scrollHeight = Math.max(
  document.body.scrollHeight, document.documentElement.scrollHeight,
  document.body.offsetHeight, document.documentElement.offsetHeight,
  document.body.clientHeight, document.documentElement.clientHeight
);
```

滚动：

读取当前的滚动：window.pageYOffset/pageXOffset

改变当前的滚动：

`window.scrollTo(pageX,pageY)` — 绝对定位
`window.scrollBy(x,y)` — 相对当前位置的滚动
`elem.scrollIntoView(top)` — 滚动到正好elem可视的位置（elem 与窗口的顶部/底部对齐）
`document.body.style.overflow = 'hidden'` - 禁止滚动

坐标

窗口坐标并不会考虑到文档滚动，它们就是基于窗口的左上角计算出来的。
文档相对坐标是从文档的左上角开始计算，而不是窗口。

相对于窗口的坐标 — `elem.getBoundingClientRect()`。
相对于文档的坐标 — `elem.getBoundingClientRect()` 加上当前页面滚动的长度。

窗口坐标非常适合和 position:fixed 一起使用，文档坐标非常适合和 position:absolute 一起使用。

这两个坐标系统有它们各自的“优点”和“缺点”，有些时候我们需要使用其中一个或另一个，就像 CSS position 中的 absolute 和 fixed 那样。


[dom-navigation]: (https://zh.javascript.info/dom-navigation)