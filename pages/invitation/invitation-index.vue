<template>
	<view>
		<a-frame  
			ref = "aFrame"
			:requestParamData="requestParamData" 
			@clickSearch="clickSearch">
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
	},

	onReady: function(res) {},

	onShow() {
		},
	onHide() {},
	mounted() {
		// console.log('39:',this.$refs.aFrame.$refs.aList2);
	},
	activated() {},
	onUnload() {},
	onHide() {},
	onPullDownRefresh() {
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
	uni-page-body{
		background-color: #f5f5f5 !important;
	}
	>>> .bGCfff{
		width: 100%;
		background-color: #fff;
		position: fixed;
		bottom: 0;
	}
	>>> .generate{
			background-color: #fd6703;
			color: #fff;
			border-radius: 46upx;
			margin: 10px 5%;
	}
</style>
