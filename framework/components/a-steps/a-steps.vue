<template>
	<view v-if="this.propsData.stepsList">
		<u-steps
			:mode="this.propsData.mode"
			:list="this.propsData.stepsList"
			:current="this.propsData.current"
			:direction="this.propsData.direction"
			:activeColor="this.propsData.activeColor"
			:unActiveColor="this.propsData.unActiveColor"
			:icon="this.propsData.icon"
			:iconMode="this.propsData.iconMode"
		></u-steps>
	</view>
</template>

<script>
export default {
	name: 'a-steps',
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
		if (this.attributesData) {
			this.propsData = this.attributesData.propsData;
			this.data = this.attributesData.data;
			this.operateData = this.attributesData.operateData;

			// console.log('this.propsData:', this.propsData);
			// console.log('this.data:', this.data);
			// console.log('this.operateData:', this.operateData);
		}
	},

	methods: {}
};
</script>

<style></style>
