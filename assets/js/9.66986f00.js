(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{423:function(e,s,t){"use strict";t.r(s);var a=t(14),n=Object(a.a)({},(function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"display-flex-布局"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#display-flex-布局"}},[e._v("#")]),e._v(" display:flex 布局")]),e._v(" "),t("h2",{attrs:{id:"一、创建-flex-布局"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一、创建-flex-布局"}},[e._v("#")]),e._v(" 一、创建 flex 布局")]),e._v(" "),t("p",[e._v("给"),t("code",[e._v("div")]),e._v("这类块状元素元素设置"),t("code",[e._v("display:flex")]),e._v("或者给"),t("code",[e._v("span")]),e._v("这类内联元素设置"),t("code",[e._v("display:inline-flex")]),e._v("，flex 布局即创建,Flex 布局相关属性正好分为两拨，一拨作用在 flex 容器上，还有一拨作用在 flex 子项上。")]),e._v(" "),t("h2",{attrs:{id:"二、作用在-flex-容器上的-css-属性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二、作用在-flex-容器上的-css-属性"}},[e._v("#")]),e._v(" 二、作用在 flex 容器上的 CSS 属性")]),e._v(" "),t("h3",{attrs:{id:"_1-flex-direction"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-flex-direction"}},[e._v("#")]),e._v(" 1.flex-direction")]),e._v(" "),t("p",[t("code",[e._v("flex-direction")]),e._v("用来控制子项整体布局方向，是从左往右还是从右往左，是从上往下还是从下往上。和 CSS 的"),t("code",[e._v("direction")]),e._v("属性相比就是多了个 flex。语法：")]),e._v(" "),t("div",{staticClass:"language-css line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-css"}},[t("code",[t("span",{pre:!0,attrs:{class:"token property"}},[e._v("flex-direction")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" row | row-reverse | column | column-reverse"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("ul",[t("li",[t("strong",[e._v("row")]),e._v(" 默认值，显示为行。方向为当前文档水平流方向，默认情况下是从左往右。如果当前水平文档流方向是 rtl（如设置 direction:rtl），则从右往左。")]),e._v(" "),t("li",[t("strong",[e._v("row-reverse")]),e._v(" 显示为行。但方向和 row 属性值是反的。")]),e._v(" "),t("li",[t("strong",[e._v("column")]),e._v(" 显示为列。")]),e._v(" "),t("li",[t("strong",[e._v("column-reverse")]),e._v(" 显示为列。但方向和"),t("code",[e._v("column")]),e._v("属性值是反的。")])]),e._v(" "),t("h3",{attrs:{id:"_2-flex-wrap"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-flex-wrap"}},[e._v("#")]),e._v(" 2.flex-wrap")]),e._v(" "),t("p",[t("code",[e._v("flex-wrap")]),e._v("用来控制子项整体单行显示还是换行显示，如果换行，则下面一行是否反方向显示。这个属性比较好记忆，在 CSS 世界中，只要看到单词 wrap 一定是与换行显示相关的，"),t("code",[e._v("word-wrap")]),e._v("属性或者"),t("code",[e._v("white-space:nowrap")]),e._v("或者"),t("code",[e._v("pre-wrap")]),e._v("之类。语法：")]),e._v(" "),t("div",{staticClass:"language-css line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-css"}},[t("code",[t("span",{pre:!0,attrs:{class:"token property"}},[e._v("flex-wrap")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" nowrap | wrap | wrap-reverse"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("ul",[t("li",[t("strong",[e._v("nowrap")]),e._v(" 默认值，表示单行显示，不换行。\n"),t("ul",[t("li",[e._v("flex 子项最小内容宽度 min-content 之和大于 flex 容器宽度，则内容溢出，表现和 white-space:nowrap 类似。")]),e._v(" "),t("li",[e._v("如果 flex 子项最小内容宽度 min-content 之和小于 flex 容器宽度，则：\n"),t("ul",[t("li",[e._v("flex 子项默认的 fit-content 宽度之和大于 flex 容器宽度，则 flex 子项宽度收缩，正好填满 flex 容器，内容不溢出。")]),e._v(" "),t("li",[e._v("flex 子项默认的 fit-content 宽度之和小于 flex 容器宽度，则 flex 子项以 fit-content 宽度正常显示，内容不溢出。")])])])])]),e._v(" "),t("li",[t("strong",[e._v("wrap")]),e._v(" 宽度不足换行显示。")]),e._v(" "),t("li",[t("strong",[e._v("wrap-reverse")]),e._v(" 宽度不足换行显示，但是是从下往上开始，也就是原本换行在下面的子项现在跑到上面。")])]),e._v(" "),t("h3",{attrs:{id:"_3-flex-flow"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-flex-flow"}},[e._v("#")]),e._v(" 3.flex-flow")]),e._v(" "),t("p",[t("code",[e._v("flex-flow")]),e._v("属性是"),t("code",[e._v("flex-direction")]),e._v("和"),t("code",[e._v("flex-wrap")]),e._v("的缩写，表示 flex 布局的 flow 流动特性，语法如下：")]),e._v(" "),t("div",{staticClass:"language-css line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-css"}},[t("code",[t("span",{pre:!0,attrs:{class:"token property"}},[e._v("flex-flow")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" <flex-direction> || <flex-wrap>"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[e._v("当多属性同时使用的时候，使用空格分隔。例如：")]),e._v(" "),t("div",{staticClass:"language-css line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-css"}},[t("code",[t("span",{pre:!0,attrs:{class:"token selector"}},[e._v(".container")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[e._v("display")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" flex"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[e._v("flex-flow")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" row-reverse wrap-reverse"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br")])]),t("h3",{attrs:{id:"_4-justify-content"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-justify-content"}},[e._v("#")]),e._v(" 4.justify-content")]),e._v(" "),t("p",[t("code",[e._v("justify-content")]),e._v("属性决定了水平方向子项的对齐和分布方式。语法：")]),e._v(" "),t("div",{staticClass:"language-css line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-css"}},[t("code",[t("span",{pre:!0,attrs:{class:"token property"}},[e._v("justify-content")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" flex-start | flex-end | center | space-between | space-around | space-evenly"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("ul",[t("li",[t("strong",[e._v("flex-start")]),e._v(" 默认值。逻辑 CSS 属性值，与文档流方向相关。默认表现为左对齐。")]),e._v(" "),t("li",[t("strong",[e._v("flex-end")]),e._v(" 逻辑 CSS 属性值，与文档流方向相关。默认表现为右对齐。")]),e._v(" "),t("li",[t("strong",[e._v("center")]),e._v(" 表现为居中对齐。")]),e._v(" "),t("li",[t("strong",[e._v("space-between")]),e._v(" 表现为两端对齐。")]),e._v(" "),t("li",[t("strong",[e._v("space-around")]),e._v(" 每个 flex 子项两侧都环绕互不干扰的等宽的空白间距，最终视觉上边缘两侧的空白只有中间空白宽度一半。")]),e._v(" "),t("li",[t("strong",[e._v("space-evenly")]),e._v(" 每个 flex 子项两侧空白间距完全相等")])]),e._v(" "),t("h3",{attrs:{id:"_5-align-content"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-align-content"}},[e._v("#")]),e._v(" 5.align-content")]),e._v(" "),t("p",[t("code",[e._v("align-content")]),e._v("指明垂直方向每一行 flex 元素的对齐和分布方式，语法：")]),e._v(" "),t("div",{staticClass:"language-css line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-css"}},[t("code",[t("span",{pre:!0,attrs:{class:"token property"}},[e._v("align-content")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" stretch | flex-start | flex-end | center | space-between | space-around | space-evenly"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("h3",{attrs:{id:"_6-align-items"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6-align-items"}},[e._v("#")]),e._v(" 6.align-items")]),e._v(" "),t("p",[t("code",[e._v("align-items")]),e._v("指的就是 flex 子项们相对于 flex 容器在垂直方向上的对齐方式，和"),t("code",[e._v("justify-content")]),e._v("是相似语法：")]),e._v(" "),t("div",{staticClass:"language-css line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-css"}},[t("code",[t("span",{pre:!0,attrs:{class:"token property"}},[e._v("align-items")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" stretch | flex-start | flex-end | center | baseline"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("ul",[t("li",[t("strong",[e._v("stretch")]),e._v(" 默认值。flex 子项拉伸")]),e._v(" "),t("li",[t("strong",[e._v("flex-start")]),e._v(" 顶部对齐")]),e._v(" "),t("li",[t("strong",[e._v("flex-end")]),e._v(" 底部对齐")]),e._v(" "),t("li",[t("strong",[e._v("center")]),e._v(" 垂直居中对齐")]),e._v(" "),t("li",[t("strong",[e._v("baseline")]),e._v(" flex 子项都相对于 flex 容器的基线对齐")])]),e._v(" "),t("h2",{attrs:{id:"三、作用在-flex-子项上的-css-属性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#三、作用在-flex-子项上的-css-属性"}},[e._v("#")]),e._v(" 三、作用在 flex 子项上的 CSS 属性")]),e._v(" "),t("h3",{attrs:{id:"_1-order"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-order"}},[e._v("#")]),e._v(" 1.order")]),e._v(" "),t("p",[e._v("通过设置 order 改变某一个 flex 子项的排序位置，语法：")]),e._v(" "),t("div",{staticClass:"language-css line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-css"}},[t("code",[t("span",{pre:!0,attrs:{class:"token property"}},[e._v("order")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" <integer>"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("/* 整数值，默认值是 0 */")]),e._v("\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[e._v("所有 flex 子项的默认 order 属性值是 0，因此，如果我们想要某一个 flex 子项在最前面显示，可以设置比 0 小的整数，如-1 就可以了。")]),e._v(" "),t("h3",{attrs:{id:"_2-flex-grow"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-flex-grow"}},[e._v("#")]),e._v(" 2.flex-grow")]),e._v(" "),t("p",[t("code",[e._v("flex-grow")]),e._v("属性中的 grow 是扩展的意思，扩展的就是 flex 子项所占据的宽度，扩展所侵占的空间就是除去元素外的剩余的空白间隙。语法：")]),e._v(" "),t("div",{staticClass:"language-css line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-css"}},[t("code",[t("span",{pre:!0,attrs:{class:"token property"}},[e._v("flex-grow")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" <number>"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("/* 数值，可以是小数，默认值是 0 */")]),e._v("\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[e._v("flex-grow 不支持负值，默认值是 0，表示不占用剩余的空白间隙扩展自己的宽度。如果 flex-grow 大于 0，则 flex 容器剩余空间的分配就会发生，具体规则如下：")]),e._v(" "),t("ul",[t("li",[e._v("所有剩余空间总量是 1。")]),e._v(" "),t("li",[e._v("如果只有一个 flex 子项设置了 flex-grow 属性值：\n"),t("ul",[t("li",[e._v("如果"),t("code",[e._v("flex-grow")]),e._v("值小于 1，则扩展的空间就总剩余空间和这个比例的计算值。")]),e._v(" "),t("li",[e._v("如果"),t("code",[e._v("flex-grow")]),e._v("值大于 1，则独享所有剩余空间。")])])]),e._v(" "),t("li",[e._v("如果有多个 flex 设置了 flex-grow 属性值:\n"),t("ul",[t("li",[e._v("如果 flex-grow 值总和小于 1，则每个子项扩展的空间就总剩余空间和当前元素设置的 flex-grow 比例的计算值。")]),e._v(" "),t("li",[e._v("如果 flex-grow 值总和大于 1，则所有剩余空间被利用，分配比例就是 flex-grow 属性值的比例。")])])])]),e._v(" "),t("h3",{attrs:{id:"_3-flex-shrink"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-flex-shrink"}},[e._v("#")]),e._v(" 3.flex-shrink")]),e._v(" "),t("p",[t("code",[e._v("flex-shrink")]),e._v("主要处理当 flex 容器空间不足时候，单个元素的收缩比例。语法：")]),e._v(" "),t("div",{staticClass:"language-css line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-css"}},[t("code",[t("span",{pre:!0,attrs:{class:"token property"}},[e._v("flex-shrink")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" <number>"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("/* 数值，默认值是 1 */")]),e._v("\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[t("code",[e._v("flex-shrink")]),e._v("不支持负值，默认值是 1，也就是默认所有的 flex 子项都会收缩。如果设置为 0，则表示不收缩，保持原始的 fit-content 宽度。\n具体规则如下：")]),e._v(" "),t("ul",[t("li",[e._v("如果只有一个 flex 子项设置了"),t("code",[e._v("flex-shrink")]),e._v("：\n"),t("ul",[t("li",[t("code",[e._v("flex-shrink")]),e._v("值小于 1，则收缩的尺寸不完全，会有一部分内容溢出 flex 容器。")]),e._v(" "),t("li",[t("code",[e._v("flex-shrink")]),e._v("值大于等于 1，则收缩完全，正好填满 flex 容器。")])])]),e._v(" "),t("li",[e._v("如果多个 flex 子项设置了"),t("code",[e._v("flex-shrink")]),e._v("：\n"),t("ul",[t("li",[t("code",[e._v("flex-shrink")]),e._v("值的总和小于 1，则收缩的尺寸不完全，每个元素收缩尺寸占“完全收缩的尺寸”的比例就是设置的 flex-shrink 的值。")]),e._v(" "),t("li",[t("code",[e._v("flex-shrink")]),e._v("值的总和大于 1，则收缩完全，每个元素收缩尺寸的比例和 flex-shrink 值的比例一样。")])])])]),e._v(" "),t("h3",{attrs:{id:"_4-flex-basis"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-flex-basis"}},[e._v("#")]),e._v(" 4.flex-basis")]),e._v(" "),t("p",[t("code",[e._v("flex-basis")]),e._v("定义了在分配剩余空间之前元素的默认大小。语法：")]),e._v(" "),t("div",{staticClass:"language-css line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-css"}},[t("code",[t("span",{pre:!0,attrs:{class:"token property"}},[e._v("flex-basis")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" <length> | auto"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("/* 默认值是 auto */")]),e._v("\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("ul",[t("li",[e._v("默认值是 auto，就是自动。有设置 width 则占据空间就是 width，没有设置就按内容宽度来。")]),e._v(" "),t("li",[e._v("如果同时设置 width 和 flex-basis，就渲染表现来看，会忽略 width。不建议对 flex 子项使用 width 属性。")]),e._v(" "),t("li",[e._v("当剩余空间不足的时候，flex 子项的实际宽度并通常不是设置的 flex-basis 尺寸，因为 flex 布局剩余空间不足的时候默认会收缩。")])]),e._v(" "),t("h3",{attrs:{id:"_5-flex"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-flex"}},[e._v("#")]),e._v(" 5.flex")]),e._v(" "),t("p",[t("code",[e._v("flex")]),e._v("属性是"),t("code",[e._v("flex-grow")]),e._v("，"),t("code",[e._v("flex-shrink")]),e._v("和"),t("code",[e._v("flex-basis")]),e._v("的缩写。语法：")]),e._v(" "),t("div",{staticClass:"language-css line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-css"}},[t("code",[t("span",{pre:!0,attrs:{class:"token property"}},[e._v("flex")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" none | auto | [ < "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'flex-grow'")]),e._v(" > < "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'flex-shrink'")]),e._v(" >? || < "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'flex-basis'")]),e._v(" > ]"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[e._v("其中第 2 和第 3 个参数（flex-shrink 和 flex-basis）是可选的。默认值为 0 1 auto。")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("flex")]),e._v("默认值等同于"),t("code",[e._v("flex:0 1 auto")]),e._v("；")]),e._v(" "),t("li",[t("code",[e._v("flex:none")]),e._v("等同于"),t("code",[e._v("flex:0 0 auto")]),e._v("；")]),e._v(" "),t("li",[t("code",[e._v("flex:auto")]),e._v("等同于"),t("code",[e._v("flex:1 1 auto")]),e._v("；")])]),e._v(" "),t("h3",{attrs:{id:"_6-align-self"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6-align-self"}},[e._v("#")]),e._v(" 6.align-self")]),e._v(" "),t("p",[t("code",[e._v("align-self")]),e._v("指控制单独某一个 flex 子项的垂直对齐方式，写在 flex 容器上的这个"),t("code",[e._v("align-items")]),e._v("属性，后面是 items，有个 s，表示子项们，是全体；这里是 self，单独一个个体。其他区别不大，语法几乎一样：")]),e._v(" "),t("div",{staticClass:"language-css line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-css"}},[t("code",[t("span",{pre:!0,attrs:{class:"token property"}},[e._v("align-self")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" auto | flex-start | flex-end | center | baseline | stretch"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[e._v("唯一区别就是 align-self 多了个 auto（默认值），表示继承自 flex 容器的 align-items 属性值。")])])}),[],!1,null,null,null);s.default=n.exports}}]);