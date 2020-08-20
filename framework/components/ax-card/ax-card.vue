<template>
	<view class="card">
		<view @click="compclick">

		<!-- 根据mode类型不同的视图封装 -->
		<!-- <block v-if="this.propsData.mode == 'icon-card'"> -->
			<view class="title"> {{dataSource.recruitTitle}} </view>
			<view style="padding-top: 20upx; background-color: #fff;">
				<view class="apply">
					<text>申请日期:</text>
					<text>{{dataSource.recruitTime}}</text>
				</view>
				<view class="apply">
					<text>审批状态:</text>
					<text>已通过</text>
				</view>
			</view>
		<!-- </block> -->
		</view>
	</view>
</template>

<script>
export default {
	props: {
		// json配置属性信息
		attributesData: Array | Object,
		dataSource : Array | Object,
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
		this.propsData = this.attributesData ?  this.attributesData.propsData : {};
		// this.data = this.attributesData ? this.attributesData.propsData : {};
		this.operateData = this.attributesData ? this.attributesData.propsData : {};
		this.current = parseInt(this.propsData) ? this.attributesData.propsData : {};
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

<style>
	.card{
		margin: 20upx 40upx;	
		border-radius: 15upx;
		overflow: hidden;
		box-shadow: 0 0 10px #e5e5e5;
	}
	.title{
		width: 100%;
		background-color: #f5f5f5;
		padding: 20upx;
		font-size: 28upx;
	}
	.apply{
		padding: 20upx;
	}
</style>
