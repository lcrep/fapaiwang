<template>

	<view class="container">
		<view class="title-contents">
			<view class="top-view status"></view>
			<view class="_top titles">
				<uni-icons color="#555555" class="backIocn" size="22" type="arrowleft" @click="back" />
				<view class="searchInputBox">
					<uni-icons color="#f44a33" class="searchIcon" size="18" type="search" />
					<input class="uni-input" placeholder="搜索标的物名称" confirm-type="search" placeholder-style="font-size:26rpx;color:#B8B8B8;" v-model="searchVal"
					 @confirm="search" />
				</view>
				<picker @change="bindPickerChange" :value="index" :range="citys" range-key="name">
					<view class="citySel"><text class="cityName">{{theCity}}</text><uni-icons  type="arrowdown" size="20" /></view>
				</picker>
			</view>
		</view>
		<view class="content uni-padding-wrap uni-common-mt">
			<view class="listTabs">
				<view :class="{'tabItem':true,'tabActive':tabCurrent==0}" @click="selectTab(0)"><text>最新发布</text></view>
				<view :class="{'tabItem':true,'tabActive':tabCurrent==1}" @click="selectTab(1)"><text>距离最近</text></view>
				<view :class="{'tabItem':true,'tabActive':tabCurrent==2}" @click="selectTab(2)"><text>收藏更多</text></view>
				<view :class="{'tabItem':true,'tabActive':tabCurrent==3}" @click="selectTab(3)"><text>价格</text><text :class="{'sortIcon':true,'sortIconUp':priceSort==1}"></text></view>
			</view>
			<view class="goodsBox">

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
	</view>
</template>

<script>
	export default {
		data() {
			return {
				searchVal: "",
				theCity: '北京',
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
				current: 0,
				tabCurrent: 0,
				priceSort: 0,
				status: 'loading',
				dotsStyles: {
					backgroundColor: 'rgba(255,255,255,0.80)',
					border: 'none',
					color: '#fff',
					selectedBackgroundColor: 'rgba(205,40,47,0.80)',
					selectedBorder: 'none'
				},
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
				]
			}
		},
		onLoad(options) {
			let that = this;
			that.searchVal = options.text
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
			swiperChange(e) {
				this.current = e.detail.current
			},
			selectTab(index) {
				let that = this;
				if (index == 3 && that.tabCurrent == 3) {
					that.priceSort = that.priceSort == 0 ? 1 : 0
				} else {
					that.tabCurrent = index;
				}
			},
			onReachBottom() {
				console.log("onReachBottom");

				this.loadMoreText = "没有更多数据了!"

				this.showLoadMore = true;
				setTimeout(() => {
					// this.setListData();
				}, 300);
			},
			back() {
				uni.navigateBack({
					delta: 1
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
	.backIocn {
		line-height: 68rpx;
	}

	.goodsBox {
		padding: 0 30rpx;
	}

	.boxHead {
		font-size: 44rpx;
		color: #222222;
		line-height: 60rpx;
		padding-bottom: 20rpx;
	}

	.listTabs {
		padding: 10rpx 30rpx 30rpx 30rpx;
	}
</style>
