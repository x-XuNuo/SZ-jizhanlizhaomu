<template>
	<view class="date-search">
			<a-calendar 
				:attributesData="attributesData"
				:requestParamData="requestParamData">
			</a-calendar>
			<a-button
				:attributesData="attributesData"
				:requestParamData="requestParamData">
			</a-button>
		</view>
</template>

<script>
export default {
	name:"ax-date-search",
	// props: {
	// 	// json配置属性信息
	// 	attributesData: Array | Object,
	// 	// 请求参数
	// 	requestParamData: Array | Object,
		
	// },
	// data() {
	// 	return {
	// 		// 请求页面组件JSON
	// 		pages: {},
	// 		// 页面配置信息
	// 		// attributesData: {},
	// 		// 页面组件信息
	// 		pageData: [],
	// 		// 组件数据
	// 		assemblyData:{},
	// 	};
	// },
	// watch: {},
	// computed: {},
	// created() {},
	// mounted() {
	// 	console.log("attributesData:",this.attributesData);
	// 	// this.init();
	// },
	// methods: {
	// 	// 组件初始化
	// 	// init() {
	// 	// 	let that = this
	// 	// 	this.$U.initPages().then(val => {
	// 	// 		this.pages = decodeURIComponent(val);
	// 	// 		this.attributesData = val.attributes;
	// 	// 		if(val.magicalCoder){
	// 	// 			this.pageData = val.magicalCoder.children;
	// 	// 			this.pageData.forEach(item => {
	// 	// 				if(item.magicalCoder.identifier == "ax-date-search"){
	// 	// 					this.assemblyData = item.attributes
	// 	// 				}
	// 	// 			})
	// 	// 			console.log('this.pageDta:', this.pageData);
	// 	// 		}else{
	// 	// 			console.log("请检查JSON是否正确");
	// 	// 		}
	// 	// 	});
		
	// 	// },
	// }
	
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
				// 请求相关属性
				reqestData: { linkurl: 'www.qq.com', param: '' }
			};
		},
		mounted() {
			// props参数处理
			this.propsData = this.attributesData.propsData;
			this.data = this.attributesData.data;
			this.operateData = this.attributesData.operateData;
			// this.reqestData = this.attributesData.reqestData;
		},
	
		methods: {
			//数据接口
			setPropsData(val) {
				this.propsData = val;
			},
			// 业务属性接口
			setData(data) {
				this.data = data;
				console.log('this.data:', this.data);
			},
	
			//操作属性接口
			setOperateData(operateData) {
				this.operateData = operateData;
				console.log('this.operateData:', this.operateData);
			},
	
			//请求接口
			setRequestData(reqestData) {
				this.reqestData = reqestData;
				console.log('this.reqestData:', this.reqestData);
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
