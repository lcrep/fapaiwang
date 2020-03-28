<template>
	<view>
		<view class="content">
			<text class="pageTitle">用手机号码注册</text>
			<view class="inputBox">
				<view class="uni-input-wrapper inputItem">
					<view class="inputLabel">设置密码</view>
					<input class="uni-input" placeholder="请输入密码" maxlength="14" :password="showPassword1" v-model="password1" />
					<text class="uni-icon" :class="[!showPassword1 ? 'uni-eye-active' : '']" @click="changePassword1">&#xe568;</text>
				</view>
				<view class="uni-input-wrapper inputItem">
					<view class="inputLabel">重复密码</view>
					<input class="uni-input" placeholder="请再次输入密码" maxlength="14" :password="showPassword2" v-model="password2" />
					<text class="uni-icon" :class="[!showPassword2 ? 'uni-eye-active' : '']" @click="changePassword2">&#xe568;</text>
				</view>
				<button type="warn" :disabled="password1.length>0&&password2.length>0?false:true" class="loginBtn" @click="register">注册</button>
				<view class="loginTips">注册即表示您已同意<text class="loginTipsText" @click="gotoAgreement1">《服务协议》</text>和<text @click="gotoAgreement1"  class="loginTipsText">《隐私协议》</text></view>
			</view>

		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				showPassword1:true,
				showPassword2:true,
				password1: '',
				password2: ''
			}
		},
		methods: {
			changePassword1() {
				let that = this;
				that.showPassword1 = !that.showPassword1;
			},
			changePassword2() {
				let that = this;
				that.showPassword2 = !that.showPassword2;
			},
			register(){
				let that = this;
				if(!that.$utils.common.passwordTest.test(that.password1)){
					uni.showToast({
						title:'密码需是8-14位数字或字母',
						icon:'none'
					})
				}
				else if(that.password1!=that.password2){
					uni.showToast({
						title:'两次密码不一致',
						icon:'none'
					})
				}
				else{
					uni.showToast({
						title:'注册成功',
						icon:'success'
					})
				}
			}
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

	.loginTips {
		font-size: 24rpx;
		color: #B8B8B8;
	}

	.loginTips .loginTipsText {
		color: #f44a33;
	}

</style>
