<template>
	<view>
		<view :style= "{ height: height + 'px' }" class="bgi">
			<img src="../../static/invitation/yulan_01.png" mode="" style="height: 100%; width: 100%;"></img>
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
			requestParamData:{},
			height:0,
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
		console.log("34:",uni.getSystemInfoSync().screenHeight)
		this.height = uni.getSystemInfoSync().screenHeight -54
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
/* 	.bgi{
		background-image: url(../../static/invitation/yulan_01.png);
		background-size: 100% 100%;
	} */
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
