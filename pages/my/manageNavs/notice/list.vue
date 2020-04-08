<template>
	<view>
		<view class="recordFixHeader">
			<view class="searchInputBox">
				<uni-icons color="#f44a33" class="searchIcon" size="18" type="search" />
				<input class="uni-input" placeholder="搜索客户名称或房源" confirm-type="search" placeholder-style="font-size:26rpx;color:#B8B8B8;"
				 v-model="searchVal" @confirm="search" />
			</view>
			<view class="recordScreenBox">
				<view class="ScreenBox">
					<picker @change="statusPicker" :range="statusArr" class="pickers">
						<view class="screenItem">
							<view class="screenItemLabel">
								{{status}}
							</view>
							<uni-icons type="arrowdown" size="18" color="#b8b8b8"></uni-icons>
						</view>
					</picker>
				</view>
			</view>
		</view>
		<view class="commRecordList">
			<view class="recordItem">
				<view class="recordPersonBox">
					<view class="recordPersonInfo">
						<image class="recordPersonPic" mode="aspectFill" src="../../../../static/images/defaultUserPic.png"></image>
						<view class="recordPersonInfoCont">
							<view class="recordPersonName">安吉Aj拉的客户<text class="readStatus">未读</text></view>
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
				<view class="recordInfoBox">
					<view class="recordInfoItem noticeTitle">
						公告标题公告标题公告标题公告标题公告标题
					</view>
					<view class="recordInfoItem noticeContent">
						武汉市江夏区经济开发区江夏大道东创业农庄丰江夏大道东创业农庄丰江夏江夏大道东创业农超武汉市江夏区经济开发区江夏大道东创业农庄丰江夏大道东创业农庄丰江夏江夏大道东创业农超2行显示…
					</view>
					
				</view>
				<view class="recordLookAll" @click="gotoDetail(1)">
					<text class="lookAllText">查看全文</text>
					<uni-icons class="arrowIcons" color="#b8b8b8" size="18" type="arrowright" />
				</view>
			</view>
			<view class="recordItem">
				<view class="recordPersonBox">
					<view class="recordPersonInfo">
						<image class="recordPersonPic" mode="aspectFill" src="../../../../static/images/defaultUserPic.png"></image>
						<view class="recordPersonInfoCont">
							<view class="recordPersonName">安吉Aj拉的客户<text class="readStatus hasRead">未读</text></view>
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
		</view>
		<uni-load-more iconType="snow" :status="listStatus" />
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
				listStatus:"loading",
				searchVal: "",
				statusArr: [
					"全部",
					"未付款",
					"已付款"
				],
				status: "按状态筛选"
			}
		},
		methods: {
			search() {

			},

			statusPicker: function(e) {
				const that = this;
				that.status = that.statusArr[e.detail.value];
			},
			gotoDetail(id){
				const that = this;
				that.$Router.push({
					path:"/pages/my/manageNavs/notice/detail",
					query:{
						id:id
					}
				})
			},
			gotoAdd(){
				const that =this;
				that.$Router.push({
					path:"/pages/my/manageNavs/notice/add"
				})
			},
			clear(index) {
				const that = this;
				if (index == 0) {
					that.date = "按日期筛选";
				} else {
					that.star = "按评分筛选";
				}
			}
		}
	}
</script>

<style>
	.searchInputBox {
		margin-left: 0;
	}
	.readStatus{
		font-size: 24rpx;
		color: #CD282F;
		margin-left: 10rpx;
	}
	.readStatus.hasRead{
		color: #00BBC3;
	}
	.noticeTitle{
		font-size: 32rpx;
		color: #222222;
	}
	.noticeContent{
		color: #666666;
	}
</style>
