<template>
	<view>
		<view class="card" v-if="this.model == 0 ">
			<view @click="compclick">

			<!-- 根据mode类型不同的视图封装 -->
				<view class="title"> 
					<img src="../../../static/recruit-list/txt.png" class="imgStyle"></img>
				  <text style="vertical-align: middle;">{{dataSource.recruitTitle}} </text>
				</view>
				<view style="padding-top: 20upx; background-color: #fff;">
					<view class="apply">
						<text>申请日期：</text>
						<text>{{dataSource.recruitTime}}</text>
					</view>
					<view class="apply">
						<text>审批状态：</text>
						<text>{{ dataSource.recruitStatus == 0 ? "已驳回" :(dataSource.recruitStatus == 1 ? "已通过" :"审批中")}}</text>
						<text v-if="dataSource.recruitStatus == 0">
							<img src="../../../static/sigh.png" mode="" style="width:40upx; vertical-align: middle;  margin: 0 20upx;"/>
	<!-- 						<a-modal>
								
							</a-modal> -->
						</text>
					</view>
				</view>
			</view>
		</view>
		
		<view v-if="this.model == 1 " class="renlist">
			<view class="bg-fff" style="padding: 30upx; border-bottom: 1px #f4f4f4 solid; position: relative;">
				<view>
					<view >
						<text style="font-size: 30upx; color: #000000;">乔凡</text>
						<text style="font-size: 28upx; color: #9a9a9a; margin: 0 10upx;">26</text>
						<img src="../../../static/man.png" mode="" style="width: 40upx;vertical-align: middle;"></img>
					</view>
					<view  style="font-size: 25upx; color: #9a9a9a; margin-top: 10upx ;">
						320502199401010059 
					</view>
				</view>
				<view style="position: absolute;top: 50%; right: 20upx; transform: translate(-50%, -50%); ">
					<image src="../../../static/delete.png" mode="" style="width: 40upx; height: 40upx; "></image>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	props: {
		// json配置属性信息
		attributesData: Array | Object,
		dataSource : Array | Object,
		model : 0 ,
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
		this.data = this.attributesData ? this.attributesData.data : {};
		this.operateData = this.attributesData ? this.attributesData.operateData : {};
		this.current = parseInt(this.propsData) ? this.attributesData.current : {};
	},

	methods: {
		//数据接口
		setPropsData(val) {
			this.propsData = val;
		},
		
		cardClick (){
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
			this.$emit("cardClick")
			console.log("this.operateData.click",this.operateData)
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
		margin: 30upx 40upx;	
		border-radius: 15upx;
		overflow: hidden;
		box-shadow: 0 0 10px #e5e5e5;
	}
	.title{
		width: 100%;
		background-color: #fafafa;
		height: 90upx;
		line-height: 90upx;
		font-size: 28upx;
	}
	.imgStyle{
		width: 40upx;
		height: 40upx; 
		padding: 0 20upx; 
		vertical-align: middle;
	}
	.apply{
		padding: 20upx;
	}
</style>
