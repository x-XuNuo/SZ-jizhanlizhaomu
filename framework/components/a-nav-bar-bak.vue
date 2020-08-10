<template>
	<view>
		<u-nav-bar
			:title="propsData.title"
			:leftText="propsData.leftText"
			:rightText="propsData.rightText"
			:left-icon="propsData.leftIcon"
			:right-icon="propsData.rightIcon"
			:size="propsData.size"
			:fixed="propsData.fixed ? true : false"
			:statusBar="propsData.statusBar ? true : false"
			:shadow="propsData.shadow ? true : false"
			:color="propsData.color"
			:background-color="propsData.backgroundColor"
			@clickLeft="clickLeftFun"
			@clickRight="clickRightFun"
		>
			<!-- <block slot ="center">
				<view class="input-view">
					<uni-icons class="input-uni-icon" type="search" :size="propsData.size" color="#666666" />
					<input confirm-type="search" class="nav-bar-input" type="text" placeholder="输入搜索关键词" @confirm="confirm" />
				</view>
			</block> -->

			<slot name="left"><block slot="left" /></slot>
			

			<slot name="center">
				<block slot="center">
					<view class="input-view" @click="goSearchFun">
						<u-icons class="input-uni-icon" type="search" :size="propsData.size" :color="propsData.color" />
						<input
							confirm-type="search"
							class="nav-bar-input bg-fff border-radius16 tl"
							placeholder-style="color:#ccc;"
							type="text"
							disabled="false"
							placeholder="请输入您要搜索的关键字"
						/>
					</view>
				</block>
			</slot>

			<slot name="right"><block slot="right" /></slot>
		</u-nav-bar>
	</view>
</template>

<script>
export default {
	props: {
		// json配置属性信息
		attributesData: Array | Object,
		// 请求参数
		requestParamData: Array | Object
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
		if (this.propsData.type) {
			this.dataList = this.data.list[this.propsData.type];
			this.operateDataList = this.operateData.list[this.propsData.type];
		}

		// console.log("this.propsData:",this.propsData);
		// console.log("this.data:",this.data);
		// console.log("this.operateData:",this.operateData);
	},
	methods: {
		// 点击左边
		clickLeftFun() {
			if (this.propsData.type) {
				let coverParam = this.dataList ? '?' + this.$U.convertObj(this.dataList.jointParam) : '';
				if (this.operateData.clickLeft) {
					eval(this.operateData.clickLeft);
				}

				if (!this.operateDataList.linkType) {
					this.$R.push(operateDataList.link + coverParam);
					// console.log('url:', this.operateDataList.link + coverParam);
				} else {
					this.$R.jumpLink(this.operateDataList.link + coverParam);
					// console.log("link:",this.operateDataList.link + coverParam);
				}
			}
		},
		// 点击右边
		clickRightFun() {
			if (this.propsData.type) {
				let coverParam = this.dataList ? '?' + this.$U.convertObj(this.dataList.jointParam) : '';
				if (this.operateData.clickRight) {
					eval(this.operateData.clickRight);
				}

				if (!this.operateDataList.linkType) {
					this.$R.push(operateDataList.link + coverParam);
					// console.log('url:', this.operateDataList.link + coverParam);
				} else {
					this.$R.jumpLink(this.operateDataList.link + coverParam);
					// console.log("link:",this.operateDataList.link + coverParam);
				}
			}
		},
		// 点击搜索框
		goSearchFun() {
			console.log('goSearchFun');
		}
	}
	// onPullDownRefresh() {
	// 	console.log('onPullDownRefresh');
	// 	setTimeout(function() {
	// 		uni.stopPullDownRefresh();
	// 		console.log('stopPullDownRefresh');
	// 	}, 1000);
	// }
};
</script>

<style>
/* 头条小程序组件内不能引入字体 */
/* #ifdef MP-TOUTIAO */
@font-face {
	font-family: uniicons;
	font-weight: normal;
	font-style: normal;
	src: url('~@/static/uni.ttf') format('truetype');
}

/* #endif */

/* #ifndef APP-NVUE */
page {
	display: flex;
	flex-direction: column;
	box-sizing: border-box;
	background-color: #efeff4;
	min-height: 100%;
	height: auto;
}

view {
	font-size: 14px;
	line-height: inherit;
}

.example {
	padding: 0 15px 15px;
}

.example-info {
	padding: 15px;
	color: #3b4144;
	background: #ffffff;
}

.example-body {
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: center;
	padding: 0;
	font-size: 14px;
	background-color: #ffffff;
}

/* #endif */
.example {
	padding: 0 15px;
}

.example-info {
	/* #ifndef APP-NVUE */
	display: block;
	/* #endif */
	padding: 15px;
	color: #3b4144;
	background-color: #ffffff;
	font-size: 14px;
	line-height: 20px;
}

.example-info-text {
	font-size: 14px;
	line-height: 20px;
	color: #3b4144;
}

.example-body {
	flex-direction: column;
	padding: 15px;
	background-color: #ffffff;
}

.word-btn-white {
	font-size: 18px;
	color: #ffffff;
}

.word-btn {
	/* #ifndef APP-NVUE */
	display: flex;
	/* #endif */
	flex-direction: row;
	align-items: center;
	justify-content: center;
	border-radius: 6px;
	height: 48px;
	margin: 15px;
	background-color: #007aff;
}

.word-btn--hover {
	background-color: #4ca2ff;
}

.uni-nav-bar-text {
	font-size: 28rpx;
}

.city {
	/* #ifndef APP-PLUS-NVUE */
	display: flex;
	/* #endif */
	flex-direction: row;
	align-items: center;
	justify-content: flex-start;
	/* width: 160rpx;
 */
	margin-left: 4px;
}

.input-view {
	/* #ifndef APP-PLUS-NVUE */
	display: flex;
	/* #endif */
	flex-direction: row;
	/* width: 500rpx;
 */
	flex: 1;
	background-color: #f8f8f8;
	height: 30px;
	border-radius: 15px;
	padding: 0 15px;
	flex-wrap: nowrap;
	margin: 7px 0;
	line-height: 30px;
}

.input-uni-icon {
	line-height: 30px;
}

.nav-bar-input {
	height: 30px;
	line-height: 30px;
	/* #ifdef APP-PLUS-NVUE */
	width: 370rpx;
	/* #endif */
	padding: 0 5px;
	font-size: 28rpx;
	background-color: #f8f8f8;
}

.example-body {
	padding: 0;
}
</style>
