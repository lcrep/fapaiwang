<template>
	<view class="container">
		<view class="headerBox">
			<swiper class="swiper" circular indicator-dots="true" indicator-color="rgba(255,255,255,0.80)"
			 indicator-active-color="rgba(205,40,47,0.80)">
				<swiper-item v-for="(item, index) in bannerList" :key="index" class="swiper-item">
					<view class="swiperBox">
						<image :src="item.url" class="bannerBg" mode="aspectFill"></image>
						<view class="shardowBox"></view>
						<image :src="item.url" class="bannerImg" mode="aspectFit" />
					</view>
				</swiper-item>
			</swiper>
			<view :class="{'goodsStatusBox':true,'statusFixed':scrollTop>scrollTag1}">
				<text class="statusLabel statusLabel1">即将开始</text>
				<text class="statusTime">3月29日 10点结束</text>
			</view>
			<view class="goodsStatusBox" v-if="scrollTop>scrollTag1"></view>
			<view class="goodsInfoBox">
				<view class="goodsTitle">一拍丨武汉市江夏区经济开发区江夏大道东创业农庄丰泽苑二期一拍丨武汉市江夏区经济开发区江夏大道东创业农庄丰泽苑二期A02-1206标题超2行显</view>
				<view class="goodsJoinNum">
					2人报名<text>/</text>35人围观
				</view>
				<view class="startingPrice">
					<text class="priceLabel">起拍价</text>
					<view class="priceCont">
						<text class="priceSymbol">￥</text>
						<text class="amount">30000000.33</text>
					</view>
				</view>
				<view class="assPrice">
					<text class="priceLabel">起拍价</text>
					<view class="priceCont">
						<text class="priceSymbol">￥</text>
						<text class="amount">30000000.33</text>
					</view>
				</view>
			</view>
		</view>
		<view :class="{'navs':true,'navsFixed':scrollTop>scrollTag2}">
			<view :class="{'navItem':true,'navActive':navCurrent==0}" @click="navTap(0)">
				详情
			</view>
			<view :class="{'navItem':true,'navActive':navCurrent==1}" @click="navTap(1)">
				出价记录（1）
			</view>
			<view :class="{'navItem':true,'navActive':navCurrent==2}" @click="navTap(2)">
				同区域成交
			</view>

		</view>
		<view class="navs" v-if="scrollTop>scrollTag2"></view>
		<view class="tabBox1">
			<view class="infoList">
				<view class="infoListItem">起拍价：￥3,209,399.22</view>
				<view class="infoListItem">加价幅度：￥20000</view>
				<view class="infoListItem">折扣率：8.9折</view>
				<view class="infoListItem">保证金：￥20930</view>
				<view class="infoListItem">房源类型：住宅</view>
			</view>
			<view class="descBox">
				<view class="descBoxHead">
					竞买须知
				</view>
				<view :class="{'descBoxCont':true,'descIsOpen':descIsOpen1}">
					<text>隔热服务服务费违法违规隔热服务服务费违法违规隔热服务服务费违法违规隔热服务服务费违法违规隔热服务服务费违法违规隔热服务服务费违法违规隔热服务服务费违法违规隔热服务服务费违法违规隔热服务服务费违法违规隔热服务服务费违法违规隔热服务服务费违法违规</text>
					<text>隔热服务服务费违法违规隔热服务服务费违法违规隔热服务服务费违法违规隔热服务服务费违法违规隔热服务服务费违法违规隔热服务服务费违法违规隔热服务服务费违法违规隔热服务服务费违法违规隔热服务服务费违法违规隔热服务服务费违法违规隔热服务服务费违法违规</text>
					<text>隔热服务服务费违法违规隔热服务服务费违法违规隔热服务服务费违法违规隔热服务服务费违法违规隔热服务服务费违法违规隔热服务服务费违法违规隔热服务服务费违法违规隔热服务服务费违法违规隔热服务服务费违法违规隔热服务服务费违法违规隔热服务服务费违法违规</text>
					<text>隔热服务服务费违法违规隔热服务服务费违法违规隔热服务服务费违法违规隔热服务服务费违法违规隔热服务服务费违法违规隔热服务服务费违法违规隔热服务服务费违法违规隔热服务服务费违法违规隔热服务服务费违法违规隔热服务服务费违法违规隔热服务服务费违法违规</text>
					<view class="descLookAll" @click="openDesc(1)" v-if="!descIsOpen1">
						<text class="descLookAllText">查看全部</text>
						<uni-icons class="arrowIcons" color="#b8b8b8" size="18" type="arrowdown" />
					</view>
					<view class="descLookAll" @click="openDesc(1)" v-else>
						<text class="descLookAllText">收起</text>
						<uni-icons class="arrowIcons" color="#b8b8b8" size="18" type="arrowup" />
					</view>
				</view>
			</view>
			<view class="descBox">
				<view class="descBoxHead">
					竞买公告
				</view>
				<view :class="{'descBoxCont':true,'descIsOpen':descIsOpen2}">
					<text>隔热服务服务费违法违规隔热服务服务费违法违规隔热服务服务费违法违规隔热服务服务费违法违规隔热服务服务费违法违规隔热服务服务费违法违规隔热服务服务费违法违规隔热服务服务费违法违规隔热服务服务费违法违规隔热服务服务费违法违规隔热服务服务费违法违规</text>
					<text>隔热服务服务费违法违规隔热服务服务费违法违规隔热服务服务费违法违规隔热服务服务费违法违规隔热服务服务费违法违规隔热服务服务费违法违规隔热服务服务费违法违规隔热服务服务费违法违规隔热服务服务费违法违规隔热服务服务费违法违规隔热服务服务费违法违规</text>
					<text>隔热服务服务费违法违规隔热服务服务费违法违规隔热服务服务费违法违规隔热服务服务费违法违规隔热服务服务费违法违规隔热服务服务费违法违规隔热服务服务费违法违规隔热服务服务费违法违规隔热服务服务费违法违规隔热服务服务费违法违规隔热服务服务费违法违规</text>
					<text>隔热服务服务费违法违规隔热服务服务费违法违规隔热服务服务费违法违规隔热服务服务费违法违规隔热服务服务费违法违规隔热服务服务费违法违规隔热服务服务费违法违规隔热服务服务费违法违规隔热服务服务费违法违规隔热服务服务费违法违规隔热服务服务费违法违规</text>
					<view class="descLookAll" @click="openDesc(2)" v-if="!descIsOpen2">
						<text class="descLookAllText">查看全部</text>
						<uni-icons class="arrowIcons" color="#b8b8b8" size="18" type="arrowdown" />
					</view>
					<view class="descLookAll" @click="openDesc(2)" v-else>
						<text class="descLookAllText">收起</text>
						<uni-icons class="arrowIcons" color="#b8b8b8" size="18" type="arrowup" />
					</view>
				</view>
			</view>
		</view>
		<view class="tabBox2">
			<view class="tabBoxHead">
				出价记录（0）
			</view>
			<view :class="{'priceTable':true,'descIsOpen':offerIsOpen}">
				<view class="tableHead">
					<view class="td td1">状态</view>
					<view class="td td2">竞买号</view>
					<view class="td td3">价格</view>
					<view class="td td4">同区域成交</view>
				</view>
				<view class="tableCont">
					<view class="tr">
						<view class="td td1">
							<view class="offerStatus isFirst">
								领先
							</view>
						</view>
						<view class="td td2">
							1214314313
						</view>
						<view class="td td3">
							￥343223424.32
						</view>
						<view class="td td4">
							09:30:12 2020.03.05
						</view>
					</view>
					<view class="tr">
						<view class="td td1">
							<view class="offerStatus">
								出局
							</view>
						</view>
						<view class="td td2">
							1214314313
						</view>
						<view class="td td3">
							￥343223424.32
						</view>
						<view class="td td4">
							09:30:12 2020.03.05
						</view>
					</view>
					<view class="tr">
						<view class="td td1">
							<view class="offerStatus">
								出局
							</view>
						</view>
						<view class="td td2">
							1214314313
						</view>
						<view class="td td3">
							￥343223424.32
						</view>
						<view class="td td4">
							09:30:12 2020.03.05
						</view>
					</view>
					<view class="tr">
						<view class="td td1">
							<view class="offerStatus">
								出局
							</view>
						</view>
						<view class="td td2">
							1214314313
						</view>
						<view class="td td3">
							￥343223424.32
						</view>
						<view class="td td4">
							09:30:12 2020.03.05
						</view>
					</view>
					<view class="tr">
						<view class="td td1">
							<view class="offerStatus">
								出局
							</view>
						</view>
						<view class="td td2">
							1214314313
						</view>
						<view class="td td3">
							￥343223424.32
						</view>
						<view class="td td4">
							09:30:12 2020.03.05
						</view>
					</view>
					<view class="tr">
						<view class="td td1">
							<view class="offerStatus">
								出局
							</view>
						</view>
						<view class="td td2">
							1214314313
						</view>
						<view class="td td3">
							￥343223424.32
						</view>
						<view class="td td4">
							09:30:12 2020.03.05
						</view>
					</view>
					<view class="tr">
						<view class="td td1">
							<view class="offerStatus">
								出局
							</view>
						</view>
						<view class="td td2">
							1214314313
						</view>
						<view class="td td3">
							￥343223424.32
						</view>
						<view class="td td4">
							09:30:12 2020.03.05
						</view>
					</view>
				</view>
				<view class="descLookAll" @click="openOffers" v-if="!offerIsOpen">
					<text class="descLookAllText">查看全部</text>
					<uni-icons class="arrowIcons" color="#b8b8b8" size="18" type="arrowdown" />
				</view>
				<view class="descLookAll" @click="openOffers" v-else>
					<text class="descLookAllText">收起</text>
					<uni-icons class="arrowIcons" color="#b8b8b8" size="18" type="arrowup" />
				</view>
			</view>
		</view>
		<view class="tabBox3">
			<view class="tabBoxHead">
				同区域历史成交
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
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				descIsOpen1: false,
				descIsOpen2: false,
				descIsOpen3: false,
				descIsOpen4: false,
				offerIsOpen: false,
				scrollTop: 0,
				goodsStatusBoxHeight: 0,
				scrollTag1: 0,
				scrollTag2: 0,
				scrollTag3: 0,
				scrollTag4: 0,
				navCurrent: 0,
				bannerList: [{
						colorClass: 'uni-bg-red',
						url: 'https://artapp-dev-bucket.oss-cn-beijing.aliyuncs.com/studio_activity/23ef419c-2226-4a61-97c4-f24b22d754f8.jpg',
						content: '内容 A'
					},
					{
						colorClass: 'uni-bg-green',
						url: 'https://artapp-dev-bucket.oss-cn-beijing.aliyuncs.com/studio_contest/32cbe106-7f4c-4ef9-8908-f459a6bd7b02.jpg',
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
		methods: {
			onPageScroll(e) {
				let that = this;
				that.scrollTop = e.scrollTop;
				if (e.scrollTop <= that.scrollTag3) {
					that.navCurrent = 0;
				} else if (e.scrollTop > that.scrollTag3 && e.scrollTop <= that.scrollTag4 && that.scrollTag3 != 0) {
					that.navCurrent = 1;
				} else if (e.scrollTop > that.scrollTag4 && that.scrollTag4 != 0) {
					that.navCurrent = 2;
				}
			},
			openDesc: function(index) {
				let that = this;
				if (index == 1) {
					that.descIsOpen1 = !that.descIsOpen1;
				} else if (index == 2) {
					that.descIsOpen2 = !that.descIsOpen2;
				} else if (index == 3) {
					that.descIsOpen3 = !that.descIsOpen3;
				} else if (index == 4) {
					that.descIsOpen4 = !that.descIsOpen4;
				}
				setTimeout(() => {
					that.getBoxheight(`.tabBox1`, (rects) => {
						that.scrollTag3 = rects[0].height + that.scrollTag2;
					});
					that.getBoxheight(`.tabBox2`, (rects) => {
						that.scrollTag4 = rects[0].height + that.scrollTag3;
					});
				}, 500)
			},
			navTap:function(index){
				let that = this;
				let scrollTo=0;
				if(index==0){
					scrollTo=that.scrollTag2;
				}
				else if(index==1){
					scrollTo=that.scrollTag3+10;
				}
				else if(index==2){
					scrollTo=that.scrollTag4+10;
				}
				uni.pageScrollTo({
					duration:600,
					scrollTop:scrollTo
				})
			},
			openOffers: function(e) {
				let that = this;
				that.offerIsOpen = !that.offerIsOpen;
				setTimeout(() => {
					that.getBoxheight(`.tabBox2`, (rects) => {
						that.scrollTag4 = rects[0].height + that.scrollTag3;
					});
				}, 500)
			},
			getBoxheight: function(className, callback) {
				var that = this;
				uni.createSelectorQuery().selectAll(className).boundingClientRect(callback).exec()
			}
		},
		mounted() {
			let that = this;
			that.getBoxheight(`.goodsStatusBox`, (rects) => {
				that.goodsStatusBoxHeight = rects[0].height;
			});
			that.getBoxheight(`.swiper`, (rects) => {
				that.scrollTag1 = rects[0].height;
			});
			that.getBoxheight(`.headerBox`, (rects) => {
				that.scrollTag2 = rects[0].height - that.goodsStatusBoxHeight;
			});
			that.getBoxheight(`.tabBox1`, (rects) => {
				that.scrollTag3 = rects[0].height + that.scrollTag2;
			});
			that.getBoxheight(`.tabBox2`, (rects) => {
				that.scrollTag4 = rects[0].height + that.scrollTag3;

			});

		}
	}
</script>

<style>
	.swiper {
		height: 558rpx;
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

	.swiperBox {
		width: 100%;
		height: 100%;
		position: relative;
		overflow: hidden;
	}

	.swiperBox .bannerBg {
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		transform: scale(1.3);
		filter: blur(10px);
		-webkit-filter: blur(10px);
		overflow: hidden;
	}

	.swiperBox .shardowBox {
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, .4);
		z-index: 1;
	}

	.swiperBox .bannerImg {
		position: absolute;
		width: inherit;
		height: inherit;
		z-index: 2;
	}

	.goodsStatusBox {
		width: 100%;
		height: 68rpx;
		display: flex;
		line-height: 68rpx;
		background-color: #DDDDDD;
	}

	.statusLabel {
		display: block;
		width: 208rpx;
		font-size: 30rpx;
		text-align: center;
		color: #ffffff;
	}

	.statusLabel1 {
		background: #00BBC3;
	}

	.statusLabel2 {
		background: #CD282F;
	}

	.statusLabel3 {
		background: #999999;
	}

	.statusTime {
		flex: 1;
		padding-left: 30rpx;
		color: #222222;
		font-size: 28rpx;
		background: #DDDDDD;
	}

	.goodsInfoBox {
		padding: 20rpx 30rpx 30rpx 30rpx;
	}

	.goodsList {
		padding: 30rpx 30rpx 0 30rpx;
	}

	.goodsTitle {
		font-size: 34rpx;
		color: #222222;
		line-height: 48rpx;
		text-overflow: -o-ellipsis-lastline;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		line-clamp: 2;
		-webkit-box-orient: vertical;
	}

	.goodsJoinNum {
		font-size: 26rpx;
		color: #555555;
		line-height: 36rpx;
		margin-top: 10rpx;
	}

	.goodsJoinNum .backslash {
		color: #B8B8B8;
		padding: 0 10rpx;
	}

	.startingPrice {
		margin-top: 20rpx;
		display: flex;
		align-items: flex-end;
	}

	.assPrice {
		display: flex;
		align-items: flex-end;
		margin-top: 10rpx;
	}

	.priceLabel {
		display: block;
		width: 100rpx;
		font-size: 26rpx;
		color: #B8B8B8;
	}

	.priceCont {
		flex: 1;
	}

	.startingPrice .priceLabel {
		font-size: 28rpx;
		line-height: 50rpx;
	}

	.startingPrice .amount {
		font-size: 48rpx;
	}

	.startingPrice .priceCont {
		color: #00BBC3;
	}

	.assPrice .priceCont {
		color: #222222;
		font-size: 28rpx;
	}

	.navs {
		height: 90rpx;
		width: 100%;
		box-shadow: 0 9rpx 25rpx 0 #E5E5E5;
		background-color: #fff;
	}

	.navsFixed {
		position: fixed;
		left: 0;
		top: 68rpx;
		z-index: 999;
	}

	.navItem {
		width: 33.3%;
		height: 90rpx;
		position: relative;
		text-align: center;
		line-height: 90rpx;
		color: #555555;
		font-size: 28rpx;
		float: left;
	}

	.navItem.navActive {
		color: #CD282F;
	}

	.navItem.navActive::after {
		content: "";
		position: absolute;
		display: block;
		width: 52rpx;
		height: 6rpx;
		background: #CD282F;
		border-radius: 2rpx;
		left: 50%;
		bottom: 0;
		transform: translateX(-50%);
	}

	.infoList {
		padding: 30rpx;
		overflow: hidden;
	}

	.infoListItem {
		width: 50%;
		box-sizing: border-box;
		padding-right: 20rpx;
		font-size: 24rpx;
		color: #222222;
		line-height: 50rpx;
		float: left;
	}

	.descBox {
		border-top: 1rpx solid #eaeaea;
		padding: 30rpx;
	}

	.descBoxHead {
		font-size: 28rpx;
		color: #CD282F;
	}

	.descBoxCont {
		height: 480rpx;
		overflow: hidden;
		position: relative;
		padding-bottom: 70rpx;
		margin-top: 20rpx;
	}

	.descIsOpen {
		height: auto !important;
		max-height: inherit !important;
	}

	.descLookAll {
		position: absolute;
		left: 0;
		bottom: 0;
		width: 100%;
		height: 120rpx;
		padding-top: 60rpx;
		box-sizing: border-box;
		color: #B8B8B8;
		font-size: 24rpx;
		line-height: 54rpx;
		text-align: center;
		background: linear-gradient(to bottom, rgba(255, 255, 255, .3), rgba(255, 255, 255, 1), rgba(255, 255, 255, 1));
	}

	.descIsOpen .descLookAll {
		height: 70rpx;
		background: #ffffff;
		padding-top: 10rpx;
	}

	.descLookAll .descLookAllText {
		display: inline-block;
		vertical-align: middle;
		padding: 0 5rpx;
	}

	.descLookAll .arrowIcons {
		display: inline-block;
		vertical-align: middle;
	}

	.tabBox2,
	.tabBox3 {
		border-top: 20rpx solid #F7F7F7;
		padding: 30rpx 0;
	}

	.tabBoxHead {
		color: #555555;
		font-size: 28rpx;
		line-height: 35rpx;
		padding-left: 30rpx;
	}

	.priceTable {
		position: relative;
		margin-top: 20rpx;
		padding-bottom: 70rpx;
		max-height: 280rpx;
		overflow: hidden;
	}

	.tableHead {
		height: 70rpx;
		line-height: 70rpx;
		border-bottom: 1rpx solid #DDDDDD;
	}

	.tableHead .td {
		font-size: 24rpx;
		color: #888888;
		float: left;
		text-align: center;
	}

	.td1 {
		width: 130rpx;
	}

	.td2 {
		width: 140rpx;
	}

	.td3 {
		width: 190rpx;
	}

	.td4 {
		width: 290rpx;
	}

	.tableCont .td {
		color: #222222;
		float: left;
		font-size: 24rpx;
		text-align: center;
		line-height: 40rpx;
	}

	.tableCont {
		padding-top: 20rpx;
	}

	.tableCont .tr {
		padding: 16rpx 0;
		height: 40rpx;
	}

	.offerStatus {
		width: 92rpx;
		height: 40rpx;
		line-height: 40rpx;
		text-align: center;
		color: #FFFFFF;
		background: #DDDDDD;
		border-radius: 8rpx;
		font-size: 24rpx;
		margin: 0 auto;
	}

	.isFirst {
		background: #CD282F;
	}

	.statusFixed {
		position: fixed;
		top: 0;
		left: 0;
		z-index: 999;
	}
</style>
