<template>
	<view style="height: 100%; background-color: #fff;">
		<!-- <view> -->
			<frame
				ref="frame"
				:pages="domInfo"
				:userInfoJson="userInfo"
				:pagesOption="optionData"
				:currentPageStr="currentPage"
				:shareMessageJsonOption="shareMessageJson"
				@getNewsInfoFun="getNewsInfo"
				@getOptionDataFun="getOptionData"
				@initShareMessageFun="commonMethods"
			></frame>
		<!-- </view> -->
	</view>
</template>
<script>
export default {
	data() {
		return {
			// 页面组件信息
			domInfo: {},
			// url 参数信息
			optionData: {},
			//分享接口所需参数
			shareMessageJson: {},
			// 用户信息
			userInfo: {},
			// 页面初始信息
			newsInfo: {},
			// 页面路由
			currentPage: ''
		};
	},
	watch: {
		newsInfo(value) {
			this.newsInfo = value;
		},
		optionData(value) {
			this.optionData = value;
		},
		shareMessageJson(value) {
			this.shareMessageJson = value;
		},
		currentPage(value) {
			this.currentPage = value;
		}
	},
	components: {},
	created() {},
	onLoad(option) {
		this.optionData = option;
	},

	onReady: function(res) {},

	onShow() {
		this.commonMethods();
	},
	onHide() {},
	mounted() {
		console.log(this.optionData)
			this.$refs.frame.$emit('mountedActivity');
			this.$refs.frame.mountedActivity();
	},
	activated() {
		this.$refs.frame.$emit('activatedActivity');
		this.$refs.frame.activatedActivity();
	},
	onUnload() {
		// 子组件调用父组件生命周期
		this.$refs.frame.$emit('onUnloadActivity');
		this.$refs.frame.onUnloadActivity();
	},
	onHide() {
		// 子组件调用父组件生命周期
		this.$refs.frame.$emit('onHideActivity');
		this.$refs.frame.onHideActivity();
	},
	// 监听APP点击按钮 调起分享菜单
	onNavigationBarButtonTap(val) {
		this.$refs.frame.$emit('onNavigationBarActivity');
		this.$refs.frame.onNavigationBarActivity(val);
	},
	// 点击返回按钮
	onBackPress() {
		this.$refs.frame.$emit('onBackPressActivity');
		// this.$refs.frame.onBackPressActivity();
	},
	// 下拉刷新
	onPullDownRefresh() {
		this.$refs.frame.$emit('onPullDownRefreshActivity');
		this.$refs.frame.onPullDownRefreshActivity();
	},
	// 上拉加载
	onReachBottom() {
		this.$refs.frame.$emit('onReachBottomActivity');
		this.$refs.frame.onReachBottomActivity();
	},
	methods: {
		// 获取初始化数据
		getNewsInfo(data) {
			this.newsInfo = data;
		},
		// 获取最新路由参数
		getOptionData(data) {
			this.optionData = data;
		},
		commonMethods() {
			// 用户信息
			this.userInfo = uni.getStorageSync('userBO');
			this.$netComm.initPages().then(val => {
				this.domInfo = val;
			});
		}
	}
};
</script>
<style>
page {
	height: 100%;
}

.tab {
	position: fixed;
	height: 96rpx;
	background-color: #fff;
	display: flex;
	line-height: 96rpx;
	justify-content: space-around;
	/* padding: 0 120rpx; */
	box-shadow: 0 0 20upx #e5e5e5;
}

.tab .tab-item view {
	padding: 0 20rpx;
	height: 90rpx;
	line-height: 90rpx;
}

.tab .tab-item .active text {
	font-size: 18px;
}

.content {
	padding: 20rpx;
}

.assign-typeinner.train .time view:first-child {
	margin-right: 16rpx;
}

.assign-typeinner.exam .time view {
	margin-left: 100rpx;
}

</style>
