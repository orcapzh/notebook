# 事件

## 常见事件

- 鼠标事件：

click —— 当鼠标点击一个元素时（触摸屏设备在 tap 时生成）。
contextmenu —— 当鼠标右击一个元素时。
mouseover / mouseout —— 当鼠标光标移入或移出一个元素时。
mousedown / mouseup —— 当鼠标按下/释放一个元素时。
mousemove —— 当鼠标移出时。

- 表单元素事件：

submit —— 当访问者提交了一个 `<form>` 时。
focus —— 当访问者聚焦一个元素时，例如 `<input>`。

- 键盘事件：

keydown and keyup —— 当访问者按下然后松开按钮时。

- Document 事件：

DOMContentLoaded —— 当加载和处理 HTML 时，DOM 将会被完整地构建。

- CSS 事件：

transitionend —— 当 CSS 动画完成时。

## 事件分发

有 3 种方法可以分发事件处理器：

- HTML 属性：onclick="..."。
- DOM 属性 elem.onclick = function。
- 方法：添加 elem.addEventListener(event, handler[, phase])，移除 removeEventListener。

HTML 属性很少使用，因为 HTML 标签中的 JavaScript 看起来奇怪又陌生。而且也不能在里面写太多的代码。

DOM 属性可以使用，但我们不能为特定事件分发多个处理器。在许多场景中，这种限制并不严重。

最后一种方法是最灵活的，但也是编写内容最多的。有少数事件只能使用这种方式。例如 transtionend 和 DOMContentLoaded（有待讨论）。当然 addEventListener 也支持对象作为事件处理器。在这种场景下，事件发生时就需要调用 handleEvent 方法。

无论你如何分发处理器 —— 它都会将事件对象作为第一个参数。该对象包含事件发生的细节。

