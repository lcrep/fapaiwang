(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/my/index"],{"07da":function(t,e,a){"use strict";var n={"uni-icons":function(){return Promise.all([a.e("common/vendor"),a.e("components/uni-icons/uni-icons")]).then(a.bind(null,"df065"))},"uni-grid":function(){return a.e("components/uni-grid/uni-grid").then(a.bind(null,"d513"))},"uni-grid-item":function(){return a.e("components/uni-grid-item/uni-grid-item").then(a.bind(null,"caa6"))}},s=function(){var t=this,e=t.$createElement;t._self._c},i=[];a.d(e,"b",(function(){return s})),a.d(e,"c",(function(){return i})),a.d(e,"a",(function(){return n}))},"14aa":function(t,e,a){"use strict";a.r(e);var n=a("07da"),s=a("530c");for(var i in s)"default"!==i&&function(t){a.d(e,t,(function(){return s[t]}))}(i);a("865e");var o,r=a("f0c5"),c=Object(r["a"])(s["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],o);e["default"]=c.exports},"530c":function(t,e,a){"use strict";a.r(e);var n=a("b0e9"),s=a.n(n);for(var i in n)"default"!==i&&function(t){a.d(e,t,(function(){return n[t]}))}(i);e["default"]=s.a},"83b3":function(t,e,a){"use strict";(function(t){a("312d");n(a("66fd"));var e=n(a("14aa"));function n(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,a("543d")["createPage"])},"865e":function(t,e,a){"use strict";var n=a("cd90"),s=a.n(n);s.a},b0e9:function(t,e,a){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n,s=a("2f62"),i=o(a("2d1c"));function o(t){return t&&t.__esModule?t:{default:t}}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function c(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){u(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function u(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var g={computed:(0,s.mapState)(["hasLogin","userInfo"]),data:function(){return{cWidth:"",cHeight:"",pixelRatio:1,userData:"",tabCurrent1:0,tabCurrent2:0,chatAll:[],chatData1:[],chatData2:[],userType:1,navBtns1:[{name:"我的收藏",src:"../../static/images/Btns/publicBtn1.png",router:"/pages/my/navs/myCollection"},{name:"最近浏览",src:"../../static/images/Btns/publicBtn2.png",router:"/pages/my/navs/history"},{name:"交易记录",src:"../../static/images/Btns/publicBtn3.png",router:"/pages/my/navs/recordTypeC"},{name:"帮助与反馈",src:"../../static/images/Btns/publicBtn4.png",router:"/pages/my/navs/feedback"}],navBtns2:[]}},onLoad:function(){n=this,this.hasLogin&&(this.cWidth=t.upx2px(690),this.cHeight=t.upx2px(500),this.transactionstatistics(),this.housestatisticscount(""),this.housestatisticsamount(""),this.transratiostatistics(1),this.transratiostatistics(2),this.corptransactionstatistics(),this.getUserInfo())},onShow:function(){var t=this;this.hasLogin&&setTimeout((function(){t.getUserInfo()}),300)},methods:c({},(0,s.mapMutations)(["logout"]),{reload:function(){this.hasLogin&&this.getUserInfo()},transactionstatistics:function(){var e=this;e.$api.transactionstatistics({}).then((function(a){if(a.success){var n=a.datas;e.chatAll=n}else t.showToast({title:a.message,icon:"none"})}))},housestatisticscount:function(e){var a=this,n={platform:e};a.$api.housestatisticscount(n).then((function(e){if(e.success){var n=e.datas;a.chatData1=n;var s={categories:[],series:[{name:"挂拍住宅",data:[],color:"#1dd7cf"},{name:"成交住宅",data:[],color:"#9495d4"}]};for(var i in n)s.categories.push(n[i].month),s.series[0].data.push(n[i].qty),s.series[1].data.push(n[i].successQty);a.showColumn("canvasColumn1",s)}else t.showToast({title:e.message,icon:"none"})}))},housestatisticsamount:function(e){var a=this,n={platform:e};a.$api.housestatisticsamount(n).then((function(e){if(e.success){var n=e.datas;a.chatData2=n;var s={categories:[],series:[{name:"挂拍住宅",data:[],color:"#1dd7cf"},{name:"成交住宅",data:[],color:"#9495d4"}]};for(var i in n)s.categories.push(n[i].month),s.series[0].data.push(n[i].allAMount),s.series[1].data.push(n[i].allSuccessAMount);a.showColumn("canvasColumn2",s)}else t.showToast({title:e.message,icon:"none"})}))},transratiostatistics:function(e){var a=this,n={type:e};a.$api.transratiostatistics(n).then((function(n){if(n.success){var s=n.datas;a.chatData3=s;var i="";i=1==e?"市场折价率 (%)":"成交率";var o={categories:[],series:[{name:i,data:[],color:"#04A9F5"}]};for(var r in s)o.categories.push(s[r].month),o.series[0].data.push(s[r].ratio);1==e?a.showLine("canvasLine1",o):a.showLine("canvasLine2",o)}else t.showToast({title:n.message,icon:"none"})}))},corptransactionstatistics:function(e){var a=this;a.$api.corptransactionstatistics().then((function(e){if(e.success){var n=e.datas;a.chatData3=n;var s={categories:[],series:[{name:"成交付款完成的住宅",data:[],color:"#04A9F5"}]};for(var i in n)s.categories.push(n[i].month),s.series[0].data.push(n[i].qty);a.showLine("canvasLine3",s)}else t.showToast({title:e.message,icon:"none"})}))},tabChange1:function(t){var e=this;e.tabCurrent1=t;var a=0==t?"":t;e.housestatisticscount(a)},tabChange2:function(t){var e=this;e.tabCurrent2=t;var a=0==t?"":t;e.housestatisticsamount(a)},showColumn:function(t,e){new i.default({$this:n,canvasId:t,type:"column",padding:[15,15,0,5],legend:{show:!0,padding:5,lineHeight:11,margin:0},fontSize:11,background:"#FFFFFF",pixelRatio:n.pixelRatio,animation:!0,categories:e.categories,series:e.series,xAxis:{disableGrid:!0},yAxis:{data:[{position:"left",axisLine:!1,format:function(t){return t.toFixed(0)}}]},dataLabel:!0,width:n.cWidth*n.pixelRatio,height:n.cHeight*n.pixelRatio,extra:{column:{type:"group",width:n.cWidth*n.pixelRatio*.45/e.categories.length}}})},showLine:function(t,e){new i.default({$this:n,canvasId:t,type:"line",colors:["#facc14","#f04864","#8543e0","#90ed7d"],fontSize:11,padding:[15,15,0,15],legend:{show:!0,padding:5,lineHeight:11,margin:0},dataLabel:!1,dataPointShape:!0,background:"#FFFFFF",pixelRatio:n.pixelRatio,categories:e.categories,series:e.series,animation:!0,xAxis:{type:"grid",gridColor:"#CCCCCC",gridType:"dash",dashLength:8},yAxis:{gridType:"dash",gridColor:"#CCCCCC",dashLength:8},width:n.cWidth*n.pixelRatio,height:n.cHeight*n.pixelRatio,extra:{line:{type:"straight"}}})},getUserInfo:function(){var e=this;e.$api.userinfoQuery({}).then((function(a){if(a.success){var n=a.datas;n.headImgUrl=n.headImgUrl?n.headImgUrl:"../../static/images/defaultUserPic.png",n.nickName=n.nickName?n.nickName:n.mobile,e.userType=n.userType,2==n.userType?(e.queryjiumenu(),e.navBtns1[2].router="/pages/my/navs/recordTypeB"):e.navBtns1[2].router="/pages/my/navs/recordTypeC",e.userData=n}else t.showToast({title:a.message,icon:"none"})}))},queryjiumenu:function(){var e=this;e.$api.queryjiumenu().then((function(a){if(a.success){var n=a.datas;for(var s in n)"log"==n[s].code?(n[s].icon="../../static/images/Btns/myBtn1.png",n[s].router="/pages/my/manageNavs/journal/list"):"return_visit"==n[s].code?(n[s].icon="../../static/images/Btns/myBtn2.png",n[s].router="/pages/my/manageNavs/returnVisit/list"):"contract"==n[s].code?(n[s].icon="../../static/images/Btns/myBtn3.png",n[s].router="/pages/my/manageNavs/contract/list"):"pay"==n[s].code?(n[s].icon="../../static/images/Btns/myBtn4.png",n[s].router="/pages/my/manageNavs/payTag/list"):"diligence"==n[s].code?(n[s].icon="../../static/images/Btns/myBtn5.png",n[s].router="/pages/my/manageNavs/inquire/list"):"loan"==n[s].code?(n[s].icon="../../static/images/Btns/myBtn6.png",n[s].router="/pages/my/manageNavs/loan/list"):"auction"==n[s].code?(n[s].icon="../../static/images/Btns/myBtn7.png",n[s].router="/pages/my/manageNavs/hasJoin/list"):"transfer"==n[s].code?(n[s].icon="../../static/images/Btns/myBtn8.png",n[s].router="/pages/my/manageNavs/transfer/list"):"retreat"==n[s].code?(n[s].icon="../../static/images/Btns/myBtn9.png",n[s].router="/pages/my/manageNavs/vacate/list"):"over"==n[s].code?(n[s].icon="../../static/images/Btns/myBtn10.png",n[s].router="/pages/my/manageNavs/handed/list"):"notice"==n[s].code?(n[s].icon="../../static/images/Btns/myBtn11.png",n[s].router="/pages/my/manageNavs/notice/list"):"employee"==n[s].code&&(n[s].icon="../../static/images/Btns/myBtn12.png",n[s].router="/pages/my/manageNavs/staff/list");e.navBtns2=n}else t.showToast({title:a.message,icon:"none"})}))},btnTap1:function(t){this.$Router.push({path:this.navBtns1[t.detail.index].router})},btnTap2:function(t){this.$Router.push({path:this.navBtns2[t.detail.index].router})},toLogin:function(){this.$Router.push({path:"/pages/my/login"})},gotoSelfPage:function(){this.$Router.push({path:"/pages/my/selfPage"})},gotograph1:function(){this.$Router.push({path:"/pages/my/statisticsEmy"})},gotograph2:function(){this.$Router.push({path:"/pages/my/statisticsCus"})},edit:function(){this.$Router.push({path:"/pages/my/edit"})}})};e.default=g}).call(this,a("543d")["default"])},cd90:function(t,e,a){}},[["83b3","common/runtime","common/vendor"]]]);