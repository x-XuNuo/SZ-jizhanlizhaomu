<template>
	<view>
		<!-- 第三步 添加附件 -->
		<view class="recruitList">
			<!-- <img src="../../../static/top_Background.png" alt="" class="imgs"> -->
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
		success(){
			console.log("234567898765")
		}
	}
};
</script>

<style scoped>
	uni-page-body{
		padding-top: 170upx;
		background-image: url(../../../static/top_Background.png);
		background-repeat: no-repeat;
		background-size: 100%;
	}
	>>> .u-upload{
		padding-bottom: 5%;
		margin-top: 30upx;
		background-color: #fff;
		border-radius: 30upx 30upx 0 0;
	}
	
	>>> .upload{
		border: none;
		background-color: #fff1ea;
		color: #fd7012;
		border-radius: 46upx;
		margin: 20upx 20upx 0;
	}
	/* 上一步 */
	>>> .back{
			width: 45%;
			position: fixed;
			left: 3%;
			bottom: 20upx;
			background-color: #ffe8d9;
			color: #fd6c0a;
			border-radius: 46upx;
		}
		/* 下一步 */
	>>> .nextStep{
			width: 45%;
			position: fixed;
			right: 3%;
			bottom: 20upx;
			background-color: #fd6703;
			color: #fff;
			border-radius: 46upx;
	}
	>>> .bgf{
		background-color: cyan;
	}
</style>
