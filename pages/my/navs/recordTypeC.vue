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
				pageSize: 10,
				loadStatus: 'more',
				flowStatus:'',
				pageNum: 1,
				total: "",
				list:[],
				tags: [{
					name: "全部",
					flowStatus:""
				}, {
					name: "咨询",
					flowStatus:10
				}, {
					name: "签约",
					flowStatus:20
				}, {
					name: "尽职调查",
					flowStatus:30
				}, {
					name: "贷款",
					flowStatus:40
				}, {
					name: "参拍中",
					flowStatus:50
				}, {
					name: "办理过户",
					flowStatus:60
				}, {
					name: "腾退",
					flowStatus:70
				}, {
					name: "交房",
					flowStatus:80
				}, ]
			}
		},
		onLoad() {
			this.getList(1);
		},
		onReachBottom() {
			const that = this;
			console.log("onReachBottom");
			if (that.loadStatus == "noMore") {
				return;
			} else if (that.pageNum != 1) {
				that.getList(that.pageNum);
			}
		},
		methods: {
			getList(startPage) {
				const that = this;
				let param = {
					flowStatus: that.flowStatus,
					startPage: startPage,
					pageSize: that.pageSize
				}
				that.loadStatus = "loading";
				that.$api.housevisitList(param).then(res => {
					if (res.success) {
						let result = res.datas.rows;
						for(var i in result){
							result[i].headImgUrl = result[i].headImgUrl?result[i].headImgUrl:'../../../static/images/defaultUserPic.png';
							var flowStatusText;
							if(result[i].flowStatus==10){
								flowStatusText="咨询";
							}
							else if(result[i].flowStatus==20){
								flowStatusText="签约";
							}
							else if(result[i].flowStatus==30){
								flowStatusText="尽职调查";
							}
							else if(result[i].flowStatus==40){
								flowStatusText="贷款";
							}
							else if(result[i].flowStatus==50){
								flowStatusText="拍卖中";
							}
							else if(result[i].flowStatus==60){
								flowStatusText="办理过户";
							}
							else if(result[i].flowStatus==70){
								flowStatusText="腾退";
							}
							else if(result[i].flowStatus==80){
								flowStatusText="交房";
							}
							result[i].flowStatusText = flowStatusText;
							that.list.push(result[i]);
						}
						let total = res.datas.total;
						that.total = total;
			
						let totalPageNum = Math.ceil(total / that.pageSize);
						if (parseInt(totalPageNum) > parseInt(that.pageNum)) {
							that.pageNum++;
							that.loadStatus = "more";
						} else {
							that.loadStatus = "noMore";
						}
			
					} else {
						uni.showToast({
							title: res.message,
							icon: "none"
						})
					}
				})
			},
			clearList() {
				const that = this;
				that.pageNum = 1;
				that.total = "";
				that.list = [];
			},
			gotoProcess(id){
				const that =this;
				that.$Router.push({
					path:"/pages/my/manageNavs/process/index",
					query:{
						id:id
					}
				})
			},
			tagSel(index,flowStatus){
				const that = this;
				that.tagIndex=index;
				that.flowStatus=flowStatus;
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
