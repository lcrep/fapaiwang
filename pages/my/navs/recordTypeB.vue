<template>
	<view>
		<view class="tags">
			<view v-for="(item,index) in tags" :key="index" :class="{'tagItem':true,'active':tagIndex==index}" @click="tagSel(index)">{{item.name}}</view>
		</view>
		<view class="recordList">
			<view class="recordItem">
				<view class="recordPersonBox">
					<view class="recordPersonInfo">
						<image class="recordPersonPic" mode="aspectFill" src="../../../static/images/defaultUserPic.png"></image>
						<view class="recordPersonInfoCont">
							<view class="recordPersonName">安吉Aj拉的客户</view>
							<view class="recordTime">
								2020-12-12 10:12
							</view>
						</view>
					</view>
					<view class="nowStatus">当前进展</view>
				</view>
				<view class="recordInfoBox">
					<view class="recordInfoItem">
						客户名称：姓名描述  13735223455
					</view>
					<view class="recordInfoItem">
						意向房源：武汉市江夏区经济开发区江夏大道东创业农庄丰江夏大道东创业农庄丰江夏江夏大道东创业农超武汉市江夏区经济开发区江夏大道东创业农庄丰江夏大道东创业农庄丰江夏江夏大道东创业农超2行显示…
					</view>
					<view class="recordInfoItem">
						业务员：姓名描述
					</view>
					<view class="recordInfoItem">
						交易状态:  签约
					</view>
				</view>
				<view class="recordLookAll" >
					<text class="lookAllText">查看全文</text>
					<uni-icons class="arrowIcons" color="#b8b8b8" size="18" type="arrowright" />
				</view>
			</view>
			<view class="recordItem">
				<view class="recordPersonBox">
					<view class="recordPersonInfo">
						<image class="recordPersonPic" mode="aspectFill" src="../../../static/images/defaultUserPic.png"></image>
						<view class="recordPersonInfoCont">
							<view class="recordPersonName">安吉Aj拉的客户</view>
							<view class="recordTime">
								2020-12-12 10:12
							</view>
						</view>
					</view>
					<view class="nowStatus">当前进展</view>
				</view>
				<view class="recordInfoBox">
					<view class="recordInfoItem">
						客户名称：姓名描述  13735223455
					</view>
					<view class="recordInfoItem">
						意向房源：武汉市江夏区经济开发区江夏大道东创业农庄丰江夏大道东创业农庄丰江夏江夏大道东创业农超武汉市江夏区经济开发区江夏大道东创业农庄丰江夏大道东创业农庄丰江夏江夏大道东创业农超2行显示…
					</view>
					<view class="recordInfoItem">
						业务员：姓名描述
					</view>
					<view class="recordInfoItem">
						交易状态:  签约
					</view>
				</view>
				<view class="recordLookAll" >
					<text class="lookAllText">查看全文</text>
					<uni-icons class="arrowIcons" color="#b8b8b8" size="18" type="arrowright" />
				</view>
			</view>
			<view class="recordItem">
				<view class="recordPersonBox">
					<view class="recordPersonInfo">
						<image class="recordPersonPic" mode="aspectFill" src="../../../static/images/defaultUserPic.png"></image>
						<view class="recordPersonInfoCont">
							<view class="recordPersonName">安吉Aj拉的客户</view>
							<view class="recordTime">
								2020-12-12 10:12
							</view>
						</view>
					</view>
					<view class="nowStatus">当前进展</view>
				</view>
				<view class="recordInfoBox">
					<view class="recordInfoItem">
						客户名称：姓名描述  13735223455
					</view>
					<view class="recordInfoItem">
						意向房源：武汉市江夏区经济开发区江夏大道东创业农庄丰江夏大道东创业农庄丰江夏江夏大道东创业农超武汉市江夏区经济开发区江夏大道东创业农庄丰江夏大道东创业农庄丰江夏江夏大道东创业农超2行显示…
					</view>
					<view class="recordInfoItem">
						业务员：姓名描述
					</view>
					<view class="recordInfoItem">
						交易状态:  武汉市江夏区经济开发区江夏大道东创业农庄丰江夏大道东创业农庄丰江夏江夏大道东创业农超武汉市江夏区经济开发区江夏大道东创业农庄丰江夏大道东创业农庄丰江夏江夏大道东创业农超
					</view>
				</view>
				<view class="recordLookAll" >
					<text class="lookAllText">查看全文</text>
					<uni-icons class="arrowIcons" color="#b8b8b8" size="18" type="arrowright" />
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
	.recordList{
		border-top: 20rpx solid #F7F7F7;
	}
</style>
