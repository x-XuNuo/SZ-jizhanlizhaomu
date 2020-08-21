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
		// console.log('39:',this.$refs.aFrame.$refs.aList2);
	},
	activated() {},
	onUnload() {},
	onHide() {},
	onPullDownRefresh() {
		console.log('onPullDownRefresh');
		setTimeout(function() {
			uni.stopPullDownRefresh();
			console.log('stopPullDownRefresh');
		}, 1000);
	},
	// 监听APP点击按钮 调起分享菜单
	onNavigationBarButtonTap(val) {},
	// 点击返回按钮
	onBackPress() {},
	methods: {
		// 点击搜索框
		clickSearch() {
			// this.$emit('goSearchFun');
			uni.showToast({
				icon:'none',
				title:'点击了搜索框'
			})
			console.log('点击了搜索框');
		},
		// demoClick(){
			// console.log("_~_~_~_~_~_",this.$refs.aFrame.$refs.aCrosswiseTab[0].propsData.tabCur)
			// let searchView = this.$refs.aFrame.$refs.axDateSearch[0];
			// let btnOpre = searchView.operateData;
			// btnOpre.click = 'searchAction()';
			// searchView.setOperateData(btnOpre);
		// },
		searchAction(){
			console.log("测试测试")
		},
		
	}
};
</script>

<style scoped>
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
	>>> .date-search{
			width: 94%;
			position: absolute;
			left: 3%;
			top : 206upx;
			padding: 10px;
			background-color: #fff;
			border-radius: 10px;
			box-shadow: 0 0 5px #000000d;
		}
	>>> .query{		background-color: #fd6703;		color: #fff;		border-radius: 46upx;
		margin: 20upx 0;
		/* border: none !important; */	}	>>> .class-nextStep{		width: 90%;		position: fixed;		bottom: 0;		background-color: #fd6703;		color: #fff;		border-radius: 46upx;
		margin: 10px 5%;	}
</style>
