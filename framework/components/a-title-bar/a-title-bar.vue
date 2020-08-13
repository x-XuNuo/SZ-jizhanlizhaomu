<template>
	<view class="mb15 pad">
		<!-- 标题栏 -->
		<view>
			<view class="text-black f18 font-weightbold pt15 pb15 one-t" v-if="propsData.titleText">{{ propsData.titleText }}</view>
			<view class="x-start text-black one-t f14">
				<!-- 文章副标题 -->
				<!-- <view class="x-bc mr15 " v-if="propsData.desc">
					<view>{{ propsData.desc }}</view>
				</view> -->

				<view class="x-start mr15 width45 tl" v-if="propsData.subTitleText">
					<text v-if="propsData.from">主讲人：</text>
					<view class=" one-t">{{ propsData.subTitleText }}</view>
				</view>

				<view class="x-start tl one-t" v-if="propsData.from">
					<text>来自：</text>
					<view class="text-color668 one-t" @click="clickEventsFun">{{ propsData.from }}</view>
				</view>
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

	mounted() {
		// props参数处理
		this.propsData = this.attributesData.propsData;
		this.data = this.attributesData.data;
		this.operateData = this.attributesData.operateData;
	},
	methods: {
		// 跳转页面
		clickEventsFun() {
			if (this.operateData.change) {
				eval(this.operateData.change);
			}

			let coverParam = this.data ? '?' + this.$U.convertObj(this.data.jointParam) : '';
			if (this.operateData.linkType == "0") {
				this.$R.push(this.operateData.link + coverParam);
				console.log('url:', this.operateData.link + coverParam);
			} else if (this.operateData.linkType == "1") {
				this.$R.jumpLink(this.operateData.link + coverParam);
			}
		}
	}
};
</script>

<style scoped>
.title {
	color: #101010;
}
/* .spk-box{
	width:30%;
}
.from-box{
	width:60%;
} */
</style>
