(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/my/navs/recordTypeB"],{"0c21":function(t,a,e){"use strict";var n={"uni-icons":function(){return Promise.all([e.e("common/vendor"),e.e("components/uni-icons/uni-icons")]).then(e.bind(null,"df065"))},"uni-load-more":function(){return e.e("components/uni-load-more/uni-load-more").then(e.bind(null,"61d8"))}},o=function(){var t=this,a=t.$createElement;t._self._c},u=[];e.d(a,"b",(function(){return o})),e.d(a,"c",(function(){return u})),e.d(a,"a",(function(){return n}))},"27aa":function(t,a,e){"use strict";(function(t){e("312d");n(e("66fd"));var a=n(e("86ef"));function n(t){return t&&t.__esModule?t:{default:t}}t(a.default)}).call(this,e("543d")["createPage"])},"30ad":function(t,a,e){"use strict";var n=e("9ced"),o=e.n(n);o.a},"66d7":function(t,a,e){"use strict";(function(t){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var e={data:function(){return{tagIndex:0,pageSize:10,loadStatus:"more",flowStatus:"",pageNum:1,total:"",list:[],tags:[{name:"全部",flowStatus:""},{name:"咨询",flowStatus:10},{name:"签约",flowStatus:20},{name:"尽职调查",flowStatus:30},{name:"贷款",flowStatus:40},{name:"参拍中",flowStatus:50},{name:"办理过户",flowStatus:60},{name:"腾退",flowStatus:70},{name:"交房",flowStatus:80}]}},onLoad:function(){this.getList(1)},onReachBottom:function(){var t=this;console.log("onReachBottom"),"noMore"!=t.loadStatus&&1!=t.pageNum&&t.getList(t.pageNum)},methods:{getList:function(a){var e=this,n={flowStatus:e.flowStatus,startPage:a,pageSize:e.pageSize};e.loadStatus="loading",e.$api.housevisitList(n).then((function(a){if(a.success){var n=a.datas.rows;for(var o in n){var u;n[o].headImgUrl=n[o].headImgUrl?n[o].headImgUrl:"../../../static/images/defaultUserPic.png",10==n[o].flowStatus?u="咨询":20==n[o].flowStatus?u="签约":30==n[o].flowStatus?u="尽职调查":40==n[o].flowStatus?u="贷款":50==n[o].flowStatus?u="拍卖中":60==n[o].flowStatus?u="办理过户":70==n[o].flowStatus?u="腾退":80==n[o].flowStatus&&(u="交房"),n[o].flowStatusText=u,e.list.push(n[o])}var s=a.datas.total;e.total=s;var i=Math.ceil(s/e.pageSize);parseInt(i)>parseInt(e.pageNum)?(e.pageNum++,e.loadStatus="more"):e.loadStatus="noMore"}else t.showToast({title:a.message,icon:"none"})}))},clearList:function(){var t=this;t.pageNum=1,t.total="",t.list=[]},gotoProcess:function(t){var a=this;a.$Router.push({path:"/pages/my/manageNavs/process/index",query:{id:t}})},tagSel:function(t,a){var e=this;e.tagIndex=t,e.flowStatus=a,e.clearList(),e.getList(1)}}};a.default=e}).call(this,e("543d")["default"])},"86ef":function(t,a,e){"use strict";e.r(a);var n=e("0c21"),o=e("b698");for(var u in o)"default"!==u&&function(t){e.d(a,t,(function(){return o[t]}))}(u);e("30ad");var s,i=e("f0c5"),l=Object(i["a"])(o["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],s);a["default"]=l.exports},"9ced":function(t,a,e){},b698:function(t,a,e){"use strict";e.r(a);var n=e("66d7"),o=e.n(n);for(var u in n)"default"!==u&&function(t){e.d(a,t,(function(){return n[t]}))}(u);a["default"]=o.a}},[["27aa","common/runtime","common/vendor"]]]);