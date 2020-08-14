<template>
	<view class="date-search">
			<a-calendar 
			 ref='test'
				:attributesData="attributesData"
				:requestParamData="requestParamData">
			</a-calendar>
			<a-button
			  ref='test11'
				:attributesData="attributesData"
				:requestParamData="requestParamData">
			</a-button>
		</view>
</template>

<script>
export default {
	name:"ax-date-search",
	props: {
		// json配置属性信息
		attributesData: Array | Object,
		requestParamData: Array | Object,
	},
	data() {
		return {
			// json配置属性信息
			propsData: {},
			// 操作相关属性
			operateData: {},
			// 业务属性
			data: {},
			uwwuu:{}
			// 请求相关属性
			// reqestData: { linkurl: 'www.qq.com', param: '' }
		};
	},
	mounted() {
		// props参数处理
		this.propsData = this.attributesData.propsData;
		this.data = this.attributesData.data;
		this.operateData = this.attributesData.operateData;
		// this.reqestData = this.attributesData.reqestData;
		// console.log(this.attributesData.operateData)
	},
	
	methods: {
		//数据接口
		setPropsData(val) {
			this.propsData = val;
		},
		// 业务属性接口
		setData(data) {
			this.data = data;
			// console.log('this.data:', this.data);
		},

		//操作属性接口
		setOperateData(operateData) {
			console.log("operateData:",operateData)
			this.operateData = operateData;
			// console.log('this.operateData:', this.operateData);
		},

		//请求接口
		setRequestData(reqestData) {
			this.reqestData = reqestData;
			// console.log('this.reqestData:', this.reqestData);
		},

		// 请求接口示例
		request() {
			// uni.request({
			// 	url: this.reqestData.linkurl, //仅为示例，并非真实接口地址。
			// 	data: this.reqestData.data,
			// 	success: res => {
			// 		if (this.reqestData.success) {
			// 			this.reqestData.success(res);
			// 		}
			// 		this.data = res;
			// 	}
			// });
			console.log("71:",this.reqestData.linkurl);
			this.$apis.GET(this.reqestData.linkurl,false).then((res)=>{
				
				if (this.reqestData.success) {
					this.reqestData.success = res;
				}
				
				this.data = res;
				
			}).catch();


		},
		// 点击事件
		dianji(){
			console.log("测试测试")
			eval('this.$root.' + this.operateData.click);
		},
		// 子控制默认事件响应
		compclick() {
			this.request();
			
			//如果存在传放的事件，注入事件
			if (this.operateData.click) {
				eval('this.$root.' + this.operateData.click);
			}

		}
	}
};
</script>

</script>

<style>
</style>
