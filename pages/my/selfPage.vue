<template>
	<view>
		<view class="userBox">
			<image src="../../static/images/logo.png" mode="aspectFill" class="blurBg"></image>
			<view class="userBoxShadow"></view>
			<view class="userInfoBox">
				<image class="userPhoto" src="../../static/images/defaultUserPic.png"></image>
				<view class="userName nowrap">
					{{userInfo.mobile}}
				</view>
				<view class="userInfoBtn">
					<text class="editIcon"></text>编辑资料
				</view>
			</view>
		</view>
		<view :class="{'navBox':true,'navFix':scrollTop>scrolltag}">
			<view :class="{'navItem':true,'active':current==0}" @click="changeNav(0)">收藏（20）</view>
			<view :class="{'navItem':true,'active':current==1}" @click="changeNav(1)">最近浏览（10）</view>
		</view>
		<view class="navBox" v-if="scrollTop>scrolltag">
			
		</view>
		<swiper class="swiper" :current="current" :style="'height:'+swiperHeight+'px'" @change='swiperChange'>
			<swiper-item class="swiper-item">
				<view class="itemList itemList1">
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
							<image class="goodsImage" src="https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg" mode="aspectFill"></image>
						</view>
						<view class="goodsInfo">
							<view class="goodsName">武汉市江夏区经济开发区江夏大道东创业农庄丰分分为</view>
							<view class="goodsAddress nowrap">1次出价/江夏区经济开发区某某街道</view>
							<view class="goodsPrice"><text class="priceLabel">当前价</text><text class="priceNum">333.22万</text><text class="discount">8.7折</text></view>
							<view class="goodsStatus"><text class="statusName">拍卖中</text><text class="goodsTime">剩余15天20小时30分钟</text></view>
						</view>
					</view>
				</view>
			</swiper-item>
			<swiper-item class="swiper-item">
				<view class="itemList itemList2">
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
							<image class="goodsImage" src="https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg" mode="aspectFill"></image>
						</view>
						<view class="goodsInfo">
							<view class="goodsName">武汉市江夏区经济开发区江夏大道东创业农庄丰分分为</view>
							<view class="goodsAddress nowrap">1次出价/江夏区经济开发区某某街道</view>
							<view class="goodsPrice"><text class="priceLabel">当前价</text><text class="priceNum">333.22万</text><text class="discount">8.7折</text></view>
							<view class="goodsStatus"><text class="statusName">拍卖中</text><text class="goodsTime">剩余15天20小时30分钟</text></view>
						</view>
					</view>
					
				</view>
			</swiper-item>
		</swiper>
	</view>
	</view>
</template>

<script>
	import {
		mapState,
		mapMutations
	} from 'vuex';
	export default {
		computed: mapState(['hasLogin', 'userInfo']),
		data() {
			return {
				current: 0,
				swiperHeight: 0,
				scrollTop: 0,
				scrolltag: 0,
				list1Height: 0,
				list2Height: 0,
			}
		},
		mounted() {
			const that = this;
			that.$utils.getBoxheight(`.itemList1`, (rects) => {
				that.list1Height = rects[0].height;
				that.swiperHeight = rects[0].height;
			});
			that.$utils.getBoxheight(`.itemList2`, (rects) => {
				that.list2Height = rects[0].height;
			});
			that.$utils.getBoxheight(`.userBox`, (rects) => {
				that.scrolltag = rects[0].height-20;
			});
		},
		methods: {
			onPageScroll(e) {
				const that = this;
				that.scrollTop = e.scrollTop;
			},
			changeNav(current) {
				const that = this;
				that.current = current;
			},
			swiperChange(e) {
				const that = this;
				that.current = e.detail.current;
				if (e.detail.current == 0) {
					that.swiperHeight = that.list1Height;
				} else {
					that.swiperHeight = that.list2Height;
				}
			}
		},

	}
</script>

<style>
	.userBox {
		width: 100%;
		height: 420rpx;
		background: url(../../static/images/userTopBg.png) no-repeat center;
		background-size: cover;
		position: relative;
		overflow: hidden;
	}

	.blurBg {
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		transform: scale(1.2);
		filter: blur(10px);
		-webkit-filter: blur(10px);
		z-index: 2;
		overflow: hidden;
	}

	.userBoxShadow {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, .4);
		z-index: 3;
	}

	.userInfoBox {
		position: absolute;
		width: 100%;
		top: 70rpx;
		left: 0;
		display: flex;
		z-index: 4;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.userPhoto {
		width: 138rpx;
		height: 138rpx;
		border: 1rpx solid #FFFFFF;
		border-radius: 70rpx;
	}

	.userName {
		max-width: 375rpx;
		color: #FFFFFF;
		font-size: 30rpx;
		margin-top: 20rpx;
	}

	.navBox {
		padding-top: 30rpx;
		background: #FFFFFF;
		border-top-right-radius: 30rpx;
		border-top-left-radius: 30rpx;
		margin-top: -20px;
		z-index: 5;
		position: relative;
		width: 100%;
		box-sizing: border-box;
		height: 90rpx;
	}

	.navItem {
		float: left;
		width: 50%;
		height: 60rpx;
		text-align: center;
		position: relative;
		line-height: 40rpx;
		color: #555555;
		font-size: 28rpx;
	}

	.navItem.active {
		color: #CD282F;
	}

	.navItem.active::after {
		content: "";
		position: absolute;
		width: 52rpx;
		height: 6rpx;
		background-color: #CD282F;
		left: 50%;
		transform: translateX(-50%);
		bottom: 0;
	}

	.swiper {
		min-height: 500px;
		margin-top: 30rpx;
	}

	.itemList {
		padding: 20rpx 30rpx;
	}
	.navFix{
		position: fixed;
		top:0;
		left: 0;
		border-radius: 0;
		z-index: 99;
		margin-top: 0;
	}
	/* #ifdef H5 */
	.navFix{
		top:calc(44px + env(safe-area-inset-top)) !important;
	}
	/* #endif */
	
	.userInfoBtn {
		width: 188rpx;
		height: 52rpx;
		border-radius: 26rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		color: #FFFFFF;
		font-size: 24rpx;
		background-color: rgba(205,40,47,.5);
		margin-top: 20rpx;
	}
	
	.userInfoBtn.noLogin {
		background-color: #CD282F;
	}
	.editIcon{
		display: block;
		width: 44rpx;
		height: 44rpx;
		background: url(../../static/images/editUser.png) no-repeat;
		background-size: cover;
		margin-right: 1rpx;
		margin-top: 2rpx;
	}
</style>
