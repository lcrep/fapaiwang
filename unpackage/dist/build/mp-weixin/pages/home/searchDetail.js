(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/home/searchDetail"],{"45da":function(e,t,i){},"51d1":function(e,t,i){"use strict";i.r(t);var n=i("df06"),a=i("5c51");for(var o in a)"default"!==o&&function(e){i.d(t,e,(function(){return a[e]}))}(o);i("860c");var c,r=i("f0c5"),s=Object(r["a"])(a["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],c);t["default"]=s.exports},"5c51":function(e,t,i){"use strict";i.r(t);var n=i("cad5"),a=i.n(n);for(var o in n)"default"!==o&&function(e){i.d(t,e,(function(){return n[e]}))}(o);t["default"]=a.a},"6fc8":function(e,t,i){"use strict";(function(e){i("312d");n(i("66fd"));var t=n(i("51d1"));function n(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,i("543d")["createPage"])},"860c":function(e,t,i){"use strict";var n=i("45da"),a=i.n(n);a.a},cad5:function(e,t,i){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=o(i("301f")),a=i("2f62");function o(e){return e&&e.__esModule?e:{default:e}}function c(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function r(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?c(Object(i),!0).forEach((function(t){s(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):c(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}var u={computed:(0,a.mapState)(["address"]),data:function(){return{scrollTop:0,tabCurrent:0,priceSort:0,searchVal:"",isFresh:!1,theCity:"",optionType:1,loadStatus:"more",pageNum:1,total:"",pageSize:10,cityIndex:[0,0],cities:[],houseList:[]}},onLoad:function(e){var t=this;if(t.searchVal=e.text,t.cities[0]=n.default,t.address.cityIndex){var i=t.address.cityIndex[0];t.address.cityIndex[1];t.cityIndex=t.address.cityIndex,t.cities[1]=n.default[i].cities,t.provinceId=t.address.provinceId,t.cityId=t.address.cityId}else t.cityIndex=[16,0],t.cities[1]=n.default[16].cities,t.provinceId=17,t.cityId=1381;t.theCity=t.cities[1][t.cityIndex[1]].name,t.getHouseList(1,t.provinceId,t.cityId,1)},onReachBottom:function(){var e=this;console.log("onReachBottom"),"noMore"!=e.loadStatus&&1!=e.pageNum&&e.getHouseList(e.optionType,e.provinceId,e.cityId,e.pageNum)},methods:r({cityChange:function(e){switch(this.cityIndex[e.detail.column]=e.detail.value,e.detail.column){case 0:this.cities[1]=this.cities[0][this.cityIndex[0]].cities,this.cityIndex.splice(1,1),this.cityIndex.splice(2,1,0);break;case 1:this.cityIndex.splice(2,1);break}this.$forceUpdate()},citySel:function(){var e=this;e.theCity=e.cities[1][e.cityIndex[1]].name;var t=e.cities[0][e.cityIndex[0]].id,i=e.cities[1][e.cityIndex[1]].id;e.provinceId=t,e.cityId=i;var n={provinceId:t,cityId:i,cityIndex:e.cityIndex};e.updateAddress(n),e.clearList(),e.getHouseList(1,e.provinceId,e.cityId,1)},selectTab:function(e){var t=this;2==e&&2==t.tabCurrent?(0==t.priceSort?t.optionType=4:t.optionType=3,t.priceSort=0==t.priceSort?1:0):(t.tabCurrent=e,0==e?t.optionType=1:1==e?t.optionType=2:2==e&&(t.optionType=3)),t.clearList(),t.getHouseList(t.optionType,t.provinceId,t.cityId,t.pageNum)},getHouseList:function(t,i,n,a){var o=this,c={title:o.searchVal,optionType:t,provinceId:i,cityId:n,pageNo:a};o.loadStatus="loading",o.$api.houseSearch(c).then((function(t){if(t.success){o.isFresh&&(setTimeout((function(){e.stopPullDownRefresh()}),1e3),o.isFresh=!1);var i=t.datas.rows;for(var n in i){i[n].currentPriceText=(1e-4*i[n].currentPrice).toFixed(2),1==i[n].paimaiTimes?i[n].paimaiTimesText="一拍":2==i[n].paimaiTimes?i[n].paimaiTimesText="二拍":4==i[n].paimaiTimes?i[n].paimaiTimesText="变卖":5==i[n].paimaiTimes&&(i[n].paimaiTimesText="重新拍卖");var a=(new Date).getTime(),c=new Date(i[n].startTime).getTime(),r=new Date(i[n].endTime).getTime();c>a?(i[n].paimaiStatus=1,i[n].timeText=o.$utils.formatTime(c,"MM月DD日 hh:mm")):a>=c&&a<=r?(i[n].paimaiStatus=2,i[n].timeText=o.$utils.timeCount(r)):(i[n].paimaiStatus=3,i[n].timeText=o.$utils.formatTime(r,"YYYY年MM月DD日")),o.houseList.push(i[n])}var s=t.datas.total;o.total=s;var u=Math.ceil(s/o.pageSize);parseInt(u)>parseInt(o.pageNum)?(o.pageNum++,o.loadStatus="more"):o.loadStatus="noMore"}else e.showToast({title:t.message,icon:"none"})}))},search:function(){var t=this;t.clearList(),t.getHouseList(1,t.provinceId,t.cityId,1),e.hideKeyboard()},clearList:function(){var e=this;e.pageNum=1,e.total="",e.houseList=[]},itemTap:function(e,t){this.$Router.push({path:"/pages/home/goodsDetail",query:{paimaiId:e,houseSource:t}})},onPageScroll:function(e){var t=this;t.scrollTop=e.scrollTop},back:function(){this.$Router.back(1)}},(0,a.mapMutations)(["updateAddress"]))};t.default=u}).call(this,i("543d")["default"])},df06:function(e,t,i){"use strict";var n={"uni-icons":function(){return Promise.all([i.e("common/vendor"),i.e("components/uni-icons/uni-icons")]).then(i.bind(null,"df065"))},"uni-load-more":function(){return i.e("components/uni-load-more/uni-load-more").then(i.bind(null,"61d8"))}},a=function(){var e=this,t=e.$createElement;e._self._c},o=[];i.d(t,"b",(function(){return a})),i.d(t,"c",(function(){return o})),i.d(t,"a",(function(){return n}))}},[["6fc8","common/runtime","common/vendor"]]]);