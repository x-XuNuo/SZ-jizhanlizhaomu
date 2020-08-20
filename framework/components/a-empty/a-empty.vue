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
			requestData: {}
		};
	},
	mounted() {
		// props参数处理
		this.propsData = this.attributesData.propsData;
		this.data = this.attributesData.data;
		this.operateData = this.attributesData.operateData;
		this.requestData = this.attributesData.requestData;
	},

	methods: {
		//数据接口
		setPropsData(propsData) {
			this.propsData = propsData;
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
		setRequestData(requestData) {
			this.requestData = requestData;
		},
		
		// string转换成函数
		evalFun(ev) {
			eval(ev);
		},
		
		// 网络请求
		request() {
			let requestMode = this.requestData.requestMode || '';
			if (requestMode && this.requestData.linkurl) {
				this.$apis
					.requestMode(this.requestData.linkurl, this.requestData.data)
					.then(res => {
						if (this.requestData.success) {
							this.requestData.success = res;
						} else {
							console.log('success:', success);
						}

						this.data = res;
					})
					.catch(err => {
						if (this.requestData.error) {
							this.requestData.error = err;
						} else {
							console.log('error:', error);
						}
					});
			} else {
				console.log('无请求接口，请检查参数');
				return;
			}
		}
	}
};
</script>

<style scoped></style>
