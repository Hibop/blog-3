(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{142:function(t,e,n){},157:function(t,e,n){"use strict";var i=n(142);n.n(i).a},177:function(t,e,n){"use strict";n.r(e);var i={name:"Main",props:{isHide:{type:Boolean,default:!1},content:{type:Array,default:()=>[]}},components:{All:()=>Promise.all([n.e(0),n.e(10)]).then(n.bind(null,178)),Tags:()=>Promise.all([n.e(0),n.e(12)]).then(n.bind(null,179)),Home:()=>Promise.all([n.e(0),n.e(11)]).then(n.bind(null,180)),Posts:()=>Promise.all([n.e(0),n.e(6)]).then(n.bind(null,170)),About:()=>Promise.all([n.e(0),n.e(9)]).then(n.bind(null,181))},computed:{whichComponent(){if("undefined"==typeof window)return"Home";let t="";switch(this.$route.path.slice(1,6)){case"posts":case"draft":t="Posts";break;case"all/":t="All",document.title=this.$themeConfig.menus.all+" · "+this.$site.title;break;case"tags/":t="Tags",document.title=this.$themeConfig.menus.tags+"  ·  "+this.$site.title;break;case"about":t="About",document.title=this.$themeConfig.menus.about+" · "+this.$site.title;break;default:t="Home",document.title=this.$themeConfig.menus.home+" · "+this.$site.title}return this.$route.path.indexOf("/tags/")>-1&&!t&&(t="Tags",document.title=this.$themeConfig.menus.tags+" · "+this.$route.params.tag+" · "+this.$site.title),t},mainLeft(){return this.isHide?60:230}}},s=(n(157),n(17)),a=Object(s.a)(i,function(){var t=this.$createElement,e=this._self._c||t;return e("el-main",{staticClass:"my-main",style:{marginLeft:this.mainLeft+"px"}},[e("content-header",{attrs:{content:this.content}}),this._v(" "),e("keep-alive",[e(this.whichComponent,{tag:"component",attrs:{content:this.content}})],1)],1)},[],!1,null,"ff43455e",null);e.default=a.exports}}]);