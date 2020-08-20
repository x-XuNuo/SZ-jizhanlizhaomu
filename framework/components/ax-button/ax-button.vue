<template>
	<view>
		<!-- <view v-if="this.propsData.mode == 'dialog' "> -->
			<a-button
				:attributesData="attributesData"
				:requestParamData="requestParamData">
			</a-button>
		</view>
	<!-- </view> -->
</template>

<script>
export default {
	props: {
		// json配置属性信息
		attributesData: Array | Object,
		requestParamData: Array | Object
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
			let requestMode = this.propsData.requestMode;
			if(this.reqestData.linkurl){
				
				this.$apis.requestMode(this.reqestData.linkurl,this.reqestData.data).then((res)=>{
					if (this.reqestData.success) {
						this.reqestData.success = res;
					}else{
						console.log("success:",success);
					}
					
					this.data = res;
					
				}).catch((err)=>{
					
					if (this.reqestData.error) {
						this.reqestData.error = err;
					}else{
						console.log("error:",error);
					}
					
				});
			}else{
				
				console.log('无请求接口，请检查参数');
				return;
				
			}

		},
		// 子控制默认事件响应
		compclick() {
			//如果存在传放的事件，注入事件
			if (this.operateData.click) {
				eval('this.$root.' + this.operateData.click);
			}

		}
	}
};
</script>

<style></style>
