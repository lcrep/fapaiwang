<template>
	<view>
		<view class="selectCityBox">
			<text class="selCityLabel">当前城市：</text>
			<picker @change="bindPickerChange" :value="index" :range="citys" range-key="name" class="cityPicker">
				<view class="citySel"><text class="cityName">{{theCity}}</text><uni-icons type="arrowdown" size="20" /></view>
			</picker>
		</view>
		<view class="content">
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
				index:0,
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
			}
		},
		methods: {
			bindPickerChange: function(e) {
				let that = this;
				that.index = e.detail.value;
				that.theCity = that.citys[e.detail.value].name;
			},
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
	.goodsBox{
		padding: 30rpx 30rpx 0 30rpx;
	}
	
</style>
