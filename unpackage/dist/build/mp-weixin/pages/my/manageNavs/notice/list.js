(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/my/manageNavs/notice/list"],{"2c65":function(t,e,a){"use strict";(function(t){a("312d");n(a("66fd"));var e=n(a("a1ad"));function n(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,a("543d")["createPage"])},3675:function(t,e,a){"use strict";a.r(e);var n=a("56b8"),i=a.n(n);for(var o in n)"default"!==o&&function(t){a.d(e,t,(function(){return n[t]}))}(o);e["default"]=i.a},"56b8":function(t,e,a){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{loadStatus:"more",pageNum:1,pageSize:10,total:"",list:[],myEmployeeId:"",searchVal:"",statusArr:["全部","未付款","已付款"],status:"按状态筛选"}},onLoad:function(){this.clearList(),this.getList(1)},methods:{reload:function(){this.clearList(),this.getList(1)},statusPicker:function(t){var e=this;e.status=e.statusArr[t.detail.value]},gotoDetail:function(t){var e=this;e.$Router.push({path:"/pages/my/manageNavs/notice/detail",query:{id:t}})},gotoAdd:function(){var t=this;t.$Router.push({path:"/pages/my/manageNavs/notice/add"})},getList:function(e){var a=this,n={dynamicParam:a.searchVal,queryStatus:a.queryStatus,startPage:e,pageSize:a.pageSize};a.loadStatus="loading",a.$api.noticeListB(n).then((function(e){if(e.success){var n=e.datas.rows;for(var i in n)n[i].createEmployeeHeadImg=n[i].createEmployeeHeadImg?n[i].createEmployeeHeadImg:"../../../../static/images/defaultUserPic.png",a.list.push(n[i]);var o=e.datas.total;a.total=o,a.myEmployeeId=e.datas.myEmployeeId;var s=Math.ceil(o/a.pageSize);parseInt(s)>parseInt(a.pageNum)?(a.pageNum++,a.loadStatus="more"):a.loadStatus="noMore"}else t.showToast({title:e.message,icon:"none"})}))},delNotice:function(e,a){var n=this;t.showModal({content:"确定要删除公告吗？",confirmText:"确认删除",cancelText:"取消",success:function(i){if(i.confirm){var o={id:e};n.$api.noticeDelete(o).then((function(e){e.success?(n.list.splice(a,1),t.showToast({title:"删除成功"})):t.showToast({title:e.message,icon:"none"})}))}else i.cancel}})},editNotice:function(t){var e=this;e.$Router.push({path:"/pages/my/manageNavs/notice/edit",query:{id:t}})},clearList:function(){var t=this;t.pageNum=1,t.total="",t.list=[]},search:function(){var t=this;t.clearList(),t.getList(1)}}};e.default=a}).call(this,a("543d")["default"])},a1ad:function(t,e,a){"use strict";a.r(e);var n=a("d6b4"),i=a("3675");for(var o in i)"default"!==o&&function(t){a.d(e,t,(function(){return i[t]}))}(o);a("ea23");var s,u=a("f0c5"),c=Object(u["a"])(i["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],s);e["default"]=c.exports},b9f3:function(t,e,a){},d6b4:function(t,e,a){"use strict";var n={"uni-icons":function(){return Promise.all([a.e("common/vendor"),a.e("components/uni-icons/uni-icons")]).then(a.bind(null,"df065"))},"uni-load-more":function(){return a.e("components/uni-load-more/uni-load-more").then(a.bind(null,"61d8"))}},i=function(){var t=this,e=t.$createElement;t._self._c},o=[];a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return o})),a.d(e,"a",(function(){return n}))},ea23:function(t,e,a){"use strict";var n=a("b9f3"),i=a.n(n);i.a}},[["2c65","common/runtime","common/vendor"]]]);