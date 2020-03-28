<template>
	<view>
		<view class="selectCityBox">
			<text class="selCityLabel">当前城市：</text>
			<picker @change="bindPickerChange" :value="index" :range="citys" range-key="name" class="cityPicker">
				<view class="citySel"><text class="cityName">{{theCity}}</text><uni-icons type="arrowdown" size="20" /></view>
			</picker>
		</view>
		<view class="content">
			<view class="areaSelBox">
				<view class="selBoxHead">
					<view class="td td1">
						区域
					</view>
					<view class="td td2">
						法拍行情
					</view>
					<view class="td td3">
						月成交量
					</view>
				</view>
				<view class="selBoxList">
					<view class="tr selectedItem">
						<view class="td td1">
							{{selectedArea.name}}
						</view>
						<view class="td td2">
							{{selectedArea.price}}元/m²
						</view>
						<view class="td td3">
							{{selectedArea.orderNum}}套
						</view>
					</view>
					<view class="selectBtnBox" @click="openAreaList">
						<uni-icons class="loopIcon" color="#CD282F" size="16" type="loop" />
						<text class="btnLabel">切换区域</text>
					</view>
				</view>
			</view>

			
			<view class="goodsBox">
				<view class="listTabs">
					<view :class="{'tabItem':true,'tabActive':tabCurrent==0}" @click="selectTab(0)"><text>最新发布</text></view>
					<view :class="{'tabItem':true,'tabActive':tabCurrent==1}" @click="selectTab(1)"><text>距离最近</text></view>
					<view :class="{'tabItem':true,'tabActive':tabCurrent==2}" @click="selectTab(2)"><text>收藏更多</text></view>
					<view :class="{'tabItem':true,'tabActive':tabCurrent==3}" @click="selectTab(3)"><text>价格</text><text :class="{'sortIcon':true,'sortIconUp':priceSort==1}"></text></view>
				</view>
				<view class="goodsList">
					<view class="goodsItem">
						<view class="goodsPic">
							<text class="goodsTag">一拍</text>
							<image class="goodsImage" src="https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg" mode="aspectFill"></image>
						</view>
						<view class="goodsInfo">
							<view class="goodsName">武汉市江夏区经济开发区江夏大道东创业农庄丰分分为</view>
							<view class="goodsAddress nowrap">1次出价/江夏区经济开发区某某街道</view>
							<view class="goodsPrice"><text class="priceLabel">当前价</text><text class="priceNum">333.22万</text><text class="discount">8.7折</text></view>
							<view class="goodsStatus"><text class="statusName">拍卖中</text><text class="goodsTime">剩余15天20小时30分钟</text></view>
						</view>
					</view>
					<view class="goodsItem">
						<view class="goodsPic">
							<text class="goodsTag">一拍</text>
							<image src="https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg" mode="aspectFill"></image>
						</view>
						<view class="goodsInfo">
							<view class="goodsName">武汉市江夏区经济开发区江夏大道东创业农庄丰分分为</view>
							<view class="goodsAddress nowrap">1次出价/江夏区经济开发区某某街道</view>
							<view class="goodsPrice"><text class="priceLabel">当前价</text><text class="priceNum">333.22万</text><text class="discount">8.7折</text></view>
							<view class="goodsStatus"><text class="statusName">拍卖中</text><text class="goodsTime">剩余15天20小时30分钟</text></view>
						</view>
					</view>
					<view class="goodsItem">
						<view class="goodsPic">
							<text class="goodsTag">一拍</text>
							<image src="https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg" mode="aspectFill"></image>
						</view>
						<view class="goodsInfo">
							<view class="goodsName">武汉市江夏区经济开发区江夏大道东创业农庄丰分分为</view>
							<view class="goodsAddress nowrap">1次出价/江夏区经济开发区某某街道</view>
							<view class="goodsPrice"><text class="priceLabel">当前价</text><text class="priceNum">333.22万</text><text class="discount">8.7折</text></view>
							<view class="goodsStatus"><text class="statusName">拍卖中</text><text class="goodsTime">剩余15天20小时30分钟</text></view>
						</view>
					</view>
					<view class="goodsItem">
						<view class="goodsPic">
							<text class="goodsTag">一拍</text>
							<image src="https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg" mode="aspectFill"></image>
						</view>
						<view class="goodsInfo">
							<view class="goodsName">武汉市江夏区经济开发区江夏大道东创业农庄丰分分为</view>
							<view class="goodsAddress nowrap">1次出价/江夏区经济开发区某某街道</view>
							<view class="goodsPrice"><text class="priceLabel">当前价</text><text class="priceNum">333.22万</text><text class="discount">8.7折</text></view>
							<view class="goodsStatus"><text class="statusName">拍卖中</text><text class="goodsTime">剩余15天20小时30分钟</text></view>
						</view>
					</view>
					<view class="goodsItem">
						<view class="goodsPic">
							<text class="goodsTag">一拍</text>
							<image src="https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg" mode="aspectFill"></image>
						</view>
						<view class="goodsInfo">
							<view class="goodsName">武汉市江夏区经济开发区江夏大道东创业农庄丰分分为</view>
							<view class="goodsAddress nowrap">1次出价/江夏区经济开发区某某街道</view>
							<view class="goodsPrice"><text class="priceLabel">当前价</text><text class="priceNum">333.22万</text><text class="discount">8.7折</text></view>
							<view class="goodsStatus"><text class="statusName">拍卖中</text><text class="goodsTime">剩余15天20小时30分钟</text></view>
						</view>
					</view>
					<view class="goodsItem">
						<view class="goodsPic">
							<text class="goodsTag">一拍</text>
							<image src="https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg" mode="aspectFill"></image>
						</view>
						<view class="goodsInfo">
							<view class="goodsName">武汉市江夏区经济开发区江夏大道东创业农庄丰分分为</view>
							<view class="goodsAddress nowrap">1次出价/江夏区经济开发区某某街道</view>
							<view class="goodsPrice"><text class="priceLabel">当前价</text><text class="priceNum">333.22万</text><text class="discount">8.7折</text></view>
							<view class="goodsStatus"><text class="statusName">拍卖中</text><text class="goodsTime">剩余15天20小时30分钟</text></view>
						</view>
					</view>
					<view class="goodsItem">
						<view class="goodsPic">
							<text class="goodsTag">一拍</text>
							<image src="https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg" mode="aspectFill"></image>
						</view>
						<view class="goodsInfo">
							<view class="goodsName">武汉市江夏区经济开发区江夏大道东创业农庄丰分分为</view>
							<view class="goodsAddress nowrap">1次出价/江夏区经济开发区某某街道</view>
							<view class="goodsPrice"><text class="priceLabel">当前价</text><text class="priceNum">333.22万</text><text class="discount">8.7折</text></view>
							<view class="goodsStatus"><text class="statusName">拍卖中</text><text class="goodsTime">剩余15天20小时30分钟</text></view>
						</view>
					</view>
				</view>
			</view>
			<uni-load-more iconType="snow" :status="status" />
		</view>
		<view class="areaListBox" v-if="openAreaSel">
			<view class="listShardow" @click="openAreaList">
				
			</view>
			<view class="areaSelBox theOpenList">
				<view class="selBoxHead">
					<view class="td td1">
						区域
					</view>
					<view class="td td2">
						法拍行情
					</view>
					<view class="td td3">
						月成交量
					</view>
				</view>
				<view class="selBoxList">
					<view v-for="(item, index) in areaList" :key="index" :class="{'tr':true,'selectedItem':index==selectedArea.index}" @click="selectArea(index)">
						<view class="td td1">
							{{item.name}}
						</view>
						<view class="td td2">
							{{item.price}}元/m²
						</view>
						<view class="td td3">
							{{item.orderNum}}套
						</view>
					</view>
				</view>
			</view>
			
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				index:0,
				tabCurrent: 0,
				theCity: '北京',
				priceSort: 0,
				selectedArea:{
					index:0,
					name:'江夏区',
					price:"12345.99",
					orderNum:"332"
				},
				status: 'loading',
				citys: [{
					name: '武汉'
				}, {
					name: '广州'
				}, {
					name: '北京'
				}, {
					name: '乌鲁木齐乌鲁木齐'
				}],
				openAreaSel:false,
				areaList:[
					{
						name:'江夏区',
						price:'12345.33',
						orderNum:'289'
					},
					{
						name:'汉阳区',
						price:'14345.00',
						orderNum:'9'
					},
					{
						name:'硚口区',
						price:'16345.33',
						orderNum:'29'
					},
					{
						name:'洪山区',
						price:'16000.00',
						orderNum:'23'
					},
					{
						name:'江夏区',
						price:'12345.33',
						orderNum:'289'
					},
					{
						name:'江夏区',
						price:'12345.33',
						orderNum:'289'
					},
					{
						name:'江夏区',
						price:'12345.33',
						orderNum:'289'
					},
					{
						name:'江夏区',
						price:'12345.33',
						orderNum:'289'
					},
					{
						name:'江夏区',
						price:'12345.33',
						orderNum:'289'
					},
					{
						name:'江夏区',
						price:'12345.33',
						orderNum:'289'
					},
					{
						name:'江夏区',
						price:'12345.33',
						orderNum:'289'
					},
					{
						name:'江夏区',
						price:'12345.33',
						orderNum:'289'
					},
					{
						name:'江夏区',
						price:'12345.33',
						orderNum:'289'
					},
					{
						name:'江夏区',
						price:'12345.33',
						orderNum:'289'
					},
					{
						name:'江夏区',
						price:'12345.33',
						orderNum:'289'
					},
					{
						name:'江夏区',
						price:'12345.33',
						orderNum:'289'
					},
					{
						name:'江夏区',
						price:'12345.33',
						orderNum:'289'
					},
					{
						name:'江夏区',
						price:'12345.33',
						orderNum:'289'
					},
					{
						name:'江夏区',
						price:'12345.33',
						orderNum:'289'
					},
				]
			}
		},
		methods: {
			bindPickerChange: function(e) {
				let that = this;
				that.index = e.detail.value;
				that.theCity = that.citys[e.detail.value].name;
			},
			selectTab(index) {
				let that = this;
				if (index == 3 && that.tabCurrent == 3) {
					that.priceSort = that.priceSort == 0 ? 1 : 0
				} else {
					that.tabCurrent = index;
				}
			},
			openAreaList(){
				let that = this;
				that.openAreaSel=!that.openAreaSel;
			},
			selectArea(index){
				let that = this;
				that.selectedArea=that.areaList[index];
				that.selectedArea.index = index;
				that.openAreaList();
				uni.pageScrollTo({
					duration:0,
					scrollTop:0
				})
			}
			
		}
	}
