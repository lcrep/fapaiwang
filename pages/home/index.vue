<template>

	<view class="container">
		<view class="title-contents">
			<view class="top-view status"></view>
			<view class="_top titles">
				<view class="searchInputBox">
					<uni-icons color="#f44a33" class="searchIcon" size="18" type="search" />
					<input class="uni-input"  placeholder="搜索标的物名称" confirm-type="search" placeholder-style="font-size:26rpx;color:#B8B8B8;" v-model="searchVal" @confirm="search" />
				</view>
				<picker @change="bindPickerChange" :value="index" :range="citys" range-key="name">
					<view class="citySel"><text class="cityName">{{theCity}}</text><uni-icons type="arrowdown" size="20" /></view>
				</picker>
			</view>
		</view>
		<view class="content uni-padding-wrap uni-common-mt">
			<swiper class="swiper" circular indicator-dots="true" autoplay="true" indicator-color="rgba(255,255,255,0.80)"
			 indicator-active-color="rgba(205,40,47,0.80)">
				<swiper-item v-for="(item, index) in bannerList" :key="index" class="swiper-item">
					<image :src="item.url" class="bannerImg" mode="aspectFill" />
				</swiper-item>
			</swiper>
			<view class="gridBtns">
				<view class="gridItem" @click="gotoAreaHousing">
					<image class="gridImg" src="../../static/images/navBtn1.png"></image>
					<text class="gridText">区域选房</text>
				</view>
				<view class="gridItem" @click="gotoLeakHousing">
					<image class="gridImg" src="../../static/images/navBtn2.png"></image>
					<text class="gridText">捡漏必看</text>
				</view>
				<view class="gridItem">
					<image class="gridImg" src="../../static/images/navBtn3.png"></image>
					<text class="gridText">区域均价</text>
				</view>
			</view>
			<view class="goodsBox">
				<view class="boxHead">推荐房源</view>
				<view class="goodsList">
					<view class="goodsItem" @click="itemTap">
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
				</view>
			</view>
			<view class="goodsBox">
				<view class="boxHead">最新房源</view>
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
				</view>
			</view>
			<uni-load-more iconType="snow" :status="status" />
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				searchVal:"",
				tabCurrent: 0,
				priceSort: 0,
				theCity: '北京',
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
				index: 0,
				bannerList: [{
						colorClass: 'uni-bg-red',
						url: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg',
						content: '内容 A'
					},
					{
						colorClass: 'uni-bg-green',
						url: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/muwu.jpg',
						content: '内容 B'
					},
					{
						colorClass: 'uni-bg-blue',
						url: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/cbd.jpg',
						content: '内容 C'
					}
				],
				themeColor: '#007AFF',
				mode: '',
				deepLength: 1,
				pickerValueDefault: [0]
			}
		},
		created() {
			const that = this;
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
			itemTap() {
				uni.navigateTo({
					url: "goodsDetail"
				})
			},
			onReachBottom() {
				console.log("onReachBottom");
			},
			search(res) {
				let that = this;
				uni.navigateTo({
					url: './searchDetail?text=' + that.searchVal,
				})
				uni.hideKeyboard();
			},
			gotoAreaHousing(){
				uni.navigateTo({
					url: './areaHousing'
				})
			},
			gotoLeakHousing(){
				uni.navigateTo({
					url: './leakHousing'
				})
			}
			// login() {
			// 	const that = this;
			// 	this.$api.login({
			// 		mobile: "13871174385",
			// 		password: "123123"
			// 	}).then(res => {
			// 		uni.showToast({
			// 			title: res.data.msg,
			// 			icon: "success"
			// 		})
			// 	}).catch(error => {
			// 		uni.showToast({
			// 			title: res.data.msg,
			// 			icon: "none"
			// 		})
			// 	})
			// }
		}
	}
</script>

<style>
	

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

	.downIcon {
		font-family: uniicons;
		font-size: 20px;
		font-weight: normal;
		font-style: normal;
		width: 20px;
		color: #222222;
	}

	.swiper-box {
		height: 260rpx;
	}

	.swiper-item {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: column;
		justify-content: center;
		align-items: center;
		background-color: #999;
		color: #fff;
	}

	.bannerImg {
		width: 750rpx;
	}

	.gridBtns {
		height: 200rpx;
		margin-top: 10rpx;
	}

	.gridBtns .gridItem {
		width: 33.3%;
		float: left;
		height: 100%;
		text-align: center;
		transition: all linear 0.2s;
	}

	.gridItem:active {
		background: #f7f7f7;
	}

	.gridItem .gridImg {
		width: 88rpx;
		height: 88rpx;
		display: inline-block;
		margin-top: 32rpx;
	}

	.gridItem .gridText {
		display: block;
		font-size: 26rpx;
		color: #555555;
		margin-top: 12rpx;
	}

	.goodsBox {
		padding: 20rpx 30rpx;
	}

	.boxHead {
		font-size: 44rpx;
		color: #222222;
		line-height: 60rpx;
		padding-bottom: 20rpx;
	}
</style>