<?xml version="1.0" encoding="UTF-8"?>
<svg width="641px" height="633px" viewBox="0 0 641 633" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <!-- Generator: sketchtool 55.2 (78181) - https://sketchapp.com -->
    <title>eventflow.svg</title>
    <desc>Created with sketchtool.</desc>
    <g id="dom" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="eventflow.svg">
            <g id="eventflow" transform="translate(22.000000, 28.000000)">
                <g id="nodes">
                    <g id="Window-node" transform="translate(224.684713, 0.000000)">
                        <g id="Group">
                            <rect id="Rectangle-path" stroke="#000000" fill="#DCDCDC" x="0" y="0" width="134.426752" height="34.5671642"></rect>
                            <text id="Window" fill="#000000" font-family="OpenSans-Regular, Open Sans" font-size="15.5552239" font-weight="normal">
                                <tspan x="39.3678344" y="21.9134328">Window</tspan>
                            </text>
                        </g>
                    </g>
                    <g id="document-node" transform="translate(234.286624, 60.492537)">
                        <g id="Group">
                            <rect id="Rectangle-path" stroke="#000000" fill="#DCDCDC" x="0" y="0" width="115.22293" height="34.5671642"></rect>
                            <text id="Document" fill="#000000" font-family="OpenSans-Regular, Open Sans" font-size="15.5552239" font-weight="normal">
                                <tspan x="22.0843949" y="21.9134328">Document</tspan>
                            </text>
                        </g>
                    </g>
                    <g id="html-node" transform="translate(243.888535, 120.985075)">
                        <rect id="Rectangle-path" stroke="#000000" fill="#87CEFA" x="0" y="0" width="96.0191083" height="34.5671642" rx="5"></rect>
                        <text id="&lt;html&gt;" fill="#000000" font-family="OpenSans-Regular, Open Sans" font-size="15.5552239" font-weight="normal">
                            <tspan x="23.044586" y="21.9134328">&lt;html&gt;</tspan>
                        </text>
                    </g>
                    <g id="body-node" transform="translate(243.888535, 181.477612)">
                        <rect id="Rectangle-path" stroke="#000000" fill="#87CEFA" x="0" y="0" width="96.0191083" height="34.5671642" rx="5"></rect>
                        <text id="&lt;body&gt;" fill="#000000" font-family="OpenSans-Regular, Open Sans" font-size="15.5552239" font-weight="normal">
                            <tspan x="23.044586" y="21.9134328">&lt;body&gt;</tspan>
                        </text>
                    </g>
                    <g id="table-node" transform="translate(243.888535, 241.970149)">
                        <rect id="Rectangle-path" stroke="#000000" fill="#87CEFA" x="0" y="0" width="96.0191083" height="34.5671642" rx="5"></rect>
                        <text id="&lt;table&gt;" fill="#000000" font-family="OpenSans-Regular, Open Sans" font-size="15.5552239" font-weight="normal">
                            <tspan x="23.044586" y="21.9134328">&lt;table&gt;</tspan>
                        </text>
                    </g>
                    <g id="tbody-node" transform="translate(243.888535, 302.462687)">
                        <rect id="Rectangle-path" stroke="#000000" fill="#87CEFA" x="0" y="0" width="96.0191083" height="34.5671642" rx="5"></rect>
                        <text id="&lt;tbody&gt;" fill="#000000" font-family="OpenSans-Regular, Open Sans" font-size="15.5552239" font-weight="normal">
                            <tspan x="19.2038217" y="21.9134328">&lt;tbody&gt;</tspan>
                        </text>
                    </g>
                    <g id="tr_1-node" transform="translate(80.656051, 380.238806)">
                        <rect id="Rectangle-path" stroke="#000000" fill="#87CEFA" x="0" y="0" width="96.0191083" height="34.5671642" rx="5"></rect>
                        <text id="&lt;tr&gt;" fill="#000000" font-family="OpenSans-Regular, Open Sans" font-size="15.5552239" font-weight="normal">
                            <tspan x="35.5270701" y="21.9134328">&lt;tr&gt;</tspan>
                        </text>
                    </g>
                    <g id="tr_2-node" transform="translate(426.324841, 380.238806)">
                        <rect id="Rectangle-path" stroke="#000000" fill="#87CEFA" x="0" y="0" width="96.0191083" height="34.5671642" rx="5"></rect>
                        <text id="&lt;tr&gt;" fill="#000000" font-family="OpenSans-Regular, Open Sans" font-size="15.5552239" font-weight="normal">
                            <tspan x="33.6066879" y="21.9134328">&lt;tr&gt;</tspan>
                        </text>
                    </g>
                    <g id="tr_1_td_1-node" transform="translate(13.442675, 458.014925)">
                        <rect id="Rectangle-path" stroke="#000000" fill="#87CEFA" x="0" y="0" width="96.0191083" height="34.5671642" rx="5"></rect>
                        <text id="&lt;td&gt;" fill="#000000" font-family="OpenSans-Regular, Open Sans" font-size="15.5552239" font-weight="normal">
                            <tspan x="31.6863057" y="21.9134328">&lt;td&gt;</tspan>
                        </text>
                    </g>
                    <g id="tr_1_td_1_text-node" transform="translate(0.000000, 518.507463)">
                        <ellipse id="Oval" stroke="#000000" fill="#4682B4" cx="61.4522293" cy="30.2462687" rx="61.4522293" ry="30.2462687"></ellipse>
                        <text id="Shady-Grove" fill="#FFFFFF" font-family="OpenSans-Regular, Open Sans" font-size="12.9626866" font-weight="normal">
                            <tspan x="19.2038217" y="34.6044776">Shady Grove</tspan>
                        </text>
                    </g>
                    <g id="tr_1_td_2-node" transform="translate(147.869427, 458.014925)">
                        <rect id="Rectangle-path" stroke="#000000" fill="#87CEFA" x="0" y="0" width="96.0191083" height="34.5671642" rx="5"></rect>
                        <text id="&lt;td&gt;" fill="#000000" font-family="OpenSans-Regular, Open Sans" font-size="15.5552239" font-weight="normal">
                            <tspan x="33.6066879" y="21.9134328">&lt;td&gt;</tspan>
                        </text>
                    </g>
                    <g id="tr_1_td_2_text-node" transform="translate(134.426752, 518.507463)">
                        <ellipse id="Oval" stroke="#000000" fill="#4682B4" cx="61.4522293" cy="30.2462687" rx="61.4522293" ry="30.2462687"></ellipse>
                        <text id="Aeolian" fill="#FFFFFF" font-family="OpenSans-Regular, Open Sans" font-size="12.9626866" font-weight="normal">
                            <tspan x="36.9673567" y="34.6044776">Aeolian</tspan>
                        </text>
                    </g>
                    <g id="tr_2_td_1-node" transform="translate(359.111465, 458.014925)">
                        <rect id="Rectangle-path" stroke="#000000" fill="#0000FF" x="0" y="0" width="96.0191083" height="34.5671642" rx="5"></rect>
                        <text id="&lt;td&gt;" fill="#FFFFFF" font-family="PTMono-Regular, PT Mono" font-size="15.5552239" font-weight="normal">
                            <tspan x="27.8455414" y="22.3701493">&lt;td&gt;</tspan>
                        </text>
                    </g>
                    <g id="tr_2_td_1_text-node" transform="translate(345.668790, 518.507463)">
                        <ellipse id="Oval" stroke="#000000" fill="#4682B4" cx="61.4522293" cy="30.2462687" rx="61.4522293" ry="30.2462687"></ellipse>
                        <g id="Group" transform="translate(12.482484, 14.555224)" fill="#FFFFFF" font-family="OpenSans-Regular, Open Sans" font-size="12.9626866" font-weight="normal">
                            <text id="Over-the-River,">
                                <tspan x="0.480095541" y="14">Over the River,</tspan>
                            </text>
                            <text id="Charlie">
                                <tspan x="25.9251592" y="31.2835821">Charlie</tspan>
                            </text>
                        </g>
                    </g>
                    <g id="tr_2_td_2-node" transform="translate(493.538217, 458.014925)">
                        <rect id="Rectangle-path" stroke="#000000" fill="#87CEFA" x="0" y="0" width="96.0191083" height="34.5671642" rx="5"></rect>
                        <text id="&lt;td&gt;" fill="#000000" font-family="OpenSans-Regular, Open Sans" font-size="15.5552239" font-weight="normal">
                            <tspan x="33.6066879" y="21.9134328">&lt;td&gt;</tspan>
                        </text>
                    </g>
                    <g id="tr_2_td_2_text-node" transform="translate(480.095541, 518.507463)">
                        <ellipse id="Oval" stroke="#000000" fill="#4682B4" cx="61.4522293" cy="30.2462687" rx="61.4522293" ry="30.2462687"></ellipse>
                        <text id="Dorian" fill="#FFFFFF" font-family="OpenSans-Regular, Open Sans" font-size="12.9626866" font-weight="normal">
                            <tspan x="39.8479299" y="34.6044776">Dorian</tspan>
                        </text>
                    </g>
                </g>
                <g id="edges" transform="translate(61.452229, 34.567164)" stroke="#000000" stroke-width="2">
                    <path d="M230.44586,0 L230.44586,19.8761194" id="window-document" fill="#000000"></path>
                    <path d="M230.44586,60.4925373 L230.44586,80.3686567" id="document-html" fill="#000000"></path>
                    <path d="M230.44586,120.985075 L230.44586,140.861194" id="html-body" fill="#000000"></path>
                    <path d="M230.44586,181.477612 L230.44586,201.353731" id="body-table" fill="#000000"></path>
                    <path d="M230.44586,241.970149 L230.44586,261.846269" id="table-tbody" fill="#000000"></path>
                    <path d="M230.44586,302.462687 C230.44586,313.985075 214.442675,319.746269 182.436306,319.746269 L86.4171975,319.746269 C73.6146497,319.746269 67.2133758,326.371642 67.2133758,339.622388" id="tbody-tr_1"></path>
                    <path d="M230.44586,302.462687 C230.44586,313.985075 252.850318,319.746269 297.659236,319.746269 L393.678344,319.746269 C406.480892,319.746269 412.882166,326.371642 412.882166,339.622388" id="tbody-tr_2"></path>
                    <path d="M67.2133758,380.238806 C67.2133758,391.761194 60.8121019,397.522388 48.0095541,397.522388 L19.2038217,397.522388 C6.40127389,397.522388 0,404.147761 0,417.398507" id="tr_1-tr_2_td_1"></path>
                    <path d="M67.2133758,380.238806 C67.2133758,391.761194 73.6146497,397.522388 86.4171975,397.522388 L115.22293,397.522388 C128.025478,397.522388 134.426752,404.147761 134.426752,417.398507" id="tr_1-tr_2_td_2"></path>
                    <path d="M412.882166,380.238806 C412.882166,391.761194 406.480892,397.522388 393.678344,397.522388 L364.872611,397.522388 C352.070064,397.522388 345.66879,404.147761 345.66879,417.398507" id="tr_2-tr_2_td_1"></path>
                    <path d="M412.882166,380.238806 C412.882166,391.761194 425.684713,397.522388 451.289809,397.522388 L460.89172,397.522388 C473.694268,397.522388 480.095541,404.147761 480.095541,417.398507" id="tr_2-tr_2_td_2"></path>
                    <path d="M0,458.014925 L0,477.891045" id="tr_1_td_1-text" fill="#000000"></path>
                    <path d="M134.426752,458.014925 L134.426752,477.891045" id="tr_1_td_2-text" fill="#000000"></path>
                    <path d="M345.66879,458.014925 L345.66879,477.891045" id="tr_2_td_1-text" fill="#000000"></path>
                    <path d="M482.015924,458.014925 L482.015924,477.891045" id="tr_2_td_2-text" fill="#000000"></path>
                </g>
                <g id="event-flow" transform="translate(103.700637, 14.691045)">
                    <g id="target_phase" transform="translate(186.277070, 443.323881)">
                        <text id="Target" fill="#0000FF" font-family="OpenSans-Regular, Open Sans" font-size="17.2835821" font-weight="normal">
                            <tspan x="0.960191083" y="34.1477612">Target</tspan>
                        </text>
                        <text id="Phase" fill="#0000FF" font-family="OpenSans-Regular, Open Sans" font-size="17.2835821" font-weight="normal">
                            <tspan x="0.480095541" y="51.4313433">Phase</tspan>
                        </text>
                        <text id="(2)" fill="#0000FF" font-family="OpenSans-Regular, Open Sans" font-size="17.2835821" font-weight="normal">
                            <tspan x="15.8431529" y="68.7149254">(2)</tspan>
                        </text>
                        <rect id="Rectangle-path" stroke="#000000" stroke-width="5" x="69.133758" y="0" width="96.0191083" height="34.5671642" rx="5"></rect>
                    </g>
                    <g id="capture_phase">
                        <text id="Capture" fill="#FF0000" font-family="OpenSans-Regular, Open Sans" font-size="17.2835821" font-weight="normal">
                            <tspan x="0" y="166.367164">Capture</tspan>
                        </text>
                        <text id="Phase" fill="#FF0000" font-family="OpenSans-Regular, Open Sans" font-size="17.2835821" font-weight="normal">
                            <tspan x="7.20143312" y="183.650746">Phase</tspan>
                        </text>
                        <text id="(1)" fill="#FF0000" font-family="OpenSans-Regular, Open Sans" font-size="17.2835821" font-weight="normal">
                            <tspan x="22.5644904" y="200.934328">(1)</tspan>
                        </text>
                        <path d="M116.183121,0.864179104 C77.7754777,-1.72835821 77.7754777,41.480597 119.063694,50.1223881" id="capture_phase_arrow" stroke="#FF0000" stroke-width="3"></path>
                        <g id="capture_phase_arrow-link" transform="translate(92.178344, 60.492537)" stroke="#FF0000" stroke-width="3">
                            <path d="M28.8057325,0.864179104 C-9.60191083,-1.72835821 -9.60191083,41.480597 31.6863057,50.1223881" id="capture_phase_arrow"></path>
                        </g>
                        <g id="capture_phase_arrow-link" transform="translate(96.979299, 120.985075)" stroke="#FF0000" stroke-width="3">
                            <path d="M28.8057325,0.864179104 C-9.60191083,-1.72835821 -9.60191083,41.480597 31.6863057,50.1223881" id="capture_phase_arrow"></path>
                        </g>
                        <g id="capture_phase_arrow-link" transform="translate(96.979299, 181.477612)" stroke="#FF0000" stroke-width="3">
                            <path d="M28.8057325,0.864179104 C-9.60191083,-1.72835821 -9.60191083,41.480597 31.6863057,50.1223881" id="capture_phase_arrow"></path>
                        </g>
                        <g id="capture_phase_arrow-link" transform="translate(96.979299, 241.970149)" stroke="#FF0000" stroke-width="3">
                            <path d="M28.8057325,0.864179104 C-9.60191083,-1.72835821 -9.60191083,41.480597 31.6863057,50.1223881" id="capture_phase_arrow"></path>
                        </g>
                        <path d="M125.785032,303.326866 C87.3773885,300.734328 87.3773885,385.423881 301.5,372.461194" id="capture_phase_arrow2" stroke="#FF0000" stroke-width="3"></path>
                        <path d="M301.5,385.423881 C207.401274,382.831343 207.401274,437.274627 239.08758,450.237313" id="capture_phase_arrow3" stroke="#FF0000" stroke-width="3"></path>
                    </g>
                    <g id="bubble_phase" transform="translate(250.609873, 12.962687)">
                        <text id="Bubbling" fill="#008000" font-family="OpenSans-Regular, Open Sans" font-size="17.2835821" font-weight="normal">
                            <tspan x="72.9745223" y="239.822388">Bubbling</tspan>
                        </text>
                        <text id="Phase" fill="#008000" font-family="OpenSans-Regular, Open Sans" font-size="17.2835821" font-weight="normal">
                            <tspan x="83.0565287" y="257.10597">Phase</tspan>
                        </text>
                        <text id="(3)" fill="#008000" font-family="OpenSans-Regular, Open Sans" font-size="17.2835821" font-weight="normal">
                            <tspan x="98.419586" y="274.389552">(3)</tspan>
                        </text>
                        <path d="M112.342357,437.274627 C244.848726,381.102985 244.848726,369.868657 179.555732,372.461194" id="bubble_phase_arrow3" stroke="#008000" stroke-width="3"></path>
                        <path d="M182.436306,358.634328 C220.843949,349.992537 220.843949,307.647761 1.92038217,299.00597" id="bubble_phase_arrow2" stroke="#008000" stroke-width="3"></path>
                        <path d="M0,287.771642 C38.4076433,285.179104 38.4076433,250.61194 0,241.970149" id="bubble_phase_arrow" stroke="#008000" stroke-width="3"></path>
                        <g id="bubble_phase_arrow-link" transform="translate(0.000000, 181.477612)" stroke="#008000" stroke-width="3">
                            <path d="M0,45.8014925 C38.4076433,43.2089552 38.4076433,8.64179104 0,0" id="bubble_phase_arrow"></path>
                        </g>
                        <g id="bubble_phase_arrow-link" transform="translate(0.000000, 120.985075)" stroke="#008000" stroke-width="3">
                            <path d="M0,45.8014925 C38.4076433,43.2089552 38.4076433,8.64179104 0,0" id="bubble_phase_arrow"></path>
                        </g>
                        <path d="M0,106.29403 C48.0095541,103.701493 48.0095541,69.1343284 9.60191083,60.4925373" id="bubble_phase_arrow4" stroke="#008000" stroke-width="3"></path>
                        <path d="M9.60191083,45.8014925 C57.611465,43.2089552 57.611465,8.64179104 19.2038217,0" id="bubble_phase_arrow" stroke="#008000" stroke-width="3"></path>
                    </g>
                </g>
            </g>
        </g>
    </g>
