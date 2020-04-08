<template>
	<view>
		<view class="tags">
			<view v-for="(item,index) in tags" :key="index" :class="{'tagItem':true,'active':tagIndex==index}" @click="tagSel(index)">{{item.name}}</view>
		</view>
		<view class="goodsList">
			<view class="goodsItem">
				<view class="goodsPic">
					<text class="goodsTag">一拍</text>
					<image class="goodsImage" src="https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg" mode="aspectFill"></image>
					<view class="recordStatus">
						咨询
					</view>
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
					<view class="recordStatus">尽职调查</view>
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
		<uni-load-more iconType="snow" :status="status" />
	</view>
</template>

<script>
	export default {
		data() {
			return {
				tagIndex:0,
				status: 'loading',
				tags: [{
					name: "全部"
				}, {
					name: "咨询"
				}, {
					name: "签约"
				}, {
					name: "尽职调查"
				}, {
					name: "贷款"
				}, {
					name: "参拍中"
				}, {
					name: "办理过户"
				}, {
					name: "腾退"
				}, {
					name: "交房"
				}, ]
			}
		},
		methods: {
			tagSel(index){
				const that = this;
				that.tagIndex=index;
			}
		}
	}
</script>

<style>
	.tags{
		padding: 10rpx 0 10rpx 30rpx;
		overflow: hidden;
	}
	.tags .tagItem{
		float: left;
		line-height: 52rpx;
		border: 1rpx solid #DDDDDD;
		color: #B8B8B8;
		font-size: 24rpx;
		padding: 0 18rpx;
		margin-right: 20rpx;
		margin-bottom: 20rpx;
	}
	.tags .tagItem.active{
		color: #CD282F;
		border: 1rpx solid #CD282F;
	}
	.goodsList{
		padding: 30rpx;
	}
	.recordStatus{
		position: absolute;
		width: 120rpx;
		height: 120rpx;
		border-radius: 100%;
		left: 50%;
		top: 50%;
		transform: translateX(-50%) translateY(-50%);
		box-sizing: border-box;
		padding: 0 20rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		color: #FFFFFF;
		font-size: 32rpx;
		text-align: center;
		overflow: hidden;
		background-color: rgba(0,0,0,.35);
	}
</style>
