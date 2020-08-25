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
	>>> .upload{
		width: 90%;
		position: absolute;
		left: 5%;
		top: 300upx;
		background-color: #fff1ea;
		color: #fd7012;
		border-radius: 46upx;
	}
	>>> .complete{
		width: 90%;
		position: fixed;
		right: 3%;
		bottom: 20upx;
		background-color: #fd6703;
		color: #fff;
		border-radius: 46upx;
	}
</style>
