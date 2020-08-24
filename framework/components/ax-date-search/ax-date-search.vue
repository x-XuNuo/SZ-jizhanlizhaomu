<template>
	<view class="date-search">
		<view v-if="this.propsData.mode == 'dialog' ">
			<a-calendar 
				ref='calendar'
				>
			</a-calendar>
			<a-button
				style="border: none;"
			  ref='btn'>
			</a-button>
		</view>
	</view>
</template>

<script>
export default {
	name:"ax-date-search",
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
		this.propsData = this.attributesData ?  this.attributesData.propsData : {};
		this.data = this.attributesData ? this.attributesData.data : {};
		this.operateData = this.attributesData ? this.attributesData.operateData : {};
		this.current = parseInt(this.propsData) ? this.attributesData.current : {};
		
		let dateInfo = {
			date : "",
			mode : "dialog",
			titleText : "请选择日期"
		}
		let btnInfo = {
			text : "点击查询",
			mode:"default",
			class:"query"
		} 
		this.$nextTick( ()=> {
			let calendarOD = this.$refs.calendar.operateData
			let btnOD =  this.$refs.btn.operateData
			calendarOD.confirm = "this.propsData.titleText = e.fulldate"
			this.$refs.calendar.setPropsData(dateInfo),
			this.$refs.calendar.setOperateData(calendarOD)
			this.$refs.btn.setPropsData(btnInfo)			
			this.$refs.btn.setOperateData(btnOD)
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
			// console.log("71:",this.reqestData.linkurl);
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

		},
		
	}
};
</script>

</script>

<style>
</style>