</svg>

## 事件处理

事件处理过程：

- 当事件发生时 —— 嵌套最深的那个元素被标记为“目标事件”(event.target)。
- 然后事件先从文档根节点向下移动到 event.target，过程中调用分配给 addEventListener(...., true) 的处理器。
- 再然后事件从 event.target 向上移动到根，调用使用 on<event> 和 addEventListener 分配的处理器，不使用第三个参数或第三个参数设置为 false。


每个处理器都可以访问 event 对象属性：

- event.target —— 事件最深的元素。
- event.currentTarget (=this) —— 处理事件的当前元素（有处理器在其上运行的）
- event.eventPhase —— 当前阶段（capturing=1, bubbling=3）。

任何事件处理器都可以通过调用 event.stopPropagation() 来停止事件，但不建议如此，因为我们不确定是否后续会使用冒泡上来的事件，也许是完全不同的事情。

捕获阶段很少使用，我们通常处理冒泡事件。这背后有一个逻辑。

现实世界中，当事故发生时，当地警方第一时间作出反应。他们最了解发生这件事的地方。如果需要更高级别的权威。那么就会向上申请。

事件处理却也是如此。在特定元素上设置处理器的代码了解该元素最详尽的信息。特定 <td> 上的处理器可能恰好适合于 <td>，它知道关于它的一切。所以它应该首先获得机会。然后，它的直系父节点也会获取上下文，但是会少一些，以此类推。而最顶层的元素最后才获取到信息，且只能了解到大致的情况。

