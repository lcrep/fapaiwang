(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/my/manageNavs/staff/detail"],{"1ec4":function(t,e,n){"use strict";n.r(e);var a=n("37d4"),i=n.n(a);for(var u in a)"default"!==u&&function(t){n.d(e,t,(function(){return a[t]}))}(u);e["default"]=i.a},"37d4":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{id:"",result:""}},onLoad:function(t){var e=this;e.id=t.id,e.getDetail(t.id)},methods:{reload:function(){this.getDetail(this.id)},getDetail:function(e){var n=this,a={id:e};t.showLoading({title:"加载中..."}),n.$api.employeeDetail(a).then((function(e){if(e.success){var a=e.datas,i=parseInt((new Date).getFullYear()),u=parseInt(a.birthday.substring(0,4));a.age=i-u,0==a.gender?a.genderText="保密":1==a.gender?a.genderText="男":a.genderText="女",n.result=a,t.hideLoading()}else t.showToast({title:e.message,icon:"none"})}))},gotoEdit:function(){this.$Router.push({path:"/pages/my/manageNavs/staff/edit",query:{id:this.id}})}}};e.default=n}).call(this,n("543d")["default"])},"6e8a":function(t,e,n){"use strict";var a,i=function(){var t=this,e=t.$createElement;t._self._c},u=[];n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return u})),n.d(e,"a",(function(){return a}))},7090:function(t,e,n){"use strict";n.r(e);var a=n("6e8a"),i=n("1ec4");for(var u in i)"default"!==u&&function(t){n.d(e,t,(function(){return i[t]}))}(u);n("7434");var r,o=n("f0c5"),d=Object(o["a"])(i["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],r);e["default"]=d.exports},7434:function(t,e,n){"use strict";var a=n("e486"),i=n.n(a);i.a},"93d8":function(t,e,n){"use strict";(function(t){n("312d");a(n("66fd"));var e=a(n("7090"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},e486:function(t,e,n){}},[["93d8","common/runtime","common/vendor"]]]);