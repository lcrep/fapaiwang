<template>
	<view>
		<view class="recordDetailPage">
			<view class="recordPersonBox">
				<view class="recordPersonInfo">
					<image class="recordPersonPic" mode="aspectFill" src="../../../../static/images/defaultUserPic.png"></image>
					<view class="recordPersonInfoCont">
						<view class="recordPersonName">安吉Aj拉的客户</view>
						<view class="recordTime">
							2020-12-12 10:12 由<text class="editerName">张丽丽</text>修改
						</view>
					</view>
				</view>
				<view class="czBtns">
					<image src="../../../../static/images/edit.png" class="czIcons" @click="gotoEdit"></image>
				</view>
			</view>
			<view class="recordDetailCont">
				<view class="recordDetailItem">
					<view class="detailHead">
						<view class="detailHeadTitle">
							员工姓名:
						</view>
					</view>
					<view class="recordDetailText">真实姓名 (男，25岁)  </view>
				</view>
				<view class="recordDetailItem">
					<view class="detailHead">
						<view class="detailHeadTitle">
							手机号:
						</view>
						
					</view>
					<view class="recordDetailText">13432333333</view>
				</view>
				<view class="recordDetailItem">
					<view class="detailHead">
						<view class="detailHeadTitle">
							员工类型:
						</view>
					</view>
					<view class="recordDetailText">普通员工</view>
				</view>
				<view class="recordDetailItem">
					<view class="detailHead">
						<view class="detailHeadTitle">
							家庭住址:
						</view>
					</view>
					<view class="recordDetailText">文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述</view>
				</view>
				<view class="recordDetailItem">
					<view class="detailHead">
						<view class="detailHeadTitle">
							推荐码:
						</view>
					</view>
					<view class="recordDetailText">20203abcv</view>
				</view>
				<view class="recordDetailItem">
					<view class="detailHead">
						<view class="detailHeadTitle">
							钻值:
						</view>	
					</view>
					<view class="recordDetailText">1000</view>
				</view>
				<view class="recordDetailItem">
					<view class="detailHead">
						<view class="detailHeadTitle">
							创建人:
						</view>	
					</view>
					<view class="recordDetailText">刘能 (2020.03.30 21:22）</view>
				</view>
			</view>
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
			gotoEdit(){
				this.$Router.push({
					path:"/pages/my/manageNavs/staff/edit"
				})
			}
		}
	}
</script>

<style>
	.czBtns{
		width: 76rpx;
	}
	.editerName{
		color: #00BBC3;
		margin:0 10rpx;
	}
</style>
