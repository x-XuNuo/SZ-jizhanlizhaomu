<template>
	<view>
		<a-frame :requestParamData="requestParamData" @clickSearch="clickSearch">
			
			<block slot="a-icon-list-prove">
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
			requestParamData:{},
			list:[
			]
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
	.line-common-inner{
		width: 100%;
		height: 30px;
		background-color: cyan;
		position: absolute;
		top: 0;
		border-radius: 50% 50% 0 0;
	}
	>>> .
  .x-c {
		width: 96% !important;
		background-color: #fd6703 !important;
		color: #fff !important;
	}
</style>
