<template>
	<view>
<!-- 		<a-frame 
			ref = "aFrame"
			:requestParamData="requestParamData" 
			@clickSearch="clickSearch">
		</a-frame> -->
			<ax-data-list 
				ref = "axDataList"
				:requestParamData="requestParamData" 
				@clickSearch="clickSearch">
			</ax-data-list>
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
		let DataList = {
			list : [{
				durationText: "通话时长",
				duration: "1520.6分"
				},{
				durationText: "总次数",
				duration: "70次"
				},{
				durationText: "日均通话时长",
				duration: "3.8分"
			}]
		}
		// console.log("34:",this.$refs.axDataList)
		this.$nextTick( () => {
			this.$refs.axDataList.setPropsData(DataList)
		})
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
</style>
