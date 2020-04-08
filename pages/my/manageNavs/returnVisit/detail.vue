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
				<view class="nowStatus">当前进展</view>
			</view>
			<view class="recordDetailCont">
				<view class="recordDetailItem">
					<view class="detailHead">
						<view class="detailHeadTitle">
							客户姓名:
						</view>
						<view class="detailHeadLink">
							<text class="detailHeadLinkLabel">查看个人主页</text>
							<uni-icons type="arrowright" size="18" color="#B8B8B8"></uni-icons>
						</view>
					</view>
					<view class="recordDetailText">真实姓名(为空则不显示) 13532554422</view>
				</view>
				<view class="recordDetailItem">
					<view class="detailHead">
						<view class="detailHeadTitle">
							意向房源:
						</view>
						<view class="detailHeadLink">
							<text class="detailHeadLinkLabel">查看房源详情</text>
							<uni-icons type="arrowright" size="18" color="#B8B8B8"></uni-icons>
						</view>
					</view>
					<view class="recordDetailText">武汉市江夏区经济开发区江夏大道东武汉市江夏区经济开发区江夏大道东武汉市江夏区经济开发区江夏大道东可完全显示</view>
				</view>
				<view class="recordDetailItem">
					<view class="detailHead">
						<view class="detailHeadTitle">
							业务员:
						</view>
					</view>
					<view class="recordDetailText">份额分</view>
				</view>
				<view class="recordDetailItem">
					<view class="detailHead">
						<view class="detailHeadTitle">
							回访内容:
						</view>	
					</view>
					<view class="recordDetailText">武汉市江夏区经济开发区江夏大道东武汉市江夏区经济开发区江夏大道东武汉市江夏区经济开发区江夏大道东可完全显示</view>
				</view>
			</view>
		</view>
		<view class="recordFixBtn" @click="gotoAdd">
			<uni-icons type="compose" class="fixBtnIcon" color="#ffffff" size="20"></uni-icons>
			<text class="fixBtnText">写回访</text>
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
					path:"/pages/my/manageNavs/returnVisit/add"
				})
			}
		}
	}
</script>

<style>

</style>
