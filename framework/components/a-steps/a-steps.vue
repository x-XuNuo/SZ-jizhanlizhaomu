<template>
	<view v-if="this.propsData.list">
		<view>
			<!-- this.propsData.mode 中的参数是u-steps组件提供的 -->
			<u-steps :mode="this.propsData.mode" :list="this.propsData.list" :current="this.propsData.current" :direction="this.propsData.direction"
			 :activeColor="this.propsData.activeColor" :unActiveColor="this.propsData.unActiveColor" :icon="this.propsData.icon"
			 :iconMode="this.propsData.iconMode"></u-steps>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'a-steps',
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
			this.propsData = this.attributesData ? this.attributesData.propsData : {};
			this.data = this.attributesData ? this.attributesData.data : {};
			this.operateData = this.attributesData ? this.attributesData.operateData : {};
			this.requestData = this.attributesData ? this.attributesData.requestData : {};
			console.log("steps:",this.attributesData);
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

			// 网络请求
			request() {
				let requestMode = this.propsData.requestMode;
				if (this.requestData.linkurl) {
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

<style></style>
