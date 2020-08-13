<template>
	<view class="uni-navbar">
		<view
			:class="{
				'uni-navbar--fixed': propsData.fixed == 'true' ? true : false,
				'uni-navbar--shadow': propsData.shadow == 'true' ? true : false,
				'uni-navbar--border': border
			}"
			:style="{ 'background-color': propsData.backgroundColor }"
			class="uni-navbar__content"
		>
			<ux-status-bar v-if="propsData.statusBar" />
			<view :style="{ color: propsData.color, backgroundColor: propsData.backgroundColor }" class="uni-navbar__header uni-navbar__content_view">
				<view @tap="onClickLeft" class="uni-navbar__header-btns uni-navbar__header-btns-left uni-navbar__content_view">
					<view class="uni-navbar__content_view" v-if="propsData.leftIcon"><ux-icons :color="propsData.color" :type="propsData.leftIcon" :size="propsData.size" /></view>
					<view :class="{ 'uni-navbar-btn-icon-left': !propsData.leftIcon }" class="uni-navbar-btn-text uni-navbar__content_view" v-if="propsData.leftText">
						<text :style="{ color: propsData.color, fontSize: '14px' }">{{ propsData.leftText }}</text>
					</view>
					<slot name="left" />
				</view>
				<view class="uni-navbar__header-container uni-navbar__content_view">
					<view class="uni-navbar__header-container-inner uni-navbar__content_view" v-if="propsData.title">
						<text class="uni-nav-bar-text" :style="{ color: propsData.color }">{{ propsData.title }}</text>
					</view>
					<!-- 标题插槽 -->
					<slot name="center" />
				</view>
				<view :class="propsData.title ? 'uni-navbar__header-btns-right' : ''" @tap="onClickRight" class="uni-navbar__header-btns uni-navbar__content_view">
					<view class="uni-navbar__content_view" v-if="propsData.rightIcon">
						<ux-icons :color="propsData.color" :type="propsData.rightIcon" :size="propsData.size" />
					</view>
					<!-- 优先显示图标 -->
					<view class="uni-navbar-btn-text uni-navbar__content_view" v-if="propsData.rightText && !propsData.rightIcon">
						<text class="uni-nav-bar-right-text">{{ propsData.rightText }}</text>
					</view>
					<slot name="right" />
				</view>
			</view>
		</view>
		<view class="uni-navbar__placeholder" v-if="propsData.fixed">
			<ux-status-bar v-if="propsData.statusBar" />
			<view class="uni-navbar__placeholder-view" />
		</view>
	</view>
</template>

