(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/home/leakHousing"],{"00ed":function(e,t,i){},1406:function(e,t,i){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=c(i("301f")),a=i("2f62");function c(e){return e&&e.__esModule?e:{default:e}}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function s(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}var u={computed:(0,a.mapState)(["address"]),data:function(){return{provinceId:0,cityId:0,theCity:"",loadStatus:"more",pageNum:1,pageSize:10,total:"",cityIndex:[0,0],cities:[],houseList:[]}},created:function(){var e=this;if(e.cities[0]=n.default,e.address.cityIndex){var t=e.address.cityIndex[0];e.address.cityIndex[1];e.cityIndex=e.address.cityIndex,e.cities[1]=n.default[t].cities,e.provinceId=e.address.provinceId,e.cityId=e.address.cityId}else e.cityIndex=[16,0],e.cities[1]=n.default[16].cities,e.provinceId=17,e.cityId=1381;e.theCity=e.cities[1][e.cityIndex[1]].name,e.getHouseList(e.provinceId,e.cityId,1)},onReachBottom:function(){var e=this;console.log("onReachBottom"),"noMore"!=e.loadStatus&&1!=e.pageNum&&e.getHouseList(e.provinceId,e.cityId,e.pageNum)},methods:s({cityChange:function(e){switch(this.cityIndex[e.detail.column]=e.detail.value,e.detail.column){case 0:this.cities[1]=this.cities[0][this.cityIndex[0]].cities,this.cityIndex.splice(1,1),this.cityIndex.splice(2,1,0);break;case 1:this.cityIndex.splice(2,1);break}this.$forceUpdate()},citySel:function(){var e=this;e.theCity=e.cities[1][e.cityIndex[1]].name;var t=e.cities[0][e.cityIndex[0]].id,i=e.cities[1][e.cityIndex[1]].id;e.provinceId=t,e.cityId=i;var n={provinceId:t,cityId:i,cityIndex:e.cityIndex};e.updateAddress(n),e.clearList(),e.getHouseList(e.provinceId,e.cityId,1)},getHouseList:function(t,i,n){var a=this,c={provinceId:t,cityId:i,pageNo:n,pageSize:a.pageSize};a.loadStatus="loading",a.$api.houseLeaks(c).then((function(t){if(t.success){a.isFresh&&(setTimeout((function(){e.stopPullDownRefresh()}),1e3),a.isFresh=!1);var i=t.datas.rows;for(var n in a.total=t.datas.total,i){i[n].currentPriceText=(1e-4*i[n].currentPrice).toFixed(2),1==i[n].paimaiTimes?i[n].paimaiTimesText="一拍":2==i[n].paimaiTimes?i[n].paimaiTimesText="二拍":4==i[n].paimaiTimes?i[n].paimaiTimesText="变卖":5==i[n].paimaiTimes&&(i[n].paimaiTimesText="重新拍卖");var c=(new Date).getTime(),o=new Date(i[n].startTime).getTime(),s=new Date(i[n].endTime).getTime();o>c?(i[n].paimaiStatus=1,i[n].timeText=a.$utils.formatTime(o,"MM月DD日 hh:mm")):c>=o&&c<=s?(i[n].paimaiStatus=2,i[n].timeText=a.$utils.timeCount(s)):(i[n].paimaiStatus=3,i[n].timeText=a.$utils.formatTime(s,"YYYY年MM月DD日")),a.houseList.push(i[n])}var r=t.datas.total,u=Math.ceil(r/a.pageSize);parseInt(u)>parseInt(a.pageNum)?(a.pageNum++,a.loadStatus="more"):a.loadStatus="noMore"}else e.showToast({title:t.message,icon:"none"})}))},itemTap:function(e,t){this.$Router.push({path:"/pages/home/goodsDetail",query:{paimaiId:e,houseSource:t}})},clearList:function(){var e=this;e.pageNum=1,e.total="",e.houseList=[]}},(0,a.mapMutations)(["updateAddress"]))};t.default=u}).call(this,i("543d")["default"])},2325:function(e,t,i){"use strict";var n=i("00ed"),a=i.n(n);a.a},"242a":function(e,t,i){"use strict";i.r(t);var n=i("1406"),a=i.n(n);for(var c in n)"default"!==c&&function(e){i.d(t,e,(function(){return n[e]}))}(c);t["default"]=a.a},"3ef5":function(e,t,i){"use strict";(function(e){i("312d");n(i("66fd"));var t=n(i("bfcc"));function n(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,i("543d")["createPage"])},ac4b:function(e,t,i){"use strict";var n={"uni-icons":function(){return Promise.all([i.e("common/vendor"),i.e("components/uni-icons/uni-icons")]).then(i.bind(null,"df06"))},"uni-load-more":function(){return i.e("components/uni-load-more/uni-load-more").then(i.bind(null,"61d8"))}},a=function(){var e=this,t=e.$createElement;e._self._c},c=[];i.d(t,"b",(function(){return a})),i.d(t,"c",(function(){return c})),i.d(t,"a",(function(){return n}))},bfcc:function(e,t,i){"use strict";i.r(t);var n=i("ac4b"),a=i("242a");for(var c in a)"default"!==c&&function(e){i.d(t,e,(function(){return a[e]}))}(c);i("2325");var o,s=i("f0c5"),r=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],o);t["default"]=r.exports}},[["3ef5","common/runtime","common/vendor"]]]);