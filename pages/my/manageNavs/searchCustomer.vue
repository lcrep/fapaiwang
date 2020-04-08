<template>
	<view>
		<view class="headerBox">
			<view class="searchInputBox">
				<uni-icons color="#f44a33" class="searchIcon" size="18" type="search" />
				<input class="uni-input" placeholder="搜索标的物名称" confirm-type="search" @input="constantlySearch" placeholder-style="font-size:26rpx;color:#B8B8B8;"
				 v-model="searchVal" @confirm="search" />
			</view>
			<view class="searchCancel" v-if="searchVal.length>0" @click="searchCancel">
				取消
			</view>
		</view>
		<view class="customerList">
			<view class="customerItem" @click="selectItem(1,'abc')">
				<image src="../../../static/images/defaultUserPic.png" class="customerImg"></image>
				<view class="customerInfo">
					<view class="customerNickName">
						Angela123
					</view>
					<view class="customerName">
						姓名：李某某
					</view>
				</view>
			</view>
			<view class="customerItem">
				<image src="../../../static/images/defaultUserPic.png" class="customerImg"></image>
				<view class="customerInfo">
					<view class="customerNickName">
						Angela123
					</view>
					<view class="customerName">
						姓名：李某某
					</view>
				</view>
			</view>
			<view class="customerItem">
				<image src="../../../static/images/defaultUserPic.png" class="customerImg"></image>
				<view class="customerInfo">
					<view class="customerNickName">
						Angela123
					</view>
					<view class="customerName">
						姓名：李某某
					</view>
				</view>
			</view>
			<uni-load-more iconType="snow" :status="status" />
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				status: "loading",
				searchVal: '',
				canSearch: true,
				timer: null
			}
		},
		methods: {
			searchCancel() {
				this.searchVal = "";
				uni.hideKeyboard();
			},
			constantlySearch(e) {
				const that = this;
				clearTimeout(that.timer);
				that.timer = setTimeout(function() {
					console.log(e.detail.value)
				}, 800);
			},
			selectItem(id, name) {
				const that = this;
				var pages = getCurrentPages(),
					prevPage = null;
				if (pages.length > 1) {
					prevPage = pages[pages.length - 2];
				}
				if (prevPage) {
					// #ifdef H5
					prevPage.userId = id;
					prevPage.userName = name
					// #endif
					// #ifdef APP-PLUS || MP-WEIXIN
					prevPage.$vm.userId = id;
					prevPage.$vm.userName = name
					// #endif
				}
				setTimeout(() => {
					that.$Router.back(1);
				}, 100)
			}
		}
	}
</script>

<style>
	.headerBox {
		position: fixed;
		top: 0;
		/* #ifdef H5 */
		top: calc(44px + env(safe-area-inset-top)) !important;
		/* #endif */
		left: 0;
		width: 100%;
		height: 88rpx;
		padding: 10rpx 30rpx;
		box-sizing: border-box;
		background: #FFFFFF;
		display: flex;
	}

	.headerBox .searchInputBox {
		margin-left: 0;
	}

	.customerList {
		padding: 108rpx 0 0 0;
	}

	.customerItem {
		padding: 20rpx 30rpx;
		display: flex;
		justify-content: flex-start;
		align-items: center;
		transition: all linear 0.1s;
	}

	.customerItem:active {
		background-color: #F7F7F7;
	}

	.customerImg {
		width: 84rpx;
		height: 84rpx;
		border-radius: 100%;
		margin-right: 20rpx;
	}

	.customerNickName {
		line-height: 42rpx;
		font-size: 30rpx;
		color: #222200;
	}

	.customerName {
		line-height: 32rpx;
		color: #B8B8B8;
		font-size: 26rpx;
	}
</style>
