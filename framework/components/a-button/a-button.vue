<template>
	<view v-if="propsData" class="uni-padding-wrap uni-common-mt"  @click="clickEventsFun">
		<button :type="propsData.type" class="x-c" :hover-class="propsData.hoverClass" :class="propsData.class">
			<image v-if="propsData.icon" class="icon-size24" :src="propsData.icon"></image>
			<text>{{ propsData.text || '--' }}</text>
		</button>
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
			// let that = this
			// console.log("this.operateData.click：",this.operateData.click)
			// console.log(this)
			
			if (this.operateData.click) {
				// eval('this.$parent.$parent.' + this.operateData.click);
				eval(this.operateData.click);
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

<style></style>
