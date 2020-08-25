<template>
	<view>
		<!-- 第二步添加人员 -->
		<view class="recruitList">
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
		dele(){
			console.log("删除事件")
		},
	}
};
</script>

<style scoped>
	.recruitList{
		padding-top: 150upx;
		background-image: url(../../../static/top_Background.png);
	}
	.imgs{
		width: 100%;
		position: absolute;
		top: 0;
	}
	.line-common-inner {
		background: #f0eff5;
		height: 20upx;
		width: 100%;
	}
	>>> .list{
		margin-top: 120upx;
	}
	>>> .newaAdded{
		background-color: #fff1ea;
		color: #fd7012;
		border-radius: 46upx;
	}
	>>> .bGCfff{
		width: 100%;
		padding: 5%;
		border-radius: 30upx 30upx 0 0;
		/* position: absolute; */
		margin-top: 30upx;
		background-color: #fff;
		/* z-index: 99; */
	}
	>>> .listmat{
		margin-top: 0;
	}
	>>> .cover-container{
		margin-top: -122upx !important;
	}
	>>> .hollow-dots-spinner{
		height: 0 !important;
	}
	>>> .back{
			width: 45%;
			position: fixed;
			left: 3%;
			bottom: 20upx;
			background-color: #ffe8d9;
			color: #fd6c0a;
			border-radius: 46upx;
		}
	>>> .nextStep{
			width: 45%;
			position: fixed;
			right: 3%;
			bottom: 20upx;
			background-color: #fd6703;
			color: #fff;
			border-radius: 46upx;
	}
</style>
