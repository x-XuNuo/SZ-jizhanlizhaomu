<template>
	<view>
		<!-- 导航栏 -->
		<!-- <view>{{ modifyContentList.navModule.title }}</view> -->
	</view>
</template>

<script>
export default {
	props: {
		// 页面组件信息
		attributesInfo: Array | Object,
		// 页面渲染信息
		navBarInfo: Array | Object,
		// 接口信息
		apiInfo: Array | Object,
		// 页面路由参数
		pagesOption: Array | Object
	},
	watch: {
		attributesInfo(value) {
			this.attributesData = value;
		},
		navBarInfo(value) {
			this.modifyContentList = value;
			this.modifyTitle();
			this.modifyButton();
		},
		apiInfo(value) {
			this.apiJson = value;
		},
		pagesOption(value) {
			this.optionData = value;
		}
	},
	data() {
		return {
			modifyContentList: this.navBarInfo || {},
			apiJson: this.apiInfo || {},
			optionData: this.pagesOption || {},
			attributesData: this.attributesInfo || {}
		};
	},
	mounted() {
		if (this.modifyContentList.navModule) {
			this.modifyTitle();
			this.modifyButton();
		}
	},
	methods: {
		// 修改导航栏标题
		modifyTitle() {
			if (this.modifyContentList.navModule) {
				uni.setNavigationBarTitle({
					title: this.modifyContentList.navModule.title || ''
				});
			}
		},

		// 修改APP上导航栏上的按钮
		modifyButton() {
			// this.attributesData.isShare 在APP端是否分享
			// #ifdef APP-PLUS

			var webView = this.$mp.page.$getAppWebview();
			if (this.attributesData.isShare) {
				webView.setTitleNViewButtonStyle(0, {
					type: 'share',
					float: 'right'
				});
			} else {
				webView.setTitleNViewButtonStyle(0, {
					type: 'none',
					float: 'right'
				});
			}

			// #endif
		}
	}
};
</script>

<style></style>
