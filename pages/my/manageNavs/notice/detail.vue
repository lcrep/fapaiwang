<template>
	<view>
		<view class="recordDetailPage">
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
				<view class="czBtns">
					<image src="../../../../static/images/edit.png" class="czIcons"></image>
					<image src="../../../../static/images/del.png" class="czIcons"></image>
				</view>
			</view>
			<view class="recordDetailCont">
				<view class="noticeDetailTitle">
					公告标题文字表述文字表述文字表述文字表述文字表述可换行完全显示
				</view>
				<view class="noticeDetailCont">
					公告内容文字描述日志文字描述日志文字描述日志文字描述日志文字描述日志文字描述日志文字描述日志文字文字描述文字描述完全显示公告内容。公告内容文字描述日志文字描述日志文字描述日志文字描述日志文字描述日志文字描述日志文字描述日志文字文字描述文字描述完全显示公告内容。
				</view>
			</view>
		</view>
		<view class="recordFixBtn" @click="gotoAdd">
			<uni-icons type="compose" class="fixBtnIcon" color="#ffffff" size="20"></uni-icons>
			<text class="fixBtnText">新增</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {
			gotoAdd(){
				const that =this;
				that.$Router.push({
					path:"/pages/my/manageNavs/notice/add"
				})
			}
		}
	}
</script>

<style>
.noticeDetailTitle{
	font-size: 34rpx;
	color: #222222;
}
.noticeDetailCont{
	font-size: #555555;
	color: #555555;
	margin-top: 30rpx;
	line-height: 42rpx;
}
</style>
