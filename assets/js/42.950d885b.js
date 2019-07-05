(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{191:function(t,s,n){"use strict";n.r(s);var a=n(17),e=Object(a.a)({},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h2",{attrs:{id:"为什么用-typescript？"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#为什么用-typescript？","aria-hidden":"true"}},[t._v("#")]),t._v(" 为什么用 TypeScript？")]),t._v(" "),n("blockquote",[n("p",[t._v("TypeScript is a typed superset of JavaScript that compiles to plain JavaScript. Any browser. Any host. Any OS. Open source. ———— "),n("a",{attrs:{href:"https://www.typescriptlang.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("TypeScript 官网"),n("OutboundLink")],1)])]),t._v(" "),n("h3",{attrs:{id:"_1-第一时间发现类型错误"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-第一时间发现类型错误","aria-hidden":"true"}},[t._v("#")]),t._v(" 1.第一时间发现类型错误")]),t._v(" "),n("p",[t._v("据 "),n("a",{attrs:{href:"https://rollbar.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("rollbar"),n("OutboundLink")],1),t._v(" 统计，在前端项目中 10 大错误类型如下图所示：")]),t._v(" "),n("img",{attrs:{src:t.$withBase("/imgs/typescript/javascript-error-types.jpg"),alt:"JavaScript 错误类型"}}),t._v(" "),n("p",[t._v("其中有 7 个是类型错误（TypeError）：")]),t._v(" "),n("ul",[n("li",[n("code",[t._v("Cannot read property 'xxx' on undefined")]),t._v("：无法在 undefined 上读取 xxx 属性，通常出现在 a.b.c 的情况。")]),t._v(" "),n("li",[n("code",[t._v("'undefined' is not an object")]),t._v("："),n("code",[t._v("undefined")]),t._v(" 不是对象")]),t._v(" "),n("li",[n("code",[t._v("null is not an object")]),t._v("：null 不是对象")]),t._v(" "),n("li",[n("code",[t._v("'undefined' is not a function")]),t._v("："),n("code",[t._v("undefined")]),t._v(" 不是函数，通常出现在 "),n("code",[t._v("a.b.c()")]),t._v(" 的情况。")]),t._v(" "),n("li",[n("code",[t._v("Object doesn't support property")])]),t._v(" "),n("li",[n("code",[t._v("Cannot read property 'length'")]),t._v("：无法读取 "),n("code",[t._v("'length'")]),t._v(" 属性，本来期望一个数组，但是变量的实际类型却不是数组。")]),t._v(" "),n("li",[n("code",[t._v("Cannot set property of undefined")]),t._v("：无法给 "),n("code",[t._v("undefined")]),t._v(" 设置属性。")])]),t._v(" "),n("p",[t._v("除了 7 个 TypeError，还有一个 ReferenceError：")]),t._v(" "),n("ul",[n("li",[n("code",[t._v("'xxx' is not defined")]),t._v("：xxx 没有定义。")])]),t._v(" "),n("p",[t._v("还有一个 RangeError：")]),t._v(" "),n("ul",[n("li",[t._v("在 JS 中，数组越界并不会抛出 RangeError，但是某些函数则抛出这个错误")])]),t._v(" "),n("img",{attrs:{src:t.$withBase("/imgs/typescript/range-error.jpg"),alt:"range error"}}),t._v(" "),n("p",[n("strong",[t._v("嘿嘿，看着这些错误眼不眼熟？")])]),t._v(" "),n("p",[t._v("由于 JavaScript 是一门很灵活的语言，所以以上这些错误往往要在代码运行时才能发现。")]),t._v(" "),n("h3",{attrs:{id:"_2-智能提示"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-智能提示","aria-hidden":"true"}},[t._v("#")]),t._v(" 2.智能提示")]),t._v(" "),n("p",[t._v("在使用 JavaScript 时，编辑器的智能提示往往很有限，比如提示你最近输入的变量。")]),t._v(" "),n("p",[t._v("但是基于 TypeScript，由于知道当前变量是什么类型，所以编辑器能经过类型推导后为你提示这个变量的所有属性，以及对于函数的参数进行提示和校验。")]),t._v(" "),n("img",{attrs:{src:t.$withBase("/imgs/typescript/code-hint.gif"),alt:"智能提示"}}),t._v(" "),n("blockquote",[n("p",[t._v("此外，对于一般的 JavaScript 项目也可以自己编写 "),n("code",[t._v(".d.ts")]),t._v(" 声明文件，来获取类型推导能力。")])]),t._v(" "),n("p",[t._v("至于其他的优点在这里就不展开了...")]),t._v(" "),n("p",[t._v("综上，在项目中使用 TypeScript 能让你极大地提高工作效率，并减少大量的类型错误。")]),t._v(" "),n("h2",{attrs:{id:"typescript-初体验"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#typescript-初体验","aria-hidden":"true"}},[t._v("#")]),t._v(" TypeScript 初体验")]),t._v(" "),n("p",[t._v("由于目前业务项目中的框架用的是 Vue.js，众所周知 2.x 版本对于 TypeScript 支持的不是很好，所以就打算先搞个工具函数库项目试试水。")]),t._v(" "),n("h3",{attrs:{id:"语言学习"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#语言学习","aria-hidden":"true"}},[t._v("#")]),t._v(" 语言学习")]),t._v(" "),n("p",[t._v("略，这个各种资料很多，这里就不赘述了...")]),t._v(" "),n("h3",{attrs:{id:"项目架构"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#项目架构","aria-hidden":"true"}},[t._v("#")]),t._v(" 项目架构")]),t._v(" "),n("ul",[n("li",[t._v("项目入口："),n("code",[t._v("src/index.ts")]),t._v("，没有实质内容全是 "),n("code",[t._v("export * from '...'")]),t._v("（都是纯函数）")]),t._v(" "),n("li",[t._v("实际代码：根据工具函数分类放在不同的文件中，例如\n"),n("ul",[n("li",[t._v("string（字符串相关）")]),t._v(" "),n("li",[t._v("env（环境探测）")]),t._v(" "),n("li",[t._v("url（链接地址）")]),t._v(" "),n("li",[t._v("...")])])]),t._v(" "),n("li",[t._v("单元测试："),n("code",[t._v("test/")])]),t._v(" "),n("li",[t._v("文档目录："),n("code",[t._v("docs/")])])]),t._v(" "),n("blockquote",[n("p",[t._v("注意："),n("code",[t._v("package.json")]),t._v(" 中的 "),n("code",[t._v("sideEffects")]),t._v(" 字段要写成 "),n("code",[t._v("false")]),t._v("，这样可以方便业务代码打包时 "),n("code",[t._v("tree-shaking")]),t._v("。")])]),t._v(" "),n("h3",{attrs:{id:"相关工具链"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#相关工具链","aria-hidden":"true"}},[t._v("#")]),t._v(" 相关工具链")]),t._v(" "),n("p",[t._v("之前对于 TypeScript 一直在观望的原因之一就是相关工具链的搭配还不是很成熟。不过现在倒是基本明晰了：")]),t._v(" "),n("ul",[n("li",[t._v("1.代码转译 "),n("code",[t._v("babel")]),t._v("（"),n("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/59614089",target:"_blank",rel:"noopener noreferrer"}},[t._v("[译] TypeScript 和 Babel：美丽的结合"),n("OutboundLink")],1),t._v("）")])]),t._v(" "),n("p",[t._v("TypeScript 和 babel 都可以将你的 ES6+ 代码转成 ES5。")]),t._v(" "),n("p",[t._v("但在 Babel v7 之前将两个独立的编译器（TypeScript 和 Babel）链接在一起并非易事。编译流程变为："),n("code",[t._v("TS > TS Compiler > JS > Babel > JS (again)")]),t._v("。")]),t._v(" "),n("p",[t._v("现在只要安装 "),n("a",{attrs:{href:"https://babeljs.io/docs/en/babel-preset-typescript.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("@babel/preset-typescript"),n("OutboundLink")],1),t._v(" 这个包就能让你完美结合 babel 和 TypeScript。")]),t._v(" "),n("ul",[n("li",[t._v("2.代码检查 "),n("code",[t._v("eslint")]),t._v("（"),n("a",{attrs:{href:"https://eslint.org/blog/2019/01/future-typescript-eslint",target:"_blank",rel:"noopener noreferrer"}},[t._v("The future of TypeScript on ESLint"),n("OutboundLink")],1),t._v("）")])]),t._v(" "),n("p",[t._v("再也不用纠结到底用 tslint 还是 eslint 了，TypeScript 官方已经钦定了 eslint（"),n("a",{attrs:{href:"https://github.com/microsoft/TypeScript/issues/30553",target:"_blank",rel:"noopener noreferrer"}},[t._v("Migrate the repo to ESLint #30553"),n("OutboundLink")],1),t._v("）。")]),t._v(" "),n("ul",[n("li",[t._v("3.单元测试 "),n("code",[t._v("jest")]),t._v("（"),n("a",{attrs:{href:"https://github.com/facebook/jest/pull/7554",target:"_blank",rel:"noopener noreferrer"}},[t._v("[RFC] Migrate Jest to TypeScript #7554"),n("OutboundLink")],1),t._v("）")])]),t._v(" "),n("p",[t._v("嘿嘿，Facebook 的 jest 和 yarn（"),n("a",{attrs:{href:"https://github.com/yarnpkg/yarn/issues/6953",target:"_blank",rel:"noopener noreferrer"}},[t._v("Yarn's Future - v2 and beyond #6953"),n("OutboundLink")],1),t._v("） 都抛弃自家的 Flow 转投 TypeScript 的怀抱了")]),t._v(" "),n("ul",[n("li",[t._v("4.代码打包 "),n("code",[t._v("rollup")]),t._v("（"),n("a",{attrs:{href:"https://github.com/rollup/rollup/commit/0c0edeec3174f1ed96301e2d54f5909ba190461f",target:"_blank",rel:"noopener noreferrer"}},[t._v("rollup 在 17 年底就使用 TypeScript 重写了"),n("OutboundLink")],1),t._v("）")])]),t._v(" "),n("p",[t._v("虽然 rollup 自己用的是 "),n("code",[t._v("rollup-plugin-typescript")]),t._v("，不过项目中还是选了 "),n("a",{attrs:{href:"https://github.com/ezolenko/rollup-plugin-typescript2",target:"_blank",rel:"noopener noreferrer"}},[n("code",[t._v("rollup-plugin-typescript2")]),n("OutboundLink")],1),t._v("。")]),t._v(" "),n("h3",{attrs:{id:"改造过程"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#改造过程","aria-hidden":"true"}},[t._v("#")]),t._v(" 改造过程")]),t._v(" "),n("ul",[n("li",[t._v("安装各种依赖")]),t._v(" "),n("li",[t._v("配好各种配置文件（eslint、babel、commitlint、jest），其中最重要的是 "),n("code",[t._v("tsconfig.json")])]),t._v(" "),n("li",[t._v("源代码的文件名后缀由 "),n("code",[t._v(".js")]),t._v(" 改成 "),n("code",[t._v(".ts")]),t._v("（单测的文件也改）")]),t._v(" "),n("li",[t._v("然后 TypeScript 的静态代码类型检查就会告诉你有什么错误")]),t._v(" "),n("li",[t._v("看情况改代码，或者是加 ignore 注释（有时甚至需要改 tsconfig 的配置）")])]),t._v(" "),n("h2",{attrs:{id:"文档"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#文档","aria-hidden":"true"}},[t._v("#")]),t._v(" 文档")]),t._v(" "),n("h3",{attrs:{id:"文档标准"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#文档标准","aria-hidden":"true"}},[t._v("#")]),t._v(" 文档标准")]),t._v(" "),n("p",[t._v("TypeScript 官方有一套基于 jsdoc 的文档标准 "),n("a",{attrs:{href:"https://github.com/Microsoft/tsdoc",target:"_blank",rel:"noopener noreferrer"}},[t._v("tsdoc"),n("OutboundLink")],1),t._v("。")]),t._v(" "),n("div",{staticClass:"language-ts line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-ts"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Statistics")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n   * Returns the average of two numbers.\n   *\n   * @remarks\n   * This method is part of the {@link core-library#Statistics | Statistics subsystem}.\n   *\n   * @param x - The first input number\n   * @param y - The second input number\n   * @returns The arithmetic mean of `x` and `y`\n   *\n   * @beta\n   */")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getAverage")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("number")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" y"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("number")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("number")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" y"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2.0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br"),n("span",{staticClass:"line-number"},[t._v("13")]),n("br"),n("span",{staticClass:"line-number"},[t._v("14")]),n("br"),n("span",{staticClass:"line-number"},[t._v("15")]),n("br"),n("span",{staticClass:"line-number"},[t._v("16")]),n("br"),n("span",{staticClass:"line-number"},[t._v("17")]),n("br")])]),n("h3",{attrs:{id:"生成文档"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#生成文档","aria-hidden":"true"}},[t._v("#")]),t._v(" 生成文档")]),t._v(" "),n("p",[t._v("于是顺藤摸瓜找到 "),n("a",{attrs:{href:"https://github.com/TypeStrong/typedoc",target:"_blank",rel:"noopener noreferrer"}},[t._v("typedoc"),n("OutboundLink")],1),t._v(" 这个自动文档网站生成器。但这玩意儿的常规操作就是读取源代码，然后 duang 地一下，生成一堆页面。")]),t._v(" "),n("p",[t._v("虽然这样解决了文档生成，但是没法进行开发时实时预览文档。")]),t._v(" "),n("h3",{attrs:{id:"自动生成"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#自动生成","aria-hidden":"true"}},[t._v("#")]),t._v(" 自动生成")]),t._v(" "),n("ol",{attrs:{start:"0"}},[n("li",[t._v("失败尝试：结合 vuepress")])]),t._v(" "),n("p",[t._v("由于 typedoc 能导出 md 文件，所以尝试过将其结合 vuepress。不过由于 typedoc 在生成时会先清空目标目录下所有文件，折腾起来太麻烦（比如做个插件）。")]),t._v(" "),n("ol",[n("li",[t._v("下策：手动触发文档生成")])]),t._v(" "),n("p",[t._v("没啥好说的，适用于有毅力的同学。")]),t._v(" "),n("ol",{attrs:{start:"2"}},[n("li",[t._v("中策：监听源文件变化，自动触发文档生成")])]),t._v(" "),n("p",[t._v("虽然能自动生成文档页面了，不过预览时没法自动刷新页面。")]),t._v(" "),n("ol",{attrs:{start:"3"}},[n("li",[t._v("上策：借助 webpack、gulp、grunt 自动生成文档并刷新页面（正好有这三者的 "),n("a",{attrs:{href:"https://github.com/TypeStrong/typedoc#webpack",target:"_blank",rel:"noopener noreferrer"}},[t._v("typedoc 插件"),n("OutboundLink")],1),t._v("）")])]),t._v(" "),n("p",[t._v("说到开发时自动刷新页面，第一个自然想到 "),n("a",{attrs:{href:"https://www.browsersync.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("browser-sync"),n("OutboundLink")],1),t._v("。")]),t._v(" "),n("ul",[n("li",[t._v("虽说 webpack 无所不能，不过杀鸡焉用牛刀")]),t._v(" "),n("li",[t._v("grunt 这玩意儿有点儿落伍了")]),t._v(" "),n("li",[t._v("gulp 正好以前捣鼓过，加这个小需求正好")])]),t._v(" "),n("p",[t._v("最后这里贴一下 "),n("code",[t._v("gulpfile.js")]),t._v(" 的代码，节省一下也有相关需求同学的时间吧。")]),t._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" gulp "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'gulp'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" typedoc "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'gulp-typedoc'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" browserSync "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'browser-sync'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("create")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("runTypeDoc")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" gulp\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("src")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'src'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("pipe")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("typedoc")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        out"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./docs'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 这个文件里都是 export * from '...' 就没必要导出文档了")]),t._v("\n        exclude"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'src/index.ts'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        tsconfig"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'tsconfig.json'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("reload")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("done"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    browserSync"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("reload")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("done")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("runBrowserSync")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("done"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    browserSync"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("init")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        server"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            baseDir"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./docs'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("done")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("watch")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" gulp"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("watch")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'README.md'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'src/*.ts'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    gulp"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("series")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("runTypeDoc"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" reload"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\ngulp"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("task")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'default'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" gulp"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("series")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("runTypeDoc"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" runBrowserSync"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" watch"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br"),n("span",{staticClass:"line-number"},[t._v("13")]),n("br"),n("span",{staticClass:"line-number"},[t._v("14")]),n("br"),n("span",{staticClass:"line-number"},[t._v("15")]),n("br"),n("span",{staticClass:"line-number"},[t._v("16")]),n("br"),n("span",{staticClass:"line-number"},[t._v("17")]),n("br"),n("span",{staticClass:"line-number"},[t._v("18")]),n("br"),n("span",{staticClass:"line-number"},[t._v("19")]),n("br"),n("span",{staticClass:"line-number"},[t._v("20")]),n("br"),n("span",{staticClass:"line-number"},[t._v("21")]),n("br"),n("span",{staticClass:"line-number"},[t._v("22")]),n("br"),n("span",{staticClass:"line-number"},[t._v("23")]),n("br"),n("span",{staticClass:"line-number"},[t._v("24")]),n("br"),n("span",{staticClass:"line-number"},[t._v("25")]),n("br"),n("span",{staticClass:"line-number"},[t._v("26")]),n("br"),n("span",{staticClass:"line-number"},[t._v("27")]),n("br"),n("span",{staticClass:"line-number"},[t._v("28")]),n("br"),n("span",{staticClass:"line-number"},[t._v("29")]),n("br"),n("span",{staticClass:"line-number"},[t._v("30")]),n("br"),n("span",{staticClass:"line-number"},[t._v("31")]),n("br"),n("span",{staticClass:"line-number"},[t._v("32")]),n("br"),n("span",{staticClass:"line-number"},[t._v("33")]),n("br")])]),n("p",[t._v("以上 to be continued...")]),t._v(" "),n("h2",{attrs:{id:"参考资料"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#参考资料","aria-hidden":"true"}},[t._v("#")]),t._v(" 参考资料")]),t._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://www.typescriptlang.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("TypeScript 官网"),n("OutboundLink")],1)]),t._v(" "),n("li",[n("a",{attrs:{href:"https://www.zhihu.com/question/308844713/answer/574423626",target:"_blank",rel:"noopener noreferrer"}},[t._v("TypeScript 解决了什么痛点？ - justjavac的回答 - 知乎)"),n("OutboundLink")],1)]),t._v(" "),n("li",[n("a",{attrs:{href:"https://babeljs.io/docs/en/babel-preset-typescript.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("@babel/preset-typescript"),n("OutboundLink")],1)]),t._v(" "),n("li",[n("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/59614089",target:"_blank",rel:"noopener noreferrer"}},[t._v("[译] TypeScript 和 Babel：美丽的结合"),n("OutboundLink")],1)]),t._v(" "),n("li",[n("a",{attrs:{href:"https://eslint.org/blog/2019/01/future-typescript-eslint",target:"_blank",rel:"noopener noreferrer"}},[t._v("The future of TypeScript on ESLint"),n("OutboundLink")],1)]),t._v(" "),n("li",[n("a",{attrs:{href:"https://github.com/microsoft/TypeScript/issues/30553",target:"_blank",rel:"noopener noreferrer"}},[t._v("Migrate the repo to ESLint #30553"),n("OutboundLink")],1)]),t._v(" "),n("li",[n("a",{attrs:{href:"https://github.com/facebook/jest/pull/7554",target:"_blank",rel:"noopener noreferrer"}},[t._v("[RFC] Migrate Jest to TypeScript #7554"),n("OutboundLink")],1)]),t._v(" "),n("li",[n("a",{attrs:{href:"https://github.com/yarnpkg/yarn/issues/6953",target:"_blank",rel:"noopener noreferrer"}},[t._v("Yarn's Future - v2 and beyond #6953"),n("OutboundLink")],1)]),t._v(" "),n("li",[n("a",{attrs:{href:"https://github.com/rollup/rollup/commit/0c0edeec3174f1ed96301e2d54f5909ba190461f",target:"_blank",rel:"noopener noreferrer"}},[t._v("rollup 在 17 年底就使用 TypeScript 重写了"),n("OutboundLink")],1)]),t._v(" "),n("li",[n("a",{attrs:{href:"https://github.com/ezolenko/rollup-plugin-typescript2",target:"_blank",rel:"noopener noreferrer"}},[t._v("rollup-plugin-typescript2"),n("OutboundLink")],1)]),t._v(" "),n("li",[n("a",{attrs:{href:"https://github.com/Microsoft/tsdoc",target:"_blank",rel:"noopener noreferrer"}},[t._v("tsdoc"),n("OutboundLink")],1)]),t._v(" "),n("li",[n("a",{attrs:{href:"https://github.com/TypeStrong/typedoc",target:"_blank",rel:"noopener noreferrer"}},[t._v("typedoc"),n("OutboundLink")],1)]),t._v(" "),n("li",[n("a",{attrs:{href:"https://www.browsersync.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("browser-sync"),n("OutboundLink")],1)]),t._v(" "),n("li",[n("a",{attrs:{href:"https://github.com/TypeStrong/typedoc#webpack",target:"_blank",rel:"noopener noreferrer"}},[t._v("typedoc 插件"),n("OutboundLink")],1)]),t._v(" "),n("li",[n("a",{attrs:{href:"https://rollbar.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("rollbar"),n("OutboundLink")],1)])])])},[],!1,null,null,null);s.default=e.exports}}]);