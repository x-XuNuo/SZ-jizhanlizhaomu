<template>
	<view>
		<!-- 第三步 添加附件 -->
		<view>
			<a-frame
				ref = "aFrame"  
				:requestParamData="requestParamData" 
				@clickSearch="clickSearch">
			</a-frame>
		</view>
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
	onPullDownRefresh() {
	},
	// 监听APP点击按钮 调起分享菜单
	onNavigationBarButtonTap(val) {},
	// 点击返回按钮
	onBackPress() {},
	methods: {
		// 点击搜索框
		clickSearch() {
		},
		success(){
		}
	}
};
</script>

<style scoped>
	>>> .upload{
		/* width: 90%; */
		/* width: 100%; */
		/* position: absolute; */
		/* overflow: hidden; */
		/* left: 5%; */
		/* top: 20upx; */
		border: none;
		background-color: #fff1ea;
		color: #fd7012;
		border-radius: 46upx;
		margin: 20upx 20upx 0;
	}
	>>> .complete{
		width: 90%;
		position: fixed;
		left: 5%;
		bottom: 20upx;
		background-color: #fd6703;
		color: #fff;
		border-radius: 46upx;
	}
</style>
