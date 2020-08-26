<template>
	<view>
		<view>
			<img src="../../static/invitation/yulan_01.png" mode="" style="width: 100%;"></img>
		</view>
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
/* 		background-image: url(../../static/invitation/yulan_01.png);
		background-size: 100%;
		height: 100%; */
		/* margin-bottom: 130upx; */
	}
	>>> .bGCfff{
		width: 100%;
		background-color: #fff;
		position: fixed;
		bottom: 0;
	}
	>>> .forward{
			background-color: #fd6703;
			color: #fff;
			border-radius: 46upx;
			margin: 10px 5%;
	}
</style>
