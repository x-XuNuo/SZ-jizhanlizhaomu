<template>
	<view  class="recruitList">
		<view>
			<img src="../../static/top_Background.png" alt="" style="width: 100%;">
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

	onShow() {
		},
	onHide() {},
	mounted() {
		this.$PU.a_mounted("axCardBtncard",(e) => {
			console.log("35：",e)
		})
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
	/* 主页面 */
	.recruitList{
		padding-bottom: 100upx;
		background-color: #f5f5f5;
		height: 100%;
		overflow: hidden;
	}
	>>> .triangle{
		color: #fff !important;
	}
	>>> .triangle-box{
		border-bottom-color: #fff !important;
	}
	>>> .crosswiseTab{
		color: #fed1b3;
		position: absolute;
		top: 130upx;
	}
	/* 日历选择组件 */
	>>> .date-search{
			width: 96%;
			position: absolute;
			left: 2%;
			top : 206upx;
			padding: 10px;
			background-color: #fff;
			border-radius: 10px;
			box-shadow: 0 0 5px rgba(255,255,255,.6);
			z-index: 999 !important;
		}
		/* 日历选择按钮 */
	>>> .query{		background-color: #fd6703;		color: #fff;		border-radius: 46upx;
		margin: 20upx 0;	}
	
	>>> .list{
		background-color: #f5f5f5;
		height: 730upx !important;
	}
	
	/* card按钮样式 */
	>>> .details{
		float: right;
		margin: 0 20upx 20upx 0;
		font-size: 28upx;
		background-color: #fff;
		border: 1px #e4e4e4 solid;
	}
	
	/* 底部按钮 */
	>>> .bGCfff{
		width: 100%;
		position: fixed;
		bottom: 0;
		background-color: #FFF;
	}	>>> .class-nextStep{		background-color: #fd6703;		color: #fff;		border-radius: 46upx;
		margin: 10px 5%;	}
</style>
