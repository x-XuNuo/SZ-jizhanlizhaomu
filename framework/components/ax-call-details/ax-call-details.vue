<template>
	<view>
		<!-- <view @click="compclick">{{ this.reqestData.linkurl }}</view> -->

		<!-- 根据mode类型不同的视图封装 -->
		<!-- <block v-if="this.propsData.mode == 0"><view>业务 data</view></block> -->
		<ax-text-time
			ref="axTextTime"
		>
		</ax-text-time>
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
		this.propsData = this.attributesData ?  this.attributesData.propsData : {};
		this.data = this.attributesData ? this.attributesData.data : {};
		this.operateData = this.attributesData ? this.attributesData.operateData : {};
		this.current = parseInt(this.propsData) ? this.attributesData.current : {};
		this.$nextTick(() =>{
			let TextTime = {
				mode:"text-time",
				text:"接听时间",
				date:"2020/08/27 15：09"
			}
			this.$refs.axTextTime.setPropsData(TextTime)
		})
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
