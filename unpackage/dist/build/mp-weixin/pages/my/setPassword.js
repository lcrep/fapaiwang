(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/my/setPassword"],{"01be":function(o,e,n){"use strict";(function(o){n("312d");t(n("66fd"));var e=t(n("5373"));function t(o){return o&&o.__esModule?o:{default:o}}o(e.default)}).call(this,n("543d")["createPage"])},"078a":function(o,e,n){},4503:function(o,e,n){"use strict";var t={"uni-icons":function(){return Promise.all([n.e("common/vendor"),n.e("components/uni-icons/uni-icons")]).then(n.bind(null,"df065"))}},s=function(){var o=this,e=o.$createElement;o._self._c},i=[];n.d(e,"b",(function(){return s})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return t}))},5373:function(o,e,n){"use strict";n.r(e);var t=n("4503"),s=n("e715");for(var i in s)"default"!==i&&function(o){n.d(e,o,(function(){return s[o]}))}(i);n("8343");var a,r=n("f0c5"),u=Object(r["a"])(s["default"],t["b"],t["c"],!1,null,null,null,!1,t["a"],a);e["default"]=u.exports},8343:function(o,e,n){"use strict";var t=n("078a"),s=n.n(t);s.a},e323:function(o,e,n){"use strict";(function(o){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{showPassword1:!0,showPassword2:!0,password1:"",password2:"",code:"",mobile:"",invitationCode:""}},onLoad:function(o){var e=this;e.code=o.code,e.mobile=o.mobile,e.invitationCode=o.invitationCode},methods:{changePassword1:function(){var o=this;o.showPassword1=!o.showPassword1},changePassword2:function(){var o=this;o.showPassword2=!o.showPassword2},register:function(){var e=this;if(e.$utils.common.passwordTest.test(e.password1))if(e.password1!=e.password2)o.showToast({title:"两次密码不一致",icon:"none"});else{o.showLoading({title:"请稍等..."});var n={mobile:e.mobile,password:e.password1,repassword:e.password2,vcode:e.code,invitationCode:e.invitationCode};e.$api.bymobile(n).then((function(n){o.hideLoading(),n.success?(o.showToast({title:"注册成功",icon:"success"}),setTimeout((function(){e.$Router.back(2)}),2e3)):o.showToast({title:n.message,icon:"none"})}))}else o.showToast({title:"密码需是8-14位数字或字母",icon:"none"})},gotoAgreement1:function(){var o=this;o.$Router.push({path:"/pages/my/agreement/agreement1"})},gotoAgreement2:function(){var o=this;o.$Router.push({path:"/pages/my/agreement/agreement2"})}}};e.default=n}).call(this,n("543d")["default"])},e715:function(o,e,n){"use strict";n.r(e);var t=n("e323"),s=n.n(t);for(var i in t)"default"!==i&&function(o){n.d(e,o,(function(){return t[o]}))}(i);e["default"]=s.a}},[["01be","common/runtime","common/vendor"]]]);