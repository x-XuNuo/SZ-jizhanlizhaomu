<template>
	<view>
		<a-frame :requestParamData="requestParamData" @clickSearch="clickSearch">
			
			<block slot="a-swiper-below">
					<view class="line-common-inner"></view>
			</block>
			
			<block slot="a-icon-list-below">
					<view class="line-common-inner"></view>
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
