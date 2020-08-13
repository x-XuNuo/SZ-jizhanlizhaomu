<template>
	<view class="tabs-box">
		<scroll-view style="height: 100%;" scroll-y="true">
			<view style="height: 100%;width: 100%;" ref="scrollHeight">
				<ux-wuc-tab
					ref="tabHeight"
					:tab-list="propsData.tabList"
					:tabCur="parseInt(propsData.tabCur)"
					:tab-class=" 'tc ' + propsData.tabClass"
					:select-class="propsData.selectClass"
					:textFlex="textFlex"
					:style="propsData.tabStyle"
					:mode="propsData.mode"
					@change="tabChange"
				></ux-wuc-tab>

				<swiper
					:style="{ height: height + 'px' }"
					:current="parseInt(propsData.tabCur)"
					class="swiper bg-fff"
					duration="300"
					:circular="true"
					indicator-color="rgba(255,255,255,0)"
					indicator-active-color="rgba(255,255,255,0)"
				>
					<swiper-item v-for="(item, index) in propsData.tabList" :key="index">
						<scroll-view :style="{ height: scrollHeight + 'px' }" scroll-y="true">
							
							<view v-if="index == 0">
								<slot name="body-0">
									<view v-if="item.component">
										<{{ item.component }}></{{ item.component }}>
									</view>
								</slot>
							</view>
							
							<view v-if="index == 1">
								<slot name="body-1">
									<view v-if="item.component">
										<{{ item.component }}></{{ item.component }}>
									</view>
								</slot>
							</view>
							
							<view v-if="index == 2">
								<slot name="body-2">
									<view v-if="item.component">
										<{{ item.component }}></{{ item.component }}>
									</view>
								</slot>
							</view>
							
						</scroll-view>
					</swiper-item>
				</swiper>
			</view>
		</scroll-view>
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
			this.propsData = value.propsData || '';
			this.data = value.data || '';
			this.operateData = value.operateData || '';
			this.textFlex = value.propsData.textFlex == 'true' ? true : false;
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
			//设置swiper高度
			height: 0,
			// swiper-item 高度
			scrollHeight: 0,
			// 是否平分
			textFlex: false
		};
	},
	onLoad() {},

	mounted() {
		this.init();
	},

	methods: {
		init() {
			let that = this;
			// props参数处理
			this.propsData = this.attributesData.propsData || '';
			this.data = this.attributesData.data || '';
			this.operateData = this.attributesData.operateData || '';
			this.textFlex = this.propsData.textFlex == 'true' ? true : false;
			console.log('propsData:', this.propsData);
			console.log('data:', this.data);
			console.log('operateData:', this.operateData);

			uni.getSystemInfo({
				//设置swiper高度
				success: function(res) {
					that.height = res.windowHeight - 55;
					if (res.screenWidth > 375) {
						that.scrollHeight = that.height - 270;
					} else {
						that.scrollHeight = that.height - 260;
					}
				}
			});
		},
		swiperChange(e) {
			let { current } = e.target;
			this.operateData.tabCur = current;
			if (this.operateData && this.operateData.change) {
				// console.log("change:",this.$U.htmlDecodeByRegExp(this.operateData.change));
				eval(this.$U.htmlDecodeByRegExp(this.operateData.change));
			}
		},
		
	}
};
</script>

<style scoped>
.tabs-box {
	position: fixed;
	top: 430upx;
	z-index: 990;
	height: 100%;
	width: 100%;
}
.swiper {
	width: 100%;
}
</style>
