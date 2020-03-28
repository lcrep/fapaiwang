<template>
	<view class="container">
		<button type="primary" plain="true" @click="toLogin">登录</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		created() {
			const that= this;
		
		},
		methods: {
			toLogin(){
				const that = this;
				uni.navigateTo({
					url:"./login"
				})
			}
		}
	}
</script>

<style>
	.intro {
		font-size: 14px;
		line-height: 24px;
	}
</style>
