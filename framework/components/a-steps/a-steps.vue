<template>
	<view v-if="this.propsData.list">
		<!-- mode 为0,1时，均为uView基础提供样式 -->
		<view v-if="this.propsData.mode == '0'">
			<u-steps
				mode="dot"
				:list="this.propsData.list"
				:current="this.propsData.current"
				:direction="this.propsData.direction"
				:activeColor="this.propsData.activeColor"
				:unActiveColor="this.propsData.unActiveColor"
				:icon="this.propsData.icon"
			></u-steps>
		</view>
		
		<view v-if="this.propsData.mode == '1'">
			<ux-steps
				mode="number"
				:list="this.propsData.list"
				:current="this.propsData.current"
				:direction="this.propsData.direction"
				:activeColor="this.propsData.activeColor"
				:unActiveColor="this.propsData.unActiveColor"
				:icon="this.propsData.icon"
				:iconMode ="this.propsData.iconMode"
			></ux-steps>
		</view>
		
		<view v-if="this.propsData.mode == '2'">
			<ux-steps
				mode="number"
				:list="this.propsData.list"
				:current="this.propsData.current"
				:direction="this.propsData.direction"
				:activeColor="this.propsData.activeColor"
				:unActiveColor="this.propsData.unActiveColor"
				:icon="this.propsData.icon"
				:iconMode ="this.propsData.iconMode"
				:stepMode='1'
			></ux-steps>
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
		this.propsData = this.attributesData.propsData ? this.attributesData.propsData : {};
		this.data = this.attributesData.data ? this.attributesData.data : {};
		this.operateData = this.attributesData.operateData ? this.attributesData.operateData : {};
		this.requestData = this.attributesData.requestData ? this.attributesData.requestData : {};
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
