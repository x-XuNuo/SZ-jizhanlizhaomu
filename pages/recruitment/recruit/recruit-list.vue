<template>
	<view  class="recruitList">
		<view>
			<img src="../../../static/top_Background.png" alt="" style="width: 100%;">
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
		this.$PU.a_mounted("axCardDefault",(e) => {
			console.log("35:",e)
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
		searchAction(){
			console.log("测试测试")
		},
		
	}
};
</script>

<style scoped>
	.recruitList{
		padding-bottom: 134upx;
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
	>>> .refresh {
		background-color: #f5f5f5 !important;
	}
	>>> .list{
		background-color: #f5f5f5;
		height: 730upx !important;
	}
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
	>>> .query{		background-color: #fd6703;		color: #fff;		border-radius: 46upx;
		margin: 20upx 0;
		/* border: none !important; */	}
	>>> .bGCfff{
		width: 100%;
		position: fixed;
		bottom: 0;
		background-color: #FFF;
	}	>>> .class-nextStep{		background-color: #fd6703;		color: #fff;		border-radius: 46upx;
		margin: 10px 5%;	}
</style>
