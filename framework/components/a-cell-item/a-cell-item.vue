<template>
	<view>
		
		<view v-if="this.propsData.mode == 'default'">
			<u-cell-group
			v-for="(item, index) in this.data.list" 
			:key="index"
			:title="item.title"
			:border="item.border"
			:title-style="item.titleStyle">
				<u-cell-item v-if="item.cellItemList" v-for="(item2,index2) in item.cellItemList" 
				:title="item2.title"
				:icon="item2.icon"
				:icon-style="item2.iconStyle"
				:value="item2.value"
				:label="item2.label"
				:border-bottom="item2.borderBottom"
				:border-top="item2.borderTop"
				:border-gap="item2.borderGap"
				:hover-class="item2.hoverClass"
				:arrow="item2.arrow"
				:arrow-direction="item2.arrowDirection"
				:title-style="item2.titleStyle"
				:required="item2.required"
				:value-style="item2.valueStyle"
				:label-style="item2.labelStyle"
				:bg-color="item2.bgColor"
				:index="index2"
				:title-width="item2.titleWidth"
				:icon-size="item2.iconSize"
				:center="item2.center"
				></u-cell-item>
			</u-cell-group>
		</view>
		
	</view>
</template>

<script>
export default {
	name: 'a-cell-item',
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
		//初始化数据
		// this.request();
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
			let requestApi = '';
			if (this.requestData.requestMode && this.requestData.remoteApi) {
				if (this.requestData.requestMode == 'POST') {
					requestApi = this.$apis.POST(this.requestData.remoteApi, this.requestData.requestParam, this.requestData.isEnable);
				} else if (this.requestData.requestMode == 'GET') {
					requestApi = this.$apis.GET(this.requestData.remoteApi, this.requestData.requestParam, this.requestData.isEnable);
				} else {
					console.log('请检查参数是否正确！');
				}

				requestApi.then(res => {
						if (typeof this.requestData.success == 'function') {
							this.requestData.success(res);
						} else if (typeof this.requestData.success == 'string') {
							try {
								let string = 'this.$root.' + this.requestData.success;
								this.evalFun(string);
							} catch (e) {
								console.log('错误信息：', e);
							}
						} else {
							console.log('请检查参数是否正确！');
						}

						this.data = res;
					})
					.catch(error => {
						if (this.requestData.error) {
							let string = 'this.$root.' + this.requestData.success;
							this.evalFun(string);
						} else {
							console.log('error:', error);
						}
					});
			} else {
				console.log('请检查参数是否正确！');
				return;
			}
		}
	}
};
</script>

<style scoped></style>
