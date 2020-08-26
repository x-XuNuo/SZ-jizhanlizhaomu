<template>
	<view style="padding-bottom: 80px;">
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
	>>> .text-selected{
		color: #fb6801 !important;
	}
	>>> .wuc-tab-item.cur{
		border-bottom: 8upx solid !important;
	}
	>>> .listmat{
		background-color: #fff;
		margin-top: 0;
	}
	>>> .invitation{
		width: 90%;
		position: fixed;
		bottom: 30upx;
		left: 5%;
		background-color: #fd6703;
		color: #fff;
		border-radius: 20upx;
	}
</style>
