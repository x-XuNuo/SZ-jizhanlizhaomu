<template>
	<view class="recruitList">
		<view>
			<a-frame
				ref = "aFrame"  
				:requestParamData="requestParamData" 
				@clickSearch="clickSearch">
				<block slot="a-button-prove">
					<view style="display: flex; background-color: #fff; padding: 30upx;">
						<text style="flex: 1;" >姓名</text>
						<input style="flex: 3;" type="text" placeholder="请输入姓名">
					</view>
					<view style="display: flex; background-color: #fff; padding: 30upx;">
						<text style="flex: 1;" >身份证号</text>
						<input style="flex: 3;" type="text" placeholder="请输入身份证号">
					</view>
				</block>
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
		/* background-color: cyan; */
		height: 100%;
		background-color: #f5f5f5;
	}
	
	>>> .nextStep{
		width: 90%;
		background-color: #fd6703;
		color: #fff;
		border-radius: 46upx;
		margin: 10px 5%;
	}
	
</style>
