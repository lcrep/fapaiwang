<template>
	<view class="content">
		<view class="userPicBox" @click="updatePic">
			<image :src="userPic" class="userPicImg"></image>
			<image src="../../static/images/camera.png" class="cameraIcon"></image>
		</view>
		<view class="userForm">
			<view class="formHead">
				基本资料
			</view>
			<view class="formContent">
				<view class="formInputBox">
					<view class="formInputLabel">
						手机号
					</view>
					<view class="formInputCont">
						<input class="uni-input" disabled="disabled" value="13432432423" type="text">
					</view>
				</view>
				<view class="formInputBox">
					<view class="formInputLabel">
						昵称
					</view>
					<view class="formInputCont">
						<input class="uni-input" placeholder-style="color:#CECECE" placeholder="请输入(限12字以内)" maxlength="12" type="text">
					</view>
				</view>
				<view class="formInputBox">
					<view class="formInputLabel">
						真实姓名
					</view>
					<view class="formInputCont">
						<input class="uni-input" placeholder-style="color:#CECECE" placeholder="请输入" maxlength="6" type="text">
					</view>
				</view>
				<view class="formInputBox">
					<view class="formInputLabel">
						性别
					</view>
					<view class="formInputCont">
						<picker @change="sexPicker" :range="sexArr" >
							<view class="uni-input pickerView">
								<view class="pickerValue">{{sex}}</view>
								<uni-icons class="pickerArrowIcon" color="#cccccc" type="arrowright"></uni-icons>
							</view>
						</picker>
					</view>
				</view>
				<view class="formInputBox">
					<view class="formInputLabel">
						生日
					</view>
					<view class="formInputCont">
						<picker mode="date" @change="datePicker">
							<view class="uni-input pickerView">
								<view class="pickerValue">{{date}}</view>
								<uni-icons class="pickerArrowIcon" color="#cccccc" type="arrowright"></uni-icons>
							</view>
						</picker>
					</view>
				</view>
				<view class="formInputBox">
					<view class="formInputLabel">
						推荐码
					</view>
					<view class="formInputCont">
						<input class="uni-input" placeholder-style="color:#CECECE" placeholder="请输入" maxlength="10" type="text">
					</view>
				</view>
				<view class="formInputBox">
					<view class="formInputLabel">
						邮箱
					</view>
					<view class="formInputCont">
						<input class="uni-input" placeholder-style="color:#CECECE" placeholder="请输入" maxlength="30" type="text">
					</view>
				</view>
				<view class="formInputBox">
					<view class="formInputLabel">
						身份证
					</view>
					<view class="formInputCont">
						<input class="uni-input" placeholder-style="color:#CECECE" placeholder="请输入" maxlength="18" type="text">
					</view>
				</view>
				  <button type="warn" class="subBtn" @click="updateData">保存</button>
			</view>
		</view>


		<avatar @upload="picUpload" ref="avatar">
		</avatar>
	</view>
</template>

<script>
	import avatar from "../../components/yq-avatar/yq-avatar.vue";
	export default {
		components: {
			avatar
		},
		data() {
			return {
				userPic: "../../static/images/defaultUserPic.png",
				sex: "保密",
				sexArr: ["保密",
					"男", "女"
				],
				date: "1999-01-01",
			}
		},
		methods: {
			updatePic() {
				this.$refs.avatar.fChooseImg(0, {
					selWidth: "300upx",
					selHeight: "300upx",
					expWidth: '260upx',
					expHeight: '260upx'
				});
			},
			picUpload(rsp) {
				this.userPic = rsp.path;
			},
			sexPicker: function(e) {
				const that = this;
				that.sex = that.sexArr[e.detail.value];
			},
			datePicker: function(e) {
				const that = this;
				that.date = e.detail.value;
			},
			updateData(){
				
			}
		}
	}
</script>

<style>
	.content {
		padding: 30rpx;
	}

	.userPicBox {
		position: relative;
		width: 160rpx;
		height: 150rpx;
	}

	.userPicImg {
		width: 140rpx;
		height: 140rpx;
		border-radius: 100%;
	}

	.cameraIcon {
		position: absolute;
		width: 80rpx;
		height: 80rpx;
		bottom: -6rpx;
		right: -10rpx;
	}

	.userForm {
		margin-top: 20rpx;
	}

	.formHead {
		font-size: 44rpx;
		color: #222222;
		padding: 28rpx 0;
		line-height: 40rpx;
	}
	.subBtn{
		height: 92rpx;
		font-size: 32rpx;
		margin: 30rpx;
		
	}
</style>
