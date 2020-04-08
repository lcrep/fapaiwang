<template>
	<view class="container">
		<!-- #ifdef APP-PLUS -->
		<view class="status">
			<view class="top-view"></view>
		</view>
		<!-- #endif -->
		<view class="userBox" v-if="!hasLogin">
			<view class="userInfoBox">
				<image class="defaultUserPhoto" src="../../static/images/defaultUserPic.png"></image>
				<view class="userInfoBoxCont">
					<view class="userName nowrap">
						未登录
					</view>
					<view class="userInfoBoxBot">
						<view class="userInfoBtn noLogin" @click="toLogin">
							登录/注册
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="userBox" v-else>
			<image src="../../static/images/logo.png" mode="aspectFill" class="blurBg"></image>
			<view class="userBoxShadow"></view>
			<view class="userInfoBox">
				<image class="userPhoto" src="../../static/images/defaultUserPic.png"></image>
				<view class="userInfoBoxCont">
					<view class="userName nowrap">
						{{userInfo.mobile}}
					</view>
					<view class="userInfoBoxBot">
						<view class="userInfoBtn" @click="edit">
							<text class="editIcon"></text>编辑资料
						</view>
						<view class="toSelfPage" @click="gotoSelfPage">
							个人主页
							<uni-icons class="gotoIcon" color="#B8B8B8" size="18" type="arrowright"></uni-icons>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="userBtnsBox1">
			<uni-grid :column="4" :show-border="false" @change="btnTap1">
				<uni-grid-item v-for="(item,index) in navBtns1" :key="index" :index="index">
					<view class="grid-item-box">
						<image class="navBtnImg" :src="item.src" mode="aspectFill" />
						<view class="navBtnName">
							{{item.name}}
						</view>
					</view>
				</uni-grid-item>
			</uni-grid>
		</view>
		<view class="userBtnsBox2" v-if="hasLogin">
			<uni-grid :column="4" :show-border="false" @change="btnTap2">
				<uni-grid-item v-for="(item,index) in navBtns2" :key="index" :index="index">
					<view class="grid-item-box">
						<image class="navBtnImg" :src="item.src" mode="aspectFill" />
						<view class="navBtnName">
							{{item.name}}
						</view>
					</view>
				</uni-grid-item>
			</uni-grid>
			<button type="default" class="logoutBtn" @click="logout">退出登录</button>
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
				navBtns1: [{
						name: "我的收藏",
						src: '../../static/images/Btns/publicBtn1.png',
						router: '/pages/my/navs/myCollection'
					},
					{
						name: "最近浏览",
						src: '../../static/images/Btns/publicBtn2.png',
						router: '/pages/my/navs/history'
					},
					{
						name: "交易记录",
						src: '../../static/images/Btns/publicBtn3.png',
						router: '/pages/my/navs/recordTypeB'

					},
					{
						name: "帮助与反馈",
						src: '../../static/images/Btns/publicBtn4.png',
						router: '/pages/my/navs/feedback'
					}
				],
				navBtns2: [{
						name: "日志",
						src: '../../static/images/Btns/myBtn1.png',
						router: '/pages/my/manageNavs/journal/list'
					},
					{
						name: "回访",
						src: '../../static/images/Btns/myBtn2.png',
						router: '/pages/my/manageNavs/returnVisit/list'
					},
					{
						name: "合同",
						src: '../../static/images/Btns/myBtn3.png',
						router: '/pages/my/manageNavs/contract/list'
						
					},
					{
						name: "付款标记",
						src: '../../static/images/Btns/myBtn4.png',
						router: '/pages/my/manageNavs/payTag/list'
					},
					{
						name: "尽职调查",
						src: '../../static/images/Btns/myBtn5.png',
						router: '/pages/my/manageNavs/inquire/list'
					},
					{
						name: "贷款",
						src: '../../static/images/Btns/myBtn6.png',
						router: '/pages/my/manageNavs/loan/list'
					},
					{
						name: "参拍",
						src: '../../static/images/Btns/myBtn7.png',
						router: '/pages/my/manageNavs/hasJoin/list'
					},
					{
						name: "办理过户",
						src: '../../static/images/Btns/myBtn8.png',
						router: '/pages/my/manageNavs/transfer/list'
					},
					{
						name: "腾退",
						src: '../../static/images/Btns/myBtn9.png',
						router: '/pages/my/manageNavs/vacate/list'
					},
					{
						name: "交房",
						src: '../../static/images/Btns/myBtn10.png',
						router: '/pages/my/manageNavs/handed/list'
					},
					{
						name: "公告",
						src: '../../static/images/Btns/myBtn11.png',
						router: '/pages/my/manageNavs/notice/list'
					},
					{
						name: "员工",
						src: '../../static/images/Btns/myBtn12.png',
						router: '/pages/my/manageNavs/staff/list'
					},
					{
						name: "兑换名额",
						src: '../../static/images/Btns/myBtn13.png',
						router: '/pages/my/manageNavs/exchange/index'
					}
				]
			}
		},
		created() {
			const that = this;

		},
		methods: {
			...mapMutations(['logout']),
			btnTap1(e) {
				this.$Router.push({
					path: this.navBtns1[e.detail.index].router
				})
			},
			btnTap2(e) {
				const that = this;
			this.$Router.push({
				path: this.navBtns2[e.detail.index].router
			})
			},
			toLogin() {
				const that = this;
				uni.navigateTo({
					url: "./login"
				})
			},
			gotoSelfPage() {
				const that = this;
				uni.navigateTo({
					url: "./selfPage"
				})
			},
			edit() {
				const that = this;
				uni.navigateTo({
					url: "./edit"
				})
			}
		}
	}
