<template>
	<view style="background-color:#f5f5f5; padding-top: 20upx;">
		<a-frame
			ref = "aFrame"  
			:requestParamData="requestParamData" 
			@clickSearch="clickSearch">
			<!-- 模拟列表组件 -->
			<block slot="a-button-prove">
				<view style="display: flex; background-color: #fff; padding: 30upx;">
					<text style="flex: 1;" >姓名</text>
					<input style="flex: 3;" type="text" placeholder="请输入姓名">
				</view>
				<view style="display: flex; background-color: #fff; padding: 30upx;">
					<text style="flex: 1;" >身份证号</text>
					<input style="flex: 3;" type="text" placeholder="请输入身份证号">
				</view>
			</block>
		</a-frame>
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
	>>> .confirm{
			width: 90%;
			bottom: 0;
			background-color: #ff7a45;
			color: #fff;
			border-radius: 46upx;
			margin: 10px 5%;
	}
</style>
