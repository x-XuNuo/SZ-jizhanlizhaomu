<template>
	<view>
		<!-- 第二步添加人员 -->
		<view class="recruitList">
			<img src="../../../static/top_Background.png" alt="" class="imgs">
				<a-frame
					ref = "aFrame"  
					:requestParamData="requestParamData" 
					@clickSearch="clickSearch">
				</a-frame>
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
		// 点击搜索框
		clickSearch() {
			// this.$emit('goSearchFun');
			uni.showToast({
				icon:'none',
				title:'点击了搜索框'
			})
			console.log('点击了搜索框');
		}
	}
};
</script>

<style scoped>
	.recruitList{
		padding-top: 150upx;
	}
	.imgs{
		width: 100%;
		position: absolute;
		top: 0;
	}
	.line-common-inner {
		background: #f0eff5;
		height: 20upx;
		width: 100%;
	}
	>>> .newaAdded{
				width: 90%;
				position: absolute;
				left: 5%;
				top: 300upx;
				background-color: #fff1ea;
				color: #fd7012;
				border-radius: 46upx;
	}
	>>> .back{
			width: 45%;
			position: fixed;
			left: 3%;
			bottom: 20upx;
			background-color: #ffe8d9;
			color: #fd6c0a;
			border-radius: 46upx;
		}
	>>> .nextStep{
			width: 45%;
			position: fixed;
			right: 3%;
			bottom: 20upx;
			background-color: #fd6703;
			color: #fff;
			border-radius: 46upx;
	}
</style>
