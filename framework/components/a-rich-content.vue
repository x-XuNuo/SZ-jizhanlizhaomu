<template>
	<view class="pad">
		<view class="content">
			<view class="ricetext" v-if="propsData.content"><rich-text :nodes="richContent || ''"></rich-text></view>
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
			this.richContent = this.contentStyle(value.propsData.content);
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
			// 富文本
			richContent: ''
		};
	},
	mounted() {
		// props参数处理
		this.propsData = this.attributesData.propsData;
		this.data = this.attributesData.data;
		this.operateData = this.attributesData.operateData;
		this.richContent = this.contentStyle(this.propsData.content);
	},

	methods: {
		contentStyle(content) {
			encodeURI();
			content = decodeURI(content);
			// console.log("content: " + content);
			let that = this;
			uni.getSystemInfo({
				success: function(res) {
					// console.log('res:', res.screenWidth);
				}
			});
			const regexImg = new RegExp('<img', 'gi');
			const regexP = new RegExp('<p', 'gi');
			const regexText = new RegExp('<text', 'gi');
			const regexDiv = new RegExp('<div', 'gi');
			const regexUl = new RegExp('<ul', 'gi');
			content = content.replace(regexImg, `<img style="border-radius: 4px;max-width: 100%;" class='richImg'`);
			content = content.replace(regexP, `<p style="max-width: 100%;word-wrap: break-word;word-break: break-all;text-align: justify;margin-bottom:10px;" class='richP f14'`);
			content = content.replace(regexDiv, `<div style="word-wrap: break-word;word-break: break-all;" class='richDiv'`);
			content = content.replace(regexUl, `<ul style="padding: 0; list-style: none;" class="ul1"'`);

			return content;
		}
	}
};
</script>

<style scoped>
.content {
	width: 100%;
	margin: 20upx auto 40upx;
	font-size: 34upx;
	text-align: justify;
	padding-bottom: 30upx;
}
.ricetext {
	overflow: hidden;
}
rich-text div {
	width: 100% !important;
}
rich-text p {
	width: 100% !important;
	height: 376upx;
}
.border-radius4 {
	border-radius: 8upx;
}
.img-marktprovide {
	width: 100%;
	height: 376upx;
}
</style>
