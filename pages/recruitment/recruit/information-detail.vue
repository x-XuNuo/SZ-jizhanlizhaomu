<template>
	<view>
<!-- 		<a-frame 
			ref = "aFrame" 
			:requestParamData="requestParamData" 
			@clickSearch="clickSearch">
		</a-frame>
		 -->
		 <a-form
			ref="aForm"
			:requestParamData="requestParamData" 
			@clickSearch="clickSearch"
		 >
		 </a-form>
	</view>
	
</template>
<script>
import initFormJson from './information.js';
export default {
	data() {
		return {
			initFormJson: initFormJson.form || {},
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
		this.$refs.aForm.setInitFormJson(this.initFormJson)
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
