<template>
	<view>
		<view class="content">
			<text class="pageTitle">登录/注册</text>
			<view class="inputBox">
				<view class="uni-input-wrapper inputItem">
					<view class="inputLabel">+86</view>
					<input class="uni-input" maxlength="11" placeholder="请输入手机号码/账号" type="number" v-model="login.mobile" />
					<uni-icons color="#999999" class="uni-icon"  size="18" type="clear"  v-if="login.mobile.length>0" @click="clearIcon" />
				</view>
				<view class="uni-input-wrapper inputItem">
					<view class="inputLabel">密码</view>
					<input class="uni-input" placeholder="请输入密码" :password="showPassword" v-model="login.password" />
					<text class="uni-icon" :class="[!showPassword ? 'uni-eye-active' : '']" @click="changePassword">&#xe568;</text>
				</view>
				<button type="warn" :disabled="login.mobile.length>0&&login.password.length>0?false:true" class="loginBtn" @click="toLogin">登
					录</button>
				<view class="forgetPwdBox">
					<view class="forgetPwd" @click="forgetPassword">忘记密码？</view>
					<view class="register" @click="register">新用户注册</view>
				</view>
			</view>
			<view class="wxLogin">
				<text class="wxLoginText">微信登录</text>
				<image class="image" src="../../static/images/weixinIcon.png"></image>
			</view>
			<view class="loginTips">点击按钮即表示您同意并愿意遵守法拍网<text @click="gotoAgreement1" class="loginTipsText">《服务协议》</text>和<text @click="gotoAgreement1" class="loginTipsText">《隐私协议》</text></view>

		</view>
		<image class="logo" src="../../static/images/logo.png"></image>
	</view>

</template>

<script>
	export default {
		data() {
			return {
				showPassword: true,
				login: {
					mobile: "",
					password: ""
				}
			}
		},
		methods: {
			changePassword() {
				let that = this;
				that.showPassword = !that.showPassword;
			},
			clearIcon() {
				let that = this;
				that.login.mobile = "";
			},
			toLogin() {
				let that = this;
				let mobile = that.login.mobile;
				let password = that.login.password;
				if (!that.$utils.common.phoneTest.test(mobile)) {
					uni.showToast({
						title: "请输入正确的手机号",
						icon: "none"
					})
				} else if (password.length < 6) {
					uni.showToast({
						title: "密码需六位以上字符",
						icon: "none"
					})
				} else {
					uni.showToast({
						title: "登录成功",
						icon: "success"
					})
				}
			},
			register(){
				let that = this;
				uni.navigateTo({
					url:'./register'
				})
			},
			back() {
				uni.navigateBack({
					delta:1
				})
			},
		}
	}
</script>

<style>
	.content {
		padding: 20rpx 50rpx;
	}

	.pageTitle {
		font-size: 60rpx;
		color: #222222;
		display: block;
		margin-top: 30rpx;
	}

	.inputItem {
		display: flex;
		width: 100%;
		height: 92rpx;
		background: #F7F7F7;
		flex-direction: row;
		border-radius: 10rpx;
		margin-bottom: 30rpx;
	}

	.inputItem .uni-input {
		flex: 1;
		height: 92rpx;
		font-size: 32rpx;
	}

	.inputLabel {
		width: 156rpx;
		line-height: 92rpx;
		padding-left: 20rpx;
		font-size: 32rpx;
	}

	.uni-icon {
		font-family: uniicons;
		font-size: 20px;
		font-weight: normal;
		font-style: normal;
		width: 20px;
		height: 92rpx;
		line-height: 92rpx;
		color: #999999;
		padding-right: 20rpx;
	}

	.uni-eye-active {
		color: #FC6B5A;
	}

	.inputBox {
		padding: 70rpx 0;
	}

	.loginBtn {
		font-size: 32rpx;
		line-height: 92rpx;
		margin-bottom: 30rpx;
	}

	.forgetPwdBox {
		height: 36rpx;
	}

	.forgetPwdBox .forgetPwd {
		font-size: 26rpx;
		color: #888888;
		float: left;
	}

	.forgetPwdBox .register {
		font-size: 26rpx;
		color: #CD282F;
		float: right;
	}

	.wxLogin {
		width: 150rpx;
		height: 175rpx;
		display: block;
		margin: 13% auto 0 auto;
		text-align: center;
	}

	.wxLogin .wxLoginText {
		text-align: center;
		display: block;
		font-size: 32rpx;
		color: #555555;
		line-height: 45rpx;
		letter-spacing: 5rpx;
	}

	.wxLogin .image {
		width: 108rpx;
		height: 108rpx;
		margin-top: 20rpx;
	}

	.loginTips {
		padding: 0 105rpx;
		margin-top: 100rpx;
		font-size: 24rpx;
		color: #B8B8B8;
		text-align: center;
		line-height: 32rpx;
	}

	.loginTips  .loginTipsText {
		color: #b9ccde;
	}

	.logo {
		position: fixed;
		width: 340rpx;
		height: 67rpx;
		left: 205rpx;
		bottom: 21rpx;
	}
</style>
