(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/consultant/charRoom"],{4652:function(n,t,e){"use strict";(function(n){e("312d");o(e("66fd"));var t=o(e("775a"));function o(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,e("543d")["createPage"])},"4b7c":function(n,t,e){"use strict";e.r(t);var o=e("8aac"),a=e.n(o);for(var u in o)"default"!==u&&function(n){e.d(t,n,(function(){return o[n]}))}(u);t["default"]=a.a},"6ee4":function(n,t,e){"use strict";var o=e("8694"),a=e.n(o);a.a},"775a":function(n,t,e){"use strict";e.r(t);var o=e("f49b"),a=e("4b7c");for(var u in a)"default"!==u&&function(n){e.d(t,n,(function(){return a[n]}))}(u);e("6ee4");var c,r=e("f0c5"),i=Object(r["a"])(a["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],c);t["default"]=i.exports},8694:function(n,t,e){},"8aac":function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=function(){Promise.all([e.e("common/vendor"),e.e("components/chat/chat")]).then(function(){return resolve(e("0039"))}.bind(null,e)).catch(e.oe)},a={components:{chat:o},data:function(){return{username:{myName:"xyliu",your:"cc"}}},onLoad:function(t){n.setNavigationBarTitle({title:this.username.your})},onUnload:function(){},methods:{onPullDownRefresh:function(){n.showNavigationBarLoading(),this.$refs.chat.getMore(),n.hideNavigationBarLoading(),n.stopPullDownRefresh()}}};t.default=a}).call(this,e("543d")["default"])},f49b:function(n,t,e){"use strict";var o={chat:function(){return Promise.all([e.e("common/vendor"),e.e("components/chat/chat")]).then(e.bind(null,"0039"))}},a=function(){var n=this,t=n.$createElement;n._self._c},u=[];e.d(t,"b",(function(){return a})),e.d(t,"c",(function(){return u})),e.d(t,"a",(function(){return o}))}},[["4652","common/runtime","common/vendor"]]]);