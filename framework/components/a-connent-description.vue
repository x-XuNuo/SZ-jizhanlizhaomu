<template>
	<view>
		<view class="pr15 pl15">
			<!-- 标题 -->
			<view class="class-box pt10 pb15">
				<view class="font-weightbold mb10 f16" v-if="propsData.titleText">{{ propsData.titleText }}</view>

				<view class="x-bc">
					<!-- 现价、划线价 -->
					<view class="x-c" v-if="propsData.price">
						<view class="mr10 f16 font-weightbold text-colorRed">{{ propsData.currency }} {{ propsData.price || '0.0' }}</view>
						<view class="f14 text-decoration-through text-color8C">{{ propsData.currency }} {{ propsData.origin || '0.0' }}</view>
					</view>

					<!-- <view class="x-c" v-if ="this.modifyContentList.chargeFlag == 0">
						<view class="mr10 f16 font-weightbold text-colorRed">免费</view>
					</view> -->
				</view>
			</view>

			<!-- 人物介绍 -->
			<view class="pt15 pb15">
				<view class="font-weightbold mb10 f16">{{ propsData.navNameTitle }}</view>
				<view class="x-start">
					<view class="mr10"><image class="img-usericon" :src="propsData.icon ? propsData.icon : '@/framework/common/assets/image/common/userIcon.png'"></image></view>

					<view class="y-start text-color8C">
						<view class="f13">{{ propsData.navNameType }}</view>
					</view>
				</view>
			</view>

			<!-- 概述 -->
			<view class="pb15 mt15">
				<view class="font-weightbold mb10 f16">{{ propsData.navoverviewTitle }}</view>
				<view class="text-justify f14">{{ propsData.navoverviewContent }}</view>
			</view>
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
			this.propsData = value.propsData;
			this.data = value.data;
			this.operateData = value.operateData;

			// console.log('this.propsData:', this.propsData);
			// console.log('this.data:', this.data);
			// console.log('this.operateData:', this.operateData);
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
			data: {}
		};
	},
	created() {
		console.log('this.attributesData:', this.attributesData);
	},
	mounted() {
		// props参数处理
		this.propsData = this.attributesData.propsData;
		this.data = this.attributesData.data;
		this.operateData = this.attributesData.operateData;

		// console.log("this.propsData:",this.propsData);
		// console.log("this.data:",this.data);
		// console.log("this.operateData:",this.operateData);
	},

	methods: {}
};
</script>

<style scoped>
.class-box {
	border-bottom: 1px solid rgba(234, 234, 234, 1);
}
.img-usericon {
	width: 94upx;
	height: 94upx;
}
</style>