</script>

<style>
	.userBox {
		width: 100%;
		height: 365rpx;
		background: url(../../static/images/userTopBg.png) no-repeat center;
		background-size: cover;
		position: relative;
		overflow: hidden;
	}

	.userInfoBox {
		position: absolute;
		width: 685rpx;
		height: 150rpx;
		top: 115rpx;
		left: 38rpx;
		display: flex;
		z-index: 4;
	}

	.userPhoto {
		width: 148rpx;
		height: 148rpx;
		border: 1rpx solid #FFFFFF;
		border-radius: 75rpx;
	}

	.defaultUserPhoto {
		width: 150rpx;
		height: 150rpx;
	}

	.userInfoBoxCont {
		width: 505rpx;
		height: 150rpx;
		padding-left: 30rpx;
	}

	.userName {
		line-height: 60rpx;
		color: #FFFFFF;
		font-size: 36rpx;
	}

	.userInfoBoxBot {
		height: 52rpx;
		margin-top: 25rpx;
		position: relative;
	}

	.userInfoBtn {
		width: 188rpx;
		height: 52rpx;
		border-radius: 26rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		color: #FFFFFF;
		font-size: 24rpx;
		background-color: rgba(205, 40, 47, .5);
	}

	.userInfoBtn.noLogin {
		background-color: #CD282F;
	}

	.editIcon {
		display: block;
		width: 44rpx;
		height: 44rpx;
		background: url(../../static/images/editUser.png) no-repeat;
		background-size: cover;
		margin-right: 1rpx;
		margin-top: 2rpx;
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

	.toSelfPage {
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 28rpx;
		color: #B8B8B8;
		position: absolute;
		top: 6rpx;
		right: 0;
	}

	.toSelfPage .gotoIcon {
		margin-left: 6rpx;
	}

	.userBtnsBox1 {
		padding: 30rpx;
		background: #FFFFFF;
		border-top-right-radius: 30rpx;
		border-top-left-radius: 30rpx;
		margin-top: -30rpx;
		z-index: 5;
		position: relative;
		width: 100%;
		box-sizing: border-box;
	}

	.grid-item-box {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 100%;
	}

	.navBtnImg {
		width: 60rpx;
		height: 60rpx;
	}

	.navBtnName {
		margin-top: 16rpx;
		font-size: 26rpx;
		color: #555555;
	}

	.userBtnsBox2 {
		margin: 0 30rpx;
		padding-top: 50rpx;
		padding-bottom: 30rpx;
		border-top: 1rpx solid #E5E5E5;
	}

	.logoutBtn {
		margin: 50rpx 20rpx 0 20rpx;
		font-size: 24rpx;
		color: #B8B8B8;
		padding: 10rpx;
		background-color: #FFFFFF;
	}

	.logoutBtn:active {
		background-color: #F7F7F7;
	}
</style>
