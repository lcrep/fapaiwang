<template>
	<view>
		<view class="detailedList">
			<view class="detailedItem">
				<view class="recordPersonBox">
					<view class="recordPersonInfo">
						<image class="recordPersonPic" mode="aspectFill" src="../../../../static/images/defaultUserPic.png"></image>
						<view class="recordPersonInfoCont">
							<view class="recordPersonName">安吉Aj拉的客户</view>
							<view class="recordTime">
								2020-12-12 10:12
							</view>
						</view>
					</view>
				</view>
				<view class="detailsInfo">
					<view class="detailsCont">
						奖励钻值：200
					</view>
					<view class="detailsCont">
						奖励时间：2020年3月30日 20:03
					</view>
					<view class="detailsCont">
						操作人：张莉莉
					</view>
				</view>
			</view>
			<view class="detailedItem">
				<view class="recordPersonBox">
					<view class="recordPersonInfo">
						<image class="recordPersonPic" mode="aspectFill" src="../../../../static/images/defaultUserPic.png"></image>
						<view class="recordPersonInfoCont">
							<view class="recordPersonName">安吉Aj拉的客户</view>
							<view class="recordTime">
								2020-12-12 10:12
							</view>
						</view>
					</view>
				</view>
				<view class="detailsInfo">
					<view class="detailsCont">
						奖励钻值：200
					</view>
					<view class="detailsCont">
						奖励时间：2020年3月30日 20:03
					</view>
					<view class="detailsCont">
						操作人：张莉莉
					</view>
				</view>
			</view>
			<view class="detailedItem">
				<view class="recordPersonBox">
					<view class="recordPersonInfo">
						<image class="recordPersonPic" mode="aspectFill" src="../../../../static/images/defaultUserPic.png"></image>
						<view class="recordPersonInfoCont">
							<view class="recordPersonName">安吉Aj拉的客户</view>
							<view class="recordTime">
								2020-12-12 10:12
							</view>
						</view>
					</view>
				</view>
				<view class="detailsInfo">
					<view class="detailsCont">
						奖励钻值：200
					</view>
					<view class="detailsCont">
						奖励时间：2020年3月30日 20:03
					</view>
					<view class="detailsCont">
						操作人：张莉莉
					</view>
				</view>
			</view>
		</view>
		<uni-load-more iconType="snow" :status="listStatus" />
	</view>
</template>

<script>
	export default {
		data() {
			return {
				listStatus:"loading"
			}
		},
		methods: {
			
		}
	}
</script>

<style>
	.detailedItem{
		padding: 30rpx;
		background-color: #FFFFFF;
		margin-bottom: 20rpx;
	}
	page {
	background-color: #f7f7f7;
	}
	.detailsCont{
		font-size: 26rpx;
		color: #555555;
		line-height: 36rpx;
		margin-top: 20rpx;
	}
	.detailsInfo{
		padding: 20rpx 0;
	}
</style>
