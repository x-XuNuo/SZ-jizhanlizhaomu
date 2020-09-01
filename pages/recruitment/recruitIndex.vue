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
		height: 50upx;
		position: absolute;
		top: 380upx;
		background-color: #fff;
		border-radius: 50%;
	}
	>>> .listmat{
		margin: 0;
		border-top: 20upx #f5f5f5 solid;
	}
	>>> .list{
		height: 100% !important;
	}
	>>> .QS-SwiperGrid{
		border-bottom: 1px #eee solid;
	}
	>>> .taskBtn{
		font-size: 24upx;    
		background-color: #fd6703;
    color: #fff;
    border-radius:100upx;
		margin-top: 20upx;
	}
	>>> .icon-box{
		width: 135upx;
		height: 38upx;
		vertical-align: middle;
	}
	>>> .grid-img{
		width: 44upx !important;
		height: 44upx !important;
	}
</style>
