(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{146:function(t,e,s){},147:function(t,e,s){},161:function(t,e,s){"use strict";var o=s(146);s.n(o).a},162:function(t,e,s){"use strict";var o=s(147);s.n(o).a},170:function(t,e,s){"use strict";s.r(e);var o={name:"GoTop",methods:{OpenToc(){this.$emit("toc")}}},n=(s(161),s(17)),a={name:"Posts",components:{TocBtn:Object(n.a)(o,function(){var t=this.$createElement,e=this._self._c||t;return e("el-button",{staticClass:"gotop-btn",attrs:{type:"primary",circle:!0},on:{click:this.OpenToc}},[e("i",{staticClass:"iconfont icon-service-directory"})])},[],!1,null,"084c84d3",null).exports,MyVssue:()=>Promise.all([s.e(0),s.e(8)]).then(s.bind(null,206))},data:()=>({nextPost:0,prevPost:3,allH:[],catalogList:[],currentIndex:0,offsetList:[],hasToc:!1,showPost:!1}),props:{content:{type:Array,default:()=>[]}},created(){this.getPageIndex(),setTimeout(this.getPageIndex,100)},mounted(){this.showPost=!0,setTimeout(()=>{this.getH(),this.changeIndex()},20)},methods:{throttle(t,e,s){var o=null,n=Date.parse(new Date);return function(){null!==o&&clearTimeout(o);var a=Date.parse(new Date);a-n>=s?(t(),n=a):o=setTimeout(t,e)}},changeToc(){this.hasToc=!this.hasToc},getH(){if(this.catalogList.splice(0,this.catalogList.length),this.offsetList.splice(0,this.offsetList.length),this.allH.splice(0,this.allH.length),"undefined"==typeof window)return;if(!document.querySelector(".content,default"))return;let t=[],e=document.querySelector(".content,default").querySelectorAll("h1,h2,h3,h4,h5,h6");if(0===e.length)return;let s=[].slice.call(e);s.forEach((e,o)=>{if(this.allH.push(e.offsetTop),this.catalogList.push(e.id),0===o)t.push(0);else{let n=Number(e.tagName.slice(1)),a=Number(s[o-1].tagName.slice(1));n>a?t.push(t[o-1]+(n-a)):n<a?t.push(t[o-1]-(a-n)):t.push(t[o-1])}});let o=t.reduce((t,e)=>t>e?e:t),n=Math.abs(o);t.forEach(t=>{o<0&&(t+=n),o>0&&(t-=n),this.offsetList.push(t)})},getPageIndex(){if(0===this.content.length||1===this.content.length)return this.nextPost=NaN,void(this.prevPost=NaN);for(var t=0,e=this.content.length;t<e;t++)this.content[t].path===this.$page.path&&(t+1===this.content.length?(this.nextPost=NaN,this.prevPost=t-1):t-1<0?(this.nextPost=t+1,this.prevPost=NaN):(this.nextPost=t+1,this.prevPost=t-1))},getScrollTop(){var t;if("undefined"!=typeof window)return window.pageYOffset?t=window.pageYOffset:document.compatMode&&"BackCompat"!==document.compatMode?t=document.documentElement.scrollTop:document.body&&(t=document.body.scrollTop),t},changeIndex(){if("undefined"==typeof window)return;const t=this;window.addEventListener("scroll",t.throttle(function(e){if("/posts/"!==t.$route.path.slice(0,7))return;let s=t.getScrollTop();for(let e=0,o=t.allH.length;e<o;e++){if(e+1===t.allH.length||s<t.allH[e])return t.currentIndex=e;if(s>=t.allH[e]&&s<t.allH[e+1])return t.currentIndex=e}},60,110)),window.addEventListener("scroll",function(){if("/posts/"!==t.$route.path.slice(0,7))return;const e=document.getElementById("post-toc");let s=t.getScrollTop();s>=240?e.classList.add("fixed"):e.classList.remove("fixed");const o=document.getElementById("footerPost").offsetTop;s>=o-20&&e.classList.remove("fixed"),s<o&&s>=o-500&&e.classList.add("fixed")})}},watch:{$route(t,e){"/posts/"===t.path.slice(0,7)&&(this.getPageIndex(),setTimeout(()=>{this.getH(),this.changeIndex()},20))},deep:!0}},i=(s(162),Object(n.a)(a,function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.showPost?s("div",{key:t.$page.title},[s("el-row",{staticClass:"post-content",attrs:{type:"flex",justify:"center"}},[s("el-col",{staticClass:"post-card",attrs:{span:16,xs:{span:24},sm:{span:23},md:{span:23},lg:{span:16},id:"post-card"}},[s("Content"),t._v(" "),s("span",{attrs:{id:"footerPost"}})],1),t._v(" "),s("el-col",{staticClass:"post-toc",class:{"open-toc":t.hasToc},attrs:{span:6,id:"post-toc"}},[s("h4",{staticClass:"catalog-title"},[t._v("TOC")]),t._v(" "),s("div",{staticClass:"catalog-body"},[s("ul",{staticClass:"catalog-list",attrs:{id:"catalog-list"}},t._l(t.catalogList,function(e,o){return s("li",{key:e,staticClass:"toc-li",class:{active:t.currentIndex===o}},[s("a",{staticClass:"toc-link ellipsis",style:{marginLeft:12*t.offsetList[o]+"px"},attrs:{href:"#"+e}},[t._v(t._s(e))])])}),0)])])],1),t._v(" "),s("el-row",{staticClass:"post-nav",attrs:{type:"flex",justify:"space-around"}},[s("el-col",{staticClass:"post-prev",attrs:{span:7}},[isNaN(t.prevPost)?t._e():s("div",[s("router-link",{attrs:{to:t.content[t.prevPost].path||"/"}},[s("i",{staticClass:"el-icon-arrow-left"}),t._v(" Prev\n                ")]),t._v(" "),s("router-link",{staticClass:"nav-title",attrs:{tag:"p",to:t.content[t.prevPost].path||"/"}},[t._v(t._s(t.content[t.prevPost].title))])],1)]),t._v(" "),s("el-col",{staticClass:"post-next",attrs:{lg:{pull:5},span:7}},[isNaN(t.nextPost)?t._e():s("div",[s("router-link",{attrs:{to:t.content[t.nextPost].path||"/"}},[t._v("\n                    Next\n                    "),s("i",{staticClass:"el-icon-arrow-right"})]),t._v(" "),s("router-link",{staticClass:"nav-title",attrs:{tag:"p",to:t.content[t.nextPost].path||"/"}},[t._v(t._s(t.content[t.nextPost].title))])],1)])],1),t._v(" "),s("el-row",{attrs:{type:"flex",justify:"center"}},[t.$themeConfig.vssue.need&&t.$page.title?s("el-col",{attrs:{span:23}},[s("my-vssue")],1):t._e()],1),t._v(" "),s("toc-btn",{on:{toc:t.changeToc}})],1):t._e()},[],!1,null,"d33e5c80",null));e.default=i.exports}}]);