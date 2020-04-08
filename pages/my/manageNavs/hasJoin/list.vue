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
			<view class="paySignItem">
				<view class="pagTagHead payStatus1">
					<view class="pagTagHeadLeft">
						<image class="pagStatusImg" src="../../../../static/images/noInquire.png"></image>
						<text class="pagStatusText">未完成</text>
					</view>
					<view class="pagTagHeadBtn">
						去操作
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
				<view class="recordLookAll" @click="gotoDetail(1)">
					<text class="lookAllText">查看全文</text>
					<uni-icons class="arrowIcons" color="#b8b8b8" size="18" type="arrowright" />
				</view>
			</view>
			<view class="paySignItem">
				<view class="pagTagHead payStatus2">
					<view class="pagTagHeadLeft">
						<image class="pagStatusImg" src="../../../../static/images/hasInquire.png"></image>
						<text class="pagStatusText">已完成</text>
					</view>
					<view class="pagTagHeadBtn status2">
						当前进展
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
			<view class="paySignItem">
				<view class="pagTagHead payStatus2">
					<view class="pagTagHeadLeft">
						<image class="pagStatusImg" src="../../../../static/images/hasPay.png"></image>
						<text class="pagStatusText">已付款</text>
					</view>
					<view class="pagTagHeadBtn status2">
						当前进展
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
		</view>
		<uni-load-more iconType="snow" :status="listStatus" />
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
					path:"/pages/my/manageNavs/hasJoin/detail",
					query:{
						id:id
					}
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
	
</style>
