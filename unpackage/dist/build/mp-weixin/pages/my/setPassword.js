(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/my/setPassword"],{"01be":function(o,t,e){"use strict";(function(o){e("312d");n(e("66fd"));var t=n(e("5373"));function n(o){return o&&o.__esModule?o:{default:o}}o(t.default)}).call(this,e("543d")["createPage"])},"078a":function(o,t,e){},5373:function(o,t,e){"use strict";e.r(t);var n=e("d1d2"),s=e("e715");for(var i in s)"default"!==i&&function(o){e.d(t,o,(function(){return s[o]}))}(i);e("8343");var a,r=e("f0c5"),c=Object(r["a"])(s["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],a);t["default"]=c.exports},8343:function(o,t,e){"use strict";var n=e("078a"),s=e.n(n);s.a},d1d2:function(o,t,e){"use strict";var n,s=function(){var o=this,t=o.$createElement;o._self._c},i=[];e.d(t,"b",(function(){return s})),e.d(t,"c",(function(){return i})),e.d(t,"a",(function(){return n}))},e323:function(o,t,e){"use strict";(function(o){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e={data:function(){return{showPassword1:!0,showPassword2:!0,password1:"",password2:"",code:"",mobile:"",invitationCode:""}},onLoad:function(o){var t=this;t.code=o.code,t.mobile=o.mobile,t.invitationCode=o.invitationCode},methods:{changePassword1:function(){var o=this;o.showPassword1=!o.showPassword1},changePassword2:function(){var o=this;o.showPassword2=!o.showPassword2},register:function(){var t=this;if(t.$utils.common.passwordTest.test(t.password1))if(t.password1!=t.password2)o.showToast({title:"两次密码不一致",icon:"none"});else{o.showLoading({title:"请稍等..."});var e={mobile:t.mobile,password:t.password1,repassword:t.password2,vcode:t.code,invitationCode:t.invitationCode};t.$api.bymobile(e).then((function(e){o.hideLoading(),e.success?(o.showToast({title:"注册成功",icon:"success"}),setTimeout((function(){t.$Router.back(2)}),2e3)):o.showToast({title:e.message,icon:"none"})}))}else o.showToast({title:"密码需是8-14位数字或字母",icon:"none"})},gotoAgreement1:function(){}}};t.default=e}).call(this,e("543d")["default"])},e715:function(o,t,e){"use strict";e.r(t);var n=e("e323"),s=e.n(n);for(var i in n)"default"!==i&&function(o){e.d(t,o,(function(){return n[o]}))}(i);t["default"]=s.a}},[["01be","common/runtime","common/vendor"]]]);