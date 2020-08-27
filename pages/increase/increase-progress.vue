<template>
	<view style="background-color: #f5f5f5;">
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

	onShow() {},
	onHide() {},
	mounted() {
		this.$PU.a_mounted("axCardPhoto",(e) => {
			console.log("35：",e)
		})
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
	.line-common-inner {
		background: #f0eff5;
		height: 20upx;
		width: 100%;
	}
	>>> .listmat{
		margin-top: 0;
	}
</style>
