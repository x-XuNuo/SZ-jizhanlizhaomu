<template>
	<view>
		<view @click="compclick">{{ this.requestData.remoteApi }}</view>

		<!-- 根据mode类型不同的视图封装 -->
		<block v-if="this.propsData.mode == 0"><view>业务 data</view></block>
	</view>
</template>

<script>
export default {
	name:"ax-template",
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
		this.request();
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
		
		// string转换成函数执行方法
		evalFun(ev) {
			eval(ev);
		},
		
		// 请求接口示例
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
				
				requestApi.then((res)=>{
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
					
				}).catch((error)=>{
					
					if (this.requestData.error) {
						let string = 'this.$root.' + this.requestData.success;
						this.evalFun(string);
					}else{
						console.log("error:",error);
					}
					
				});
			}else{
				
				console.log('请检查参数是否正确！');
				return;
				
			}

		},
		// 子控制默认事件响应
		compclick() {
			//如果存在传放的事件，注入事件
			if (this.operateData.click) {
				let string = 'this.$root.' + this.operateData.click;
				this.evalFun(string);
			}

		}
	}
};
</script>

<style scoped></style>
