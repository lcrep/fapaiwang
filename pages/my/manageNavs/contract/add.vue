<template>
	<view>
		<view class="title-contents">
			<view class="top-view status"></view>
			<view class="_top titles">
				<uni-icons color="#555555" class="backIocn" size="22" type="arrowleft" @click="back" />
				<view class="topViewText">新增合同</view>
			</view>
		</view>
		<view class="recordAddCont">
			<view class="recordAddItem">
				<view class="recordAddItemHead">
					客户名称：
					<text class="needTag">*</text>
				</view>
				<view class="recordSelItem" @click="searchCustomer">
					<view :class="{'recordSelInput':true,'nowrap':true,'hasSeled':userId!=0 }">
						{{userName}}
					</view>
					<uni-icons type="arrowright" size="18" color="#b8b8b8"></uni-icons>
				</view>
			</view>
			<view class="recordAddItem">
				<view class="recordAddItemHead">
					意向房源：
					<text class="needTag">*</text>
				</view>
				<view class="recordSelItem" @click="searchHouse">
					<view :class="{'recordSelInput':true,'nowrap':true,'hasSeled':goodsId!=0 }">
						{{goodsName}}
					</view>
					<uni-icons type="arrowright" size="18" color="#b8b8b8"></uni-icons>
				</view>
			</view>
			<view class="recordAddItem">
				<view class="recordAddItemHead">
					业务员:
					<text class="needTag">*</text>
				</view>
				<view class="recordSelItem">
					<view :class="{'recordSelInput':true,'nowrap':true,'hasSeled':salesmanId!=0 }">
						{{salesman}}
					</view>
					<uni-icons type="arrowright" size="18" color="#b8b8b8"></uni-icons>
				</view>
			</view>
			<view class="recordAddItem">
				<view class="recordAddItemHead">
					备注:
				</view>
				<textarea class="recordAddTextArea" @blur="bindTextAreaBlur" placeholder="请输入内容(200字以内,非必填)" maxlength="200" placeholder-style="font-size:30rpx;color:#cecece" />
				</view>
		</view>
		<view class="recordAddSubBtn">
			<button type="warn" class="subBtn" @click="sub">提交日志</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				userId:0,
				userName:"请选择客户",
				goodsId:0,
				goodsName:"请选择房源",
				salesmanId:0,
				salesman:"业务员姓名",
				textArea:"",
				hasclickback:false
			}
		},
		onShow() {
			console.log(this.userId)
		},
		methods: {
			getRate(e){
				const that = this;
				that.rate=e.value
			},
			bindTextAreaBlur(e){
				this.textArea=e.detail.value;
			},
			sub(){
				const that = this;
				setTimeout(()=>{
					if(that.userId==0||that.goodsId==0||that.salesmanId==0||that.textArea==""){
						uni.showToast({
							title:"请输入必填内容",
							icon:"none"
						})
					}
					else{
						
						uni.showModal({
							content: "日志提交后将不可再次修改，确认提交日志？",
							confirmText: "确认提交",
							cancelText: "取消",
							success: function (res) {
								if (res.confirm) {
									uni.showToast({
										title:"提交成功"
									})
								} else if (res.cancel) {
									
								}	
							}
						});	
						
					}
				},100)
			},
			searchCustomer(){
				const that = this;
				that.$Router.push({
					path:"/pages/my/manageNavs/searchCustomer"
				})
			},
			searchHouse(){
				const that = this;
				that.$Router.push({
					path:"/pages/my/manageNavs/searchHouse"
				})
			},
			back(){
				const that = this;
				if(that.userId!=0||that.goodsId!=0||that.salesmanId!=0||that.textArea!=""){	
					uni.showModal({
							content: "退出后将不保留已编辑的内容，确认退出日志编辑？",
							confirmText: "继续编辑",
							cancelText: "退出",
						success: function (res) {
							if (res.confirm) {
					
							} else if (res.cancel) {
								that.$Router.back(1);
							}	
						}
					});		
				}
				else{
					that.$Router.back(1);
				}		
			}
		},
		
	}
</script>

<style>
.recordAddCont{
	padding: 30rpx 30rpx 140rpx 30rpx;
}
.title-contents{
	height: calc(var(--status-bar-height) + 92rpx);
}
.titles{
	height: 92rpx;
	z-index: 998;
}
.title-contents .backIocn {
	line-height: 60rpx;
}
</style>
