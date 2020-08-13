<template>
	<view>
		<!-- 基础卡片 -->
		<view class="example-body" v-if="this.propsData.mode == 'basic'">
			<view class="example-box">
				<ux-card
					:title="this.propsData.titleText"
					:isFull="this.propsData.isFull == 'true' ? true : false"
					:isShadow="this.propsData.isShadow == 'true' ? true : false"
					:note="this.propsData.note"
					:extra="this.propsData.extra"
					@click="clickCard"
				>
					<text class="content-box-text">通栏卡片，左右上下没有间距，用户可自定义卡片距离等信息</text>
				</ux-card>
			</view>
		</view>

		<!-- 图文卡片 -->
		<view class="example-body" v-if="this.propsData.mode == 'style'">
			<ux-card
				:is-shadow="this.propsData.isShadow == 'true' ? true : false"
				:title="this.propsData.titleText"
				:mode="this.propsData.mode"
				:thumbnail="this.propsData.thumbnail"
				:extra="this.propsData.extra"
				:note="this.propsData.note"
				@click="clickCard"
			>
				<text class="content-box-text">
					图文卡片支持传入一张图片，在最上方显示，标题作为图片描述，额外信息作为内容标题，通常作用为作者信息或发布时间描述，自行配置是否需要底部信息
				</text>
				<!-- <block slot="footer">
					<view class="footer-box">
						<view class="" @click.stop="footerClick('喜欢')"><text class="footer-box__item">喜欢</text></view>
						<view class="" @click.stop="footerClick('评论')"><text class="footer-box__item">评论</text></view>
						<view class="" @click.stop="footerClick('分享')"><text class="footer-box__item">分享</text></view>
					</view>
				</block> -->
			</ux-card>
		</view>

		<!-- 标题卡片 -->
		<view class="example-body" v-if="this.propsData.mode == 'title'">
			<ux-card
				:isShadow="this.propsData.isShadow == 'true' ? true : false"
				:title="this.propsData.title"
				:subTitle="this.propsData.subTitle"
				:mode="this.propsData.mode"
				:thumbnail="this.propsData.thumbnail"
				:extra="this.propsData.extra"
				:note="this.propsData.note"
				@click="clickCard"
			>
				<view>
					<view class="image-box"><image class="image" mode="aspectFill" :src="this.propsData.thumbnail" /></view>
					<view class="content-box"><text class="content-box-text">标题卡片带有一个双标题头部，右侧为额外描述信息 ，内容可自定义实现</text></view>
				</view>
				<!-- <template slot="footer">
					<view class="footer-box">
						<view @click.stop="footerClick('喜欢')"><text class="footer-box__item">喜欢</text></view>
						<view @click.stop="footerClick('评论')"><text class="footer-box__item">评论</text></view>
						<view @click.stop="footerClick('分享')"><text class="footer-box__item">分享</text></view>
					</view>
				</template> -->
			</ux-card>
		</view>

		<!-- 带有icon的卡片 -->
		<view class="example-body" v-if="this.propsData.mode == 'icon-card'">
			<ux-card
				:isShadow="this.propsData.isShadow == 'true' ? true : false"
				:title="this.propsData.titleText"
				:subTitle="this.propsData.subTitle"
				:mode="this.propsData.mode"
				:thumbnail="this.propsData.thumbnail"
				:extra="this.propsData.extra"
				:note="this.propsData.mote"
				@click="clickCard"
			>
				<view>
					<view class="f14 pb10 border-line one-t">
						<ux-icons v-if="this.propsData.leftIcon" class="mr5" :color="this.propsData.leftIconColor" :type="this.propsData.leftIcon" />
						<text>{{ this.propsData.titleText }}</text>
					</view>
					<view class="content-box" v-if="this.propsData.cardContentList">
						<view v-for="(item, index) in this.propsData.cardContentList" :key="index">
							<view class="f14 mb10">
								<text v-if="item.title">{{ item.title }}</text>
								：
								<text v-if="item.content" class="mr10">{{ item.content }}</text>
								<ux-icons v-if="item.icon" class="mr5" :color="item.iconColor" :type="item.icon" @click="iconModalClick(index)" />
							</view>
							
						</view>
						
						<!-- 弹窗组件 -->
						<view>
							{{ this.list }}
							<a-modal
								:title="this.list.iconModalTitle"
								:content="this.list.iconModalContent"
								:show="this.list.iconModalShow"
								:confirmColor="this.list.iconModalBtnColor"
								:confirmText="this.list.iconModalBtnText"
								:showCancel="false"
								@confirm="confirm(list)"
							/>
						</view>
						
						
					</view>
				</view>
			</ux-card>
		</view>
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
			console.log('this.propsData:', this.propsData);
			console.log('this.data:', this.data);
			console.log('this.operateData:', this.operateData);
		},

		requestParamData(value) {
			this.requestParamData = value;
		},
		
		list(value){
			this.list = value;
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
			list:[],
			// 依据propsData中的type从data取出的值
			dataList: {},
			// 依据propsData中的type从operateData取出的值
			operateDataList: {}
		};
	},
	mounted() {
		// props参数处理
		if(this.attributesData){
			this.propsData = this.attributesData.propsData || '';
			this.data = this.attributesData.data || '';
			this.operateData = this.attributesData.operateData || '';
		}

		// console.log('this.propsData:', this.propsData);
		// console.log('this.data:', this.data);
		// console.log('this.operateData:', this.operateData);
	},
	methods: {
		clickCard(){
			let coverParam = '';
			if (this.propsData.type) {
			
				if (this.operateData.click) {
					eval(this.operateData.click);
				}
				coverParam = this.data ? '?' + this.$U.convertObj(this.data.jointParam) : '';
				if (this.operateData.list) {
					this.operateDataList = this.operateData.list[this.propsData.type];
					
					if (this.operateDataList.linkType == '0') {
						this.$R.push(operateDataList.link + coverParam);
						// console.log('url:', this.operateDataList.link + coverParam);
						
					} else if (this.operateDataList.linkType == '1') {
						this.$R.jumpLink(this.operateDataList.link + coverParam);
						// console.log("link:",this.operateDataList.link + coverParam);
						
					}
					
				}
			} else {
				console.log('缺少参数-type');
			}
			
			
		},
		// 点击icon时触发
		iconModalClick(index) {
			console.log("iconModalClick:",index);
			this.list = this.propsData.cardContentList[index];
			this.list.index = index;
			// console.log("this.list:",this.list);
		},
		
		// 点击icon触发弹窗，点击弹窗按钮事件
		confirm(params){
			// params 是当前点击icon相关的属性
			console.log("this.list:",params);
			this.list = [];
		}
	}
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
	/* #ifndef APP-NVUE */
	display: flex;
	/* #endif */
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

.example-body {
	/* #ifndef APP-NVUE */
	display: block;
	/* #endif */
	padding: 1px 0;
}

.example-box {
	margin: 12px 0;
}

.image-box {
	/* #ifndef APP-NVUE */
	display: flex;
	flex-direction: column;
	/* #endif */
	height: 350rpx;
	overflow: hidden;
}

.image {
	/* #ifndef APP-NVUE */
	width: 100%;
	height: 100%;
	/* #endif */
	flex: 1;
}

.content-box {
	padding-top: 20rpx;
}

.content-box-text {
	font-size: 12px;
	line-height: 22px;
}

.footer-box {
	/* #ifndef APP-NVUE */
	display: flex;
	/* #endif */
	justify-content: space-between;
	flex-direction: row;
}

.footer-box__item {
	align-items: center;
	padding: 2px 0;
	font-size: 12px;
	color: #666;
}
</style>
