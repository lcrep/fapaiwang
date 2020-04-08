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
					<view class="screenItem" @click="datePicker">
						<view class="screenItemLabel">
							{{dateText}}
						</view>
						<uni-icons type="arrowdown" size="18" color="#b8b8b8"></uni-icons>
					</view>
				</view>
			</view>
			<view class="clearDatePicker" @click="clearDate" v-if="startDate!=''">
				<text class="clearText">取消日期筛选</text>
				<uni-icons type="clear" color="#ffffff" size="16"></uni-icons>
			</view>
		</view>
		<view class="commRecordList">
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
		<uni-load-more iconType="snow" :status="status" />
		<view class="recordFixBtn" @click="gotoAdd">
			<uni-icons type="compose" class="fixBtnIcon" color="#ffffff" size="20"></uni-icons>
			<text class="fixBtnText">新增</text>
		</view>
		<w-picker
			mode="range" 
			startDate="2017" 
			endYear="2030"
			:defaultVal="rangeDval"
			:current="false"
			@confirm="onConfirm" 
			ref="range" 
			themeColor="#f00"
		></w-picker>
	</view>
</template>

<script>
	import wPicker from "@/components/w-picker/w-picker.vue";
	export default {
		 components:{
		        wPicker
		    },
		data() {
			return {
				status:"loading",
				searchVal: "",
				dateText: "按日期筛选",
				startDate:"",
				endDate:"",
				rangeDval:['2019-12-30','2020-01-07'],
			}
		},
		methods: {
			search() {

			},

			datePicker: function(e) {
				const that = this;
				that.$refs.range.show();
			},
			onConfirm(val){
				this.dateText=val.result;
				this.startDate=val.from;
				this.endDate=val.to;
			},
			clearDate(){
				const that = this;
				that.startDate="";
				that.endDate="";
				that.dateText="按日期筛选";
			},
			gotoDetail(id){
				const that = this;
				that.$Router.push({
					path:"/pages/my/manageNavs/contract/detail",
					query:{
						id:id
					}
				})
			},
			gotoAdd(){
				const that =this;
				that.$Router.push({
					path:"/pages/my/manageNavs/contract/add"
				})
			}
		}
	}
</script>

<style>
	.searchInputBox {
		margin-left: 0;
	}
	
</style>
