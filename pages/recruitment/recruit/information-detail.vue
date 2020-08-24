<template>
	<view>
		<a-frame 
			ref = "aFrame" 
			:requestParamData="requestParamData" 
			@clickSearch="clickSearch">
<!-- 			
			<block slot="a-swiper-below">
					<view class="line-common-inner"></view>
			</block>
			
			<block slot="a-icon-list-below">
					<view class="line-common-inner"></view>
			</block> -->
			
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
	},
	activated() {},
	onUnload() {},
	onHide() {},
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
</style>