## 事件委托

事件委托真的很酷！这是 DOM 事件最有用的模式之一。

它通常用于为许多相似的元素添加相同的处理，但不仅仅只是这样。

算法：

- 在容器上设置一个处理器。
- 在处理器中 —— 检查源元素的 event.target。
- 如果事件发生在我们感兴趣的元素中，那么处理该事件。

好处：

- 简化初始化并节省内存：不需要添加许多处理器。
- 更少的代码：添加或移除元素时，不需要添加/移除处理器。
- DOM 修改 ：我们可以使用 innerHTML 等来大量添加/移除元素。
-
委托处理方式也有局限性：

- 首先，事件必须冒泡。而有些事件不会冒泡。此外，低级别的处理器不应该使用 `event.stopPropagation()`。
- 其次，委托会增加 CPU 负载，因为容器等级的处理器对容器中任何位置的事件做出反应，不管它们是否会引起我们的兴趣。但是通常负载是可以忽略不计的，所以我们不考虑它。

## 默认行为

如果我们想要通过 JavaScript 来处理事件，那么所有的默认动作都可以被阻止。

想要阻止默认行为 —— 可以使用 `event.preventDefault()` 或者 `return false`。第二个方法只适用于分发了 `on<event>` 的处理器。

如果默认动作被阻止，event.defaultPrevented 的值就会变成 true，否则会变成 false。

## 自定义事件

要生成一个事件，我们首先需要创建一个事件对象。

泛型 Event(name, options) 构造器接受任意事件名，options 对象具有两个属性：

- bubbles: true ，如果事件应该冒泡的话。
- cancelable: true 则 event.preventDefault() 应该有效。

其他像 MouseEvent、KeyboardEvent 这样的原生事件构造器，接受特定于该事件类型的属性。例如，鼠标事件的 clientX。

对于自定义事件我们应该使用 CustomEvent 构造器。它有一个名为 detail 的附加选项，我们应该将特定事件的数据指派给它。然后处理器可以以 event.detail 的形式访问它。