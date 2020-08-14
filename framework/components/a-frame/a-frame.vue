<template>
	<view v-if="pages && pageData">
		<view v-for="(item, index) in pageData" :key="index">
			<!-- 组件模板 -->
			<block>
				<slot name="ax-template-prove"></slot>
				
				<slot name="ax-template">
					<ax-template
						:ref=" 'axTemplate' + index "
						v-if="item.magicalCoder.identifier == 'ax-template'"
						:attributesData="$U.processDataFun(item.attributes)"
						:requestParamData="requestParamData"
					>
					</ax-template>
				</slot>
				<slot name="ax-template-below"></slot>
			</block>
			
		
			<block>
				<slot name="ax-date-search-prove"></slot>
				
				<slot name="ax-date-search">
					<ax-date-search
						ref="axDateSearch"
						v-if="item.magicalCoder.identifier == 'ax-date-search'"
						:attributesData="$U.processDataFun(item.attributes)"
						:requestParamData="requestParamData"
					>
					</ax-date-search>
				</slot>
				<slot name="ax-date-search-below"></slot>
			</block>
			
			<!-- 标题栏 -->
			<block v-if="item.magicalCoder.identifier == 'a-title-bar'">
				<slot name="a-title-bar-prove"></slot>
				<slot name="a-title-bar">
					<a-title-bar
						v-if="item.magicalCoder.identifier == 'a-title-bar'"
						:attributesData="$U.processDataFun(item.attributes)"
						:requestParamData="requestParamData"
					></a-title-bar>
				</slot>
				<slot name="a-title-bar-below"></slot>
			</block>

			<!-- 富文本 -->
			<block v-if="item.magicalCoder.identifier == 'a-rich-content'">
				<slot name="a-rich-content-prove"></slot>
				<slot name="a-rich-content">
					<a-rich-content
						v-if="item.magicalCoder.identifier == 'a-rich-content'"
						:attributesData="$U.processDataFun(item.attributes)"
						:requestParamData="requestParamData"
					></a-rich-content>
				</slot>
				<slot name="a-rich-content-below"></slot>
			</block>

			<!-- 发表评论 -->
			<block v-if="item.magicalCoder.identifier == 'a-comment'">
				<slot name="a-comment-prove"></slot>
				<slot name="a-comment">
					<a-comment
						v-if="item.magicalCoder.identifier == 'a-comment'"
						:attributesData="$U.processDataFun(item.attributes)"
						:requestParamData="requestParamData"
					></a-comment>
				</slot>
				<slot name="a-comment-below"></slot>
			</block>

			<!-- 选项卡 -->
			<block v-if="item.magicalCoder.identifier == 'a-tabs'">
				<slot name="a-tabs-prove"></slot>
				<slot name="a-tabs">
					<a-tabs v-if="item.magicalCoder.identifier == 'a-tabs'" :attributesData="$U.processDataFun(item.attributes)" :requestParamData="requestParamData"></a-tabs>
				</slot>
				<slot name="a-tabs-below"></slot>
			</block>

			<!-- 按钮组件 -->
			<block v-if="item.magicalCoder.identifier == 'a-button'">
				<slot name="a-button-prove"></slot>
				<slot name="a-button">
					<a-button
						v-if="item.magicalCoder.identifier == 'a-button'"
						:attributesData="$U.processDataFun(item.attributes)"
						:requestParamData="requestParamData"
					></a-button>
				</slot>
				<slot name="a-button-below"></slot>
			</block>

			<!-- 音频组件 -->
			<block v-if="item.magicalCoder.identifier == 'a-audio'">
				<slot name="a-audio-prove"></slot>
				<slot name="a-audio">
					<a-audio v-if="item.magicalCoder.identifier == 'a-audio'" :attributesData="$U.processDataFun(item.attributes)" :requestParamData="requestParamData"></a-audio>
				</slot>
				<slot name="a-audio-below"></slot>
			</block>

			<!-- 面板列表组件 -->
			<block v-if="item.magicalCoder.identifier == 'a-card-list'">
				<slot name="a-card-list-prove"></slot>
				<slot name="a-card-list">
					<a-card-list
						v-if="item.magicalCoder.identifier == 'a-card-list'"
						:attributesData="$U.processDataFun(item.attributes)"
						:requestParamData="requestParamData"
					></a-card-list>
				</slot>
				<slot name="a-card-list-below"></slot>
			</block>

			<!-- 两栏列表组件 -->
			<block v-if="item.magicalCoder.identifier == 'a-two-columns-list'">
				<slot name="a-two-columns-list-prove"></slot>
				<slot name="a-two-columns-list">
					<a-two-columns-list
						v-if="item.magicalCoder.identifier == 'a-two-columns-list'"
						:attributesData="$U.processDataFun(item.attributes)"
						:requestParamData="requestParamData"
					></a-two-columns-list>
				</slot>
				<slot name="a-two-columns-list-below"></slot>
			</block>

			<!-- 内容介绍组件 -->
			<block v-if="item.magicalCoder.identifier == 'a-connent-description'">
				<slot name="a-connent-description-prove"></slot>
				<slot name="a-connent-description">
					<a-connent-description
						v-if="item.magicalCoder.identifier == 'a-connent-description'"
						:attributesData="$U.processDataFun(item.attributes)"
						:requestParamData="requestParamData"
					></a-connent-description>
				</slot>
				<slot name="a-connent-description-below"></slot>
			</block>

			<!-- 导航栏组件 -->
			<block v-if="item.magicalCoder.identifier == 'a-nav-bar'">
				<slot name="a-nav-bar-prove"></slot>
				<slot name="a-nav-bar">
					<a-nav-bar v-if="item.magicalCoder.identifier == 'a-nav-bar'" :attributesData="$U.processDataFun(item.attributes)" :requestParamData="requestParamData">
						<!-- <block slot="center">
							<view class="input-view" @click="goSearchFun">
								<ux-icons class="input-uni-icon" type="search" size="24" color="#007aff" />
								<input
									confirm-type="search"
									class="nav-bar-input bg-fff border-radius16 tl"
									placeholder-style="color:#ccc;"
									type="text"
									disabled="false"
									placeholder="请输入您要搜索的关键字"
								/>
							</view>
						</block> -->
					</a-nav-bar>
				</slot>
				<slot name="a-nav-bar-below"></slot>
			</block>

			<!-- 轮播图组件 -->
			<block v-if="item.magicalCoder.identifier == 'a-swiper'">
				<slot name="a-swiper-prove"></slot>
				<slot name="a-swiper">
					<a-swiper
						v-if="item.magicalCoder.identifier == 'a-swiper'"
						:attributesData="$U.processDataFun(item.attributes)"
						:requestParamData="requestParamData"
					></a-swiper>
				</slot>
				<slot name="a-swiper-below"></slot>
			</block>

			<!-- icon列表组件 -->
			<block v-if="item.magicalCoder.identifier == 'a-icon-list'">
				<slot name="a-icon-list-prove"></slot>
				<slot name="a-icon-list">
					<a-icon-list
						v-if="item.magicalCoder.identifier == 'a-icon-list'"
						:attributesData="$U.processDataFun(item.attributes)"
						:requestParamData="requestParamData"
					></a-icon-list>
				</slot>
				<slot name="a-icon-list-below"></slot>
			</block>

			<!-- 一行两列卡片组件 -->
			<block v-if="item.magicalCoder.identifier == 'a-two-columns-card'">
				<slot name="a-two-columns-card-prove"></slot>
				<slot name="a-two-columns-card">
					<a-two-columns-card
						v-if="item.magicalCoder.identifier == 'a-two-columns-card'"
						:attributesData="$U.processDataFun(item.attributes)"
						:requestParamData="requestParamData"
					></a-two-columns-card>
				</slot>
				<slot name="a-two-columns-card-below"></slot>
			</block>
			
			<!-- 横向选项卡组件 -->
			<block v-if="item.magicalCoder.identifier == 'a-crosswise-tab'">
				<slot name="a-crosswise-tab-prove"></slot>
				<slot name="a-crosswise-tab">
					<a-crosswise-tab
						ref="aCrosswiseTab"
						v-if="item.magicalCoder.identifier == 'a-crosswise-tab'"
						:attributesData="$U.processDataFun(item.attributes)"
						:requestParamData="requestParamData"
					></a-crosswise-tab>
				</slot>
				<slot name="a-crosswise-tab-below"></slot>
			</block>
			
			<!-- 日历组件 -->
			<block v-if="item.magicalCoder.identifier == 'a-calendar'">
				<slot name="a-calendar-prove"></slot>
				<slot name="a-calendar">
					<a-calendar
						v-if="item.magicalCoder.identifier == 'a-calendar'"
						:attributesData="$U.processDataFun(item.attributes)"
						:requestParamData="requestParamData"
					></a-calendar>
				</slot>
				<slot name="a-calendar-below"></slot>
			</block>
			
			<!-- 卡片组件 -->
			<block v-if="item.magicalCoder.identifier == 'a-card'">
				<slot name="a-card-prove"></slot>
				<slot name="a-card">
					<a-card
						v-if="item.magicalCoder.identifier == 'a-card'"
						:attributesData="$U.processDataFun(item.attributes)"
						:requestParamData="requestParamData"
					></a-card>
				</slot>
				<slot name="a-card-below"></slot>
			</block>
			
			<!-- 列表通用组件 -->
			<block>
				<slot name="a-list-prove"></slot>
				<slot name="a-list">
					<a-list
						ref="aList"
						v-if="item.magicalCoder.identifier == 'a-list'"
						:attributesData="$U.processDataFun(item.attributes)"
						:requestParamData="requestParamData"
					></a-list>
				</slot>
				<slot name="a-list-below"></slot>
			</block>
			
			<!-- 列表通用组件 -->
			<block>
				<slot name="a-steps-prove"></slot>
				<slot name="a-steps">
					<a-steps
						v-if="item.magicalCoder.identifier == 'a-steps'"
						:attributesData="$U.processDataFun(item.attributes)"
						:requestParamData="requestParamData"
					></a-steps>
				</slot>
				<slot name="a-steps-below"></slot>
			</block>
			
		</view>
	</view>
</template>

<script>
export default {
	props: {
		// 请求参数
		requestParamData: Array | Object
	},
	data() {
		return {
			// 请求页面组件JSON
			pages: {},
			// 页面配置信息
			attributesData: {},
			// 页面组件信息
			pageData: []
		};
	},
	watch: {},
	computed: {},
	created() {},
	mounted() {
		this.init();
	},
	methods: {
		// 组件初始化
		init() {
			this.$U.initPages().then(val => {
				this.pages = decodeURIComponent(val);
				this.attributesData = val.attributes;
				if(val.magicalCoder){
					this.pageData = val.magicalCoder.children;
					console.log('this.pageDta:', this.pageData);
				}else{
					console.log("请检查JSON是否正确");
				}
				
			});
		},
		// 处理数据
		fetchData() {
			this.pageData.forEach((item, index) => {
				data.forEach((item, index) => {
					if (item.magicalCoder.children.length > 0) {
						this.fetchData(item.magicalCoder.children);
					}
				});
			});
		},

		// 点击搜索框
		goSearchFun() {
			this.$emit('clickSearch');
		}
	}
};
</script>

<style scoped>
page {
	background-color: #ffffff;
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
</style>