</script>

<style>
	/* #ifndef H5 */
	.selectCityBox{
		padding: 0 30rpx;
		display: flex;
		align-items: center;
		position: fixed;
		width: 100%;
		height: 68rpx;
		top: 0;	
		background-color: #FFFFFF;
		z-index: 999;
		/* top:calc(44px + env(safe-area-inset-top)); */
	}
	/* #endif */
	/* #ifdef H5 */
	.selectCityBox{
		padding: 0 30rpx;
		display: flex;
		align-items: center;
		position: fixed;
		width: 100%;
		height: 68rpx;
		z-index: 999;
		background-color: #FFFFFF;
		top:calc(44px + env(safe-area-inset-top));
	}
	/* #endif */
	.selCityLabel{
		font-size: 26rpx;
		color: #555555;
	}
	.cityPicker {
		max-width: 250rpx;
	}

	.citySel .cityName {
		display: block;
		max-width: 150rpx;
		text-overflow: ellipsis;
		white-space: nowrap;
		overflow: hidden;
		font-size: 30rpx;
		color: #222222;
		margin-right: 5rpx;
	}
	.content{
		padding-top: 68rpx;
	}
	.areaSelBox{
		width: 690rpx;
		margin: 10rpx 30rpx;
		background: #FFFFFF;
		box-shadow: 0 5px 16px 0 rgba(0,0,0,0.08);
		border-radius: 5px;
		border-radius: 5px;
		overflow: hidden;
	}
	.selBoxHead{
		background-color: #444444;
		height: 76rpx;
		display: flex;
	}
	.selBoxHead .td{
		text-align: center;
		color: #ffffff;
		font-size: 26rpx;
		height: 100%;
		line-height: 76rpx;
	}
	.areaSelBox .td1{
		width: 180rpx;
		box-sizing: border-box;
		padding: 0 10rpx;
		 text-overflow: -o-ellipsis-lastline;
		  overflow: hidden;
		  text-overflow: ellipsis;
		  display: -webkit-box;
		  -webkit-line-clamp: 2;
		  line-clamp: 2;
		  -webkit-box-orient: vertical;
	}
	.areaSelBox .td2{
		width: 330rpx;
	}
	.areaSelBox .td3{
		flex: 1;
	}
	.selBoxList{
		background-color: #FFFFFF;
	}
	.selBoxList .tr{
		display: flex;
		height: 98rpx;
		border-bottom: 1rpx solid #eeeeee;
		align-items: center;
	}
	.selBoxList .tr.selectedItem{
		height: 108rpx;
	}
	.selBoxList .tr .td{
		font-size: 30rpx;
		color: #222222;
		text-align: center;
	}
	.selBoxList .tr.selectedItem .td{
		font-size: 36rpx;
		color: #000000;
	}
	.selectBtnBox{
		width: 100%;
		height: 75rpx;
		text-align: center;
		line-height: 75rpx;
		color: #CD282F;
		transition: all linear .1s; 
	}
	.selectBtnBox:active{
		background-color: #F7F7F7;
	}
	.selectBtnBox .loopIcon{
		display: inline-block;
		vertical-align: middle;
	}
	.selectBtnBox .btnLabel{
		margin-left: 10rpx;
		font-size: 26rpx;
		display: inline-block;
		vertical-align: middle;
	}
	.goodsBox{
		padding: 30rpx 30rpx 0 30rpx;
	}
	/* #ifndef H5 */
	.areaListBox{
		position: fixed;
		left: 0;
		top: 0;
		bottom: 0;
		right: 0;
		z-index: 998;
	}
	/* #endif */
	/* #ifdef H5 */
	.areaListBox{
		position: fixed;
		left: 0;
		top:calc(44px + env(safe-area-inset-top));
		bottom: 0;
		right: 0;
		z-index: 998;
	}
	/* #endif */
	.theOpenList{
		position: absolute;
		left: 0;
		top: 0;
		padding-top: 68rpx;
		margin: 0;
		width: 750rpx;
		border-radius: 0;
		max-height: 80vh;
		overflow-y: scroll;
		z-index: 998;
	}
	.theOpenList .selBoxHead{
		padding: 0 30rpx;
	}
	.theOpenList .tr{
		padding: 0 30rpx;
		transition: linear all .1s;
	}
	.theOpenList .tr:active{
		background-color: #F7F7F7;
	}
	.listShardow{
		position: absolute;
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;
		background-color: rgba(0,0,0,.7);
		z-index: 997;
	}
	.theOpenList .tr.selectedItem{
		height: 96rpx;
	}
</style>