<script>
export default {
	name: 'a-nav-bar',
	props: {
		// json配置属性信息
		attributesData: Array | Object,
		// 请求参数
		requestParamData: Array | Object,
		border: {
			type: [String, Boolean],
			default: false
		}
	},
	watch: {
		attributesData(value) {
			this.propsData = value.propsData;
			this.data = value.data;
			this.operateData = value.operateData;
			if (value.propsData.type) {
				this.dataList = value.data.list[value.propsData.type];
				this.operateDataList = value.operateData.list[value.propsData.type];
			}
		},

		requestParamData(value) {
			this.requestParamData = value;
		}
	},
	data() {
		return {
			// json配置属性信息
			propsData: {},
			// 操作相关属性
			operateData: {},
			// 业务属性
			data: {},
			// 依据propsData中的type从data取出的值
			dataList: {},
			// 依据propsData中的type从operateData取出的值
			operateDataList: {}
		};
	},
	mounted() {
		// props参数处理
		this.propsData = this.attributesData.propsData;
		this.data = this.attributesData.data;
		this.operateData = this.attributesData.operateData;

		if (uni.report && this.propsData.title !== '') {
			uni.report('title', this.propsData.title);
		}

		console.log('this.propsData:', this.propsData);
		console.log('this.data:', this.data);
		console.log('this.operateData:', this.operateData);
	},
	methods: {
		// 点击左边
		onClickLeft() {
			let coverParam = '';
			if (this.propsData.leftType) {
				if (this.data.list) {
					this.dataList = this.data.list[this.propsData.leftType];
					coverParam = this.data.list ? '?' + this.$U.convertObj(this.dataList.jointParam) : '';
				}

				if (this.operateData.clickLeft) {
					eval(this.operateData.clickLeft);
				}

				if (this.operateData.list) {
					this.operateDataList = this.operateData.list[this.propsData.leftType];
					if (this.operateDataList.linkType == '0') {
						this.$R.push(operateDataList.link + coverParam);
						// console.log('url:', this.operateDataList.link + coverParam);\
					} else if (this.operateDataList.linkType == '1') {
						this.$R.jumpLink(this.operateDataList.link + coverParam);
						// console.log("link:",this.operateDataList.link + coverParam);
					}
				}
			} else {
				console.log('缺少参数-leftType');
			}
		},
		// 点击右边
		onClickRight() {
			let coverParam = '';
			if (this.propsData.rightType) {
				if (this.data.list) {
					this.dataList = this.data.list[this.propsData.rightType];
					coverParam = this.data.list ? '?' + this.$U.convertObj(this.dataList.jointParam) : '';
				}

				if (this.operateData.clickRight) {
					eval(this.operateData.clickRight);
				}

				if (this.operateData.list) {
					this.operateDataList = this.operateData.list[this.propsData.rightType];
					if (this.operateDataList.linkType == '0') {
						this.$R.push(operateDataList.link + coverParam);
						// console.log('url:', this.operateDataList.link + coverParam);
					} else if (this.operateDataList.linkType == '1') {
						this.$R.jumpLink(this.operateDataList.link + coverParam);
						// console.log("link:",this.operateDataList.link + coverParam);
					}
				}
			} else {
				console.log('缺少参数-rightType');
			}
		},
		// 点击搜索框
		goSearchFun() {
			console.log('goSearchFun');
		}
	}
};
</script>

<style lang="scss" scoped>
$nav-height: 44px;
.uni-nav-bar-text {
	/* #ifdef APP-PLUS */
	font-size: 34rpx;
	/* #endif */
	/* #ifndef APP-PLUS */
	font-size: $uni-font-size-lg;
	/* #endif */
}
.uni-nav-bar-right-text {
	font-size: $uni-font-size-base;
}

.uni-navbar {
	width: 750rpx;
}

.uni-navbar__content {
	position: relative;
	width: 750rpx;
	background-color: $uni-bg-color;
	overflow: hidden;
}

.uni-navbar__content_view {
	/* #ifndef APP-NVUE */
	display: flex;
	/* #endif */
	align-items: center;
	flex-direction: row;
	// background-color: #FFFFFF;
}

.uni-navbar__header {
	/* #ifndef APP-NVUE */
	display: flex;
	/* #endif */
	flex-direction: row;
	width: 750rpx;
	height: $nav-height;
	line-height: $nav-height;
	font-size: 16px;
	// background-color: #ffffff;
}

.uni-navbar__header-btns {
	/* #ifndef APP-NVUE */
	display: flex;
	/* #endif */
	flex-wrap: nowrap;
	// width: 120rpx;
	width: 60upx;
	padding: 0 12upx;
	justify-content: center;
	align-items: center;
}

.uni-navbar__header-btns-left {
	/* #ifndef APP-NVUE */
	display: flex;
	/* #endif */
	width: 150rpx;
	justify-content: flex-start;
}

.uni-navbar__header-btns-right {
	/* #ifndef APP-NVUE */
	display: flex;
	/* #endif */
	width: 150rpx;
	padding-right: 30rpx;
	justify-content: flex-end;
}

.uni-navbar__header-container {
	flex: 1;
}

.uni-navbar__header-container-inner {
	/* #ifndef APP-NVUE */
	display: flex;
	/* #endif */
	flex: 1;
	align-items: center;
	justify-content: center;
	font-size: $uni-font-size-base;
}

.uni-navbar__placeholder-view {
	height: $nav-height;
}

.uni-navbar--fixed {
	position: fixed;
	z-index: 998;
}

.uni-navbar--shadow {
	/* #ifndef APP-NVUE */
	// box-shadow: 0 1px 6px #ccc;
	box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
	/* #endif */
}

.uni-navbar--border {
	border-bottom-width: 1rpx;
	border-bottom-style: solid;
	border-bottom-color: $uni-border-color;
}
</style>
