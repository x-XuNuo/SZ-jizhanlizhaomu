<template>
	<view>
		<view class="recruitList">
			<img src="../../../static/top_Background.png" alt="" style="width: 100%;">
			<a-frame :requestParamData="requestParamData" @clickSearch="clickSearch">
				<!-- <block slot="a-swiper-below">
						<view class="line-common-inner"></view>
				</block>
				<block slot="a-icon-list-below">
						<view class="line-common-inner"></view>
				</block> -->
		<!-- 		<block slot="a-button" style="color: cyan;">
				</block> -->
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
		// 测试数据
		// let userInfo ={
		// 	"id": "123",
		// 	"name": "test123",
		// 	"phone": "手机号码"
		// }
		
		// this.requestParamData = {
		// 	"id": "456",
		// 	"name": "test456"
		// }
		
		// uni.setStorageSync("userInfo",userInfo);
		
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
		}
	}
};
</script>

<style scoped>
	/* .line-common-inner {
		background: #f0eff5;
		height: 20upx;
		width: 100%;
	} */
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
			top : 210upx;
			padding: 10px;
			background-color: #fff;
			border-radius: 10px;
			box-shadow: 0 0 10px #e5e5e5;
		}
	>>> .query{		background-color: #fd6703;		color: #fff;		border-radius: 46upx;
		margin: 20upx 0;	}	>>> .class-nextStep{		width: 90%;		position: fixed;		bottom: 0;		background-color: #fd6703;		color: #fff;		border-radius: 46upx;
		margin: 10px 5%;	}
</style>
