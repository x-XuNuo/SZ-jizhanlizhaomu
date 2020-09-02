<template>
	<view>
		<!-- 第一步信息录入 -->
		<view class="recruitList">
				<a-frame
					ref = "aFrame"  
					:requestParamData="requestParamData" 
					@clickSearch="clickSearch">
				</a-frame>
				<view class="firstForm">
					<a-form
						ref = "aForm"
						:requestParamData="requestParamData" 
						@clickSearch="clickSearch"
					></a-form>
				</view>
		</view>
	</view>
	
</template>
<script>
// import initFormJson from '@/pages/recruitment/recruit/stepFirst.js';
import initFormJson from './stepFirst.js';
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
	.recruitList{
		padding-top: 130upx;
		background-image: url(../../../static/top_Background.png);
		background-repeat: no-repeat;
		background-size: 100%;
	}
	.firstForm{
		margin-top: 40upx;
		margin-bottom: 80upx;
		height: 100%;
		border-radius: 30upx 30upx 0 0;
		background-color: #fff;
	}
	.line-common-inner {
		background: #f0eff5;
		height: 20upx;
		width: 100%;
	}
	
	>>> .page-button{
			width: 90%;
			position: fixed;
			bottom: 0;
			background-color: #fd6703 !important;
			color: #fff !important;
			border-radius: 46upx;
			margin: 10px 5%;
	}
</style>
