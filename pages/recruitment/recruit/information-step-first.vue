<template>
	<view>
		<!-- 第一步信息录入 -->
		<view class="recruitList">
				<a-frame
					ref = "aFrame"  
					:requestParamData="requestParamData" 
					@clickSearch="clickSearch">
				</a-frame>
				<view class="firstForm">
					<a-form
						ref = "aForm"
						:requestParamData="requestParamData" 
						@clickSearch="clickSearch"
					></a-form>
				</view>
		</view>
	</view>
	
</template>
<script>
export default {
	data() {
		return {
			myBtn: "btn-text",
			// 请求参数
			requestParamData:{}
		};
	},
	components: {},
	created() {},
	onLoad(option) {
		// 测试数据
		// let userInfo ={
		// 	"id": "123",
		// 	"name": "test123",
		// 	"phone": "手机号码"
		// }
		
		// this.requestParamData = {
		// 	"id": "456",
		// 	"name": "test456"
		// }
		
		// uni.setStorageSync("userInfo",userInfo);
		
	},

	onReady: function(res) {},

	onShow() {},
	onHide() {},
	mounted() {
	},
	activated() {},
	onUnload() {},
	onHide() {},
	onPullDownRefresh() {
		console.log('onPullDownRefresh');
		setTimeout(function() {
			uni.stopPullDownRefresh();
			console.log('stopPullDownRefresh');
		}, 1000);
	},
	// 监听APP点击按钮 调起分享菜单
	onNavigationBarButtonTap(val) {},
	// 点击返回按钮
	onBackPress() {},
	methods: {
	}
};
</script>

<style scoped>
	.recruitList{
		padding-top: 130upx;
		background-image: url(../../../static/top_Background.png);
		background-repeat: no-repeat;
		background-size: 100%;
	}
	.firstForm{
		margin-top: 40upx;
		margin-bottom: 80upx;
		height: 100%;
		border-radius: 30upx 30upx 0 0;
		background-color: #fff;
	}
	.line-common-inner {
		background: #f0eff5;
		height: 20upx;
		width: 100%;
	}
	
	>>> .nextStep{
			width: 90%;
			position: fixed;
			bottom: 0;
			background-color: #fd6703;
			color: #fff;
			border-radius: 46upx;
			margin: 10px 5%;
	}
</style>
