<template>
	<view>
		<a-frame :requestParamData="requestParamData" @clickSearch="clickSearch">
			
			<block slot="a-swiper-below">
					<view class="line-common-inner"></view>
			</block>
			
			<block slot="a-icon-list-below">
					<view class="line-common-inner"></view>
			</block>
			
			<!-- 测试修改数据 -->
			<!-- 使用插槽 -->
			<block slot="a-icon-list-prove">
				<!-- 渲染数据 -->
				<view class="" v-for="(item,index) in list" :key="index">
					{{item.name}}
				</view>
			</block>
			
			<block slot="a-button-prove">
				<view class="button-prove">
					sdfghjkl;
				</view>
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
	.line-common-inner {
		background: #FFFFFF;
		height: 20upx;
		width: 100%;
	}
	.button-prove{
		background-color: cyan;
		width: 100%;
		/* height: 20upx; */
	}
  .x-c {
		width: 96% !important;
		background-color: #fd6703 !important;
		color: #fff !important;
	}
</style>
