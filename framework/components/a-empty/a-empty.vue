<template>
	<view>
		<u-empty
			:color="this.propsData.color"
			:text="this.propsData.text"
			:icon-color="this.propsData.iconColor"
			:icon-size="this.propsData.iconSize"
			:src="this.propsData.src"
			:font-size="this.propsData.fontSize"
			:mode="this.propsData.mode"
			:show="this.propsData.show"
			:margin-top="this.propsData.marginTop"
		></u-empty>
	</view>
</template>

<script>
export default {
	props: {
		// json配置属性信息
		attributesData: Array | Object
	},
	data() {
		return {
			// json配置属性信息
			propsData: {},
			// 操作相关属性
			operateData: {},
			// 业务属性
			data: {},
			// 请求相关属性
			reqestData: {}
		};
	},
	mounted() {
		// props参数处理
		this.propsData = this.attributesData.propsData;
		this.data = this.attributesData.data;
		this.operateData = this.attributesData.operateData;
		this.reqestData = this.attributesData.reqestData;
	},

	methods: {
		//数据接口
		setPropsData(val) {
			this.propsData = val;
		},

		// 业务属性接口
		setData(data) {
			this.data = data;
		},

		//操作属性接口
		setOperateData(operateData) {
			this.operateData = operateData;
		},

		//请求接口
		setRequestData(reqestData) {
			this.reqestData = reqestData;
		},

		// 请求接口示例
		request() {
			this.$apis
				.POST(this.reqestData.linkurl, this.reqestData.data)
				.then(res => {
					if (this.reqestData.success) {
						this.reqestData.success = res;
					}

					this.data = res;
				})
				.catch(err => {});
		}
	}
};
</script>

<style></style>
